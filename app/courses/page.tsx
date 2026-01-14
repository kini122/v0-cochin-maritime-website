"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import ParallaxImage from "@/components/parallax-image"

const courses = [
  { title: "HYDROGEN SULPHIDE AWARENESS (H2S)", image: "https://images.pexels.com/photos/7959357/pexels-photo-7959357.jpeg" },
  { title: "HELICOPTER UNDERWATER ESCAPE TRAINING (HUET)", image: "https://images.pexels.com/photos/7286074/pexels-photo-7286074.jpeg" },
  { title: "BASIC OFFSHORE SAFETY EDUCATION AND EMERGENCY TRAINING (BOSET)", image: "https://images.pexels.com/photos/3207531/pexels-photo-3207531.jpeg" },
  { title: "RIGGING AND SLINGING SAFETY LEVEL 2", image: "https://images.pexels.com/photos/29274538/pexels-photo-29274538.jpeg" },
  { title: "LIFTING AND HOISTING SAFETY", image: "https://images.pexels.com/photos/31856779/pexels-photo-31856779.jpeg" },
  { title: "CRANE OPERATIONS THEORY (PRACTICAL ON DEMAND)", image: "https://images.pexels.com/photos/31856779/pexels-photo-31856779.jpeg" },
  { title: "COOKERY COURSE WITH HACCP", image: "https://images.pexels.com/photos/7426529/pexels-photo-7426529.jpeg" },
  { title: "BASIC COOKING COURSE CERTIFICATION", image: "https://images.pexels.com/photos/6517077/pexels-photo-6517077.jpeg" },
  { title: "PSD CROWD MANAGEMENT", image: "https://images.pexels.com/photos/32870072/pexels-photo-32870072.jpeg" },
  { title: "PSD HUMAN BEHAVIOUR", image: "https://images.pexels.com/photos/7276564/pexels-photo-7276564.jpeg" },
  { title: "HOSPITALITY & SPANISH COURSE", image: "https://images.pexels.com/photos/33689/ship-boat-lake-garda-italy.jpg" },
  { title: "SHIP BOARD SAFETY & SECURITY (SOFF)", image: "https://images.pexels.com/photos/1654497/pexels-photo-1654497.jpeg" },
  { title: "SECURITY FACILITY CODE & AWARENESS", image: "https://images.pexels.com/photos/1725617/pexels-photo-1725617.jpeg" },
  { title: "SHIPPING NEW ENTRY FOR FITTER & WELDERS", image: "https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg" },
  { title: "SHIPPING NEW ENTRY TO MECHANICAL & REFRIGERATION TECHNICIANS", image: "https://images.pexels.com/photos/3819524/pexels-photo-3819524.jpeg" },
  { title: "ELECTRICAL & ELECTRONIC TECHNICIANS BRIDGING COURSE", image: "https://images.pexels.com/photos/9242258/pexels-photo-9242258.jpeg" },
]

const table = [
  ["S-01", "MARINE ENGLISH", "30-45 DAYS"],
  ["S-02", "BASIC FIRE PREVENTION", "3 DAYS"],
  ["S-03", "PERSONAL SURVIVAL TECHNIQUES", "2 DAYS"],
  ["S-04", "ELEMENTARY FIRST AID", "2 DAYS"],
  ["S-05", "PERSONAL SAFETY & SOCIAL RESPONSIBILITIES", "2 DAYS"],
  ["S-06", "SECURITY AWARENESS", "1 DAY"],
  ["S-07", "CARGO HANDLING SAFETY", "2 DAYS"],
]

export default function CoursesPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  const openDetails = (course: { title: string; image: string }) => {
    const description = `${course.title} — Overview: Hands-on modules, safety standards, and practical drills. Includes competency assessment and course completion guidance. For schedule, fees, and enrollment assistance, contact our team.`
    const contactMessage = `Inquiry about ${course.title}: Please share syllabus, next batch dates, fees, and prerequisites.`
    setDialogData({ title: course.title, description, image: course.image, contactMessage })
    setDialogOpen(true)
  }

  return (
    <div className="bg-page-white">
      <div className="relative w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F15aff742c7404b1eb1508baa387ebaa3)", minHeight: "420px", backgroundRepeat: "no-repeat", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium" style={{ color: "rgba(0, 0, 0, 1)" }}>
            Courses
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-page-white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            Partners and Supporting Organisation
          </h2>
          <p className="text-base leading-relaxed md:text-lg body-premium">
            Training modules include offshore, safety, hospitality, and technical specializations across the maritime industry. Explore highlighted programs below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md transition hover:-translate-y-1 hover:shadow-lg group" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className="h-40 w-full overflow-hidden">
                <ParallaxImage src={course.image} alt={course.title} className="h-full w-full" intensity={0.12} zoom={0.06} />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow min-h-[140px]">
                <h3 className="mb-2 text-base font-bold uppercase heading-premium text-primary-cyan break-words">
                  {course.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-dark-secondary flex-grow overflow-hidden">
                  Concise overview of the course outcomes, key competencies, and duration with hands‑on practice.
                </p>
                <div className="mt-2">
                  <button className="w-full font-semibold py-2 rounded transition-all uppercase btn-primary" onClick={() => openDetails(course)}>
                    View Detail
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="mb-4 text-center text-xl font-bold uppercase heading-premium text-accent-gold">
            Short Term Safety Value Added Courses — Regular Courses
          </h3>
          <div className="overflow-x-auto rounded border" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
            <table className="min-w-full text-left text-sm" style={{ color: 'rgb(51, 51, 51)' }}>
              <thead style={{ backgroundColor: 'rgb(0, 152, 183)' }}>
                <tr>
                  <th className="px-4 py-3 font-bold uppercase text-white" style={{ letterSpacing: '0.8px' }}>Code</th>
                  <th className="px-4 py-3 font-bold uppercase text-white" style={{ letterSpacing: '0.8px' }}>Shipping & Maritime Course</th>
                  <th className="px-4 py-3 font-bold uppercase text-white" style={{ letterSpacing: '0.8px' }}>Duration</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 ? 'rgb(255, 255, 255)' : 'rgb(245, 243, 239)' }}>
                    <td className="px-4 py-3">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />
    </div>
  )
}
