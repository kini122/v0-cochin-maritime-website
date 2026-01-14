"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import ParallaxImage from "@/components/parallax-image"

const courses = [
  {
    title: "MARITIME ENGLISH (10 Days)",
    description: "Teaches basic vocabulary and communication skills used in ships and maritime operations. Helps students understand common terms on board, follow safety instructions, and communicate clearly with international crew.",
    image: "https://images.pexels.com/photos/5598300/pexels-photo-5598300.jpeg"
  },
  {
    title: "FOOD SAFETY & HYGIENE (2 Days)",
    description: "Teaches basic rules for handling, cooking, storing, and serving food safely on board ships. Focuses on preventing contamination and maintaining personal hygiene as per maritime standards.",
    image: "https://images.pexels.com/photos/8951041/pexels-photo-8951041.jpeg"
  },
  {
    title: "SHIP COOK / MARINE CATERING (30 Days)",
    description: "Training covers food preparation, menu planning, cooking methods, nutrition, and hygiene needed on board ships. Includes safe use of galley equipment and proper food storage.",
    image: "https://images.pexels.com/photos/7552330/pexels-photo-7552330.jpeg"
  },
  {
    title: "PASSENGER SHIP FAMILIARISATION (PSF) (1 Day)",
    description: "Teaches crew how to guide and assist passengers during emergencies. Covers basic crowd management, clear communication, and evacuation procedures.",
    image: "https://images.pexels.com/photos/34726803/pexels-photo-34726803.jpeg"
  },
  {
    title: "CROWD & CRISIS MANAGEMENT (3 Days)",
    description: "Covers crowd management, clear communication, reducing panic, and supporting evacuation procedures during maritime emergencies.",
    image: "https://images.pexels.com/photos/29647699/pexels-photo-29647699.jpeg"
  },
  {
    title: "HUMAN BEHAVIOUR PASSENGER SHIP SAFETY (2 Days)",
    description: "Helps crew understand passenger behaviour under stress and prepares them to maintain order and assist safely during emergencies.",
    image: "https://images.pexels.com/photos/6572431/pexels-photo-6572431.jpeg"
  },
  {
    title: "HAZARDS ANALYSING CRITICAL CONTROL POINT (HACCP) (3 Days)",
    description: "Teaches basic steps to identify food safety hazards, monitor critical points, and maintain hygienic practices in maritime catering.",
    image: "https://images.pexels.com/photos/20547517/pexels-photo-20547517.jpeg"
  },
  {
    title: "FAST RESCUE CRAFT/BOAT (FRC) – COXSWAIN (5 Days)",
    description: "Training teaches basics of launching, handling, and manoeuvring fast rescue boats during emergencies with focus on rescue techniques and equipment.",
    image: "https://images.pexels.com/photos/14776559/pexels-photo-14776559.jpeg"
  },
  {
    title: "CRANE OPERATOR (10 Days)",
    description: "Training teaches basic skills for operating cranes in ports and shipyards. Covers load handling, safety checks, communication signals, and proper lifting methods.",
    image: "https://images.pexels.com/photos/29224608/pexels-photo-29224608.jpeg"
  },
  {
    title: "SHIPBOARD SAFETY OFFICER (3 Days)",
    description: "Training teaches basics of enforcing safety procedures, identifying hazards, and conducting risk assessments on board ships.",
    image: "https://images.pexels.com/photos/3680959/pexels-photo-3680959.jpeg"
  },
  {
    title: "LASCAR – BASIC SEAMANSHIP & NAVIGATION (30 Days)",
    description: "Teaching basic deck skills such as rope handling, knots, mooring, steering, and simple deck maintenance with navigation awareness.",
    image: "https://images.pexels.com/photos/5416342/pexels-photo-5416342.jpeg"
  },
  {
    title: "SERANG – SEAMANSHIP, NAVIGATION & ENGINE OPERATIONS (45 Days)",
    description: "Training teaches advanced deck skills, small-boat handling, basic navigation, and engine awareness for supervisory roles.",
    image: "https://images.pexels.com/photos/1654497/pexels-photo-1654497.jpeg"
  },
  {
    title: "STEWARD TRAINING (30 Days)",
    description: "Teaches basics of food service, cabin cleaning, table setup, and customer care on board ships with hygiene practices.",
    image: "https://images.pexels.com/photos/20060357/pexels-photo-20060357.jpeg"
  },
  {
    title: "ADVANCED FOOD SAFETY COURSE (2 Days)",
    description: "Intensive training covering HACCP principles, contamination prevention, temperature control, and regulatory compliance for food operations.",
    image: "https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg"
  },
  {
    title: "CRANE OPERATOR (5 Days)",
    description: "Training professional responsible for safely operating cranes in construction, ports, and industrial sites with precision and safety.",
    image: "https://images.pexels.com/photos/31856779/pexels-photo-31856779.jpeg"
  },
  {
    title: "ENGINE ROOM RESOURCE MANAGEMENT (ERM) (5 Days)",
    description: "Focuses on teamwork, communication, decision-making, and safety practices in the engine room with human-factor skills development.",
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg"
  },
  {
    title: "BRIDGE TEAM & RESOURCE MANAGEMENT (BTRM) (3 Days)",
    description: "Training teaches officers how to work together on the bridge through clear communication and coordinated navigation.",
    image: "https://images.pexels.com/photos/28185418/pexels-photo-28185418.jpeg"
  },
  {
    title: "INLAND ENGINE DRIVER (Below 750 KW) (30 Days)",
    description: "Training teaches operation and maintenance of marine diesel engines on small inland vessels with safety and documentation focus.",
    image: "https://images.pexels.com/photos/5532718/pexels-photo-5532718.jpeg"
  },
  {
    title: "INLAND NEAR COASTAL VESSEL CAPTAIN (Below 500 GRT) (60 Days)",
    description: "Training prepares candidates to operate and navigate small inland and near-coastal vessels with safety management and crew supervision.",
    image: "https://images.pexels.com/photos/3660828/pexels-photo-3660828.jpeg"
  },
  {
    title: "OFFSHORE HELPER / ROUSTABOUT TRAINING (15 Days)",
    description: "Training teaches basic skills needed to work safely on oil rigs and offshore platforms with focus on safety practices and hazard awareness.",
    image: "https://images.pexels.com/photos/3192669/pexels-photo-3192669.jpeg"
  },
  {
    title: "MARINE ELECTRICAL TRAINEE (30 Days)",
    description: "Training covers shipboard electrical systems including power generation, motors, batteries, and control circuits with safety focus.",
    image: "https://images.pexels.com/photos/27928761/pexels-photo-27928761.jpeg"
  },
  {
    title: "OFFSHORE SUPERVISOR TRAINING (7 Days)",
    description: "Training teaches leadership and coordination skills for managing offshore work sites with safety management and emergency response.",
    image: "https://images.pexels.com/photos/34780315/pexels-photo-34780315.jpeg"
  },
  {
    title: "CONTAINER LASHING / SURVEY TRAINING (3 Days)",
    description: "Training gives trainees essential skills to secure containers safely and inspect them for damage with proper documentation.",
    image: "https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg"
  },
  {
    title: "WIPER / ENGINE ROOM OILER (30 Days)",
    description: "Training teaches beginners to support daily engine room operations with lubrication work, machinery checks, and safety procedures.",
    image: "https://images.pexels.com/photos/5532718/pexels-photo-5532718.jpeg"
  },
  {
    title: "ORDINARY SEAMAN – ABLE BODIED – BOSUN (30 Days)",
    description: "Progressive deck-rating training pathway covering basic seamanship, advanced deck duties, and supervisory roles for deck crew management.",
    image: "https://images.pexels.com/photos/2420412/pexels-photo-2420412.jpeg"
  },
  {
    title: "LIGHT VESSELS / LAUNCH STEERING TEST (2 Days)",
    description: "Training teaches how to steer and handle small boats and harbour launches with navigation, mooring, and emergency response skills.",
    image: "https://images.pexels.com/photos/5526824/pexels-photo-5526824.jpeg"
  },
  {
    title: "LIFTING & RIGGING WITH SCAFFOLDING (7 Days)",
    description: "Training covers safe use and inspection of slings, shackles, and lifting tools with load calculations and working-at-height safety.",
    image: "https://images.pexels.com/photos/434400/pexels-photo-434400.jpeg"
  },
  {
    title: "OFFSHORE OIL FIELD ASSISTANT TRAINING (30 Days)",
    description: "Training covers basic skills for supporting operations on oil rigs and offshore platforms with strong safety and emergency focus.",
    image: "https://images.pexels.com/photos/5846277/pexels-photo-5846277.jpeg"
  },
  {
    title: "FABRICATION – FITTER – WELDER (30 Days)",
    description: "Training covers metal cutting, grinding, fitting, and welding tasks with blueprint reading and safe tool handling practices.",
    image: "https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg"
  },
  {
    title: "ENVIRONMENTAL AWARENESS – PPE (2 Days)",
    description: "Training teaches workers how to protect the environment and use Personal Protective Equipment safely in maritime operations.",
    image: "https://images.pexels.com/photos/155986/pexels-photo-155986.jpeg"
  },
  {
    title: "HELICOPTER LANDING TEAM MEMBER (2 Days)",
    description: "Training prepares specialized crew members to assist in safe landing and takeoff of helicopters on ships and offshore installations.",
    image: "https://images.pexels.com/photos/34832029/pexels-photo-34832029.jpeg"
  },
  {
    title: "CV WRITING - EMIGRATION, MIGRATION, NORKA, RPSL (1 Day)",
    description: "Training helps candidates present qualifications professionally for overseas opportunities and international employment standards.",
    image: "https://images.pexels.com/photos/6615234/pexels-photo-6615234.jpeg"
  },
  {
    title: "DRUG AND ALCOHOL POLICY AWARENESS COUNSELLING (120 Hrs. Online)",
    description: "Training educates about risks and consequences of substance use with focus on workplace safety and compliance.",
    image: "https://images.pexels.com/photos/5711030/pexels-photo-5711030.jpeg"
  },
  {
    title: "CRUISER SERVICE SECTION (6 Months)",
    description: "Training covers high-quality hospitality and guest services on cruise ships including housekeeping and passenger comfort management.",
    image: "https://images.pexels.com/photos/2946120/pexels-photo-2946120.jpeg"
  },
  {
    title: "CULINARY CHEF (6 Months)",
    description: "Training covers food preparation, cooking, menu planning, kitchen operations, and food quality management with creative skills.",
    image: "https://images.pexels.com/photos/20547517/pexels-photo-20547517.jpeg"
  },
  {
    title: "ELECTRO TECHNICAL & INSTRUMENTATION OPERATOR (ETIO) (6 Months)",
    description: "Training covers electrical, electronic, and instrumentation skills required on ships and offshore units with safety focus.",
    image: "https://images.pexels.com/photos/19226354/pexels-photo-19226354.jpeg"
  },
  {
    title: "CATERING FOOD SAFETY - COMMI SERVICE (6 Months)",
    description: "Training covers kitchen operations, food safety, hygiene practices, knife skills, and basic cooking for maritime catering roles.",
    image: "https://images.pexels.com/photos/6466479/pexels-photo-6466479.jpeg"
  },
  {
    title: "LOGISTICS & SUPPLY CHAIN (6 Months)",
    description: "Training covers transportation, warehousing, inventory control, and cargo handling for entry-level logistics roles.",
    image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg"
  },
  {
    title: "SHIPPING IT COMMUNICATION (6 Months)",
    description: "Training provides basic maritime communication systems and IT support skills for shipping companies and vessels.",
    image: "https://images.pexels.com/photos/19226354/pexels-photo-19226354.jpeg"
  },
  {
    title: "ACCOUNTS & CHARTER OPERATIONS (6 Months)",
    description: "Training covers shipping accounts, chartering basics, freight calculations, and financial procedures in shipping operations.",
    image: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg"
  },
  {
    title: "DIPLOMA IN NAUTICAL ENGINEERING SKILL (1 Year)",
    description: "Skill-based diploma training in practical ship operations, navigation, seamanship, safety, and marine machinery handling.",
    image: "https://images.pexels.com/photos/33586879/pexels-photo-33586879.jpeg"
  },
  {
    title: "MARINE ENGINEERING – ENGINE DRIVER (1 Year)",
    description: "Training covers engine operation, maintenance, troubleshooting, and routine maintenance for coastal and inland marine operations.",
    image: "https://images.pexels.com/photos/5532718/pexels-photo-5532718.jpeg"
  },
  {
    title: "CABIN CREW SERVICE (1 Year)",
    description: "Training covers passenger safety, in-flight service, communication, emergency procedures, and first aid for commercial airlines.",
    image: "https://images.pexels.com/photos/4606720/pexels-photo-4606720.jpeg"
  },
  {
    title: "PORT OPERATION (1 Year)",
    description: "Training covers cargo movement, vessel berthing, port safety, documentation, and equipment handling for port logistics roles.",
    image: "https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg"
  },
  {
    title: "SAFETY & SECURITY OFFICER (1 Year)",
    description: "Training covers workplace protection, emergency response, hazard prevention, access control, and surveillance operations.",
    image: "https://images.pexels.com/photos/7314593/pexels-photo-7314593.jpeg"
  },
  {
    title: "MARITIME CYBER IT SECURITY (1 Year)",
    description: "Training focuses on protecting maritime operations from cyber threats with focus on IMO guidelines and digital security.",
    image: "https://images.pexels.com/photos/5380589/pexels-photo-5380589.jpeg"
  },
  {
    title: "MARITIME MBA PROGRAMMES (2 Years)",
    description: "Training covers management skills for shipping and logistics industry including port management, maritime law, and leadership.",
    image: "https://images.pexels.com/photos/34817118/pexels-photo-34817118.jpeg"
  },
  {
    title: "MARITIME LAW & COMMERCE (2 Years)",
    description: "Training covers legal and commercial aspects of shipping including contracts, marine insurance, and international trade.",
    image: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg"
  },
  {
    title: "MECHANICAL ENGINEER – ENGINE OPERATION (2 Years)",
    description: "Training covers engine systems, lubrication, cooling, troubleshooting, and performance monitoring for industrial and marine sectors.",
    image: "https://images.pexels.com/photos/5846277/pexels-photo-5846277.jpeg"
  },
  {
    title: "OIL FIELD FLOOR MANAGER (2 Years)",
    description: "Training covers drilling-floor operations oversight with crew supervision, equipment coordination, and safety compliance.",
    image: "https://images.pexels.com/photos/5953751/pexels-photo-5953751.jpeg"
  },
  {
    title: "RIG PLATFORM SUPERVISOR (2 Years)",
    description: "Training covers overall offshore platform operations management with crew supervision, safety compliance, and equipment monitoring.",
    image: "https://images.pexels.com/photos/34788374/pexels-photo-34788374.jpeg"
  },
  {
    title: "OFFSHORE – YACHT CHIEF ENGINEER (3000 KW) (2 Years)",
    description: "Training prepares competent chief engineers for offshore and private yachts with engine room management and technical expertise.",
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg"
  },
  {
    title: "OFFSHORE – YACHT MASTER (3000 GRT) (2 Years)",
    description: "Training prepares professional yacht operators for private, commercial, and charter yachts with navigation and safety expertise.",
    image: "https://images.pexels.com/photos/42094/pexels-photo-42094.jpeg"
  }
]

export default function ValueAddedCoursesPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  const openDetails = (course: { title: string; description: string; image: string }) => {
    const contactMessage = `Inquiry about ${course.title}: Please share syllabus, next batch dates, fees, and prerequisites.`
    setDialogData({ title: course.title, description: course.description, image: course.image, contactMessage })
    setDialogOpen(true)
  }

  return (
    <div className="bg-page-white">
      <div className="relative w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/33689/ship-boat-lake-garda-italy.jpg')", minHeight: "420px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-white">
            Value Added Courses
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-page-white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            Professional Maritime Training Programs
          </h2>
          <p className="text-base leading-relaxed md:text-lg body-premium">
            Comprehensive skill development courses covering deck operations, engine room management, hospitality services, offshore operations, and advanced maritime specializations.
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
                <p className="mb-4 text-sm leading-relaxed text-dark-secondary flex-grow overflow-hidden line-clamp-2">
                  {course.description}
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

        <div className="mt-12 text-center text-base body-premium">
          <p>Each course includes competency-based assessment, practical training, and industry-recognized certification. For detailed syllabus, batch schedules, and enrollment information, please contact our training team.</p>
        </div>
      </section>
      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />
    </div>
  )
}
