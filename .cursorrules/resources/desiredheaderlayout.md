"use client"

import type React from "react"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  Search,
  BookOpen,
  Plane,
  GraduationCap,
  BookMarked,
  CloudSun,
  Radio,
  Gauge,
  FileText,
  PenTool,
  MessageSquare,
  Home,
  ChevronDown,
  ChevronRight,
  Bookmark,
  Lightbulb,
  AlertTriangle,
  Compass,
  Headphones,
  Zap,
  Award,
  Brain,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  // Navigation structure
  const mainCategories = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/",
      badge: null,
    },
    {
      title: "Welcome to the Academy",
      icon: GraduationCap,
      url: "/welcome",
      badge: null,
      subItems: [
        { title: "Program Overview", url: "/welcome/overview" },
        { title: "Meet Your Instructors", url: "/welcome/instructors" },
        { title: "Cadet Community", url: "/welcome/community" },
      ],
    },
    {
      title: "Training Expectations",
      icon: BookMarked,
      url: "/training-expectations",
      badge: null,
    },
    {
      title: "Learning Fundamentals",
      icon: Lightbulb,
      url: "/learning",
      badge: null,
    },
    {
      title: "Resources & Tools",
      icon: FileText,
      url: "/resources",
      badge: { text: "Essential", variant: "outline" },
    },
    {
      title: "Flight Training",
      icon: Plane,
      url: "/flight-training",
      badge: null,
      subItems: [
        { title: "Pre-Flight Preparation", url: "/flight-training/pre-flight" },
        { title: "In-Flight Procedures", url: "/flight-training/procedures" },
        { title: "Post-Flight Debriefing", url: "/flight-training/debriefing" },
      ],
    },
    {
      title: "Mental Resilience",
      icon: Brain,
      url: "/mental-resilience",
      badge: null,
      subItems: [
        { title: "Managing Stress & Setbacks", url: "/mental-resilience/managing-stress" },
        { title: "Avoiding Burnout", url: "/mental-resilience/avoiding-burnout" },
        { title: "Impostor Syndrome", url: "/mental-resilience/impostor-syndrome" },
        { title: "Maslow's Hierarchy", url: "/mental-resilience/maslows-hierarchy" },
      ],
    },
    {
      title: "Knowledge Tests",
      icon: PenTool,
      url: "/knowledge-tests",
      badge: null,
    },
    {
      title: "Checkrides",
      icon: Award,
      url: "/checkrides",
      badge: { text: "Important", variant: "default" },
      subItems: [
        { title: "Private Pilot", url: "/checkrides/private" },
        { title: "Instrument Rating", url: "/checkrides/instrument" },
        { title: "Commercial Pilot", url: "/checkrides/commercial" },
        { title: "Multi-Engine", url: "/checkrides/multi-engine" },
        { title: "CFI", url: "/checkrides/cfi" },
        { title: "ATP", url: "/checkrides/atp" },
      ],
    },
    {
      title: "Professional Development",
      icon: Zap,
      url: "/professional-pilot",
      badge: null,
    },
    {
      title: "Pro Tips from Cadets",
      icon: MessageSquare,
      url: "/pro-tips",
      badge: { text: "New", variant: "default" },
    },
    {
      title: "FAQs & How-To Guide",
      icon: Headphones,
      url: "/faq",
      badge: null,
    },
  ]

  // Training fundamentals
  const trainingFundamentals = [
    {
      title: "Risk Management",
      icon: AlertTriangle,
      url: "/fundamentals/risk-management",
      highlight: true,
    },
    {
      title: "Basic Aerodynamics",
      icon: Plane,
      url: "/fundamentals/aerodynamics",
    },
    {
      title: "Airspace Navigation",
      icon: Compass,
      url: "/fundamentals/airspace",
    },
    {
      title: "Weather Basics",
      icon: CloudSun,
      url: "/fundamentals/weather",
    },
    {
      title: "Traffic Patterns",
      icon: Plane,
      url: "/fundamentals/traffic-patterns",
    },
    {
      title: "Sectional Charts",
      icon: FileText,
      url: "/fundamentals/sectional-charts",
    },
    {
      title: "Radio Communications",
      icon: Radio,
      url: "/fundamentals/radio-communications",
    },
    {
      title: "Flight Instruments",
      icon: Gauge,
      url: "/fundamentals/flight-instruments",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-aa-blue to-aa-navy">
            <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-sm">
              AA
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-sm">AACA Guide</span>
            <span className="text-xs text-muted-foreground">Student Pilot Edition</span>
          </div>
        </div>
        <form onSubmit={handleSearch} className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search guide..."
              className="w-full bg-background pl-8 pr-4 h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainCategories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className="justify-between group"
                          isActive={pathname === item.url || pathname.startsWith(`${item.url}/`)}
                          onClick={(e) => {
                            // If clicking on the icon or text (not the chevron), navigate to the main page
                            if (!e.target.closest(".chevron-icon")) {
                              router.push(item.url)
                            }
                          }}
                        >
                          <div className="flex items-center">
                            <item.icon className="h-4 w-4 mr-2" />
                            <span>{item.title}</span>
                          </div>
                          {item.badge && (
                            <Badge
                              variant={item.badge.variant as "default" | "outline"}
                              className="ml-auto mr-2 px-1 py-0 text-[10px]"
                            >
                              {item.badge.text}
                            </Badge>
                          )}
                          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180 chevron-icon" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild isActive={pathname === subItem.url}>
                                <Link href={subItem.url}>
                                  <ChevronRight className="h-3 w-3 mr-1 text-muted-foreground" />
                                  {subItem.title}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                      <Link href={item.url} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <item.icon className="h-4 w-4 mr-2" />
                          <span>{item.title}</span>
                        </div>
                        {item.badge && (
                          <Badge
                            variant={item.badge.variant as "default" | "outline"}
                            className="ml-auto px-1 py-0 text-[10px]"
                          >
                            {item.badge.text}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Training Fundamentals
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {trainingFundamentals.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className={cn(item.highlight && "bg-primary/10 dark:bg-primary/20")}
                  >
                    <Link href={item.url}>
                      <item.icon className={cn("h-4 w-4 mr-2", item.highlight && "text-primary")} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="p-3 space-y-2">
          <Button variant="outline" className="w-full justify-start" size="sm" asChild>
            <Link href="/glossary">
              <BookOpen className="mr-2 h-4 w-4" />
              Plane-English Glossary
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            Saved Items
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  Search,
  BookOpen,
  Plane,
  GraduationCap,
  BookMarked,
  CloudSun,
  Radio,
  Gauge,
  FileText,
  PenTool,
  MessageSquare,
  Home,
  ChevronDown,
  ChevronRight,
  Bookmark,
  Lightbulb,
  AlertTriangle,
  Compass,
  Headphones,
  Zap,
  Award,
  Brain,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  // Navigation structure
  const mainCategories = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/",
      badge: null,
    },
    {
      title: "Welcome to the Academy",
      icon: GraduationCap,
      url: "/welcome",
      badge: null,
      subItems: [
        { title: "Program Overview", url: "/welcome/overview" },
        { title: "Meet Your Instructors", url: "/welcome/instructors" },
        { title: "Cadet Community", url: "/welcome/community" },
      ],
    },
    {
      title: "Training Expectations",
      icon: BookMarked,
      url: "/training-expectations",
      badge: null,
    },
    {
      title: "Learning Fundamentals",
      icon: Lightbulb,
      url: "/learning",
      badge: null,
    },
    {
      title: "Resources & Tools",
      icon: FileText,
      url: "/resources",
      badge: { text: "Essential", variant: "outline" },
    },
    {
      title: "Flight Training",
      icon: Plane,
      url: "/flight-training",
      badge: null,
      subItems: [
        { title: "Pre-Flight Preparation", url: "/flight-training/pre-flight" },
        { title: "In-Flight Procedures", url: "/flight-training/procedures" },
        { title: "Post-Flight Debriefing", url: "/flight-training/debriefing" },
      ],
    },
    {
      title: "Mental Resilience",
      icon: Brain,
      url: "/mental-resilience",
      badge: null,
      subItems: [
        { title: "Managing Stress & Setbacks", url: "/mental-resilience/managing-stress" },
        { title: "Avoiding Burnout", url: "/mental-resilience/avoiding-burnout" },
        { title: "Impostor Syndrome", url: "/mental-resilience/impostor-syndrome" },
        { title: "Maslow's Hierarchy", url: "/mental-resilience/maslows-hierarchy" },
      ],
    },
    {
      title: "Knowledge Tests",
      icon: PenTool,
      url: "/knowledge-tests",
      badge: null,
    },
    {
      title: "Checkrides",
      icon: Award,
      url: "/checkrides",
      badge: { text: "Important", variant: "default" },
      subItems: [
        { title: "Private Pilot", url: "/checkrides/private" },
        { title: "Instrument Rating", url: "/checkrides/instrument" },
        { title: "Commercial Pilot", url: "/checkrides/commercial" },
        { title: "Multi-Engine", url: "/checkrides/multi-engine" },
        { title: "CFI", url: "/checkrides/cfi" },
        { title: "ATP", url: "/checkrides/atp" },
      ],
    },
    {
      title: "Professional Development",
      icon: Zap,
      url: "/professional-pilot",
      badge: null,
    },
    {
      title: "Pro Tips from Cadets",
      icon: MessageSquare,
      url: "/pro-tips",
      badge: { text: "New", variant: "default" },
    },
    {
      title: "FAQs & How-To Guide",
      icon: Headphones,
      url: "/faq",
      badge: null,
    },
  ]

  // Training fundamentals
  const trainingFundamentals = [
    {
      title: "Risk Management",
      icon: AlertTriangle,
      url: "/fundamentals/risk-management",
      highlight: true,
    },
    {
      title: "Basic Aerodynamics",
      icon: Plane,
      url: "/fundamentals/aerodynamics",
    },
    {
      title: "Airspace Navigation",
      icon: Compass,
      url: "/fundamentals/airspace",
    },
    {
      title: "Weather Basics",
      icon: CloudSun,
      url: "/fundamentals/weather",
    },
    {
      title: "Traffic Patterns",
      icon: Plane,
      url: "/fundamentals/traffic-patterns",
    },
    {
      title: "Sectional Charts",
      icon: FileText,
      url: "/fundamentals/sectional-charts",
    },
    {
      title: "Radio Communications",
      icon: Radio,
      url: "/fundamentals/radio-communications",
    },
    {
      title: "Flight Instruments",
      icon: Gauge,
      url: "/fundamentals/flight-instruments",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-aa-blue to-aa-navy">
            <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-sm">
              AA
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-sm">AACA Guide</span>
            <span className="text-xs text-muted-foreground">Student Pilot Edition</span>
          </div>
        </div>
        <form onSubmit={handleSearch} className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search guide..."
              className="w-full bg-background pl-8 pr-4 h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainCategories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className="justify-between group"
                          isActive={pathname === item.url || pathname.startsWith(`${item.url}/`)}
                          onClick={(e) => {
                            // If clicking on the icon or text (not the chevron), navigate to the main page
                            if (!e.target.closest(".chevron-icon")) {
                              router.push(item.url)
                            }
                          }}
                        >
                          <div className="flex items-center">
                            <item.icon className="h-4 w-4 mr-2" />
                            <span>{item.title}</span>
                          </div>
                          {item.badge && (
                            <Badge
                              variant={item.badge.variant as "default" | "outline"}
                              className="ml-auto mr-2 px-1 py-0 text-[10px]"
                            >
                              {item.badge.text}
                            </Badge>
                          )}
                          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180 chevron-icon" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild isActive={pathname === subItem.url}>
                                <Link href={subItem.url}>
                                  <ChevronRight className="h-3 w-3 mr-1 text-muted-foreground" />
                                  {subItem.title}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                      <Link href={item.url} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <item.icon className="h-4 w-4 mr-2" />
                          <span>{item.title}</span>
                        </div>
                        {item.badge && (
                          <Badge
                            variant={item.badge.variant as "default" | "outline"}
                            className="ml-auto px-1 py-0 text-[10px]"
                          >
                            {item.badge.text}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Training Fundamentals
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {trainingFundamentals.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className={cn(item.highlight && "bg-primary/10 dark:bg-primary/20")}
                  >
                    <Link href={item.url}>
                      <item.icon className={cn("h-4 w-4 mr-2", item.highlight && "text-primary")} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="p-3 space-y-2">
          <Button variant="outline" className="w-full justify-start" size="sm" asChild>
            <Link href="/glossary">
              <BookOpen className="mr-2 h-4 w-4" />
              Plane-English Glossary
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            Saved Items
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Search, Bell, User, ChevronRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MainHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for glass header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    if (pathname === "/") return []

    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        href,
        active: index === segments.length - 1,
      }
    })
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-background"
      }`}
    >
      <div className="flex h-16 items-center px-4 md:px-6">
        <SidebarTrigger className="mr-2" />

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {breadcrumbs.length > 0 ? (
              <div className="flex items-center">
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />

                {breadcrumbs.map((breadcrumb, index) => (
                  <div key={breadcrumb.href} className="flex items-center">
                    {breadcrumb.active ? (
                      <span className="text-sm font-medium">{breadcrumb.label}</span>
                    ) : (
                      <>
                        <Link
                          href={breadcrumb.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {breadcrumb.label}
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-aa-blue to-aa-navy">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-sm">
                    AA
                  </div>
                </div>
                <span className="font-display font-medium text-lg hidden md:inline-block">AACA Guide</span>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Search (⌘K)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                    <User className="h-5 w-5 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Progress Tracker</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
