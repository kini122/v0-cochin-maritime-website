"use client"

import React from "react"
import { cn } from "@/lib/utils"

type ImageSource = { src: string; alt?: string }

type ShowImageListItemProps = {
  text: string
  images: [ImageSource, ImageSource]
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  // responsive image container sizing
  const imageContainerClass = "hidden sm:block absolute -right-8 -top-6 md:-right-10 md:-top-8 z-40 h-[120px] md:h-[160px] w-[160px] md:w-[224px]"
  const imageEffectClass =
    "relative duration-500 delay-100 shadow-sm group-hover:shadow-md opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-14 md:w-20 h-14 md:h-20 overflow-hidden transition-all rounded-md"

  return (
    <span className="reveal-item group relative inline-block align-baseline mx-1 md:mx-2">
      <button
    type="button"
    className="reveal-trigger reveal-trigger-text inline-block text-[24px] md:text-[32px] lg:text-[40px] leading-[0.95] transition-colors duration-300 group-hover:opacity-50 focus:outline-none"
    aria-label={text}
  >
        {text}
      </button>

      {/* gold circle separator - responsive sizing */}
      <span className="reveal-separator inline-block w-3 h-3 md:w-4 md:h-4 bg-[#de8c04] mx-1.5 md:mx-2.5 rounded-full align-middle" aria-hidden />

      <span className={imageContainerClass} aria-hidden>
        <span className={imageEffectClass}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover rounded-md" loading="lazy" />
        </span>
      </span>
    </span>
  )
}

export function RevealImageList({ className }: { className?: string }) {
  // New comprehensive text about maritime education offerings - all caps
  const paragraph =
    "CERTIFIED MARITIME COURSES, ADVANCED TRAINING, GLOBAL PLACEMENT OPPORTUNITIES, MODERN FACILITIES, EXPERT FACULTY, AND INDUSTRY-RECOGNIZED ACCREDITATION."

  const items: ShowImageListItemProps[] = [
    {
      text: "CERTIFIED MARITIME COURSES",
      images: [
        { src: "/images/certification-hero.jpg", alt: "Maritime certification programs" },
        { src: "https://images.pexels.com/photos/8111865/pexels-photo-8111865.jpeg", alt: "Certified maritime courses" },
      ],
    },
    {
      text: "ADVANCED TRAINING",
      images: [
        { src: "/images/courses-hero.jpg", alt: "Advanced maritime training programs" },
        { src: "/maritime-training-classroom-with-students.jpg", alt: "Advanced training classrooms" },
      ],
    },
    {
      text: "GLOBAL PLACEMENT OPPORTUNITIES",
      images: [
        { src: "/maritime-professionals-discussing-partnership.jpg", alt: "Global placement network" },
        { src: "/person-signing-maritime-certification-documents.jpg", alt: "Global placement opportunities" },
      ],
    },
    {
      text: "MODERN FACILITIES",
      images: [
        { src: "/advanced-computer-lab-with-maritime-simulation.jpg", alt: "Modern maritime facilities" },
        { src: "/modern-computer-lab-with-red-chairs-maritime-train.jpg", alt: "Modern facility equipment" },
      ],
    },
    {
      text: "EXPERT FACULTY",
      images: [
        { src: "/maritime-training-session.jpg", alt: "Expert maritime faculty teaching" },
        { src: "/group-of-maritime-students-in-uniform.jpg", alt: "Expert faculty team" },
      ],
    },
    {
      text: "INDUSTRY-RECOGNIZED ACCREDITATION",
      images: [
        { src: "/maritime-certificates.jpg", alt: "Industry certification and accreditation" },
        { src: "https://images.pexels.com/photos/11035385/pexels-photo-11035385.jpeg", alt: "Industry accreditation standards" },
      ],
    },
  ]

  return (
    <div className={cn("reveal-list-root mx-auto px-3 md:px-4 py-8 md:py-12 text-center reveal-list-max", className)}>
      <div className="reveal-list-wrapper inline-block">
        <p className="reveal-paragraph text-center leading-relaxed md:leading-loose">{/* continuous sentence with inline text */}
          {items.map((it, idx) => (
            <React.Fragment key={idx}>
              <RevealImageListItem text={it.text} images={it.images} />
              {" "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}
