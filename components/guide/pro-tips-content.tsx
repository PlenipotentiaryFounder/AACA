"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
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
  Headphones,
  Laptop,
  Users2,
  Wrench,
  Info,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PremiumTabs } from "@/components/premium-tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// --- Type definitions needed for props ---
interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode; // Optional icon
}

interface Tip {
  id: number;
  title: string;
  category: string;
  description: string;
  icon?: React.ReactNode; // Optional icon
  color?: string; // Optional color
}

interface CadetStory {
  id: number;
  name: string;
  path: string;
  avatar: string;
  story: string[];
}

// --- Interface for client component props ---
interface ProTipsContentProps {
  categories: Category[];
  tips: Tip[];
  cadetStories: CadetStory[];
}

// --- Static Data for Toolkit Accordion ---
const toolkitData = {
  equipment: [
    {
      title: "iPad + Kneeboard Mount",
      description:
        "Every cadet who excelled invested in a secure, high-quality kneeboard mount that allowed them to position their iPad for optimal viewing without getting in the way of flight controls.",
    },
    {
      title: "High-Quality Headset",
      description:
        "While there are budget options available, cadets consistently report that investing in an ANR headset as early as possible pays dividends in reduced fatigue and better radio comprehension.",
    },
    {
      title: "Cockpit Reference Cards",
      description:
        "Successful cadets create laminated quick-reference cards for emergency procedures, radio phraseology, and complex maneuvers tailored to their specific training aircraft.",
    },
    {
      title: "Portable Radio Scanner",
      description:
        "Cadets who invested in a handheld aviation radio to listen to ATC communications outside their flight time reported significantly faster progress with radio proficiency.",
    },
  ],
  techniques: [
    {
      title: 'The "Teach Back" Method',
      description:
        "After learning a new concept, immediately try to teach it to someone else (even if they know nothing about aviation). The act of explaining forces you to organize your thoughts and identify gaps in your understanding.",
    },
    {
      title: "The &quot;Three-Pass&quot; Study System",
      description:
        "When studying complex topics (like systems or weather theory), successful cadets use a three-pass approach: First pass: Skim for structure and big ideas (10-15 minutes). Second pass: Read for comprehension, taking notes (30-45 minutes). Third pass: Teach it back or create a summary (15-20 minutes).",
    },
    {
      title: "The &quot;Deliberate Practice&quot; Framework",
      description:
        "Top-performing cadets don't just log hours—they practice deliberately. This means setting specific, measurable goals for each flight, seeking immediate feedback, focusing practice on the edge of your ability, and reflecting after each session.",
    },
  ],
  apps: [
    {
      title: "ForeFlight",
      description: "Essential for all phases of flight training",
      note: "The most recommended app among cadets. Start with basic and consider upgrading for instrument and commercial.",
    },
    {
      title: "CloudAhoy",
      description: "Flight tracking and performance analysis",
      note: "Helps visualize maneuvers and identify areas for improvement.",
    },
    {
      title: "Sheppard Air",
      description: "Written test preparation",
      note: "The gold standard for knowledge test preparation.",
    },
    {
      title: "LiveATC",
      description: "Real-time ATC communications",
      note: "Listen to actual radio traffic to build radiotelephony skills.",
    },
    {
      title: "FltPlan Go",
      description: "Free flight planning alternative",
      note: "A solid alternative to ForeFlight with no subscription cost.",
    },
    {
      title: "Pilot Cafe's Checkride Guide",
      description: "Oral exam preparation",
      note: "Comprehensive cheat sheets for all pilot certificate levels.",
    },
    {
      title: "CalTopo",
      description: "Advanced terrain visualization",
      note: "Helps with mountain flying and visual route planning.",
    },
    {
      title: "Aviation W&B Calculator",
      description: "Weight and balance calculations",
      note: "Simplifies the weight & balance process.",
    },
    {
      title: "Zulu Time Converter",
      description: "UTC/local time conversion",
      note: "Simple but vital tool for international flight planning.",
    },
  ],
  study: [
    {
      title: "Chair Flying Companion",
      description:
        "A laminated cockpit diagram with checklist overlays for each phase of flight. Cadets report this simple tool dramatically improved their procedural memory and reduced in-flight workload.",
    },
    {
      title: "ForeFlight + Performance Plus",
      description:
        "While the basic subscription is sufficient for private training, cadets recommend upgrading to Performance Plus during instrument and commercial training for the advanced features.",
    },
    {
      title: "CloudAhoy",
      description:
        "This flight analysis tool allows you to review your maneuvers in 3D after each flight. Cadets report that seeing their flight paths visually accelerated their improvement on everything from steep turns to approaches.",
    },
    {
      title: "Sheppard Air (Written Test Prep)",
      description:
        "Nearly every cadet mentions this as essential for written test preparation. Their study method is specific but extremely effective when followed exactly.",
    },
  ],
  community: [
    {
      title: "AACA Cadet Forum",
      description: "Private forum exclusively for current cadets and alumni",
      action: "Join Forum",
    },
    {
      title: "Study Group Formation Tools",
      description:
        "Cadets who studied together consistently outperformed those who studied alone. Use these tools to find study partners.",
      action: "Find Study Group",
    },
    {
      title: "Regional Cadet Meetups",
      description:
        "Monthly in-person gatherings organized by region. Great for networking and finding mentorship.",
      action: "See Schedule",
    },
    {
      title: "Alumni Mentorship Program",
      description:
        "Get paired with an AACA graduate who is now flying professionally for guidance and advice.",
      action: "Request Mentor",
    },
  ],
}

// --- Define Tabs for Main Sections ---
const mainContentTabs = [
  { value: "intro", label: "Introduction", iconName: "FileText" }, 
  { value: "wisdom", label: "Words of Wisdom", iconName: "Lightbulb" },
  { value: "stories", label: "Cadet Stories", iconName: "Quote" },
  { value: "toolkit", label: "Cadet Toolkit", iconName: "Wrench" },
  { value: "contribute", label: "Pay It Forward", iconName: "Heart" },
];

// --- Helper Functions ---

// Convert categories to PremiumTabs format
function categoriesToTabs(categories: Category[]) {
  return categories.map(category => ({
    value: category.id,
    label: category.name,
    iconName: getIconName(category.icon),
  }));
}

// Helper function to get icon name from icon component
function getIconName(icon: React.ReactNode | undefined): string | undefined {
  if (!icon) return undefined;
  
  const iconElement = React.isValidElement(icon) ? icon : null;
  const iconType = iconElement?.type as any; // Use 'any' to access displayName or name
  
  // Prioritize displayName if available (common in styled-components or HOCs)
  return iconType?.displayName || iconType?.name || undefined;
}

// --- Main Component Definition ---
export default function ProTipsContent({
  categories,
  tips,
  cadetStories,
}: ProTipsContentProps) {
  const [activeTab, setActiveTab] = useState(mainContentTabs[0].value) // State for the main section tab
  const [searchQuery, setSearchQuery] = useState("") // Search state specific to wisdom section
  const [selectedWisdomCategory, setSelectedWisdomCategory] = useState("all") // State for wisdom filter
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const sectionRefs = {
    intro: useRef<HTMLDivElement>(null),
    wisdom: useRef<HTMLElement>(null),
    stories: useRef<HTMLElement>(null),
    toolkit: useRef<HTMLElement>(null),
    contribute: useRef<HTMLElement>(null),
  }

  // Ensure tips have descriptions (potentially move this data enrichment server-side)
  const tipsWithDescriptions = tips.map(tip => ({
    ...tip,
    description: tip.description || getTipDescription(tip.id)
  }));

  // Filter tips ONLY when the wisdom tab is active, using both states
  const filteredTips = activeTab === 'wisdom' 
    ? tipsWithDescriptions.filter((tip) => {
        const tipContent = `${tip.title} ${tip.description}`.toLowerCase();
        const matchesSearch = searchQuery ? tipContent.includes(searchQuery.toLowerCase()) : true;
        const matchesCategory = selectedWisdomCategory === "all" || tip.category === selectedWisdomCategory;
        return matchesSearch && matchesCategory;
      })
    : []; // No tips needed if wisdom tab isn't active

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setShowBackToTop(true)
      else setShowBackToTop(false)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simulate loading state
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Auto-advance stories carousel
  useEffect(() => {
    if (cadetStories && cadetStories.length > 0) {
      const interval = setInterval(() => {
        setCurrentStoryIndex((prev) => (prev + 1) % cadetStories.length)
      }, 7000) // Slowed down interval
      return () => clearInterval(interval)
    }
  }, [cadetStories]) // Added dependency

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Convert categories to tabs format
  const tabsList = categoriesToTabs(categories);

  // --- JSX Rendering Logic --- 
  return (
    <div className="relative">
      {/* PremiumTabs controls which main section is visible */}
      <PremiumTabs
        tabs={mainContentTabs}
        defaultValue={mainContentTabs[0].value}
        currentValue={activeTab}
        onChange={setActiveTab} // Set the active section tab
        title="Pro Tips Sections"
        className="sticky top-0 z-40" 
      />

      {/* Container for the conditionally rendered content */} 
      <div className="container mx-auto px-4 py-6 md:py-10">
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab} // Ensures content fades in/out on tab change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
            >
                {/* --- Conditionally Rendered Sections --- */} 

                {/* Introduction Section */} 
                {activeTab === 'intro' && (
                    <div ref={sectionRefs.intro}>
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mb-12 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div>
                                <Badge className="mb-3 w-fit bg-aa-blue text-white">Essential Reading</Badge>
                                <h2 className="font-display text-2xl font-bold text-aa-navy">The Final Hand-Off</h2> 
                                <p className="mt-1 text-muted-foreground">What this handbook is really about</p>
                                </div>
                            </div>
                            <div className="mt-4 prose prose-sm max-w-none dark:prose-invert">
                                <p>
                                    From day one, the purpose of this handbook has been simple: to pass the torch—to give you the clearest
                                    possible guide through one of the most exciting, challenging, and life-changing journeys you&apos;ll ever
                                    take. It&apos;s more than just checkride prep or study tips. It&apos;s a blueprint for how to think, act,
                                    and grow as a professional pilot.
                                </p>
                                <p>
                                    This chapter is about perspective—the kind that only comes from doing the work, walking the path, and
                                    looking back with clarity.
                                </p>
                                <p>
                                    Every lesson here was shaped by experience: Late nights before stage checks. Chair-flying with flashlights
                                    in dorm rooms. Big wins. Tough flights. Moments of doubt. Breakthroughs that only came after things got
                                    hard. These are the kinds of insights that only cadets can give—because they&apos;ve lived it.
                                </p>
                                <p>And now, they want to help you do it better.</p>
                            </div>
                            <div className="mt-5 rounded-lg bg-muted p-4 not-prose">
                                <h3 className="font-display text-base font-medium">
                                    This chapter isn&apos;t a pat on the back or a motivational speech.
                                </h3>
                                <p className="mt-1 text-sm">
                                    It&apos;s real advice, from real cadets, meant to guide you through the highs and lows of this program
                                    with strength, strategy, and professionalism.
                                </p>
                                <p className="mt-1 text-sm">
                                    So as you get closer to the end of your own journey, use this final chapter as your compass—pointed by
                                    those who stood where you stand, faced the same pressures, and kept going.
                                </p>
                                <p className="mt-2 text-sm font-medium">They made it. You will too.</p>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Words of Wisdom Section - Now with Sidebar Filter */} 
                {activeTab === 'wisdom' && (
                    <section ref={sectionRefs.wisdom} className="scroll-mt-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aa-blue text-white">
                                    <Lightbulb className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-2xl font-bold text-aa-navy">
                                        Words of Wisdom from Past Cadets
                                        </h2>
                                        <p className="mt-1 text-muted-foreground">
                                            Hard-earned truths that will save you time, energy, and sanity
                                        </p>
                                    </div>
                                </div>
                         </motion.div>
                        
                         {/* Two-Column Layout Container */} 
                         <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

                            {/* Sticky Sidebar (Left Column) - For Wisdom Filtering */} 
                            <aside className="w-full md:w-60 lg:w-72 md:sticky md:top-24 h-fit shrink-0">
                                <h3 className="text-lg font-semibold mb-3 px-2">Categories</h3>
                                <nav className="flex flex-col space-y-1">
                                    {/* "All Tips" Button */} 
                                    <Button
                                        variant={selectedWisdomCategory === "all" ? "secondary" : "ghost"}
                                        className={cn(
                                            "w-full justify-start",
                                            selectedWisdomCategory === "all" ? "font-semibold" : ""
                                        )}
                                        onClick={() => setSelectedWisdomCategory("all")}
                                        >
                                        <Sparkles className="mr-2 h-4 w-4 opacity-70" />
                                        All Tips
                                    </Button>
                                    {/* Category Buttons */} 
                                    {categories.filter(c => c.id !== 'all').map((category) => (
                                        <Button
                                            key={category.id}
                                            variant={selectedWisdomCategory === category.id ? "secondary" : "ghost"}
                                            className={cn(
                                            "w-full justify-start",
                                            selectedWisdomCategory === category.id ? "font-semibold" : ""
                                            )}
                                            onClick={() => setSelectedWisdomCategory(category.id)}
                                        >
                                            <span className="mr-2 w-4 h-4 flex items-center justify-center opacity-70">
                                            {category.icon || <Lightbulb className="h-4 w-4" />}
                                            </span>
                                            {category.name}
                                        </Button>
                                    ))}
                                </nav>
                            </aside>

                            {/* Main Content Area (Right Column) - For Wisdom Tips */} 
                            <div className="flex-1 min-w-0">
                                {/* Search Input */} 
                                <div className="relative mb-8">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                    placeholder={`Search ${selectedWisdomCategory === 'all' ? 'all tips' : categories.find(c=>c.id === selectedWisdomCategory)?.name.toLowerCase() + ' tips'}...`}
                                    className="pl-9 shadow-sm w-full"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                {/* Tips Grid */} 
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedWisdomCategory + searchQuery} // Re-trigger animation
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
                                    >
                                        {filteredTips.map((tip, index) => (
                                            <motion.div
                                                key={tip.id} 
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.03, duration: 0.25 }}
                                                className="h-full"
                                                >
                                                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col border-l-4"
                                                        style={{ borderLeftColor: tip.color === 'blue' ? 'var(--aa-blue)' : tip.color === 'green' ? 'var(--green-600)' : 'var(--amber-500)' }}
                                                    >
                                                        <CardHeader className="pb-3">
                                                            <div className="flex items-start gap-3">
                                                                <div
                                                                    className={cn(
                                                                        "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full mt-1",
                                                                        tip.color === "blue"
                                                                            ? "bg-aa-blue/10 text-aa-blue"
                                                                            : tip.color === "green"
                                                                            ? "bg-green-500/10 text-green-600"
                                                                            : "bg-amber-500/10 text-amber-500",
                                                                    )}
                                                                >
                                                                    {tip.icon || <Lightbulb className="h-5 w-5" />}
                                                                </div>
                                                                <CardTitle className="text-base font-semibold leading-snug">{tip.title}</CardTitle>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="flex-grow pt-0 pb-4">
                                                            <p className="text-sm text-muted-foreground pl-12">
                                                                {tip.description}
                                                            </p>
                                                        </CardContent>
                                                        <CardFooter className="mt-auto pt-2 pb-3 px-4">
                                                            <Badge variant="secondary" className="ml-auto capitalize text-xs font-normal"
                                                                    style={{
                                                                        backgroundColor: tip.color === 'blue' ? 'var(--aa-blue-light)' : tip.color === 'green' ? 'var(--green-100)' : 'var(--amber-100)',
                                                                        color: tip.color === 'blue' ? 'var(--aa-blue-dark)' : tip.color === 'green' ? 'var(--green-800)' : 'var(--amber-800)',
                                                                    }}
                                                            >
                                                                {tip.category}
                                                            </Badge>
                                                        </CardFooter>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                    </motion.div>
                                </AnimatePresence>

                                {/* No Results Message */} 
                                {filteredTips.length === 0 && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-8 rounded-lg border bg-card p-8 text-center shadow-sm"
                                    >
                                        <Search className="mx-auto h-10 w-10 text-muted-foreground/50" />
                                        <h3 className="mt-4 text-lg font-semibold text-foreground">No Wisdom Found</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Your search for "{searchQuery}" {searchQuery && "in"} {searchQuery ? `the "${categories.find(c=>c.id === searchQuery)?.name}" category` : 'across All Tips'} didn&apos;t match any advice.
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-5"
                                            onClick={() => {
                                                setSearchQuery("")
                                            }}
                                        >
                                            Clear Search & Filters
                                        </Button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Cadet Stories Section */} 
                {activeTab === 'stories' && (
                     <section ref={sectionRefs.stories} className="scroll-mt-20">
                         <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                          transition={{ duration: 0.5 }}
                          className="mb-6"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aa-blue text-white">
                              <Quote className="h-5 w-5" />
                            </div>
                             <div>
                                 <h2 className="font-display text-2xl font-bold text-aa-navy">
                                  From Their Words to Your Actions
                                 </h2>
                                 <p className="mt-1 text-muted-foreground">
                                     Stories and advice from cadets who've been where you are
                                 </p>
                             </div>
                          </div>
                        </motion.div>

                        <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="md:flex"
                          >
                            <div className="relative bg-gradient-to-br from-aa-blue to-aa-navy p-6 md:w-1/3 flex flex-col justify-center items-center min-h-64 md:min-h-80">
                              <div className="absolute inset-0 bg-[url('/images/aa-pattern-light.png')] opacity-5 bg-repeat"></div>
                              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                <Avatar className="h-20 w-20 border-4 border-white text-foreground shadow-md">
                                  <AvatarImage src={cadetStories[currentStoryIndex]?.avatar} alt="Pilot avatar" />
                                  <AvatarFallback>
                                    {cadetStories[currentStoryIndex]?.name.split(" ").map((n) => n[0]).join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="text-white">
                                  <h3 className="font-display text-xl font-semibold">{cadetStories[currentStoryIndex]?.name}</h3>
                                  <p className="text-sm text-white/80">{cadetStories[currentStoryIndex]?.path}</p>
                                </div>
                                <div className="flex mt-2 gap-1.5">
                                  {cadetStories.map((_, index) => (
                                    <button
                                      key={index}
                                      className={cn(
                                        "h-2 w-2 rounded-full transition-all duration-300",
                                        index === currentStoryIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50",
                                      )}
                                      onClick={() => setCurrentStoryIndex(index)}
                                      aria-label={`View story ${index + 1}`}
                                    ></button>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="p-6 md:w-2/3 bg-card">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStoryIndex}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative prose prose-sm max-w-none dark:prose-invert space-y-3"
                                    >
                                        {cadetStories[currentStoryIndex]?.story.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                          </motion.div>
                        </Card>
                     </section>
                )}

                {/* Cadet Toolkit Section */} 
                {activeTab === 'toolkit' && (
                     <section ref={sectionRefs.toolkit} className="scroll-mt-20">
                         <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                           transition={{ duration: 0.5 }}
                           className="mb-6"
                         >
                           <div className="flex items-center gap-3">
                             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aa-blue text-white">
                               <Wrench className="h-5 w-5" />
                             </div>
                             <div>
                                  <h2 className="font-display text-2xl font-bold text-aa-navy">
                                   The Cadet's Toolkit
                                  </h2>
                                  <p className="mt-1 text-muted-foreground">
                                      Essential tools, techniques, and resources proven by successful cadets
                                  </p>
                             </div>
                           </div>
                         </motion.div>

                         <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                           transition={{ delay: 0.1, duration: 0.5 }}
                           className="rounded-xl border bg-card p-6 shadow-sm"
                         >
                           <Accordion type="single" collapsible className="w-full" defaultValue="equipment">
                             <AccordionItem value="equipment">
                               <AccordionTrigger className="text-base font-medium hover:no-underline">
                                 <div className="flex items-center gap-3">
                                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                       <Headphones className="h-4 w-4" />
                                   </div>
                                   <span>Essential Equipment</span>
                                 </div>
                               </AccordionTrigger>
                               <AccordionContent className="pt-4 pl-11">
                                 <div className="grid gap-4 md:grid-cols-2">
                                   {toolkitData.equipment.map((item, index) => (
                                     <motion.div
                                       key={index}
                                       initial={{ opacity: 0, y: 10 }}
                                       animate={{ opacity: 1, y: 0 }}
                                       transition={{ delay: index * 0.05, duration: 0.3 }}
                                       className="rounded-lg border p-4 hover:bg-blue-50/50 hover:shadow-sm transition-all duration-300"
                                     >
                                       <h3 className="font-semibold mb-1 text-blue-800">{item.title}</h3>
                                       <p className="text-sm text-muted-foreground">{item.description}</p>
                                     </motion.div>
                                   ))}
                                 </div>
                               </AccordionContent>
                             </AccordionItem>

                             <AccordionItem value="techniques">
                               <AccordionTrigger className="text-base font-medium hover:no-underline">
                                  <div className="flex items-center gap-3">
                                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                       <Brain className="h-4 w-4" />
                                   </div>
                                   <span>Learning Techniques</span>
                                 </div>
                               </AccordionTrigger>
                               <AccordionContent className="pt-4 pl-11">
                                 <div className="space-y-4">
                                   {toolkitData.techniques.map((item, index) => (
                                     <motion.div
                                       key={index}
                                       initial={{ opacity: 0, y: 10 }}
                                       animate={{ opacity: 1, y: 0 }}
                                       transition={{ delay: index * 0.05, duration: 0.3 }}
                                       className="rounded-lg border p-4 hover:bg-green-50/50 hover:shadow-sm transition-all duration-300"
                                     >
                                       <h3 className="font-semibold mb-1 text-green-800">{item.title}</h3>
                                       <p className="text-sm text-muted-foreground">{item.description}</p>
                                     </motion.div>
                                   ))}
                                 </div>
                               </AccordionContent>
                             </AccordionItem>

                             <AccordionItem value="apps">
                                <AccordionTrigger className="text-base font-medium hover:no-underline">
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                        <Laptop className="h-4 w-4" />
                                    </div>
                                    <span>Helpful Apps</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pl-11">
                                  <div className="grid gap-4 md:grid-cols-3">
                                    {toolkitData.apps.map((app, index) => (
                                      <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        className="rounded-lg border p-4 hover:bg-purple-50/50 hover:shadow-sm transition-all duration-300"
                                      >
                                        <h3 className="font-semibold text-purple-800">{app.title}</h3>
                                        <p className="text-xs text-muted-foreground mb-2">{app.description}</p>
                                        <p className="text-sm text-muted-foreground">{app.note}</p>
                                      </motion.div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="study">
                                <AccordionTrigger className="text-base font-medium hover:no-underline">
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                                        <BookOpen className="h-4 w-4" />
                                    </div>
                                    <span>Study Aides</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pl-11">
                                  <div className="grid gap-4 md:grid-cols-2">
                                    {toolkitData.study.map((item, index) => (
                                      <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        className="rounded-lg border p-4 hover:bg-amber-50/50 hover:shadow-sm transition-all duration-300"
                                      >
                                        <h3 className="font-semibold mb-1 text-amber-800">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </motion.div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="community" className="border-b-0">
                                <AccordionTrigger className="text-base font-medium hover:no-underline">
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                                        <Users2 className="h-4 w-4" />
                                    </div>
                                    <span>Community Resources</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pl-11">
                                  <div className="grid gap-4 md:grid-cols-2">
                                    {toolkitData.community.map((resource, index) => (
                                      <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        className="rounded-lg border p-4 hover:bg-red-50/50 hover:shadow-sm transition-all duration-300 flex flex-col"
                                      >
                                        <h3 className="font-semibold mb-1 text-red-800">{resource.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-4 flex-grow">{resource.description}</p>
                                        <Button variant="outline" size="sm" className="mt-auto w-full">
                                          {resource.action}
                                        </Button>
                                      </motion.div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                           </Accordion>
                         </motion.div>
                     </section>
                )}

                {/* Contribute Section */} 
                 {activeTab === 'contribute' && (
                     <section ref={sectionRefs.contribute} className="scroll-mt-20">
                         <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                          transition={{ duration: 0.5 }}
                          className="mb-6"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aa-blue text-white">
                              <Heart className="h-5 w-5" />
                            </div>
                             <div>
                                  <h2 className="font-display text-2xl font-bold text-aa-navy">
                                   Pay It Forward
                                  </h2>
                                  <p className="mt-1 text-muted-foreground">
                                      A callout to contribute your own wisdom to future cadets
                                  </p>
                             </div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                          className="rounded-xl border bg-card p-6 shadow-sm"
                        >
                          <p className="text-base mb-6">
                            As you progress through your training, you&apos;ll accumulate valuable insights and experiences. Consider how
                            you might contribute to this living knowledge base for future cadets:
                          </p>

                          <div className="grid gap-6 md:grid-cols-3">
                            {[ 
                              {
                                icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
                                bgColor: "bg-blue-100",
                                title: "Share Your Story",
                                description:
                                  "Document your journey—the challenges, breakthroughs, and lessons learned. Your experience could be exactly what a struggling cadet needs to hear to keep going.",
                                action: "Submit Your Story",
                              },
                              {
                                icon: <Users className="h-5 w-5 text-green-600" />,
                                bgColor: "bg-green-100",
                                title: "Mentor New Cadets",
                                description:
                                  "As you advance, consider mentoring cadets who are just starting out. The perspective of someone just a few steps ahead is invaluable and builds your leadership skills.",
                                action: "Join Mentor Program",
                              },
                              {
                                icon: <Lightbulb className="h-5 w-5 text-amber-600" />,
                                bgColor: "bg-amber-100",
                                title: "Contribute Resources",
                                description:
                                  "Develop study guides, checklists, or other tools that helped you succeed. Your creative solutions could become standard resources for future classes.",
                                action: "Submit Resources",
                              },
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                                className="rounded-lg border bg-background p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
                              >
                                <div className={cn("mb-3 flex h-10 w-10 items-center justify-center rounded-full", item.bgColor)}>
                                  {item.icon}
                                </div>
                                <h4 className="font-semibold text-base">{item.title}</h4>
                                <p className="mt-2 text-sm text-muted-foreground flex-grow pb-4">{item.description}</p>
                                <div className="mt-auto">
                                  <Button variant="outline" size="sm" className="w-full">
                                    {item.action}
                                  </Button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                     </section>
                 )}

            </motion.div>
        </AnimatePresence>

         {/* --- Sections visible regardless of tab (or move inside specific tabs if desired) --- */} 
         {/* Keep CTA and Related Resources outside the conditional rendering if they should always show */}
         {/* Or, duplicate/move them into each relevant tab's content block */}

         {/* CTA Section */} 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16 rounded-xl bg-gradient-to-r from-aa-blue to-aa-navy p-8 text-white shadow-xl"
          >
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold">Your Journey Continues</h2>
                <p className="mt-2 opacity-90">
                  This handbook is just the beginning. As you progress through your training and career, you&apos;ll develop
                  your own wisdom, techniques, and insights. Remember to pass them on to those who follow in your
                  footsteps.
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-aa-navy transition-colors duration-200">
                  Share Your Feedback
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Related Resources */} 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16"
          >
             <h2 className="mb-6 font-display text-2xl font-bold">Related Resources</h2>
             <div className="grid gap-6 md:grid-cols-3">
               {[ 
                 {
                   title: "Cadet Community Forum",
                   description: "Connect with fellow cadets and alumni",
                   content:
                     "Join discussions, ask questions, and share your experiences with the broader AACA community. A great place to find study partners and mentors.",
                   action: "Visit Forum",
                 },
                 {
                   title: "Resource Library",
                   description: "Cadet-created study materials and guides",
                   content:
                     "Access a growing collection of study guides, checklists, and other resources created by cadets for cadets. Find the tools that match your learning style.",
                   action: "Browse Library",
                 },
                 {
                   title: "Alumni Network",
                   description: "Connect with AACA graduates now flying professionally",
                   content:
                     "Build relationships with AACA alumni who have successfully transitioned to professional flying careers. Get advice on your next steps after graduation.",
                   action: "Connect with Alumni",
                 },
               ].map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
                   className="h-full"
                 >
                   <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col border">
                     <CardHeader>
                       <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
                       <CardDescription className="text-sm">{item.description}</CardDescription>
                     </CardHeader>
                     <CardContent className="flex-grow pt-0">
                       <p className="text-sm text-muted-foreground">{item.content}</p>
                     </CardContent>
                     <CardFooter className="mt-auto pt-4">
                       <Button variant="outline" size="sm" className="w-full">
                         {item.action}
                       </Button>
                     </CardFooter>
                   </Card>
                 </motion.div>
               ))}
             </div>
          </motion.div>

      </div> {/* End container */} 

       {/* Back to Top Button */} 
       <AnimatePresence>
         {showBackToTop && (
           <motion.button
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: 10 }}
             className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-aa-blue text-white shadow-lg hover:bg-aa-navy transition-colors duration-200"
             onClick={scrollToTop}
             aria-label="Scroll to top"
           >
             <ArrowUp className="h-5 w-5" />
           </motion.button>
         )}
       </AnimatePresence>
    </div>
  );
}

// Helper function to get tip descriptions (replace with actual data source if needed)
function getTipDescription(id: number): string {
  const descriptions: { [key: number]: string } = {
    1: "Every minute in the airplane is expensive, both in time and money. If you're using flight time to learn what you could've studied, chair-flown, or memorized beforehand, you're behind. Know the maneuvers. Know the flows. Know the ACS tolerances.",
    2: "Yes, a strong CFI helps. But the students who go the furthest are the ones who take ownership—regardless of who's sitting in the right seat. A great student shows up prepared, asks good questions, and drives their own progress.",
    3: "This industry rewards excellence, discipline, and consistency. There's no participation trophy in aviation. You're either the pilot who people trust—or you're not. Wanting to be the best doesn't mean being arrogant.",
    4: "Gouge (informal insights from other students about what a specific DPE asks) can help you know what to expect—but it can also backfire. Every checkride is different. Examiners can change their flow, or ask questions outside the gouge entirely.",
    5: "Some cadets solo in 15 hours. Some take 30. Neither one matters. The only flight you need to worry about is your next one. Comparing timelines will just steal your confidence. Your path is your path—and no one else's.",
    6: "Aviation is a small world. If you show up late, unprepared, or with a bad attitude, people will remember. But if you carry yourself like a pro—organized, respectful, consistent—that will follow you, too.",
    7: "Every student hits a wall. Sometimes it's steep turns. Sometimes it's radios. Sometimes it's confidence. What matters is that you don't let that moment define you. Take a breather. Chair fly. Talk to your instructor.",
    8: "Chair flying is non-negotiable. Whether it's in your room, in a parked plane, or with a cockpit poster—rehearse every flow, every maneuver, every checklist before you ever take off.",
    9: "This program is intense. You're juggling checkrides, writtens, money, and sleep—all while learning to fly an airplane. Build your own toolkit: workouts, journaling, breaks, support calls, breathing.",
    10: "Most of your training is dual—so you may not feel like you're in charge. But every flight is an opportunity to think and act like the PIC. Start making decisions. Start briefing the weather.",
    11: "Checkride nerves are natural. But nothing kills anxiety faster than knowing, deep down, that you're prepared. You've done the work. You've trained to standard. You've reviewed every ACS Task.",
    12: "This one's gospel. Sloppy habits in training become liabilities in real flying. Treat every flight like the real thing: sterile cockpit, checklists, positive exchanges of controls, professional radio calls."
  };
  return descriptions[id] || "No description available.";
} 