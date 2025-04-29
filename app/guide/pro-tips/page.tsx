import Image from "next/image"
import type { Metadata } from "next";
import {
  BookOpen,
  Clock,
  Compass,
  FileText,
  Lightbulb,
  MessageSquare,
  Plane,
  Quote,
  Star,
  Users,
  Zap,
  ChevronRight,
  AlertTriangle,
  Heart,
  Brain,
  Shield,
  Search,
  ArrowUp,
  CheckCircle2,
  Sparkles,
  BookMarked,
  Bookmark,
  Coffee,
} from "lucide-react"

// Import the new client component
import ProTipsContent from "@/components/guide/pro-tips-content";

// Metadata for the page
export const metadata: Metadata = {
  title: "Pro Tips for Cadet Success | AACA Guide",
  description: "Essential advice, mindset shifts, and success stories for American Airlines Cadet Academy students.",
};

// Type definitions (can be shared or defined here)
interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface Tip {
  id: number;
  title: string;
  category: string;
  icon?: React.ReactNode;
  color?: string;
}

interface CadetStory {
  id: number;
  name: string;
  path: string;
  avatar: string;
  story: string[];
}

// Define static data within the Server Component
const categories: Category[] = [
  { id: "all", name: "All Tips" },
  { id: "training", name: "Training", icon: <Plane className="h-4 w-4" /> },
  { id: "mindset", name: "Mindset", icon: <Brain className="h-4 w-4" /> },
  { id: "preparation", name: "Preparation", icon: <BookMarked className="h-4 w-4" /> },
  { id: "resources", name: "Resources", icon: <Bookmark className="h-4 w-4" /> },
];

const tips: Tip[] = [
  {
    id: 1,
    title: "Don't learn in the plane what you could've learned on the ground",
    category: "preparation",
    icon: <BookOpen className="h-5 w-5" />,
    color: "blue",
  },
  {
    id: 2,
    title: "Being a great student matters more than having a great instructor",
    category: "mindset",
    icon: <Users className="h-5 w-5" />,
    color: "blue",
  },
  {
    id: 3,
    title: "If you don't want to be the best, you'll end up being the worst",
    category: "mindset",
    icon: <Star className="h-5 w-5" />,
    color: "blue",
  },
  {
    id: 4,
    title: "Gouge is great—until it isn't",
    category: "preparation",
    icon: <FileText className="h-5 w-5" />,
    color: "blue",
  },
  {
    id: 5,
    title: "The sooner you stop comparing yourself to others, the faster you'll grow",
    category: "mindset",
    icon: <Compass className="h-5 w-5" />,
    color: "blue",
  },
  {
    id: 6,
    title: "Your name is your reputation—protect it",
    category: "mindset",
    icon: <Shield className="h-5 w-5" />,
    color: "blue",
  },
  {
    id: 7,
    title: "Training plateaus are not failure—they're growth in disguise",
    category: "training",
    icon: <Brain className="h-5 w-5" />,
    color: "green",
  },
  {
    id: 8,
    title: "Fly the lesson before you fly the airplane",
    category: "training",
    icon: <Plane className="h-5 w-5" />,
    color: "green",
  },
  {
    id: 9,
    title: "If you're not actively managing your stress, it's managing you",
    category: "mindset",
    icon: <Heart className="h-5 w-5" />,
    color: "amber",
  },
  {
    id: 10,
    title: "You won't build PIC confidence if you're never in command",
    category: "training",
    icon: <Shield className="h-5 w-5" />,
    color: "amber",
  },
  {
    id: 11,
    title: "You can't fake preparation",
    category: "preparation",
    icon: <AlertTriangle className="h-5 w-5" />,
    color: "amber",
  },
  {
    id: 12,
    title: "Train like you fly, fly like you train",
    category: "training",
    icon: <Zap className="h-5 w-5" />,
    color: "blue",
  },
];

const cadetStories: CadetStory[] = [
  {
    id: 1,
    name: "Sarah M.",
    path: "Private → Commercial → CFI → Regional FO",
    avatar: "/images/pilot-profile-placeholder.png",
    story: [
      "My biggest lesson came during my instrument training. I was so focused on the technical aspects—holding entries, approaches, tracking—that I neglected the mental game. I'd get overwhelmed when ATC threw curveballs or when things didn't go as planned.",
      "My breakthrough came when my instructor had me start every flight by saying out loud: 'I expect things to change, and I'm ready to adapt.' That simple mindset shift completely transformed my training. I stopped being surprised by changes and started anticipating them.",
      "Now as an airline pilot, that lesson is more valuable than any technical skill I learned. Aviation is constant change management. The pilots who thrive are the ones who expect it, not the ones who fight it.",
    ],
  },
  {
    id: 2,
    name: "Marcus J.",
    path: "Career-Changer → ATP in 3 Years",
    avatar: "/images/pilot-profile-placeholder.png",
    story: [
      "I came to aviation at 35 after a decade in finance. I thought my biggest challenge would be the technical knowledge—but it wasn't. It was learning to be a beginner again. I was used to being the expert, and suddenly I was making basic mistakes every day.",
      "What saved me was creating a 'growth mindset journal.' After every flight, I'd write down three things: what I improved on, what I struggled with, and what I'd focus on next time. No judgment, just data. It kept me from getting discouraged when progress felt slow.",
      "That journal followed me all the way to my ATP checkride. Looking back at those early entries reminds me how far consistent improvement can take you—even when it feels like you're standing still.",
    ],
  },
  {
    id: 3,
    name: "Aiden T.",
    path: "From First Solo to CFI",
    avatar: "/images/pilot-profile-placeholder.png",
    story: [
      "My wake-up call came during my commercial training. I'd developed some sloppy habits during private and instrument—rushing checklists, inconsistent flows, cutting corners on preflight. My commercial instructor called me out immediately.",
      "He said: 'You're not training to pass a checkride. You're training for the day when something goes wrong and your habits are all you have.' That hit hard. I completely rebuilt my approach to standard operating procedures.",
      "Now as a CFI, I see the same patterns in my students. The ones who build disciplined habits from day one are the ones who perform best under pressure. Excellence isn't what you do occasionally—it's what you do habitually.",
    ],
  },
  {
    id: 4,
    name: "Elena R.",
    path: "Zero Time to Regional in 2 Years",
    avatar: "/images/pilot-profile-placeholder.png",
    story: [
      "I almost quit during my private training. I was struggling with landings, burning through money, and feeling like I'd made a huge mistake. What saved me was finding the right study group.",
      "Four of us started meeting daily—chair flying together, quizzing each other, sharing resources. We held each other accountable and celebrated each other's wins. That community became my lifeline through every rating.",
      "My advice: Don't try to do this alone. Find your people. The pilots who isolate themselves miss out on both the practical benefits of collaboration and the emotional support that gets you through the tough days. Aviation is a team sport—start practicing that now.",
    ],
  },
  {
    id: 5,
    name: "James L.",
    path: "Military Transition to Airlines",
    avatar: "/images/pilot-profile-placeholder.png",
    story: [
      "Coming from military aviation, I thought the technical transition to civilian flying would be the challenge. I was wrong—it was the cultural transition that caught me off guard.",
      "In the military, the hierarchy is clear. In civilian aviation—especially during training—you need to be more collaborative while still maintaining command authority. I had to learn when to be assertive and when to be receptive.",
      "The best advice I got was to approach every flight as both a teacher and a student, regardless of which seat you're in. Always have something to share and always have something to learn. That balance is what makes great aviators in any environment.",
    ],
  },
];

// Server Component definition
export default function ProTipsPage() {
  // The data is defined above

  // Render the client component, passing the data as props
  return (
    <ProTipsContent
      categories={categories}
      tips={tips}
      cadetStories={cadetStories}
    />
  );
}

