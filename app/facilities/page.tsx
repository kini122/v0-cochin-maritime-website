"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import ParallaxImage from "@/components/parallax-image"

const facilities = [
  { title: "SPACIOUS CLASS ROOMS WITH WELL EQUIPPED FURNITURE", desc: "Spacious, well-ventilated and excellently furnished classrooms to make learning comfortable and enjoyable. Individual tables and chairs are provided to students.", image: "/spacious-maritime-classroom-with-modern-furniture.jpg" },
  { title: "ADVANCED COMPUTER LAB FACILITY", desc: "State-of-the-art teaching lab supporting a wide range of spatial information system research projects and simulation-based training.", image: "/modern-computer-lab-with-red-chairs-maritime-train.jpg" },
  { title: "FOOD SAFETY AND HACCP TRAINING", desc: "Understanding of management systems approach to food safety and skills required to implement and maintain a Food Safety System.", image: "/food-safety-training-checklist-maritime.jpg" },
  { title: "PLACEMENT GUIDELINES", desc: "Unique at-sea placement program where cadets train on various ship types across different marine sectors.", image: "/maritime-cadets-in-white-uniform-training.jpg" },
  { title: "ACCREDITATIONS / APPROVALS", desc: "Courses approved by STCW Council with guidance from an advisory board of industry experts and academic leaders.", image: "/person-signing-maritime-certification-documents.jpg" },
  { title: "PARTNERS & SUPPORTING ORGANISATIONS", desc: "Extended knowledge, expertise, and network from supporting partners keep our standards relevant.", image: "/maritime-professionals-discussing-partnership.jpg" },
  { title: "LABORATORY FACILITY FOR HANDS-ON TRAINING", desc: "First-hand experience with course concepts; opportunity to explore practical methods used by industry specialists.", image: "/advanced-computer-lab-with-maritime-simulation.jpg" },
]

export default function FacilitiesPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  const openDetails = (f: { title: string; desc: string; image: string }) => {
    const description = `${f.desc} This facility is integral to day‑to‑day training and assessments, ensuring comfort, safety, and industry‑aligned outcomes.`
    const contactMessage = `Inquiry about facility: ${f.title}. Please share usage schedule, access rules, and availability.`
    setDialogData({ title: f.title, description, image: f.image, contactMessage })
    setDialogOpen(true)
  }

  return (
    <div className="bg-page-white">
      <div className="relative w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Ff946b0213ca84e4baea4a4ca85626df0)", minHeight: "465px", backgroundRepeat: "no-repeat" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-white">
            Facilities
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-page-white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            SNEF India Facilities
          </h2>
          <p className="text-base leading-relaxed md:text-lg body-premium">
            We are enriched with an outstanding faculty team, comprising of high profile and experienced Captains and Chief-Officers who are capable of providing excellent academic training in all our courses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Card key={i} className="group overflow-hidden border-0 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className="h-48 w-full overflow-hidden">
                <ParallaxImage src={f.image} alt={f.title} className="h-full w-full" intensity={0.12} zoom={0.06} />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow min-h-[160px]">
                <h3 className="mb-2 text-lg font-bold uppercase heading-premium text-primary-cyan break-words">
                  {f.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-dark-secondary flex-grow overflow-hidden">
                  {f.desc}
                </p>
                <div className="mt-2">
                  <button className="w-full font-semibold py-2 rounded transition-all uppercase btn-primary" onClick={() => openDetails(f)}>
                    View Detail
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />
    </div>
  )
}
