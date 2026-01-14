"use client"

import { useEffect, useState } from "react"

interface TypingHeroTitleProps {
  texts?: string[]
  className?: string
  typingSpeed?: number
  displayDuration?: number
}

export default function TypingHeroTitle({
  texts = [
    "Welcome to SNEF INDIA",
    "Top rated maritime training center",
    "we train future marine engineers",
  ],
  className = "hero-title animate-in fade-in slide-in-from-bottom duration-1000",
  typingSpeed = 50,
  displayDuration = 3000,
}: TypingHeroTitleProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "displaying" | "deleting">("typing")
  const currentText = texts[currentTextIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (phase === "typing") {
      // Typing phase: add one character at a time
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing, move to displaying phase
        setPhase("displaying")
      }
    } else if (phase === "displaying") {
      // Displaying phase: show text for displayDuration
      timeout = setTimeout(() => {
        setPhase("deleting")
      }, displayDuration)
    } else if (phase === "deleting") {
      // Deleting phase: remove one character at a time
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, typingSpeed / 2)
      } else {
        // Finished deleting, move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setPhase("typing")
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, phase, currentText, typingSpeed, displayDuration, texts.length])

  return (
    <h1 className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-[1em] bg-white ml-1 animate-pulse" />
    </h1>
  )
}
