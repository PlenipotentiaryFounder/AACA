"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Check, LucideProps, Brain, Zap, Lightbulb, Layers, Award, BookOpen, GraduationCap, FileText, HeartPulse, Plane, Shield, UserCheck, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useReadStatus } from "@/hooks/use-read-status"

// Icon Mapping
const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Brain,
  Zap,
  Lightbulb,
  Layers,
  Award,
  BookOpen,
  GraduationCap,
  FileText,
  HeartPulse,
  Plane,
  Shield,
  UserCheck,
  AlertTriangle,
  // Add other icons used by PremiumTabs elsewhere here if needed
};

// Helper function to get icon component
const GetIcon = ({ name, ...props }: { name?: string } & LucideProps) => {
  if (!name || !iconComponents[name]) return null; // Return null if name is missing or not found
  const IconComponent = iconComponents[name];
  return <IconComponent {...props} />;
};

interface Tab {
  value: string
  label: string
  iconName?: string
  mobileLabel?: string
}

interface PremiumTabsProps {
  tabs: Tab[]
  defaultValue?: string
  onChange?: (value: string) => void
  currentValue?: string
  className?: string
  title?: string
}

export function PremiumTabs({
  tabs,
  defaultValue,
  onChange,
  currentValue,
  className,
  title = "Topics",
}: PremiumTabsProps) {
  const { isRead, markAsRead } = useReadStatus()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  // Find the current tab
  const currentTab = tabs.find((tab) => tab.value === currentValue) || tabs[0]

  // Check mobile state on mount
  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Mark current tab as viewed using the hook
  useEffect(() => {
    if (mounted && currentValue) {
      markAsRead(currentValue)
    }
  }, [currentValue, mounted, markAsRead])

  // Scroll active tab into view
  useEffect(() => {
    if (mounted && activeTabRef.current && tabsRef.current && !isMobile) {
      const container = tabsRef.current
      const activeTab = activeTabRef.current

      // Calculate the scroll position to center the active tab
      const scrollLeft = activeTab.offsetLeft - container.clientWidth / 2 + activeTab.clientWidth / 2

      // Smooth scroll to the position
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      })
    }
  }, [currentValue, mounted, isMobile])

  const handleTabClick = (value: string) => {
    // Find the tab element in the DOM
    const tabElement = document.querySelector(`[data-state][data-value="${value}"]`) as HTMLElement

    // If we found the element, click it to trigger the underlying Tabs component
    if (tabElement) {
      tabElement.click()
    }

    // Also call the onChange handler
    onChange?.(value)
    markAsRead(value)
  }

  if (!mounted) return null

  // Mobile dropdown view
  if (isMobile) {
    return (
      <div className={cn("w-full px-3 py-4 sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b", className)}>
        <h3 className="text-lg font-semibold mb-3 px-1">{title}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between border-2 shadow-md hover:bg-accent hover:text-accent-foreground group transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-1.5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <GetIcon name={currentTab.iconName} className="h-4 w-4" />
                </div>
                <span className="font-medium">{currentTab.label}</span>
              </div>
              <ChevronDown className="h-4 w-4 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[calc(100vw-24px)] max-w-md" align="center" sideOffset={8} alignOffset={0}>
            {tabs.map((tab) => (
              <DropdownMenuItem
                key={tab.value}
                className={cn(
                  "flex items-center gap-3 py-3.5 px-4 cursor-pointer transition-all duration-200",
                  tab.value === currentValue ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent/50",
                )}
                onClick={() => handleTabClick(tab.value)}
              >
                <div
                  className={cn(
                    "rounded-full p-1.5 transition-all duration-200",
                    tab.value === currentValue ? "bg-primary text-white" : "bg-muted text-muted-foreground",
                  )}
                >
                  <GetIcon name={tab.iconName} className="h-4 w-4" />
                </div>
                <span>{tab.label}</span>
                {isRead(tab.value) && <Check className="ml-auto h-4 w-4 text-green-500" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  // Desktop tabs view
  return (
    <div className={cn("w-full sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b py-4 px-4", className)}>
      <h3 className="text-lg font-semibold mb-3 px-1">{title}</h3>
      <div ref={tabsRef} className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide max-w-full relative">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            ref={tab.value === currentValue ? activeTabRef : undefined}
            variant={tab.value === currentValue ? "default" : "outline"}
            className={cn(
              "flex-shrink-0 flex items-center gap-2 transition-all duration-300 relative px-4 py-2 h-auto",
              tab.value === currentValue
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border-transparent hover:border-border hover:bg-accent/50",
              tab.value === hoveredTab && tab.value !== currentValue && "bg-accent/30",
              "group",
            )}
            onClick={() => handleTabClick(tab.value)}
            onMouseEnter={() => setHoveredTab(tab.value)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <div
              className={cn(
                "rounded-full p-1.5 transition-all duration-300",
                tab.value === currentValue
                  ? "bg-white/20 text-white"
                  : "bg-primary/10 text-primary group-hover:bg-primary/20",
              )}
            >
              <GetIcon name={tab.iconName} className="h-4 w-4" />
            </div>
            <span className="hidden md:inline font-medium">{tab.label}</span>
            <span className="inline md:hidden font-medium">{tab.mobileLabel || tab.label}</span>

            {/* Progress indicator */}
            {isRead(tab.value) && tab.value !== currentValue && (
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-4 h-4 flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
            )}

            {/* Active indicator line */}
            {tab.value === currentValue && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform translate-y-2 rounded-full" />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
