"use client"

import React, { useEffect, useRef } from "react"

interface ParallaxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
  intensity?: number // translate intensity (0-1)
  zoom?: number // max extra scale (0-1)
  className?: string
}

export default function ParallaxImage({
  src,
  alt = "",
  intensity = 0.15,
  zoom = 0.06,
  className = "",
  style,
  ...rest
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || !imgRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      // centered distance (-vh..vh)
      const distance = rect.top + rect.height / 2 - vh / 2
      // normalized -1..1
      const norm = Math.max(-1, Math.min(1, distance / (vh / 2)))

      // Reduce parallax effect on small screens to avoid overflow and layout shifts
      const isSmall = window.innerWidth <= 640
      const effIntensity = isSmall ? intensity * 0.35 : intensity
      const effZoom = isSmall ? zoom * 0.35 : zoom

      // cap translate to reasonable pixel values
      const maxTranslate = 40 // px
      const translateY = Math.max(-maxTranslate, Math.min(maxTranslate, -norm * effIntensity * 100))

      // cap scale to avoid large zooms
      const maxScale = 1 + effZoom
      const scale = Math.min(maxScale, 1 + (Math.abs(norm) * effZoom))

      if (imgRef.current) {
        imgRef.current.style.willChange = 'transform'
        imgRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`
        imgRef.current.style.transformOrigin = 'center center'
      }
    }

    const tick = () => {
      onScroll()
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const onResize = () => {
      onScroll()
    }

    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", onResize)
    }
  }, [intensity, zoom])

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`} style={{ willChange: "transform" }}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out hero-parallax-image"
        style={{ transform: "translate3d(0,0,0) scale(1)", ...style }}
        {...rest}
      />
    </div>
  )
}
