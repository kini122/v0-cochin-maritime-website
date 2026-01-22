"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Ship,
  Award,
  Users,
  GraduationCap,
  Anchor,
  Compass,
  LifeBuoy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { courseTitles } from "@/lib/courses"
import AnimatedCounter from "@/components/animated-counter"
import TestimonialsMarquee from "@/components/testimonials-marquee"
import YouTubeHeroBackground from "@/components/youtube-hero-background"

// Animation hook for scroll-triggered animations
function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, ...options },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

// Animated section wrapper component
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function CochinMaritimeAcademy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "courses", "partners", "stats", "facilities", "testimonials", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        // just trigger state change to apply active styles elsewhere if needed later
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center">
        <YouTubeHeroBackground videoId="UG4wQMfSp6g" overlayOpacity={0.1} heightClass="min-h-[90vh]">
          <div className="mx-auto max-w-[1304px] px-4 pt-20 pb-[21px] flex flex-col items-start justify-start relative min-h-[90vh]">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-in slide-in-from-bottom duration-800 text-balance">
                WELCOME TO COCHIN MARITIME ACADEMY
              </h1>
              <p className="text-lg md:text-xl text-[#0B2A4A] font-semibold mb-8 animate-in slide-in-from-bottom duration-800 delay-150 leading-relaxed">
                Located in South India, Kochi is blessed with a rich coastline, a well-known port and an established
                maritime environment, and is notable for its positive side of the marine sector. By catering courses that
                touch various aspects of marine studies, we can offer a candidate can select from a wide range of courses
                and also few of the best upstage training centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-800 delay-300">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0B2A4A] font-semibold text-base px-8 py-6 transition-transform hover:scale-105"
                  onClick={() => scrollToSection("courses")}
                >
                  EXPLORE COURSES
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0B2A4A] text-[#0B2A4A] hover:bg-white hover:text-[#0B2A4A] font-semibold text-base px-8 py-6 transition-all bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  CONTACT US
                </Button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronRight className="text-white rotate-90" size={32} />
            </div>
          </div>
        </YouTubeHeroBackground>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B2A4A] mb-4">WELCOME TO COCHIN MARITIME ACADEMY</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-[#5A5A5A] font-semibold max-w-4xl mx-auto leading-relaxed">
                Situated in South India Kochi is blessed with a rich coastline, a well-known port and an established
                marine environment, and is notable for its positive side of the marine sector. By catering courses that
                touch various aspects of marine studies, a candidate can select from a wide range of courses and the few
                of the best upstage training centers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Ship,
                title: "MARINE INSTITUTE",
                description:
                  "We undertake, coordinate, promote and assist in marine research and development. We also provide specialized manpower and...",
                image: "/maritime-training-classroom-with-students.jpg",
              },
              {
                icon: Anchor,
                title: "BLESSED WITH",
                description:
                  "Blessed with a rich coastal line and a well known sea port in south India Kochi is notable for its positive and supportive mariti...",
                image: "/advanced-computer-lab-with-maritime-simulation.jpg",
              },
              {
                icon: Compass,
                title: "WHY CHOOSE US",
                description:
                  "Shipping, logistics, and freight are industries at the heart of modern society. These high-technology and operational-driven services...",
                image: "/group-of-maritime-students-in-uniform.jpg",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy" decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/80 to-transparent flex items-end justify-center pb-6">
                      <div className="bg-white p-4 rounded-full group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8 text-[#0B2A4A]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#0B2A4A] mb-3 text-center">{item.title}</h3>
                    <p className="text-[#5A5A5A] text-sm leading-relaxed text-center">{item.description}</p>
                    <Button
                      variant="link"
                      className="text-[#0B2A4A] hover:text-[#D4AF37] mt-4 mx-auto block font-semibold"
                    >
                      READ MORE →
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B2A4A] mb-4">COCHIN MARITIME ACADEMY FACILITIES</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed">
                Our offerings are wide-ranging and all-inclusive. We are adept in making available optimal solutions for
                residential, commercial and industrial verticals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SPACIOUS CLASS ROOMS WITH WELL EQUIPPED FURNITURE",
                description:
                  "Cochin Maritime can boast of spacious, well-ventilated and excellently furnished classrooms to make the students learning comfortable and enjoyable. Individual tables and chairs are provided to studen...",
                image: "/spacious-maritime-classroom-with-modern-furniture.jpg",
              },
              {
                title: "ADVANCED COMPUTER LAB FACILITY",
                description:
                  "The Advanced Computer Lab is a state-of-the-art teaching computer kits, which also supports a wide range of spatial information system research projects. The lab is used by many different classes from...",
                image: "/modern-computer-lab-with-red-chairs-maritime-train.jpg",
              },
              {
                title: "FOOD SAFETY AND HACCP TRAINING",
                description:
                  "Cochin Maritime has developed this course to provide an understanding of management systems approach to food safety and data required to implement and maintain Food Safety System. By the end of the...",
                image: "/food-safety-training-checklist-maritime.jpg",
              },
              {
                title: "PLACEMENT GUIDELINES",
                description:
                  "Cochin Maritime operate a unique of sea placement program where the Cadets train on various ship types across different marine sectors...",
                image: "/maritime-cadets-in-white-uniform-training.jpg",
              },
              {
                title: "ACCREDITATIONS / APPROVALS",
                description:
                  "All Courses approved by STCW COUNCIL has had the unique good fortune it having a succession of eminent directors to direct its destiny along with an extraordinary advisory board and educational experts...",
                image: "/person-signing-maritime-certification-documents.jpg",
              },
              {
                title: "PARTNERS & SUPPORTING ORGANISATIONS",
                description:
                  "Our supporting partners have extended their knowledge, expertise, network and valuable insights in so many ways we are thankful for Cochin Maritime standards and process remain relevant because of our...",
                image: "/maritime-professionals-discussing-partnership.jpg",
              },
            ].map((course, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy" decoding="async"
                    />
                    <div className="absolute inset-0 bg-[#0B2A4A]/0 group-hover:bg-[#0B2A4A]/20 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-[#0B2A4A] mb-3 leading-tight">{course.title}</h3>
                    <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4 flex-grow">{course.description}</p>
                    <Button className="bg-[#0B2A4A] hover:bg-[#081E35] text-white w-full font-semibold transition-all">
                      VIEW DETAIL
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 md:py-20 bg-white" style={{backgroundImage: "url('https://media.ktoo.org/wp-content/uploads/2021/09/Eielson-masks.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">PARTNERS AND SUPPORTING ORGANIZATION</h2>
              <p className="mt-4 text-white">
                The Institute for Cochin Maritime Institute strives to increase public understanding of the causes and
                consequences of marine degradation while also promoting solutions. Through our partnerships, we are
                working to further conservation of marine life and ocean environments around the world.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "HYDROGEN SULPHIDE AWARENESS (H2S)",
                desc:
                  "Hydrogen Sulphide (H2S) is a highly toxic and flammable gas. Each year in...",
              },
              {
                title: "HELICOPTER UNDER‑WATER ESCAPE TRAINING (HUET)",
                desc:
                  "This course aims to train personnel intended to work offshore, using the hel...",
              },
              {
                title: "BASIC OFFSHORE SAFETY & EMERGENCY TRAINING (BOISET)",
                desc:
                  "The course is designed for personnel intending to ...",
              },
              {
                title: "RIGGING AND SLINGING SAFETY LEVEL - 2",
                desc:
                  "Rigger Level 2 training provides the knowledge and skills necessary for a p...",
              },
              {
                title: "LIFTING AND HOISTING SAFETY",
                desc:
                  "The course provides vital information for those assisting or working around...",
              },
              {
                title: "CRANE OPERATORS THEORY (ON DEMAND PRACTICAL)",
                desc:
                  "Our Crane Operator Training Program will train your operators on the site...",
              },
              {
                title: "COOKERY COURSE WITH HACCP",
                desc:
                  "On completion of this food safety training course, participants will be abl...",
              },
              {
                title: "BASIC COOKING COURSE CERTIFICATION",
                desc:
                  "Get info about online programs in cooking. Read about program requiremen...",
              },
            ].map((card, i) => (
              <Card key={i} className="border-0 shadow-md overflow-hidden">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-[#0B2A4A]/10">
                    <LifeBuoy className="text-[#0B2A4A]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0B2A4A]">{card.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{card.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-[#0B2A4A] text-white" style={{ padding: "59px 0 69px" }}>
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          @keyframes subtle-hop {
            0%, 100% {
              transform: translateY(0px);
              box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
            }
            50% {
              transform: translateY(-6px);
              box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
            }
          }
          .icon-animate {
            animation: float 3s ease-in-out infinite, pulse-scale 2s ease-in-out infinite;
          }
          .icon-badge {
            animation: subtle-hop 2.5s ease-in-out infinite;
          }
        `}</style>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, number: "5000+", label: "Students Trained" },
              { icon: Award, number: "25+", label: "Years Experience" },
              { icon: Ship, number: "50+", label: "Courses Offered" },
              { icon: Users, number: "100%", label: "Placement Support" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="icon-badge bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-colors">
                    <stat.icon className="w-10 h-10 icon-animate" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <AnimatedCounter targetText={stat.number} duration={2500} />
                  </div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section id="facilities" className="py-16 md:py-24" style={{ backgroundColor: "rgba(11, 42, 74, 0)" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B2A4A] mb-4">DIRECTOR'S MESSAGE</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="border-4 border-[#D4AF37] p-4 rounded-lg">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F5467efc660814048b4ece449e1f2e104%2F9b9a033ea00d44ecb3052033f1830fc2"
                      alt="Director's Portrait"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#5A5A5A] leading-relaxed mb-6 text-justify">
                    Cochin Maritime training for merchant navy is a new dimension in the field of job oriented
                    professional courses. Facility here in catering with a rich coastline, a well-known port and an
                    established marine environment, and is notable for its positive side of the maritime sector. By
                    catering complete courses in accordance with the guidelines of the International Maritime
                    Organization's Standards for Training, Certification and Watchkeeping, International Safety
                    Management Code, and International Ship and Port Facility Security.
                  </p>
                  <p className="text-[#5A5A5A] leading-relaxed text-justify">
                    We further mention that we have the vast experience in training the aspirant candidates in all
                    trades essential for merchant navy career from Cadet & GP Officer.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-[#0B2A4A]" style={{ padding: "96px 0 3px" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">STUDENT TESTIMONIALS</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Hear from our successful alumni who are now sailing the seven seas
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Testimonials Marquee - Full Width */}
      <TestimonialsMarquee />

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B2A4A] mb-4">GET IN TOUCH</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed">
                Have questions? We're here to help you start your maritime career
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B2A4A] p-3 rounded-full">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A] mb-2">Address</h3>
                    <p className="text-[#5A5A5A] leading-relaxed" style={{ marginRight: "74px" }}>
                      Aditya Complex, Kochupally road,
                      <br />
                      Next to Anjali Marriage hall,
                      <br />
                      Thoppumpady, Kochi, Kerala - 682005
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B2A4A] p-3 rounded-full">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A] mb-2">Phone</h3>
                    <p className="text-[#5A5A5A]">Call: +91 484 2234500</p>
                    <p className="text-[#5A5A5A]">Mobile: +91 8484545501</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B2A4A] p-3 rounded-full">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A] mb-2">Email</h3>
                    <p className="text-[#5A5A5A]">cochinmaritime@gmail.com</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-bold text-[#0B2A4A] mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                      <button
                        key={index}
                        className="bg-[#0B2A4A] p-3 rounded-full hover:bg-[#D4AF37] transition-all hover:scale-110"
                      >
                        <Icon className="text-white" size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border-2 border-[#0B2A4A]/20 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name *"
                        className="border-[#0B2A4A]/30 focus:border-[#0B2A4A] focus:ring-[#0B2A4A]"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email *"
                        className="border-[#0B2A4A]/30 focus:border-[#0B2A4A] focus:ring-[#0B2A4A]"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Your Phone *"
                        className="border-[#0B2A4A]/30 focus:border-[#0B2A4A] focus:ring-[#0B2A4A]"
                        required
                      />
                    </div>
                    <div>
                      <Select
                        defaultValue=""
                        className="border-[#0B2A4A]/30 focus:border-[#0B2A4A] focus:ring-[#0B2A4A]"
                      >
                        <option value="" disabled>Select a course</option>
                        {courseTitles.map((title) => (
                          <option key={title} value={title}>{title}</option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="border-[#0B2A4A]/30 focus:border-[#0B2A4A] focus:ring-[#0B2A4A]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#0B2A4A] hover:bg-[#081E35] text-white font-semibold py-6 transition-all hover:scale-105"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 bg-[#0B2A4A] text-white p-4 rounded-full shadow-lg hover:bg-[#D4AF37] hover:scale-110 transition-all z-40"
        aria-label="Scroll to top"
      >
        <ChevronRight className="rotate-[-90deg]" size={24} />
      </button>
    </div>
  )
}
