'use client'

import { Mail, MapPin, Phone, ArrowUp } from "lucide-react"

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full text-gray-800 bg-section-cream">
      {/* Main Footer Content */}
      <div className="container-premium py-20">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider heading-premium text-primary-cyan">
              About SNEF INDIA
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed font-body">
              Located in Kochi, India, we offer comprehensive maritime education with modern facilities and experienced faculty across shipping, logistics, and marine disciplines.
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider heading-premium text-primary-cyan">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-gray-700 font-body">
              <li className="hover:text-gray-900 transition-colors duration-200">Accreditations / Approvals</li>
              <li className="hover:text-gray-900 transition-colors duration-200">Advanced Computer Lab</li>
              <li className="hover:text-gray-900 transition-colors duration-200">Placement Guidelines</li>
              <li className="hover:text-gray-900 transition-colors duration-200">Partners & Supporting Organisations</li>
            </ul>
          </div>

          {/* Courses Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider heading-premium text-primary-cyan">
              DP Marine
            </h3>
            <ul className="space-y-2 text-xs text-gray-700 font-body">
              <li className="hover:text-gray-900 transition-colors duration-200">Electrical & Electronics</li>
              <li className="hover:text-gray-900 transition-colors duration-200">Bridging Course</li>
              <li className="hover:text-gray-900 transition-colors duration-200">Ship Board Safety</li>
              <li className="hover:text-gray-900 transition-colors duration-200">Security Officer</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider heading-premium text-primary-cyan">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs text-gray-700 font-body">
              <li className="flex items-start gap-3 hover:text-gray-900 transition-colors duration-200">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary-cyan" />
                <span>Aditya Complex, Kochupally road, Thoppumpady, Kochi – 682005</span>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-900 transition-colors duration-200">
                <Phone size={16} className="text-primary-cyan" />
                <a href="tel:+914842234500">+91 484 2234500</a>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-900 transition-colors duration-200">
                <Mail size={16} className="text-primary-cyan" />
                <a href="mailto:cochinmaritime@gmail.com">cochinmaritime@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 w-full divider-light" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-gray-600 font-body uppercase tracking-wider">
            © 2025 SNEF INDIA. All Rights Reserved
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border p-2 transition-all duration-300 ease-out hover:bg-cyan/5 border-cyan"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-primary-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-cyan">
              Back Top
            </span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">Follow Us</span>
            <div className="flex gap-3">
              {['f','i','in'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-200 hover:bg-cyan/10 border-light-color"
                >
                  <span className="text-xs font-bold text-primary-cyan">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
