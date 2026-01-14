"use client"

import Head from "next/head"

interface YouTubeHeroBackgroundProps {
  videoId?: string
  videoSrc?: string
  poster?: string
  children?: React.ReactNode
  overlayOpacity?: number
  height?: "screen" | "half"
  heightClass?: string
}

export default function YouTubeHeroBackground({
  videoId,
  videoSrc,
  poster = "/images/home-hero.jpg",
  children,
  overlayOpacity = 0,
  height = "screen",
  heightClass,
}: YouTubeHeroBackgroundProps) {
  const defaultMinHeightClass = height === "half" ? "min-h-[50vh]" : "min-h-screen"
  const minHeightClass = heightClass ? heightClass : defaultMinHeightClass

  return (
    <div className={`youtube-hero-background relative w-full ${minHeightClass} overflow-hidden`}>
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <>
            <Head>
              <link rel="preload" as="video" href={videoSrc} type="video/mp4" />
            </Head>
            <video
              className="hero-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[100vh] object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              style={{ pointerEvents: "none", border: 'none' }}
            >
              {/* Fallback source */}
              <source src={videoSrc} type="video/mp4" />
            </video>
          </>
        ) : videoId ? (
          <iframe
            className="hero-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowFullScreen
            style={{
              border: "none",
              pointerEvents: "none",
            }}
          />
        ) : null}
      </div>

      <div
        className="absolute inset-0 z-5 hero-overlay"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${typeof overlayOpacity === 'number' ? overlayOpacity : 0.12})`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
