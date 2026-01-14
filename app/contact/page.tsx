"use client"

import { Suspense, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Mail, MapPin, Phone } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { courseTitles } from "@/lib/courses"

function ContactClient() {
  const searchParams = useSearchParams()
  const initialMessage = searchParams.get("message") || ""
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: initialMessage
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
    <div className="bg-page-white">
      <div className="relative w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fe6f9fecb33324b9385aee778eafbc325)", minHeight: "566px", backgroundRepeat: "no-repeat" }}>
        <div className="h-[220px] w-full md:h-[300px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium" style={{ color: "rgba(74, 74, 74, 1)" }}>
            Contact
          </h1>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16 bg-page-white">
        <div>
          <h2 className="mb-4 text-2xl font-bold uppercase heading-premium text-primary-cyan">
            Get in touch
          </h2>
          <p className="mb-6 text-base leading-relaxed body-premium text-dark-secondary">
            Have questions? We're here to help you start your maritime career.
          </p>

          <div className="space-y-5 text-base text-dark-secondary">
            <div className="flex items-start gap-3">
              <MapPin className="flex-shrink-0 mt-1 text-primary-cyan" />
              <span>Aditya Complex, Kochupally road, Next to Anjali Marriage hall, Thoppumpady, Kochi �� 682005</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="flex-shrink-0 text-primary-cyan" />
              <span>+91 484 2234500 &nbsp; / &nbsp; +91 8484545501</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="flex-shrink-0 text-primary-cyan" />
              <span>cochinmaritime@gmail.com</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded border p-6 shadow-sm bg-white border-light-color">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              name="name"
              placeholder="Full name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded bg-white text-gray-800"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded bg-white text-gray-800"
            />
          </div>
          <Input
            name="phone"
            type="tel"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border rounded bg-white text-gray-800"
          />
          <Select
            name="course"
            value={formData.course}
            onChange={handleChange}
            defaultValue=""
            className="border rounded bg-white text-gray-800"
          >
            <option value="">Select a course</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </Select>
          <Textarea
            name="message"
            rows={5}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded bg-white text-gray-800"
          />
          <button
            type="submit"
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactClient />
    </Suspense>
  )
}
