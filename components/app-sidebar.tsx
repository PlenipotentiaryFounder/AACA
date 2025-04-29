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
  Map,
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
      url: "/guide/welcome",
      badge: null,
      subItems: [
        { title: "Program Overview", url: "/guide/welcome/overview" },
        { title: "Meet Your Instructors", url: "/guide/welcome/instructors" },
        { title: "Cadet Community", url: "/guide/welcome/community" },
      ],
    },
    {
      title: "Training Expectations",
      icon: BookMarked,
      url: "/guide/training-expectations",
      badge: null,
    },
    {
      title: "Learning Fundamentals",
      icon: Lightbulb,
      url: "/guide/learning",
      badge: null,
    },
    {
      title: "Resources & Tools",
      icon: FileText,
      url: "/guide/resources",
      badge: { text: "Essential", variant: "outline" },
    },
    {
      title: "Flight Training",
      icon: Plane,
      url: "/guide/flight-training",
      badge: null,
      subItems: [
        { title: "Pre-Flight Preparation", url: "/guide/flight-training/pre-flight" },
        { title: "In-Flight Procedures", url: "/guide/flight-training/procedures" },
        { title: "Post-Flight Debriefing", url: "/guide/flight-training/debriefing" },
      ],
    },
    {
      title: "Mental Resilience",
      icon: Brain,
      url: "/guide/mental-resilience",
      badge: null,
      subItems: [
        { title: "Managing Stress & Setbacks", url: "/guide/mental-resilience/managing-stress" },
        { title: "Avoiding Burnout", url: "/guide/mental-resilience/avoiding-burnout" },
        { title: "Impostor Syndrome", url: "/guide/mental-resilience/impostor-syndrome" },
        { title: "Maslow's Hierarchy", url: "/guide/mental-resilience/maslows-hierarchy" },
      ],
    },
    {
      title: "Knowledge Tests",
      icon: PenTool,
      url: "/guide/knowledge-tests",
      badge: null,
    },
    {
      title: "Checkrides",
      icon: Award,
      url: "/guide/checkrides",
      badge: { text: "Important", variant: "default" },
      subItems: [
        { title: "Private Pilot", url: "/guide/checkrides/private" },
        { title: "Instrument Rating", url: "/guide/checkrides/instrument" },
        { title: "Commercial Pilot", url: "/guide/checkrides/commercial" },
        { title: "Multi-Engine", url: "/guide/checkrides/multi-engine" },
        { title: "CFI", url: "/guide/checkrides/cfi" },
        { title: "ATP", url: "/guide/checkrides/atp" },
      ],
    },
    {
      title: "Professional Development",
      icon: Zap,
      url: "/guide/professional-pilot",
      badge: null,
    },
    {
      title: "Pro Tips from Cadets",
      icon: MessageSquare,
      url: "/guide/pro-tips",
      badge: { text: "New", variant: "default" },
    },
    {
      title: "FAQs & How-To Guide",
      icon: Headphones,
      url: "/guide/faq",
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
      subItems: [
        { title: "PAVE Model", url: "/fundamentals/risk-management/pave" },
      ],
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
    {
      title: "Cross-Country Planning",
      icon: Map,
      url: "/fundamentals/cross-country-planning",
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
                            if (!(e.target as Element).closest(".chevron-icon")) {
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
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className="justify-between group"
                          isActive={pathname === item.url || pathname.startsWith(`${item.url}/`)}
                          onClick={(e) => {
                            // If clicking on the icon or text (not the chevron), navigate to the main page
                            if (!(e.target as Element).closest(".chevron-icon")) {
                              router.push(item.url)
                            }
                          }}
                        >
                          <div className="flex items-center">
                            <item.icon className={cn("h-4 w-4 mr-2", item.highlight && "text-primary")} />
                            <span>{item.title}</span>
                          </div>
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
                  )}
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

