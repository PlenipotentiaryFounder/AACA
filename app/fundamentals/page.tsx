"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Plane, CloudSun, Radio, Map, Gauge, Navigation, Shield, Waypoints, BarChart3, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Custom hook for intersection observer
function useInView(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, options])

  return isInView
}

// Topic card component with animation
const TopicCard = ({ title, description, icon: Icon, href, difficulty = "beginner", index = 0 }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const { theme } = useTheme()

  const difficultyColor = {
    beginner: "bg-green-500/10 text-green-500 border-green-500/20",
    intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    advanced: "bg-red-500/10 text-red-500 border-red-500/20",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={href} className="h-full">
        <Card className="group h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 dark:bg-card/30">
          <CardContent className="flex h-full flex-col p-6">
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`rounded-full p-2 ${theme === "dark" ? "bg-secondary/50" : "bg-secondary/10"} text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground`}
              >
                <Icon size={24} />
              </div>
              <Badge
                variant="outline"
                className={`${difficultyColor[difficulty]} px-2 py-0.5 text-xs font-medium capitalize`}
              >
                {difficulty}
              </Badge>
            </div>

            <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mb-4 flex-grow text-sm text-muted-foreground">{description}</p>

            <div className="mt-auto flex items-center text-sm font-medium text-primary">
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

// Main component
export default function FundamentalsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const fundamentalTopics = [
    {
      title: "Aerodynamics",
      description: "Understand the forces that make flight possible and how aircraft interact with the air.",
      icon: Plane,
      href: "/fundamentals/aerodynamics",
      difficulty: "beginner",
    },
    {
      title: "Weather",
      description: "Learn about meteorology, weather patterns, and how they affect flight planning and operations.",
      icon: CloudSun,
      href: "/fundamentals/weather",
      difficulty: "intermediate",
    },
    {
      title: "Radio Communications",
      description: "Master the language and protocols of aviation radio to communicate effectively with ATC.",
      icon: Radio,
      href: "/fundamentals/radio-communications",
      difficulty: "intermediate",
    },
    {
      title: "Sectional Charts",
      description: "Decode aviation maps and understand airspace, terrain, and navigation information.",
      icon: Map,
      href: "/fundamentals/sectional-charts",
      difficulty: "intermediate",
    },
    {
      title: "Flight Instruments",
      description: "Learn about the six primary flight instruments and how to interpret their readings.",
      icon: Gauge,
      href: "/fundamentals/flight-instruments",
      difficulty: "beginner",
    },
    {
      title: "Navigation",
      description: "Explore VOR, GPS, and other navigation systems used in modern aviation.",
      icon: Navigation,
      href: "/fundamentals/navigation",
      difficulty: "intermediate",
    },
    {
      title: "Risk Management",
      description: "Develop decision-making skills and learn to assess and mitigate risks in flight operations.",
      icon: Shield,
      href: "/fundamentals/risk-management",
      difficulty: "advanced",
    },
    {
      title: "Traffic Patterns",
      description: "Understand airport traffic patterns, procedures, and proper circuit techniques.",
      icon: Waypoints,
      href: "/fundamentals/traffic-patterns",
      difficulty: "beginner",
    },
    {
      title: "Airspace",
      description: "Learn about the different classes of airspace and their requirements and restrictions.",
      icon: BarChart3,
      href: "/fundamentals/airspace",
      difficulty: "intermediate",
    },
    {
      title: "Cross-Country Planning",
      description: "Master the art of planning longer flights with multiple waypoints and considerations.",
      icon: Compass,
      href: "/fundamentals/cross-country-planning",
      difficulty: "advanced",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white shadow-xl"
      >
        <div className="absolute inset-0 bg-[url('/images/arizona-desert-sunset.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">Flight Fundamentals</h1>
          <p className="mb-6 max-w-2xl text-lg text-blue-100">
            Master the essential concepts and principles that form the foundation of aviation. These fundamental topics
            are crucial for every pilot to understand.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
              Start Learning Path
            </Button>
            <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              View Progress
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-500/30 backdrop-blur-xl"></div>
        <div className="absolute -top-10 left-1/2 h-20 w-20 rounded-full bg-indigo-500/20 backdrop-blur-xl"></div>
      </motion.div>

      {/* View Options */}
      <div className="mb-10 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
        <Tabs defaultValue="grid" className="w-full">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Browse Topics</h2>
              <p className="text-sm text-muted-foreground">Explore all fundamental aviation concepts</p>
            </div>
            <TabsList className="grid w-full max-w-xs grid-cols-2 rounded-lg bg-muted/50 p-1 backdrop-blur-sm">
              <TabsTrigger
                value="grid"
                className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Grid
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
                List
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {fundamentalTopics.map((topic, index) => (
                <TopicCard key={topic.title} {...topic} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="space-y-4">
              {fundamentalTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={topic.href}>
                    <Card className="group overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 dark:bg-card/30">
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`rounded-full p-2 bg-secondary/20 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground`}
                          >
                            <topic.icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-medium">{topic.title}</h3>
                            <p className="text-sm text-muted-foreground">{topic.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className={`${
                              topic.difficulty === "beginner"
                                ? "bg-green-500/10 text-green-500 border-green-500/20"
                                : topic.difficulty === "intermediate"
                                  ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                  : "bg-red-500/10 text-red-500 border-red-500/20"
                            } px-2 py-0.5 text-xs font-medium capitalize`}
                          >
                            {topic.difficulty}
                          </Badge>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Learning Path Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16 rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Recommended Learning Path</h2>
          <p className="text-sm text-muted-foreground">Follow this sequence for optimal learning progression</p>
        </div>

        <div className="relative ml-4 border-l border-border pl-6 pt-2">
          {fundamentalTopics.slice(0, 5).map((topic, index) => (
            <div key={topic.title} className="mb-8 relative">
              <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>
              <Link href={topic.href}>
                <h3 className="mb-1 text-lg font-medium hover:text-primary">{topic.title}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </div>
          ))}
          <div className="absolute -left-3 bottom-0 top-0 flex w-6 justify-center">
            <div className="h-full w-[1px] bg-gradient-to-b from-border via-border to-transparent"></div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Button variant="outline" className="border-dashed">
            View Complete Path
          </Button>
        </div>
      </motion.div>

      {/* Progress Tracker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-xl border border-border/50 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 p-6 backdrop-blur-sm"
      >
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Your Progress</h2>
            <p className="text-sm text-muted-foreground">Track your learning journey through fundamentals</p>
          </div>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 21h5v-5" />
            </svg>
            Sync Progress
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="text-3xl font-bold text-primary">30%</div>
              <p className="text-sm text-muted-foreground">Overall Completion</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="text-3xl font-bold">3/10</div>
              <p className="text-sm text-muted-foreground">Topics Completed</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="text-3xl font-bold text-green-500">85%</div>
              <p className="text-sm text-muted-foreground">Quiz Success Rate</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="text-3xl font-bold">4.5h</div>
              <p className="text-sm text-muted-foreground">Study Time</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

