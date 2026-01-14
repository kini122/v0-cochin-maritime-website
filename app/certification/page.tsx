"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import ParallaxImage from "@/components/parallax-image"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

const certifications = [
  { title: "American Board of Education", image: "/maritime-certificates.jpg" },
  { title: "STED Council", image: "/person-signing-maritime-certification-documents.jpg" },
  { title: "SNEF India", image: "/maritime-professionals-discussing-partnership.jpg" },
  { title: "ISO 21001:2018 Certified", image: "/maritime-training-session.jpg" },
]

const offerings = [
  { title: "MARINE VALUE-ADDED SAFETY COURSES", desc: "We provide the best Value Added courses in maritime with the latest research and techniques.", image: "/food-safety-training-checklist-maritime.jpg" },
  { title: "MARINE CREW MANAGEMENT", desc: "Ongoing crew management services for entire crews or specific nationalities/departments.", image: "/maritime-cadets-in-white-uniform-training.jpg" },
  { title: "MARINE DOCUMENTATION", desc: "Full-service support for maritime documentation, pleasure crafts, commercial fishing vessels, and fleet.", image: "/person-signing-maritime-certification-documents.jpg" },
]

const testimonials = [
  {
    name: "T. Kishore Kumar",
    role: "Deck Cadet",
    course: "BSP (Basic Seafarers Package)",
    year: "2024",
    photo: "/professional-maritime-officer-portrait.jpg",
    quote: "I'm very happy to join this institute. The institute has all the facilities required as per the norms of DG Shipping...",
  },
  {
    name: "Rahul Menon",
    role: "Engine Officer",
    course: "Marine Engineering Bridging",
    year: "2023",
    photo: "/male-officer.jpg",
    quote: "Experienced faculty and practical training helped me excel at sea...",
  },
]

export default function CertificationPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  const openCertDetails = (cert: { title: string; image: string }) => {
    const description = `${cert.title} — Accreditation details, scope, and relevance to our curriculum. Learn how this certification ensures quality and recognition.`
    const contactMessage = `Inquiry about certification: ${cert.title}. Please share authority, validity, and benefits.`
    setDialogData({ title: cert.title, description, image: cert.image, contactMessage })
    setDialogOpen(true)
  }

  const openOfferingDetails = (o: { title: string; desc: string; image: string }) => {
    const description = `${o.desc} Includes modules, schedules, and practical components tailored to industry needs.`
    const contactMessage = `Inquiry about offering: ${o.title}. Please share syllabus, upcoming dates, and fees.`
    setDialogData({ title: o.title, description, image: o.image, contactMessage })
    setDialogOpen(true)
  }

  return (
    <div className="bg-page-white">
      <div className="relative w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F3cbfdedf70df4be68fabc1e93a892a1a)", minHeight: "456.5px", backgroundRepeat: "no-repeat" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-white" style={{ marginTop: "59px" }}>
            Certification
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-page-white">
        {/* Certifications & Accreditations Section */}
        <div className="mb-16 pb-12 border-b">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black md:text-4xl mb-2 leading-tight heading-premium text-primary-cyan">
              Our Certifications & Accreditations
            </h2>
            <p className="text-base leading-relaxed md:text-lg body-premium text-dark-secondary">
              Recognized by leading educational and maritime institutions worldwide
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-32 w-full mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center text-sm font-bold uppercase heading-premium text-primary-cyan">
                  {cert.title}
                </h3>
                <button className="mt-4 w-full font-semibold py-2 rounded transition-all uppercase btn-primary" onClick={() => openCertDetails(cert)}>
                  View Detail
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Offerings Section */}
        <div className="mx-auto mb-10 max-w-4xl text-center pt-12">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            SNEF India We Offer
          </h2>
          <div className="text-base font-semibold md:text-lg heading-premium text-accent-gold">
            Focus: One of a kind in India
            <br />
            BSP (Basic Seafarers Package) Course — Approved by NCT New Delhi, Govt of India.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md group hover:shadow-lg transition-all" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className="h-48 w-full overflow-hidden bg-gray-50">
                <ParallaxImage src={o.image} alt={o.title} className="h-full w-full" intensity={0.12} zoom={0.06} />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold uppercase heading-premium text-primary-cyan">
                  {o.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark-secondary">
                  {o.desc}
                </p>
                <button className="mt-4 w-full font-semibold py-2 rounded transition-all uppercase btn-primary" onClick={() => openOfferingDetails(o)}>
                  View Detail
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-0 shadow-md overflow-hidden" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-bold uppercase heading-premium text-primary-cyan">
                Certifications
              </h3>
              <ParallaxImage src="/maritime-certificates.jpg" alt="Certificates" className="w-full rounded" intensity={0.06} zoom={0.03} />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden" style={{ backgroundColor: 'rgb(0, 152, 183)' }}>
            <CardContent className="relative p-6">
              <h3 className="mb-4 text-lg font-bold uppercase text-white heading-premium">
                Students Testimonial
              </h3>

              <div className="relative mb-4 overflow-hidden" />

              <div className="relative overflow-hidden">
                <div className="flex w-full">
                  {testimonials.map((t, i) => (
                    <div key={i} className="w-full shrink-0">
                      <div className="flex items-start gap-4">
                        <ParallaxImage src={t.photo} alt={t.name} className="h-16 w-16 rounded-full object-cover ring-2" intensity={0.06} zoom={0.04} />
                        <div className="flex-1">
                          <blockquote className="text-balance italic leading-relaxed text-white">"{t.quote}"</blockquote>
                          <div className="mt-3 text-sm font-semibold text-white">
                            {t.name} <span className="opacity-80 font-normal">— {t.role}</span>
                          </div>
                          <div className="text-xs text-white/80 mt-1">{t.course} • {t.year}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />
    </div>
  )
}
