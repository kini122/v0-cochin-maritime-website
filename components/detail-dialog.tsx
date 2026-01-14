"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export type DetailDialogData = {
  title: string
  description: string
  image?: string | null
  contactMessage: string
}

export default function DetailDialog({
  open,
  onOpenChange,
  data,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  data: DetailDialogData | null
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl focus:outline-none">
          {data && (
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <Dialog.Title className="text-lg md:text-xl font-semibold text-[#0B2A4A]">{data.title}</Dialog.Title>
                <Dialog.Close aria-label="Close" className="rounded p-1 text-[#0B2A4A] hover:bg-black/5">
                  <X className="h-5 w-5" />
                </Dialog.Close>
              </div>
              {data.image ? (
                <div className="mt-4 overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={data.image} alt={data.title} className="w-full h-auto max-h-[50vh] object-contain" loading="lazy" decoding="async" />
                </div>
              ) : null}
              <div className="mt-4 text-sm leading-relaxed text-neutral-700">
                {data.description}
              </div>
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Dialog.Close asChild>
                  <Button variant="outline" className="border-[#0B2A4A] text-[#0B2A4A]">Close</Button>
                </Dialog.Close>
                <Link href={`/contact?message=${encodeURIComponent(`Hello, I would like to know more about ${data.title}. ${data.contactMessage}`)}`} className="inline-block">
                  <Button className="bg-[#0B2A4A] text-white hover:bg-[#081E35]">Know more</Button>
                </Link>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
