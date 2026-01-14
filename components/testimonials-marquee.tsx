"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import ParallaxImage from "@/components/parallax-image"

interface Testimonial {
  name: string
  role: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "VIKRAM PATEL",
    role: "Chief Engineer",
    quote: "Outstanding faculty and world-class infrastructure. The institute prepared me exceptionally well for my career at sea.",
    image: "/professional-maritime-officer-portrait.jpg",
  },
  {
    name: "PRIYA DESHMUKH",
    role: "Deck Officer",
    quote: "The hands-on training and mentorship at Captains Bridge made all the difference in my professional development.",
    image: "/female-maritime-officer-portrait.jpg",
  },
  {
    name: "ARJUN KUMAR",
    role: "Cadet",
    quote: "Best maritime academy in the region. The courses are comprehensive and the faculty is highly experienced.",
    image: "/maritime-engineer-officer-portrait.jpg",
  },
  {
    name: "SNEHA NAIR",
    role: "Navigation Officer",
    quote: "The combination of theoretical knowledge and practical training gave me the confidence to excel in the maritime industry.",
    image: "/female-maritime-officer-portrait.jpg",
  },
  {
    name: "RAJESH IYER",
    role: "Engine Officer",
    quote: "Captains Bridge's approach to maritime education is modern, industry-relevant, and truly world-class.",
    image: "/maritime-engineer-officer-portrait.jpg",
  },
  {
    name: "DIVYA SHARMA",
    role: "First Officer",
    quote: "The institute's focus on safety standards and international norms is commendable and sets it apart.",
    image: "/professional-maritime-officer-portrait.jpg",
  },
]

export default function TestimonialsMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="w-full overflow-hidden">
      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonials-marquee-track {
          display: flex;
          animation: marqueeScroll 40s linear infinite;
          gap: 2rem;
          padding: 2rem 0;
        }

        .testimonial-card-wrapper {
          flex-shrink: 0;
          width: 380px;
        }

        @media (max-width: 768px) {
          .testimonial-card-wrapper {
            width: 300px;
          }
        }
      `}</style>

      <div className="flex items-center px-0" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="testimonials-marquee-track w-full" style={isPaused ? { animationPlayState: 'paused' } : undefined}>
          {testimonials.concat(testimonials).concat(testimonials).map((testimonial, idx) => (
            <div key={idx} className="testimonial-card-wrapper px-4">
              <Card className="relative border-0 card-minimal hover:shadow-md transition-shadow duration-300 h-full group overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                <CardContent className="p-8 text-center flex flex-col h-full justify-between text-dark">
                  <div>
                    <div className="mb-4">
                      <ParallaxImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white/30" intensity={0.08} zoom={0.06} />
                    </div>
                    <p className="italic mb-4 leading-relaxed text-sm text-dark-secondary">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg text-accent-gold">★</span>
                      ))}
                    </div>
                    <h4 className="font-bold text-base uppercase heading-premium text-primary-cyan">{testimonial.name}</h4>
                    <p className="text-xs font-semibold text-dark-secondary">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
