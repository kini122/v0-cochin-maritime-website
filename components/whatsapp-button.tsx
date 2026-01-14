"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappNumber = "+91 94951 45500" // Captains Bridge WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`

  return (
    <>
      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(212, 175, 55, 0);
          }
        }
        .whatsapp-glow {
          animation: glow-pulse 2s infinite;
        }
      `}</style>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5F] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center justify-center whatsapp-glow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  )
}
