import type { Metadata } from "next"
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Gauge,
  Lightbulb,
  Plane,
  School,
  Target,
  TrendingUp,
  AlertTriangle,
  Brain,
  Layers,
  ShieldCheck,
  Milestone,
  Users,
  Headphones,
} from "lucide-react"
import { GuideNavigation } from "@/components/guide-navigation"
import KnowledgeTestsContent from "@/components/guide/knowledge-tests-content"

export const metadata: Metadata = {
  title: "FAA Knowledge Tests | AACA Student Pilot Guide",
  description:
    "Master your FAA knowledge exams with proven strategies and insider tips from the American Airlines Cadet Academy.",
}

type Tab = {
  value: string;
  label: string;
  iconName: string;
}

interface PageLink {
    name: string;
    url: string;
}

const tabs: Tab[] = [
  { value: "what-are-tests", label: "What are Tests?", iconName: "FileText" },
  { value: "test-content", label: "Test Content", iconName: "Layers" },
  { value: "prep-strategy", label: "Prep Strategy", iconName: "School" },
  { value: "test-day", label: "Test Day", iconName: "Calendar" },
  { value: "after-test", label: "After the Test", iconName: "Award" },
]

const prevPage: PageLink = {
  name: "Checkrides",
  url: "/guide/checkrides",
}

const nextPage: PageLink = {
  name: "Flight Training Overview",
  url: "/guide/flight-training",
}

const nextTopicSegue = "Get started with your flight training"

export default function KnowledgeTestsPage() {
  return (
    <KnowledgeTestsContent
      tabs={tabs}
      prevPage={prevPage}
      nextPage={nextPage}
      nextTopicSegue={nextTopicSegue}
    />
  )
}

