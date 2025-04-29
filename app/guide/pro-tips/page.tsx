"use client"

import { useEffect, useRef, useState } from "react"
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
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const categories = [
  { id: "all", name: "All Tips" },
  { id: "training", name: "Training", icon: <Plane className="h-4 w-4" /> },
  { id: "mindset", name: "Mindset", icon: <Brain className="h-4 w-4" /> },
  { id: "preparation", name: "Preparation", icon: <BookMarked className="h-4 w-4" /> },
  { id: "resources", name: "Resources", icon: <Bookmark className="h-4 w-4" /> },
]

const tips = [
  {
    id: 1,
    title: "Don't learn in the plane what you could've learned on the ground",
    category: "preparation",
    icon: <Plane />,
    color: "blue",
  },
  {
    id: 2,
    title: "Being a great student matters more than having a great instructor",
    category: "mindset",
    icon: <Users />,
    color: "blue",
  },
  {
    id: 3,
    title: "If you don't want to be the best, you'll end up being the worst",
    category: "mindset",
    icon: <Star />,
    color: "blue",
  },
  {
    id: 4,
    title: "Gouge is great—until it isn't",
    category: "preparation",
    icon: <FileText />,
    color: "blue",
  },
  {
    id: 5,
    title: "The sooner you stop comparing yourself to others, the faster you'll grow",
    category: "mindset",
    icon: <Compass />,
    color: "blue",
  },
  {
    id: 6,
    title: "Your name is your reputation—protect it",
    category: "mindset",
    icon: <Shield />,
    color: "blue",
  },
  {
    id: 7,
    title: "Training plateaus are not failure—they're growth in disguise",
    category: "training",
    icon: <Brain />,
    color: "green",
  },
  {
    id: 8,
    title: "Fly the lesson before you fly the airplane",
    category: "training",
    icon: <Plane />,
    color: "green",
  },
  {
    id: 9,
    title: "If you're not actively managing your stress, it's managing you",
    category: "mindset",
    icon: <Heart />,
    color: "amber",
  },
  {
    id: 10,
    title: "You won't build PIC confidence if you're never in command",
    category: "training",
    icon: <Shield />,
    color: "amber",
  },
  {
    id: 11,
    title: "You can't fake preparation",
    category: "preparation",
    icon: <AlertTriangle />,
    color: "amber",
  },
  {
    id: 12,
    title: "Train like you fly, fly like you train",
    category: "training",
    icon: <Zap />,
    color: "blue",
  },
]

const cadetStories = [
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
]

export default function ProTipsPage() {
  const [activeSection, setActiveSection] = useState("intro")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const sectionRefs = {
    intro: useRef(null),
    wisdom: useRef(null),
    stories: useRef(null),
    toolkit: useRef(null),
    contribute: useRef(null),
  }

  // Filter tips based on search and category
  const filteredTips = tips.filter((tip) => {
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || tip.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      if (window.scrollY > 500) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section
  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" })
  }

  // Simulate loading state
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Auto-advance stories carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % cadetStories.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-aa-blue" />
            <h2 className="font-medium text-lg">Pro Tips & Lessons</h2>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {Object.entries(sectionRefs).map(([key, _]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={cn(
                  "text-sm transition-colors hover:text-aa-blue",
                  activeSection === key ? "text-aa-blue font-medium" : "text-muted-foreground",
                )}
              >
                {key === "intro"
                  ? "Introduction"
                  : key === "wisdom"
                    ? "Words of Wisdom"
                    : key === "stories"
                      ? "Cadet Stories"
                      : key === "toolkit"
                        ? "Cadet's Toolkit"
                        : "Contribute"}
              </button>
            ))}
          </div>
          <div className="flex md:hidden">
            <Button variant="ghost" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Hero Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-aa-navy to-aa-blue p-8 text-white"
          ref={sectionRefs.intro}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="absolute right-0 top-0 h-full w-1/3"
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/pilot-briefing-student.jpg"
                alt="Cadet passing knowledge illustration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 border-white text-white">
                AACA CADET WISDOM
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            >
              Pro Tips & Lessons from Past Cadets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-lg opacity-90"
            >
              Hard-earned insights from those who walked this path before you. The kind of wisdom that only comes from
              experience—now passed directly to you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 flex gap-4"
            >
              <Button size="lg" className="bg-white text-aa-blue hover:bg-white/90">
                Start Reading
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Watch Intro Video
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Chapter Introduction with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-aa-navy">Chapter 10 – The Final Hand-Off</h2>
              <p className="mt-2 text-muted-foreground">What this handbook is really about</p>
            </div>
            <Badge className="w-fit bg-aa-blue text-white">Essential Reading</Badge>
          </div>

          <div className="mt-6">
            <p className="mb-4">
              From day one, the purpose of this handbook has been simple: to pass the torch—to give you the clearest
              possible guide through one of the most exciting, challenging, and life-changing journeys you&apos;ll ever
              take. It&apos;s more than just checkride prep or study tips. It&apos;s a blueprint for how to think, act,
              and grow as a professional pilot.
            </p>
            <p className="mb-4">
              This chapter is about perspective—the kind that only comes from doing the work, walking the path, and
              looking back with clarity.
            </p>
            <p className="mb-4">
              Every lesson here was shaped by experience: Late nights before stage checks. Chair-flying with flashlights
              in dorm rooms. Big wins. Tough flights. Moments of doubt. Breakthroughs that only came after things got
              hard. These are the kinds of insights that only cadets can give—because they&apos;ve lived it.
            </p>
            <p className="mb-4">And now, they want to help you do it better.</p>

            <div className="mt-6 rounded-lg bg-muted p-4">
              <h3 className="font-display text-lg font-medium">
                This chapter isn&apos;t a pat on the back or a motivational speech.
              </h3>
              <p className="mt-2">
                It&apos;s real advice, from real cadets, meant to guide you through the highs and lows of this program
                with strength, strategy, and professionalism.
              </p>
              <p className="mt-2">
                So as you get closer to the end of your own journey, use this final chapter as your compass—pointed by
                those who stood where you stand, faced the same pressures, and kept going.
              </p>
              <p className="mt-4 font-medium">They made it. You will too.</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Words of Wisdom Section */}
          <section ref={sectionRefs.wisdom}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aa-blue text-white">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <h2 className="font-display text-2xl font-bold text-aa-navy">
                  10.1 – Words of Wisdom from Past Cadets
                </h2>
              </div>
              <p className="mt-2 text-muted-foreground pl-11">
                Hard-earned truths that will save you time, energy, and sanity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-lg border bg-card p-6 shadow-sm mb-8 hover:shadow-md transition-all duration-300"
            >
              <p className="text-center text-lg">
                Every piece of advice here was born out of experience.
                <br />
                Some were learned the hard way.
                <br />
                Some were passed down by pilots who&apos;d seen it all.
                <br />
                <span className="font-medium">Now they&apos;re yours—use them wisely.</span>
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="mb-8 rounded-lg border bg-card p-4 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search for wisdom..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      className={cn("flex items-center gap-1.5", selectedCategory === category.id && "bg-aa-blue")}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.icon && <span>{category.icon}</span>}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips Grid with Animation */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredTips.map((tip, index) => (
                  <motion.div
                    key={tip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={cn(
                          "h-2",
                          tip.color === "blue" ? "bg-aa-blue" : tip.color === "green" ? "bg-green-500" : "bg-amber-500",
                        )}
                      />
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-full",
                              tip.color === "blue"
                                ? "bg-blue-100 text-aa-blue"
                                : tip.color === "green"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-amber-100 text-amber-700",
                            )}
                          >
                            {tip.icon}
                          </div>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {tip.id === 1 &&
                            "Every minute in the airplane is expensive, both in time and money. If you're using flight time to learn what you could've studied, chair-flown, or memorized beforehand, you're behind. Know the maneuvers. Know the flows. Know the ACS tolerances."}
                          {tip.id === 2 &&
                            "Yes, a strong CFI helps. But the students who go the furthest are the ones who take ownership—regardless of who's sitting in the right seat. A great student shows up prepared, asks good questions, and drives their own progress."}
                          {tip.id === 3 &&
                            "This industry rewards excellence, discipline, and consistency. There's no participation trophy in aviation. You're either the pilot who people trust—or you're not. Wanting to be the best doesn't mean being arrogant."}
                          {tip.id === 4 &&
                            "Gouge (informal insights from other students about what a specific DPE asks) can help you know what to expect—but it can also backfire. Every checkride is different. Examiners can change their flow, or ask questions outside the gouge entirely."}
                          {tip.id === 5 &&
                            "Some cadets solo in 15 hours. Some take 30. Neither one matters. The only flight you need to worry about is your next one. Comparing timelines will just steal your confidence. Your path is your path—and no one else's."}
                          {tip.id === 6 &&
                            "Aviation is a small world. If you show up late, unprepared, or with a bad attitude, people will remember. But if you carry yourself like a pro—organized, respectful, consistent—that will follow you, too."}
                          {tip.id === 7 &&
                            "Every student hits a wall. Sometimes it's steep turns. Sometimes it's radios. Sometimes it's confidence. What matters is that you don't let that moment define you. Take a breather. Chair fly. Talk to your instructor."}
                          {tip.id === 8 &&
                            "Chair flying is non-negotiable. Whether it's in your room, in a parked plane, or with a cockpit poster—rehearse every flow, every maneuver, every checklist before you ever take off."}
                          {tip.id === 9 &&
                            "This program is intense. You're juggling checkrides, writtens, money, and sleep—all while learning to fly an airplane. Build your own toolkit: workouts, journaling, breaks, support calls, breathing."}
                          {tip.id === 10 &&
                            "Most of your training is dual—so you may not feel like you're in charge. But every flight is an opportunity to think and act like the PIC. Start making decisions. Start briefing the weather."}
                          {tip.id === 11 &&
                            "Checkride nerves are natural. But nothing kills anxiety faster than knowing, deep down, that you're prepared. You've done the work. You've trained to standard. You've reviewed every ACS Task."}
                          {tip.id === 12 &&
                            "This one's gospel. Sloppy habits in training become liabilities in real flying. Treat every flight like the real thing: sterile cockpit, checklists, positive exchanges of controls, professional radio calls."}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full">
                          <Bookmark className="mr-2 h-4 w-4" />
                          Save this tip
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredTips.length === 0 && (
              <div className="mt-8 rounded-lg border bg-muted p-8 text-center">
                <Search className="mx-auto h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No tips found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 rounded-xl bg-gradient-to-br from-green-600 to-green-800 p-8 text-white"
            >
              <p className="text-center text-xl">
                These lessons aren&apos;t just about passing checkrides.
                <br />
                They&apos;re about becoming the kind of pilot who thrives in any cockpit, on any crew, under any
                pressure.
              </p>
              <p className="mt-4 text-center text-2xl font-medium">
                You&apos;ve got this. The blueprint&apos;s right here.
              </p>
            </motion.div>
          </section>

          {/* Cadet Stories Section */}
          <section ref={sectionRefs.stories}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aa-blue text-white">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <h2 className="font-display text-2xl font-bold text-aa-navy">
                  10.2 – Cadet Stories: Lessons from the Flight Line
                </h2>
              </div>
              <p className="mt-2 text-muted-foreground pl-11">Real experiences that shaped real pilots</p>
            </motion.div>

            {/* Testimonial Carousel */}
            <div className="relative mb-8 overflow-hidden rounded-xl border bg-card shadow-sm">
              <div className="absolute right-4 top-4 z-10 flex gap-2">
                {cadetStories.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 w-8 rounded-full transition-all",
                      currentStoryIndex === index ? "bg-aa-blue" : "bg-muted",
                    )}
                    onClick={() => setCurrentStoryIndex(index)}
                  />
                ))}
              </div>
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStoryIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row gap-8"
                  >
                    <div className="flex flex-col items-center text-center md:w-1/3">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage
                          src={cadetStories[currentStoryIndex].avatar}
                          alt={cadetStories[currentStoryIndex].name}
                        />
                        <AvatarFallback>{cadetStories[currentStoryIndex].name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold">{cadetStories[currentStoryIndex].name}</h3>
                      <p className="text-sm text-muted-foreground">{cadetStories[currentStoryIndex].path}</p>
                      <div className="mt-4 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      {cadetStories[currentStoryIndex].story.map((paragraph, i) => (
                        <p
                          key={i}
                          className={cn(
                            "mb-4",
                            cadetStories[currentStoryIndex].story.length - 1 === i && "font-medium",
                          )}
                        >
                          {i === 0 && <Quote className="float-left mr-2 h-8 w-8 text-aa-blue opacity-50" />}
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex justify-between p-4 border-t bg-muted/50">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentStoryIndex((prev) => (prev - 1 + cadetStories.length) % cadetStories.length)}
                >
                  Previous Story
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentStoryIndex((prev) => (prev + 1) % cadetStories.length)}
                >
                  Next Story
                </Button>
              </div>
            </div>

            {/* Story Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {cadetStories.slice(0, 2).map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={story.avatar} alt={story.name} />
                          <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{story.name}</CardTitle>
                          <CardDescription>{story.path}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {story.story.map((paragraph, i) => (
                        <p key={i} className={cn("mb-4", i === story.story.length - 1 && "font-medium")}>
                          {paragraph}
                        </p>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full">
                        <Coffee className="mr-2 h-4 w-4" />
                        Connect with {story.name.split(" ")[0]}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cadet's Toolkit Section */}
          <section ref={sectionRefs.toolkit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aa-blue text-white">
                  <BookOpen className="h-4 w-4" />
                </div>
                <h2 className="font-display text-2xl font-bold text-aa-navy">
                  10.3 – The Cadet&apos;s Toolkit: Resources That Made the Difference
                </h2>
              </div>
              <p className="mt-2 text-muted-foreground pl-11">Tried and tested tools that helped cadets succeed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-lg border bg-card p-6 shadow-sm mb-8 hover:shadow-md transition-all duration-300"
            >
              <p className="text-center text-lg">
                Beyond the required materials, these are the resources that cadets consistently mention as game-changers
                in their training journey.
              </p>
            </motion.div>

            <Tabs defaultValue="study" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="study" className="flex items-center gap-2">
                  <BookMarked className="h-4 w-4" />
                  <span>Study Materials</span>
                </TabsTrigger>
                <TabsTrigger value="techniques" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>Learning Techniques</span>
                </TabsTrigger>
                <TabsTrigger value="time" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Time Management</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="study" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {[
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
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="rounded-lg border bg-card p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-aa-blue">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline">View All Study Resources</Button>
                </div>
              </TabsContent>

              <TabsContent value="techniques" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {[
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
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="rounded-lg border bg-card p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <Lightbulb className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="mt-1 text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="time" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {[
                    {
                      title: 'The "Power Hour" Technique',
                      description:
                        "Successful cadets report setting aside one focused hour each day—no matter how busy their schedule—for aviation study. This daily consistency proved more effective than marathon weekend study sessions.",
                    },
                    {
                      title: 'The "Next Flight Prep" Ritual',
                      description:
                        "Top cadets develop a consistent pre-flight preparation ritual that includes reviewing lesson objectives, chair flying each maneuver, preparing questions, and completing flight planning before arriving at the airport.",
                    },
                    {
                      title: 'The "Micro-Learning" Approach',
                      description:
                        "Rather than trying to find large blocks of study time, successful cadets leverage small pockets throughout the day: creating digital flashcards, listening to aviation podcasts during commutes, practicing radio calls while driving, and reviewing checklists before bed.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="rounded-lg border bg-card p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="mt-1 text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Passing the Torch Section */}
          <section ref={sectionRefs.contribute}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aa-blue text-white">
                  <Users className="h-4 w-4" />
                </div>
                <h2 className="font-display text-2xl font-bold text-aa-navy">
                  10.4 – Passing the Torch: Your Turn to Contribute
                </h2>
              </div>
              <p className="mt-2 text-muted-foreground pl-11">How to give back to the next generation of cadets</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-lg">
                As you progress through your training, you'll accumulate valuable insights and experiences. Consider how
                you might contribute to this living knowledge base for future cadets:
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: <MessageSquare className="h-5 w-5" />,
                    title: "Share Your Story",
                    description:
                      "Document your journey—the challenges, breakthroughs, and lessons learned. Your experience could be exactly what a struggling cadet needs to hear to keep going.",
                    action: "Submit Your Story",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Mentor New Cadets",
                    description:
                      "As you advance, consider mentoring cadets who are just starting out. The perspective of someone just a few steps ahead is invaluable and builds your leadership skills.",
                    action: "Join Mentor Program",
                  },
                  {
                    icon: <Lightbulb className="h-5 w-5" />,
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
                    className="rounded-lg bg-muted p-5 hover:bg-muted/80 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-aa-blue text-white">
                      {item.icon}
                    </div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        {item.action}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 rounded-lg bg-aa-blue/10 p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-aa-navy">The Cadet Legacy Project</h3>
                  <p className="mt-2 max-w-2xl">
                    Every great pilot stands on the shoulders of those who came before them. By sharing your
                    experiences, you become part of a living tradition that strengthens the entire aviation community.
                  </p>
                  <div className="mt-4">
                    <Button className="bg-aa-blue hover:bg-aa-navy">Learn More About Contributing</Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 rounded-xl bg-gradient-to-r from-aa-blue to-aa-navy p-8 text-white"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold">Your Journey Continues</h2>
              <p className="mt-2 opacity-90">
                This handbook is just the beginning. As you progress through your training and career, you'll develop
                your own wisdom, techniques, and insights. Remember to pass them on to those who follow in your
                footsteps.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-aa-navy">
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
              >
                <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      {item.action}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-aa-blue text-white shadow-lg hover:bg-aa-navy"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

