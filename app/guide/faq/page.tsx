"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Search,
  CheckSquare,
  HelpCircle,
  Briefcase,
  PlaneTakeoff,
  AlertTriangle,
  Heart,
  Lightbulb,
  ArrowUp,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// FAQ Categories
const categories = [
  { id: "all", name: "All Questions", icon: <HelpCircle className="h-4 w-4" /> },
  { id: "training", name: "Training", icon: <PlaneTakeoff className="h-4 w-4" /> },
  { id: "checkrides", name: "Checkrides", icon: <CheckSquare className="h-4 w-4" /> },
  { id: "lifestyle", name: "Lifestyle", icon: <Heart className="h-4 w-4" /> },
  { id: "equipment", name: "Equipment", icon: <Briefcase className="h-4 w-4" /> },
  { id: "medical", name: "Medical", icon: <AlertTriangle className="h-4 w-4" /> },
]

// FAQ Data
const faqs = [
  {
    id: "written-endorsement",
    question: "How do I get my written test endorsement?",
    answer:
      "You'll receive your written test endorsement once you've completed the required ground school for that rating or certificate. This usually comes from your online provider (like King Schools or Sporty's) or directly from your CFI after reviewing your knowledge and confirming you're ready.\n\nPro tip: Don't wait to ask. Be proactive—once you're scoring well on practice tests, bring it up with your instructor and get it scheduled.",
    category: "training",
    popular: true,
  },
  {
    id: "checkride-length",
    question: "How long do checkrides usually take?",
    answer:
      "Checkrides are split into two parts:\n• Oral exam: 1–3 hours\n• Flight portion: 1–2 hours\n\nThe DPE may take breaks in between or even split them into different days depending on weather or time. Either way, plan for the full day and show up well-rested, early, and ready to go.",
    category: "checkrides",
    popular: true,
  },
  {
    id: "checkride-fail",
    question: "What happens if I fail my checkride?",
    answer:
      "First—don't panic. It's not the end of your career.\n\nIf you don't meet the standard on one or more areas, the examiner will issue a Notice of Disapproval. You'll only need to retake the items you missed.\n\nFailing a checkride will follow you, but what matters more is how you respond. Fix the issue, document what you learned, and come back stronger. Airlines aren't looking for perfect—they're looking for resilient, self-aware pilots who learn and adapt.",
    category: "checkrides",
    popular: true,
  },
  {
    id: "working-training",
    question: "Can I work while in flight training?",
    answer:
      "Technically, yes. Realistically, it's tough.\n\nFlight training is a full-time grind, and anything that pulls your time or energy away can delay your progress. Even a part-time job can stack up against simulator sessions, night flights, and ground study.\n\nIf you do work, set a strict schedule, and make sure flying comes first. Every delay costs you time, money, and momentum.",
    category: "lifestyle",
    popular: false,
  },
  {
    id: "hours-per-week",
    question: "How many hours a week will I be flying?",
    answer:
      "It varies by stage and weather, but expect 3–6 flight events per week on average. Early on, it may be slower as you get scheduled, but it ramps up quickly.\n\nPro tip: Use downtime to backseat other flights, study ahead, or knock out written exams—don't wait for the pace to pick up on its own.",
    category: "training",
    popular: true,
  },
  {
    id: "bring-to-lesson",
    question: "What should I bring to each flight lesson?",
    answer:
      'Show up like a pro. At a minimum, bring:\n• Your logbook\n• A charged iPad with ForeFlight (updated)\n• Your endorsements and certificates\n• A headset, fuel tester, and kneeboard\n• Current charts and checklists\n• A pen. Seriously. Bring a pen.\n\nBonus: Keep a "go bag" ready with snacks, water, and weather-appropriate gear.',
    category: "equipment",
    popular: true,
  },
  {
    id: "memorize-regs",
    question: "Do I need to memorize all the regs?",
    answer:
      "No—but you need to know how to find and understand them. You're not expected to be a walking FAR/AIM index, but you are expected to apply the rules and reference them on the fly.\n\nLearn the big ones (91.205, 91.213, fuel minimums, airspace rules, etc.), and build the habit of looking things up fast. That's what real-world pilots do.",
    category: "training",
    popular: false,
  },
  {
    id: "dress-code",
    question: "What's the dress code for cadets?",
    answer:
      "You're not required to wear a uniform, but dress like a future airline pilot. Think clean, neat, and professional.\n\nAvoid: flip-flops, athletic shorts, tank tops.\nGo for: polos or flight school T-shirts, jeans or slacks, closed-toe shoes.\n\nFirst impressions matter—especially when instructors and examiners are evaluating your professionalism.",
    category: "lifestyle",
    popular: false,
  },
  {
    id: "program-completion",
    question: "How fast can I finish the program?",
    answer:
      "It depends on your dedication, weather, and schedule availability. Some cadets finish in 12 months; others take longer due to failed checkrides, slow scheduling, or external life stuff.\n\nTrain smart, stay ahead on written tests, fly often, and don't let preventable issues slow you down.\n\nRemember: fast is good—but ready is better.",
    category: "training",
    popular: true,
  },
  {
    id: "checkride-study",
    question: "How should I study for my checkride oral?",
    answer:
      'Start early and break it into chunks—don\'t cram the week before.\n• Use the ACS as your checklist\n• Create or join a study group\n• Practice "teaching" the material out loud—if you can explain it, you know it\n• Simulate a mock oral with your instructor\n\nFlashcards are great—but real understanding comes from conversation and repetition. Treat it like prepping for a job interview.',
    category: "checkrides",
    popular: true,
  },
  {
    id: "switch-instructors",
    question: "Can I switch instructors if things aren't clicking?",
    answer:
      "Yes—and you should if it's affecting your progress.\n\nSome personalities just don't mesh, and that's okay. Be respectful, bring it up professionally with the chief or assistant chief instructor, and focus on getting the most out of your training.\n\nAt the end of the day, you're paying for this—make sure you're getting value.",
    category: "training",
    popular: false,
  },
  {
    id: "weather-cancellation",
    question: "What happens if my flight gets canceled due to weather?",
    answer:
      "Welcome to aviation. It's going to happen—a lot.\n\nUse that time productively:\n• Fly a sim\n• Study regs or weather systems\n• Review flight maneuvers\n• Backseat someone else's sim or ground\n\nCadets who stay proactive keep their momentum. Cadets who treat it like a free day fall behind fast.",
    category: "training",
    popular: false,
  },
  {
    id: "training-plateaus",
    question: "How do I deal with training plateaus?",
    answer:
      "Everyone hits them. It's normal.\n\nThe key is to stay patient, stay humble, and keep flying. Review old flights, ask your CFI for targeted drills, and study the mental side of performance.\n\nSometimes all it takes is one good flight to break through—but only if you keep showing up.",
    category: "training",
    popular: false,
  },
  {
    id: "impostor-syndrome",
    question: "What if I feel like I don't belong here?",
    answer:
      "That feeling is called impostor syndrome, and nearly every pilot has felt it.\n\nAviation is hard—and because the standards are high, it's easy to doubt yourself.\n\nBut here's the truth: if you're here, you do belong. Stay focused, ask for help when needed, and remember—you're not alone.",
    category: "lifestyle",
    popular: true,
  },
  {
    id: "save-money",
    question: "What's the best way to save money during training?",
    answer:
      "Avoid wasted flights. That's it.\n• Be prepared for every lesson\n• Fly consistently—gaps cost more in the long run\n• Finish your written exams early so you're not paying to relearn material\n• Show up ready, rested, and with a plan\n\nOne solid flight is worth three disorganized ones. That's how pros train smart.",
    category: "lifestyle",
    popular: true,
  },
  {
    id: "ipad-requirement",
    question: "Do I need to own an iPad?",
    answer:
      "Yes—seriously, it's not optional.\n\nModern flight training revolves around ForeFlight or Garmin Pilot, and flight schools expect you to bring your own EFB (electronic flight bag).\n• Go with an iPad Mini or iPad Air\n• Get a cellular-capable model (for built-in GPS)\n• Keep it updated, charged, and backed up\n\nFlying without one is like showing up without a headset.",
    category: "equipment",
    popular: true,
  },
  {
    id: "faa-medicals",
    question: "What's the deal with FAA medicals?",
    answer:
      "You'll need at least a Third Class Medical for Private Pilot, and most cadets get a First Class early on to check for disqualifying issues.\n• Get it done before investing heavily in training\n• Use an FAA-approved AME (Aviation Medical Examiner)\n• Be honest about past conditions—it's better to resolve it now than get stuck later\n\nPro tip: If you're unsure about anything, ask your flight school or instructor before your appointment.",
    category: "medical",
    popular: true,
  },
  {
    id: "cadet-housing",
    question: "Where do most cadets live?",
    answer:
      "It depends on your location, but most schools have housing partnerships or cadet communities nearby.\n• Ask current students what the commute, rent, and vibe is like\n• Try to live close enough to be flexible with scheduling (weather changes everything)\n• Split rent if you can—training is expensive enough\n\nProximity = more chances to fly. Long drives = missed opportunities.",
    category: "lifestyle",
    popular: false,
  },
  {
    id: "social-life",
    question: "Is there time for a social life?",
    answer:
      "Yes—but only if you manage your time like a professional.\n\nFlight training is intense, but you need rest, friends, and balance to avoid burnout.\n• Set boundaries for study time vs. free time\n• Say no to late nights before flights\n• Make friends with other cadets—you'll learn faster and stay sane\n\nThink of it as building your aviation tribe—you'll be flying with these people for years to come.",
    category: "lifestyle",
    popular: false,
  },
  {
    id: "maneuver-fear",
    question: "What if I'm scared of stalls or maneuvers?",
    answer:
      "Totally normal. Fear comes from the unknown.\n\nWork with your instructor to break it down, simulate it in a safe, controlled way, and go at your pace.\n\nConfidence builds with knowledge + repetition.\n\nAnd remember: fear doesn't make you a bad pilot—it makes you human. But avoiding the fear doesn't help you get better.",
    category: "training",
    popular: false,
  },
  {
    id: "confusion",
    question: "What if I don't understand something my instructor is teaching?",
    answer:
      "Say something. Immediately.\n\nYou're not expected to know everything—but you are expected to speak up when you're confused.\n\nInstructors can't read minds. Be honest, ask questions, and don't just nod along hoping it'll click later.\n\nPro pilots ask questions. That's how they got there.",
    category: "training",
    popular: false,
  },
  {
    id: "simulator-time",
    question: "How do I log simulator time?",
    answer:
      "You can log simulator time (technically called FTD or AATD) under the supervision of an instructor, and it counts toward certain requirements depending on the certificate.\n\nMake sure it's an approved sim, and that your CFI logs it correctly in your logbook.\n\nSim time is a gift—use it to sharpen procedures, instrument skills, and emergencies without burning Hobbs time.",
    category: "training",
    popular: false,
  },
  {
    id: "falling-behind",
    question: "What should I do if I'm falling behind?",
    answer:
      "Don't go silent.\n\nTalk to your instructor, get with the chief, and create a game plan. Most schools want you to succeed—but they can't help if you disappear or hide your struggles.\n\nYou're not the first cadet to hit a wall. What matters is how you respond. Be accountable, not ashamed.",
    category: "training",
    popular: true,
  },
  {
    id: "bad-weather",
    question: "Will bad weather ruin my training schedule?",
    answer:
      "Yes—and no.\n\nBad weather can cancel flights, but it's also a chance to get ahead:\n• Knock out ground school\n• Review past flights\n• Do sim sessions\n• Take your written if it's not done\n\nYou can't control the weather—but you can control how you use the downtime.",
    category: "training",
    popular: false,
  },
  {
    id: "motivation",
    question: "How do I stay motivated through long training phases?",
    answer:
      "Set short-term goals and celebrate wins.\n\nWhether it's nailing your first solo, passing your written, or greasing a crosswind landing—track your progress and give yourself credit.\n\nAlso: talk to other cadets. Their struggles, tips, and stories will remind you—you're not in this alone.",
    category: "lifestyle",
    popular: true,
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Popular FAQs filtered by category
  const popularFaqs = faqs.filter((faq) => {
    const isPopular = faq.popular
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return isPopular && matchesCategory
  })

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    // If we're on the popular tab, stay there, otherwise go to all
    if (activeTab !== "popular") {
      setActiveTab("all")
    }
  }

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simulate loading state
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-aa-navy to-aa-blue p-8 text-white"
      >
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-4 border-white text-white">
            AACA CADET RESOURCES
          </Badge>
          <h1 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg opacity-90">Quick answers to the things every cadet wonders but might not ask.</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid gap-8 md:grid-cols-4">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="mb-3 font-medium">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    className={cn("w-full justify-start text-left", selectedCategory === category.id && "bg-aa-blue")}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                    {category.id === "all" && <Badge className="ml-auto">{faqs.length}</Badge>}
                    {category.id !== "all" && (
                      <Badge className="ml-auto">{faqs.filter((faq) => faq.category === category.id).length}</Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="mb-3 font-medium">Quick Links</h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setSelectedCategory("checkrides")
                    setActiveTab("all")
                  }}
                >
                  <CheckSquare className="mr-2 h-4 w-4" />
                  Checkride Prep
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setSelectedCategory("equipment")
                    setActiveTab("all")
                  }}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Required Equipment
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setSelectedCategory("medical")
                    setActiveTab("all")
                  }}
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Medical Requirements
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setSelectedCategory("lifestyle")
                    setActiveTab("all")
                  }}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Cadet Lifestyle
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-gradient-to-br from-amber-50 to-amber-100 p-4 shadow-sm dark:from-amber-900/20 dark:to-amber-800/20">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <h3 className="font-medium">Pro Tip</h3>
              </div>
              <p className="mt-2 text-sm">
                Can't find what you're looking for? Ask your instructor or check the{" "}
                <span className="font-medium">Resources</span> section for more detailed guides.
              </p>
            </div>
          </div>
        </div>

        {/* Main FAQ Content */}
        <div className="md:col-span-3">
          {/* Search */}
          <div className="mb-6 rounded-lg border bg-card p-4 shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All Questions</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              {filteredFaqs.length === 0 ? (
                <div className="mt-8 rounded-lg border bg-muted p-8 text-center">
                  <Search className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No questions found</h3>
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
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AccordionItem
                        value={faq.id}
                        className="border rounded-lg mb-3 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50">
                          <div className="flex items-start gap-3 text-left">
                            <div
                              className={cn(
                                "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                                faq.category === "training"
                                  ? "bg-blue-100 text-blue-700"
                                  : faq.category === "checkrides"
                                    ? "bg-green-100 text-green-700"
                                    : faq.category === "lifestyle"
                                      ? "bg-purple-100 text-purple-700"
                                      : faq.category === "equipment"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-red-100 text-red-700",
                              )}
                            >
                              {faq.category === "training" ? (
                                <PlaneTakeoff className="h-3.5 w-3.5" />
                              ) : faq.category === "checkrides" ? (
                                <CheckSquare className="h-3.5 w-3.5" />
                              ) : faq.category === "lifestyle" ? (
                                <Heart className="h-3.5 w-3.5" />
                              ) : faq.category === "equipment" ? (
                                <Briefcase className="h-3.5 w-3.5" />
                              ) : (
                                <AlertTriangle className="h-3.5 w-3.5" />
                              )}
                            </div>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2">
                          <div className="whitespace-pre-line text-muted-foreground">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              )}
            </TabsContent>
            <TabsContent value="popular">
              {popularFaqs.length === 0 ? (
                <div className="mt-8 rounded-lg border bg-muted p-8 text-center">
                  <Search className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No popular questions in this category</h3>
                  <p className="mt-2 text-muted-foreground">
                    Try selecting a different category or view all questions.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSelectedCategory("all")
                    }}
                  >
                    View all categories
                  </Button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {popularFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AccordionItem
                        value={faq.id}
                        className="border rounded-lg mb-3 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50">
                          <div className="flex items-start gap-3 text-left">
                            <div
                              className={cn(
                                "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                                faq.category === "training"
                                  ? "bg-blue-100 text-blue-700"
                                  : faq.category === "checkrides"
                                    ? "bg-green-100 text-green-700"
                                    : faq.category === "lifestyle"
                                      ? "bg-purple-100 text-purple-700"
                                      : faq.category === "equipment"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-red-100 text-red-700",
                              )}
                            >
                              {faq.category === "training" ? (
                                <PlaneTakeoff className="h-3.5 w-3.5" />
                              ) : faq.category === "checkrides" ? (
                                <CheckSquare className="h-3.5 w-3.5" />
                              ) : faq.category === "lifestyle" ? (
                                <Heart className="h-3.5 w-3.5" />
                              ) : faq.category === "equipment" ? (
                                <Briefcase className="h-3.5 w-3.5" />
                              ) : (
                                <AlertTriangle className="h-3.5 w-3.5" />
                              )}
                            </div>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2">
                          <div className="whitespace-pre-line text-muted-foreground">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              )}
            </TabsContent>
          </Tabs>

          {/* Still Have Questions */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-aa-blue to-aa-navy p-8 text-white">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-bold">Still Have Questions?</h2>
                <p className="mt-2 opacity-90">
                  We're here to help. Reach out to your instructor, chief pilot, or student services for personalized
                  assistance.
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-aa-navy"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
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
    </div>
  )
}

