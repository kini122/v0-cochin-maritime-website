"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
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
  X,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { courseTitles } from "@/lib/courses"
import AnimatedCounter from "@/components/animated-counter"
import TestimonialsMarquee from "@/components/testimonials-marquee"
import YouTubeHeroBackground from "@/components/youtube-hero-background"
import ParallaxImage from "@/components/parallax-image"
import ParallaxFixedSection from "@/components/parallax-fixed-section"
import { RevealImageList } from "@/components/ui/reveal-images"
import TypingHeroTitle from "@/components/typing-hero-title"

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

function HomeContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields')
      return
    }

    setIsLoading(true)

    const whatsappNumber = '919495145500'
    const message = `Hello, I am interested in your courses.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course || 'Not specified'}\n\nMessage: ${formData.message || 'No additional message'}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappLink, '_blank')

    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="name"
          placeholder="Your Name *"
          className="border border-light-color rounded-md bg-white text-gray-800 text-sm"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email *"
          className="border border-light-color rounded-md bg-white text-gray-800 text-sm"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          name="phone"
          type="tel"
          placeholder="Your Phone *"
          className="border border-light-color rounded-md bg-white text-gray-800 text-sm"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Select
          name="course"
          value={formData.course}
          onChange={handleChange}
          defaultValue=""
          className="border border-light-color rounded-md bg-white text-gray-800 text-sm"
        >
          <option value="">Select a course</option>
          {courseTitles.map((title) => (
            <option key={title} value={title}>{title}</option>
          ))}
        </Select>
      </div>
      <div>
        <Textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="border border-light-color rounded-md bg-white text-gray-800 text-sm"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default function CaptainsBridge() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)
  const [courseModalOpen, setCourseModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<{ title: string; description: string; image?: string | null } | null>(null)

  const courseDescriptions = {
    "Hydrogen Sulphide Awareness (H2S)": "Hydrogen Sulphide (H2S) is a highly toxic and flammable gas. Each year in Canada, workers are injured and killed by exposure to H2S. H2S Awareness explains the properties of H2S, identifies control measures and provides a practical description of what to do in the event of exposure. The risk of H2S exposure exists in many industries, including, but not limited to oil and gas, pulp and paper, construction, and mining. In workplaces where the possibility of H2S exposure exists, ALL workers should have H2S Awareness training. Workers who are at risk of exposure to H2S and/or workers with rescue responsibilities also require H2S Alive and workplace-specific training.",
    "Helicopter Under‑Water Escape Training (HUET)": "The course aims to train personnel intended to work offshore, using the helicopter as a means of transportation, so they can react safely in a helicopter emergency situation. We offer a quality range of Basic Offshore Helicopter Underwater Escape Training HUET Course. Our range includes Basic Offshore Safety Induction Emergency Training, Helicopter Underwater Escape Training HUET Course, Panama CDC, Belize CDC, Commercial Diving Training, Belize Competency Certificate, Dynamic Positioning Training.",
    "Basic Offshore Safety & Emergency Training (BOISET)": "The course is designed for personnel intending to work on an offshore installation and forms part of a Common Offshore Safety Induction process. OPITO Basic Offshore Safety Induction and Emergency Training (BOSIET) course content covers offshore-specific safety induction, helicopter safety and escape, sea survival and fire fighting and self-rescue.",
    "Rigging and Slinging Safety Level - 2": "Rigger Level 2 training provides the knowledge and skills necessary for a person to work as a journeyman level rigger. This course prepares persons to perform rigging calculations and to select and apply to rig for safe controlled load handling. Persons completing this training will understand their responsibility to ensure proper rigging methods are used and that all variables which could result in a rigging failure are accounted for through planning and proper selection of gear.",
    "Lifting and Hoisting Safety": "The course provides vital information for those assisting or working around lifting operations. Specific topics include hoisting and rigging hazard recognition, knots, lifting hardware, materials, hand signals and working load limits. Information covers lifts using large fix-tower cranes and knuckle and telescoping boom trucks. It is an awareness course designed for employees that work directly or around lifting operations.",
    "Crane Operators Theory (On Demand Practical)": "Our Crane Operator Training Program will train your operators on the safe use and operation of Electric Overhead Traveling Bridge Cranes (EOT). Operator responsibilities and requirements, applicable legislation and compliance requirements and how they apply to your company. Our training programs are designed to your specific requirements, fully develop your employ ability skills to maximize performance and certify your operators according to all legislative requirements.",
    "Cookery Course With HACCP": "On completion of this food safety training course, participants will be able to understand their requirements under food safety legislation as well as following best work practices. So you can follow all with the utmost care and professionalism, ensuring a very high quality of preparation. Fully Practical Course by the participants who will be protagonists in the preparations that will be done within our professional lab.",
    "Basic Cooking Course Certification": "Get info about online programs in cooking. Read about program requirements, course topics, and degree levels, and check out career and continuing education options. Online diploma programs in cooking don't exist, but there are fully online programs that award certificates in various types of culinary studies. Online cooking certificate programs emphasize the fundamentals of cuisine and practical cooking skills, combining textbooks, online study materials, training DVDs and cooking exercises to be done in students' kitchens. Therefore, online students must have a well-stocked, well-equipped kitchen.",
  }

  const openHomeDetail = (course: { title: string; description?: string; image?: string }) => {
    const description = `${course.title} — ${course.description || 'Overview: Hands-on modules, safety standards, and practical drills. Includes competency assessment and course completion guidance. For schedule, fees, and enrollment assistance, contact our team.'}`
    const contactMessage = `Inquiry about ${course.title}: Please share syllabus, next batch dates, fees, and prerequisites.`
    setDialogData({ title: course.title, description, image: course.image || null, contactMessage })
    setDialogOpen(true)
  }

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
    <div className="min-h-screen bg-page-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center bg-page-white">
        <YouTubeHeroBackground videoSrc="https://cdn.builder.io/o/assets%2F9aed9e355eef433f905fdc33685caf52%2Fbf936fb889cb44438b1217b5daa6a76d?alt=media&token=d97ab75b-fbac-4318-ba19-2275c16c1484&apiKey=9aed9e355eef433f905fdc33685caf52" overlayOpacity={0.2} heightClass="min-h-[90vh]">
          <div className="hero-inner mx-auto max-w-[1320px] px-20 pt-20 pb-[21px] flex flex-col items-center lg:items-start justify-center relative min-h-[90vh]">
            <div className="max-w-3xl">
              <TypingHeroTitle
                texts={[
                  "Welcome to CAPTAINS BRIDGE",
                  "Top rated maritime training center",
                  "we train future marine engineers",
                ]}
                displayDuration={3000}
                typingSpeed={50}
              />
              <div className="hero-cta mt-6 flex flex-col sm:flex-row gap-8 animate-in slide-in-from-bottom duration-800 delay-300">
                <button
                  className="px-10 py-4 text-lg font-bold uppercase transition-all duration-300 rounded btn-primary"
                  onClick={() => scrollToSection("courses")}
                >
                  Explore Courses
                </button>
                <button
                  className="px-10 py-4 text-lg font-bold uppercase transition-all duration-300 rounded btn-primary"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronRight className="rotate-90" size={32} style={{ color: 'rgb(0, 152, 183)' }} />
            </div>
          </div>
        </YouTubeHeroBackground>
      </section>

      {/* Reveal Image List (services) */}
      <section aria-label="our-expertise" className="py-20 bg-page-white border-t border-b border-light-color">
        <RevealImageList />
      </section>

      {/* Parallax Section Break */}
      <ParallaxFixedSection
        imageUrl="https://images.pexels.com/photos/34664187/pexels-photo-34664187.jpeg"
        className="py-16"
      >
        <div className="container mx-auto px-4 page-inner">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black heading-premium text-white">Explore Our Maritime World</h3>
          </div>
        </div>
      </ParallaxFixedSection>

      {/* About Section */}
      <section id="about" className="py-32 bg-page-white">
        <div className="container mx-auto px-4 page-inner">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight heading-premium text-primary-cyan">
                Welcome to CAPTAINS BRIDGE
              </h2>
              <div className="w-16 h-px mx-auto divider-gold" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {[
              {
                icon: Award,
                title: "MARINE VALUE-ADDED SAFETY COURSES",
                description:
                  "We provide the best Value added courses in maritime with latest research and technique.",
                image: "https://images.pexels.com/photos/28282297/pexels-photo-28282297.jpeg",
              },
              {
                icon: Users,
                title: "MARINE CREW MANAGEMENT",
                description:
                  "Captains Bridge can provide ongoing crew management services for entire crews or specific nationalities or departments depending on the requirements of the vessels and maritime industry employers.",
                image: "/maritime-professionals-discussing-partnership.jpg",
              },
              {
                icon: Ship,
                title: "MARINE DOCUMENTATION",
                description:
                  "We are a full-service source for all facets of marine documentation: pleasure crafts, commercial fishing vessels, charter, and fleet. With three, expertly staffed offices, we can assist in the preparation and processing of documentation.",
                image: "/maritime-certificates.jpg",
              },
              {
                icon: MapPin,
                title: "INDIAN CDC ASSISTANCE",
                description:
                  "Our service range includes a wide range of Arranging CDC. Indian mariners are among the most required professionals in the shipping industry worldwide. We assist with CDC processes and guidance.",
                image: "/professional-maritime-officer-portrait.jpg",
              },
              {
                icon: Anchor,
                title: "PLACEMENT GUIDANCE",
                description:
                  "The Captains Bridge Guidance and Placement Cell send invitations to companies/organizations along with relevant information and allots dates to companies for institute interviews based on various details.",
                image: "/maritime-cadets-in-white-uniform-training.jpg",
              },
              {
                icon: Compass,
                title: "MARINE – OFFSHORE COURSES",
                description:
                  "Captains Bridge offers a broad range of courses for the diverse Marine and Offshore sectors. We provide specialized training, as well as fully compliant courses in accordance with the guidelines of the industry.",
                image: "/maritime-training-session.jpg",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-md transition-shadow duration-300 border-0 overflow-hidden h-full card-minimal" style={{ backgroundColor: 'rgb(245, 243, 239)' }}>
                  <div className="relative h-48 overflow-hidden">
                    <ParallaxImage src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full" intensity={0.12} zoom={0.08} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6">
                      <div className="p-3 rounded-full text-white icon-circle-cyan">
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold mb-4 text-center uppercase heading-premium text-primary-cyan">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-center text-dark-secondary mb-6">
                      {item.description}
                    </p>
                    <button className="text-sm font-semibold mx-auto block transition-colors duration-200 uppercase text-accent-gold hover:text-accent-gold/80" onClick={() => openHomeDetail(item)}>
                      Read More →
                    </button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-32 bg-page-white">
        <div className="container mx-auto px-4 page-inner">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight heading-premium text-primary-cyan">
                Captains Bridge Facilities
              </h2>
              <div className="w-16 h-px mx-auto mb-10 divider-gold" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium body-premium">
                Our offerings are wide-ranging and all-inclusive. We are adept in making available optimal solutions for residential, commercial and industrial verticals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Spacious Class Rooms With Well Equipped Furniture",
                description:
                  "Captains Bridge can boast of spacious, well-ventilated and excellently furnished classrooms to make the students learning comfortable and enjoyable. Individual tables and chairs are provided to studen...",
                image: "/spacious-maritime-classroom-with-modern-furniture.jpg",
              },
              {
                title: "Advanced Computer Lab Facility",
                description:
                  "The Advanced Computer Lab is a state-of-the-art teaching computer kits, which also supports a wide range of spatial information system research projects. The lab is used by many different classes from...",
                image: "/modern-computer-lab-with-red-chairs-maritime-train.jpg",
              },
              {
                title: "Food Safety and HACCP Training",
                description:
                  "Captains Bridge has developed this course to provide an understanding of management systems approach to food safety and data required to implement and maintain Food Safety System. By the end of the...",
                image: "/food-safety-training-checklist-maritime.jpg",
              },
              {
                title: "Placement Guidelines",
                description:
                  "Captains Bridge operate a unique of sea placement program where the Cadets train on various ship types across different marine sectors...",
                image: "/maritime-cadets-in-white-uniform-training.jpg",
              },
              {
                title: "Accreditations / Approvals",
                description:
                  "All Courses approved by STCW COUNCIL has had the unique good fortune it having a succession of eminent directors to direct its destiny along with an extraordinary advisory board and educational experts...",
                image: "/person-signing-maritime-certification-documents.jpg",
              },
              {
                title: "Partners & Supporting Organisations",
                description:
                  "Our supporting partners have extended their knowledge, expertise, network and valuable insights in so many ways we are thankful for Captains Bridge standards and process remain relevant because of our...",
                image: "/maritime-professionals-discussing-partnership.jpg",
              },
            ].map((course, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-md transition-shadow duration-300 border-0 overflow-hidden h-full flex flex-col card-minimal" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                  <div className="relative h-56 overflow-hidden">
                    <ParallaxImage src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full" intensity={0.12} zoom={0.08} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-8 flex-grow flex flex-col min-h-[160px]">
                    <h3 className="text-base font-bold mb-4 leading-tight uppercase heading-premium text-primary-cyan break-words">
                      {course.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 flex-grow text-dark-secondary overflow-hidden">
                      {course.description}
                    </p>
                    <div className="mt-2">
                      <button className="w-full font-semibold transition-all py-3 rounded uppercase btn-primary" onClick={() => openHomeDetail(course)}>
                        View Detail
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section with Fixed-Layer Parallax */}
      <ParallaxFixedSection
        imageUrl="https://images.pexels.com/photos/3435378/pexels-photo-3435378.jpeg"
        className="py-32"
      >
        <div className="container mx-auto px-4 page-inner">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight heading-premium text-white" style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                Partners and Supporting Organization
              </h2>
              <p className="text-lg md:text-xl body-premium text-white" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                The Institute for Captains Bridge strives to increase public understanding of the causes and consequences of marine degradation while also promoting solutions. Through our partnerships, we are working to further conservation of marine life and ocean environments around the world.
              </p>
            </div>
          </AnimatedSection>

          <style jsx>{`
            .glass-card-wrapper {
              background: rgba(0, 0, 0, 0.15) !important;
              backdrop-filter: blur(15px);
              -webkit-backdrop-filter: blur(15px);
              border: 1px solid rgba(255, 255, 255, 0.15) !important;
              border-radius: 8px;
              transition: all 0.3s ease-out;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
            }
            .glass-card-wrapper:hover {
              background: rgba(0, 0, 0, 0.25) !important;
              border-color: rgba(255, 255, 255, 0.25) !important;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
              transform: translateY(-4px);
            }
          `}</style>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Hydrogen Sulphide Awareness (H2S)",
                desc:
                  "Hydrogen Sulphide (H2S) is a highly toxic and flammable gas. Each year in...",
                image: null,
              },
              {
                title: "Helicopter Under‑Water Escape Training (HUET)",
                desc:
                  "This course aims to train personnel intended to work offshore, using the hel...",
                image: null,
              },
              {
                title: "Basic Offshore Safety & Emergency Training (BOISET)",
                desc:
                  "The course is designed for personnel intending to ...",
                image: null,
              },
              {
                title: "Rigging and Slinging Safety Level - 2",
                desc:
                  "Rigger Level 2 training provides the knowledge and skills necessary for a p...",
                image: null,
              },
              {
                title: "Lifting and Hoisting Safety",
                desc:
                  "The course provides vital information for those assisting or working around...",
                image: null,
              },
              {
                title: "Crane Operators Theory (On Demand Practical)",
                desc:
                  "Our Crane Operator Training Program will train your operators on the site...",
                image: null,
              },
              {
                title: "Cookery Course With HACCP",
                desc:
                  "On completion of this food safety training course, participants will be abl...",
                image: null,
              },
              {
                title: "Basic Cooking Course Certification",
                desc:
                  "Get info about online programs in cooking. Read about program requiremen...",
                image: null,
              },
            ].map((card, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCourse({
                    title: card.title,
                    description: courseDescriptions[card.title as keyof typeof courseDescriptions] || card.desc,
                    image: card.image,
                  })
                  setCourseModalOpen(true)
                }}
                className="glass-card-wrapper text-left hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan rounded-lg"
              >
                <div className="p-8 text-center">
                  <div className="mx-auto mb-6 grid size-16 place-items-center rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
                    <LifeBuoy style={{ color: 'rgb(255, 255, 255)' }} size={28} />
                  </div>
                  {card.title === "Rigging and Slinging Safety Level - 2" ? (
                    <h3 className="text-sm font-semibold uppercase heading-premium mb-4" style={{ color: 'rgb(255, 255, 255)' }}>
                      Rigging and Slinging <br />
                      Safety Level - 2
                    </h3>
                  ) : (
                    <h3 className="text-sm font-semibold uppercase heading-premium mb-4" style={{ color: 'rgb(255, 255, 255)' }}>
                      {card.title}
                    </h3>
                  )}
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {card.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </ParallaxFixedSection>

      {/* Stats Section with Glass Morphism */}
      <section id="stats" className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--primary-cyan)' }}>
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 152, 183, 0.25)' }} aria-hidden />

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
              box-shadow: 0 4px 12px rgba(222, 140, 4, 0.2);
            }
            50% {
              transform: translateY(-6px);
              box-shadow: 0 8px 20px rgba(222, 140, 4, 0.4);
            }
          }
          .icon-animate {
            animation: float 3s ease-in-out infinite, pulse-scale 2s ease-in-out infinite;
          }
          .icon-badge {
            animation: subtle-hop 2.5s ease-in-out infinite;
          }
          .glass-stat-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            padding: 24px 16px;
            transition: all 0.3s ease-out;
          }
          .glass-stat-card:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
        `}</style>

        <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1320px', paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, number: "5000+", label: "Students Trained" },
              { icon: Award, number: "25+", label: "Years Experience" },
              { icon: Ship, number: "50+", label: "Courses Offered" },
              { icon: Users, number: "100%", label: "Placement Support" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="glass-stat-card text-center group">
                  <div className="icon-badge bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <stat.icon className="w-10 h-10 icon-animate" style={{ color: 'rgb(255, 255, 255)' }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black mb-2 heading-premium" style={{ color: 'rgb(255, 255, 255)', letterSpacing: '-0.02em' }}>
                    <AnimatedCounter targetText={stat.number} duration={2500} />
                  </div>
                  <div className="text-sm md:text-base text-white/90">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section id="facilities" className="py-32 bg-page-white">
        <div className="container mx-auto px-4 page-inner">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight heading-premium text-primary-cyan">
                Director's Message
              </h2>
              <div className="w-16 h-px mx-auto divider-gold" />
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="border border-gold p-2 rounded-lg">
                    <ParallaxImage
                      src="https://cdn.builder.io/api/v1/image/assets%2F5467efc660814048b4ece449e1f2e104%2F9b9a033ea00d44ecb3052033f1830fc2"
                      alt="Director's Portrait"
                      className="w-full rounded-md shadow-sm"
                      intensity={0.06}
                      zoom={0.03}
                    />
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed mb-8 text-justify text-base body-premium text-dark-secondary">
                    Captains Bridge training for merchant navy is a new dimension in the field of job oriented professional courses. Facility here in catering with a rich coastline, a well-known port and an established maritime environment, and is notable for its positive side of the maritime sector. By catering complete courses in accordance with the guidelines of the International Maritime Organization's Standards for Training, Certification and Watchkeeping, International Safety Management Code, and International Ship and Port Facility Security.
                  </p>
                  <p className="leading-relaxed text-justify text-base body-premium text-dark-secondary">
                    We further mention that we have the vast experience in training the aspirant candidates in all trades essential for merchant navy career from Cadet & GP Officer.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ParallaxFixedSection
        imageUrl="https://images.pexels.com/photos/8650298/pexels-photo-8650298.jpeg"
        className="py-32"
      >
        <div className="container mx-auto px-4 page-inner">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight heading-premium text-white">
                Student Testimonials
              </h2>
              <div className="w-16 h-px mx-auto mb-10 divider-gold" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed body-premium text-white/90">
                Hear from our successful alumni who are now sailing the seven seas
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Full width marquee sits outside the centered container */}
        <TestimonialsMarquee />
      </ParallaxFixedSection>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-page-white">
        <div className="container mx-auto px-4 page-inner">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight heading-premium text-primary-cyan">
                Get in Touch
              </h2>
              <div className="w-16 h-px mx-auto mb-10 divider-gold" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed body-premium text-dark-secondary">
                Have questions? We're here to help you start your maritime career
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyan flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 uppercase text-base heading-premium text-accent-gold">
                      Address
                    </h3>
                    <p className="leading-relaxed text-sm text-dark-secondary">
                      Aditya Complex, Kochupally road,
                      <br />
                      Next to Anjali Marriage hall,
                      <br />
                      Thoppumpady, Kochi, Kerala - 682005
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyan flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 uppercase text-base heading-premium text-accent-gold">
                      Phone
                    </h3>
                    <p className="text-sm text-dark-secondary">Call: +91 484 2234500</p>
                    <p className="text-sm text-dark-secondary">Mobile: +91 8484545501</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyan flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 uppercase text-base heading-premium text-accent-gold">
                      Email
                    </h3>
                    <p className="text-sm text-dark-secondary">cochinmaritime@gmail.com</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold mb-4 uppercase text-base heading-premium text-accent-gold">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                      <button key={index} className="p-3 rounded-full hover:bg-cyan/90 transition-colors duration-200 bg-cyan">
                        <Icon className="text-white" size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border border-light-color card-minimal" style={{ backgroundColor: 'rgb(245, 243, 239)' }}>
                <CardContent className="p-10">
                  <HomeContactForm />
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-40 bg-cyan"
        aria-label="Scroll to top"
      >
        <ChevronRight className="rotate-[-90deg]" size={24} />
      </button>

      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />

      {/* Course Modal Dialog */}
      <Dialog.Root open={courseModalOpen} onOpenChange={setCourseModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-h-[90vh] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white shadow-2xl focus:outline-none" style={{ backgroundColor: 'rgb(245, 243, 239)' }}>
            {selectedCourse && (
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <Dialog.Title className="text-lg md:text-2xl font-bold uppercase heading-premium text-primary-cyan flex-1">
                    {selectedCourse.title}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      aria-label="Close modal"
                      className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors flex-shrink-0"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="w-full h-px bg-accent-gold mb-6" />

                {selectedCourse.image ? (
                  <div className="mt-2 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-auto max-h-[50vh] object-contain" loading="lazy" decoding="async" />
                  </div>
                ) : null}

                <div className="prose prose-sm max-w-none mt-4">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
                    {selectedCourse.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3">
                  <Dialog.Close asChild>
                    <button className="px-6 py-3 rounded-lg border border-light-color text-gray-800 hover:bg-gray-100 transition-colors font-semibold uppercase text-sm">
                      Close
                    </button>
                  </Dialog.Close>
                  <button
                    onClick={() => {
                      setCourseModalOpen(false)
                      scrollToSection("contact")
                    }}
                    className="px-6 py-3 rounded-lg bg-cyan text-white hover:bg-cyan/90 transition-colors font-semibold uppercase text-sm"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
