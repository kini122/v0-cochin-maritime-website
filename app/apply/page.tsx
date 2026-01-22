"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { courseTitles } from "@/lib/courses"

export default function ApplyPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">Apply Now</h1>
        <h2 className="mb-6 text-center text-2xl font-semibold text-[#0B2A4A]">Application Form</h2>
        <form className="space-y-4 rounded border p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="First name *" required />
            <Input placeholder="Last name *" required />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="email" placeholder="Email *" required />
            <Input type="tel" placeholder="Phone *" required />
          </div>
          <Select required defaultValue="">
            <option value="" disabled>Select course *</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </Select>
          <Textarea rows={5} placeholder="Briefly tell us about your interest" />
          <Button className="w-full bg-[#0B2A4A] text-white hover:bg-[#081E35]">Submit Application</Button>
        </form>
        <p className="mt-4 text-center text-xs text-neutral-600">
          By submitting, you agree to be contacted with course details and schedules.
        </p>
      </section>
    </div>
  )
}
