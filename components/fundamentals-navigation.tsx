"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Grid, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useReadStatus } from "@/hooks/use-read-status"

interface PageLink {
  name: string
  url: string
}

interface FundamentalsNavigationProps {
  prevPage?: PageLink
  nextPage?: PageLink
  className?: string
  currentPageUrl?: string
}

export function FundamentalsNavigation({
  prevPage,
  nextPage,
  className,
  currentPageUrl,
}: FundamentalsNavigationProps) {
  const [mounted, setMounted] = useState(false)
  const { isRead, markAsRead } = useReadStatus()

  useEffect(() => {
    setMounted(true)
    if (currentPageUrl) {
      markAsRead(currentPageUrl)
    }
  }, [currentPageUrl, markAsRead])

  if (!mounted) return null

  return (
    <div className={cn("mt-12 mb-8 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm", className)}>
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Previous Topic Button */}
        <div className="w-full sm:w-auto">
          {prevPage ? (
            <Link href={prevPage.url} passHref>
              <Button
                variant="outline"
                className="group relative w-full overflow-hidden border-primary/20 bg-background/50 px-6 py-6 text-left transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md sm:w-auto sm:min-w-[180px]"
              >
                <div className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Previous Topic</div>
                    <div className="flex items-center gap-1.5 font-medium">
                      {prevPage.name}
                      {isRead(prevPage.url) && (
                        <CheckCircle2 className="h-4 w-4 text-green-500" aria-label="Read" />
                      )}
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-primary/70"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1, originX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              className="w-full cursor-not-allowed border-muted bg-muted/30 px-6 py-6 text-left opacity-60 sm:w-auto sm:min-w-[180px]"
              disabled
            >
              <div className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                <div>
                  <div className="text-xs text-muted-foreground">Previous Topic</div>
                  <div className="font-medium">None</div>
                </div>
              </div>
            </Button>
          )}
        </div>

        {/* All Fundamentals Button */}
        <Link href="/fundamentals" passHref>
          <Button
            variant="default"
            className="group relative w-full overflow-hidden bg-gradient-to-r from-aa-navy to-aa-blue px-6 py-6 transition-all hover:shadow-lg sm:w-auto"
          >
            <div className="flex items-center gap-2">
              <Grid className="h-4 w-4 transition-all duration-300 group-hover:rotate-90" />
              <div>
                <div className="text-xs text-primary-foreground/80">View All</div>
                <div className="font-medium">Fundamentals</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
          </Button>
        </Link>

        {/* Next Topic Button */}
        <div className="w-full sm:w-auto">
          {nextPage ? (
            <Link href={nextPage.url} passHref>
              <Button
                variant="outline"
                className="group relative w-full overflow-hidden border-primary/20 bg-background/50 px-6 py-6 text-right transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md sm:w-auto sm:min-w-[180px]"
              >
                <div className="flex items-center justify-end gap-2">
                  <div>
                    <div className="text-xs text-muted-foreground">Next Topic</div>
                    <div className="flex items-center justify-end gap-1.5 font-medium">
                      {isRead(nextPage.url) && (
                        <CheckCircle2 className="h-4 w-4 text-green-500" aria-label="Read" />
                      )}
                      {nextPage.name}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <motion.div
                  className="absolute bottom-0 right-0 h-[2px] w-full bg-primary/70"
                  initial={{ scaleX: 0, originX: 1 }}
                  whileHover={{ scaleX: 1, originX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              className="w-full cursor-not-allowed border-muted bg-muted/30 px-6 py-6 text-right opacity-60 sm:w-auto sm:min-w-[180px]"
              disabled
            >
              <div className="flex items-center justify-end gap-2">
                <div>
                  <div className="text-xs text-muted-foreground">Next Topic</div>
                  <div className="font-medium">None</div>
                </div>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
