"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Rocket, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useReadStatus } from "@/hooks/use-read-status"

interface PageLink {
  name: string
  url: string
}

interface GuideNavigationProps {
  prevPage?: PageLink
  nextPage?: PageLink
  currentPageUrl?: string
  title?: string
  description?: string
  nextTopicSegue?: string // Added prop for the segue text
  className?: string
}

const defaultTitle = "Ready to Continue Your Journey?"
const defaultDescription =
  "Move to the next section or revisit a previous topic. Keep track of your progress as you navigate the guide."

export function GuideNavigation({
  prevPage,
  nextPage,
  currentPageUrl,
  title = defaultTitle,
  description = defaultDescription,
  nextTopicSegue, // Destructure the segue prop
  className,
}: GuideNavigationProps) {
  const [mounted, setMounted] = useState(false)
  const { isRead, markAsRead } = useReadStatus()

  useEffect(() => {
    setMounted(true)
    // Mark the current page as read when the component mounts
    if (currentPageUrl) {
      markAsRead(currentPageUrl)
    }
  }, [currentPageUrl, markAsRead])

  if (!mounted) {
    // Render a placeholder or skeleton during SSR/initial mount
    return (
      <div
        className={cn(
          "mt-16 mb-8 rounded-xl bg-gradient-to-br from-aa-navy via-aa-blue to-aa-darkblue p-6 text-white shadow-xl md:p-12",
          className
        )}
      >
        <div className="flex animate-pulse flex-col items-center justify-between gap-8 md:flex-row">
          <div className="h-32 w-full max-w-2xl space-y-4 rounded-md bg-white/10 p-4">
            <div className="h-8 w-3/4 rounded bg-white/20"></div>
            <div className="h-4 w-full rounded bg-white/20"></div>
            <div className="h-4 w-5/6 rounded bg-white/20"></div>
            <div className="h-4 w-full rounded bg-white/20"></div>
          </div>
          <div className="hidden h-64 w-64 rounded-full bg-white/10 md:block"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "mt-16 mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-aa-navy via-aa-blue to-aa-darkblue text-white shadow-xl",
        className
      )}
    >
      <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content & Segue */}
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-white/80 text-lg mb-6">{description}</p>
          {/* Segue paragraph */}
          {nextTopicSegue && nextPage && (
            <div className="mb-6 rounded-lg border border-white/20 bg-white/5 p-4 italic">
              <p className="text-white/90">
                <span className="font-semibold not-italic">Coming up next:</span> {nextTopicSegue}
              </p>
            </div>
          )}
           {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
             {/* Previous Button */}
            {prevPage ? (
              <Link href={prevPage.url} passHref>
                <Button
                  variant="outline"
                  className="group w-full sm:w-auto justify-center sm:justify-start gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 border-white text-white hover:bg-white/10 hover:border-white/80"
                >
                   <ChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                   <div className="flex items-center gap-1.5">
                     {isRead(prevPage.url) && (
                         <CheckCircle2 className="text-green-400" aria-label="Read" />
                     )}
                     {prevPage.name}
                   </div>
                </Button>
              </Link>
            ) : (
               <Button
                 variant="outline"
                 className="group w-full sm:w-auto justify-center sm:justify-start gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 border-white/30 text-white/50 bg-transparent cursor-not-allowed"
                 disabled
               >
                  <ChevronLeft /> Previous
               </Button>
            )}

            {/* Next Button */}
            {nextPage ? (
              <Link href={nextPage.url} passHref>
                <Button
                  className="group w-full sm:w-auto justify-center sm:justify-start gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-aa-navy hover:bg-white/90"
                >
                  <div className="flex items-center gap-1.5">
                     {nextPage.name}
                     {isRead(nextPage.url) && (
                         <CheckCircle2 className="text-green-500" aria-label="Read" />
                     )}
                  </div>
                   <ChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
             ) : (
                 <Button
                   className="group w-full sm:w-auto justify-center sm:justify-start gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white/50 text-aa-navy/70 cursor-not-allowed"
                   disabled
                 >
                    Next <ChevronRight />
                 </Button>
             )}
          </div>
        </div>

        {/* Floating Image */}
        <div className="hidden md:block">
          <motion.div
             className="relative w-56 h-56 lg:w-64 lg:h-64"
             animate={{ translateY: ["0%", "-8%", "0%"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/cessna-172-on-runway.jpg" // Placeholder, maybe make this dynamic later?
              alt="Illustration of a Cessna 172"
              width={256}
              height={256}
              className="object-contain"
              priority // Consider if this should be priority based on context
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 