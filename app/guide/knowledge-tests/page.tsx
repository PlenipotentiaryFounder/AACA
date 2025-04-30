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
import KnowledgeTestsContent from "@/components/guide/knowledge-tests-content"
import GuidePageHeader from "@/components/guide/guide-page-header"

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

interface HeaderButtonProps {
  text: string;
  href: string;
  variant: "default" | "outline" | "secondary" | "ghost" | "link";
  icon?: React.ReactNode;
}

const tabs: Tab[] = [
  { value: "what-are-tests", label: "What are Tests?", iconName: "FileText" },
  { value: "test-content", label: "Test Content", iconName: "Layers" },
  { value: "prep-strategy", label: "Prep Strategy", iconName: "School" },
  { value: "test-day", label: "Test Day", iconName: "Calendar" },
  { value: "after-test", label: "After the Test", iconName: "Award" },
]

// Updated to match sidebar navigation order
const prevPage: PageLink = {
  name: "Mental Resilience",
  url: "/guide/mental-resilience",
}

const nextPage: PageLink = {
  name: "Checkrides",
  url: "/guide/checkrides",
}

const nextTopicSegue = "With your knowledge tests mastered, prepare for your checkrides to demonstrate your practical skills."

// GuidePageHeader data
const chapter = "Chapter 7";
const title = "FAA Knowledge Tests";
const description = "Conquer the tests. Clear the way. Fly with confidence.";
const topicBadges = ["Test Format", "Study Strategy", "Test Day Tips", "Practice Tests", "Review Methods"];
const audioSrc = "/audioFiles/Guide/Soar Beyond Memorization_ Your American Airlines Cadet Flight Plan.wav";
const trackTitle = "Mastering Your FAA Knowledge Exams";
const subtitleSrc = "/audioFiles/Guide/Soar Beyond Memorization_ Your American Airlines Cadet Flight Plan.vtt";
const backgroundImageSrc = "/images/ground_school.jpg";
const headerButtonsData: HeaderButtonProps[] = [];

export default function KnowledgeTestsPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        <GuidePageHeader
          chapter={chapter}
          title={title}
          description={description}
          topicBadges={topicBadges}
          audioSrc={audioSrc}
          trackTitle={trackTitle}
          subtitleSrc={subtitleSrc}
          headerButtons={headerButtonsData}
          backgroundImageSrc={backgroundImageSrc}
        />
        <KnowledgeTestsContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
        />
      </div>
    </main>
  )
}

