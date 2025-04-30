import Image from "next/image"
import Link from "next/link"
import {
  AlertCircle,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  Compass,
  Gauge,
  Headphones,
  MessageSquare,
  Plane,
  Users,
  ShieldCheck,
  Layers,
  Milestone,
  Calendar,
  ArrowRight,
  Lightbulb,
  Heart,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline"
import { GuideNavigation } from "@/components/guide-navigation"
import FlightTrainingContent from "@/components/guide/flight-training-content"

// Server Component Area

// Define types needed for props
type Tab = {
  value: string;
  label: string;
  iconName: string;
}

interface PageLink {
    name: string;
    url: string;
}

// Define static data
const tabs: Tab[] = [
  { value: "chair-flying", label: "Chair Flying", iconName: "Brain" },
  { value: "prepare", label: "Prepare", iconName: "BookOpen" },
  { value: "cfi-relationship", label: "CFI Relationship", iconName: "Users" },
  { value: "backseating", label: "Backseating", iconName: "Headphones" },
  { value: "study-mistakes", label: "Study Mistakes", iconName: "CheckCircle2" },
]

const prevPage: PageLink = {
  name: "Knowledge Tests",
  url: "/guide/knowledge-tests",
}

const nextPage: PageLink | null = null

const nextTopicSegue = "Congratulations! You've completed the core guide."

// Main Server Component Export
export default function FlightTrainingPage() {
  return (
    <FlightTrainingContent
      tabs={tabs}
      prevPage={prevPage}
      nextPage={nextPage}
      nextTopicSegue={nextTopicSegue}
    />
  )
}

