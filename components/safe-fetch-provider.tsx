"use client"

import { useEffect } from "react"

export default function SafeFetchProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const g = window as any
      if (g.__safeFetchPatched) return

      // Expose native fetch under FullStory-compatible name without overriding window.fetch
      const nativeFetch = window.fetch.bind(window)
      g.__nativeFetch = nativeFetch
      // Some integrations (FullStory) expect __fs_native_fetch; provide it
      if (typeof g.__fs_native_fetch !== 'function') {
        g.__fs_native_fetch = nativeFetch
      }

      // global handler to log and avoid uncaught promise rejection noise in dev overlay
      const onUnhandled = (ev: PromiseRejectionEvent) => {
        try {
          // Allow known benign network errors to be non-fatal
          const reason = ev.reason
          if (reason && typeof reason === 'object') {
            const msg = String((reason as any).message || reason)
            if (msg.includes('Failed to fetch') || msg.includes('NetworkError')) {
              ev.preventDefault()
              // Log minimally so debugging is still possible
              // eslint-disable-next-line no-console
              console.warn('Suppressed benign network error:', msg)
            }
          }
        } catch (e) {
          // ignore
        }
      }

      window.addEventListener('unhandledrejection', onUnhandled)

      g.__safeFetchPatched = true

      return () => {
        window.removeEventListener('unhandledrejection', onUnhandled)
      }
    } catch (e) {
      // silent
    }
  }, [])

  return null
}
