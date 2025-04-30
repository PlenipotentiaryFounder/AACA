import type { Metadata } from "next"
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Gauge,
  HeartPulse,
  Lightbulb,
  Plane,
  Shield,
  AlertTriangle,
  ArrowRight,
  Brain,
  UserCheck,
  Layers,
  UserCog,
  Users,
  PlaneTakeoff,
  MessageSquareQuote,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { GuideNavigation } from "@/components/guide-navigation"
import { AppSidebar } from "@/components/guide/app-sidebar"
import { SidebarInset } from "@/components/guide/sidebar-inset"
import CheckridesContent from "@/components/guide/checkrides-content"

export const metadata: Metadata = {
  title: "Checkrides | AACA Student Pilot Guide",
  description:
    "Master your FAA checkrides with proven strategies, mindset techniques, and insider preparation tips from the American Airlines Cadet Academy.",
}

type PremiumTab = {
  value: string;
  label: string;
  iconName: string;
}

type PageLink = {
  href: string;
  label: string;
}

const tabs: PremiumTab[] = [
  {
    value: "what-is-checkride",
    label: "What is a Checkride?",
    iconName: "FileText",
  },
  {
    value: "the-acs",
    label: "The ACS",
    iconName: "BookOpen",
  },
  {
    value: "the-oral-exam",
    label: "The Oral Exam",
    iconName: "Brain",
  },
  {
    value: "the-flight-portion",
    label: "The Flight Portion",
    iconName: "Plane",
  },
  {
    value: "common-failures",
    label: "Common Failures",
    iconName: "AlertTriangle",
  },
  {
    value: "dpe-expectations",
    label: "DPE Expectations",
    iconName: "UserCheck",
  },
  {
    value: "checkride-day-mindset",
    label: "Checkride Day Mindset",
    iconName: "HeartPulse",
  },
  {
    value: "after-the-checkride",
    label: "After the Checkride",
    iconName: "Award",
  },
]

const prevPage: PageLink = {
  href: "/guide/mental-resilience",
  label: "Mental Resilience",
}

const nextPage: PageLink = {
  href: "/guide/knowledge-tests",
  label: "Knowledge Tests",
}

const nextTopicSegue = "Ace your FAA Knowledge Tests"

export default function CheckridesPage() {
  return (
    <CheckridesContent
      tabs={tabs}
      prevPage={prevPage}
      nextPage={nextPage}
      nextTopicSegue={nextTopicSegue}
    />
  )
}

