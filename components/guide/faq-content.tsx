"use client"

import { useState, useEffect, useRef } from "react"
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
  ChevronUp,
  Menu,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// --- Type definitions needed for props ---
interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular: boolean;
}

// --- Interface for client component props ---
interface FAQContentProps {
  categories: Category[];
  faqs: FAQ[];
}

// Rename function and accept props
export default function FAQContent({ categories, faqs }: FAQContentProps) {

  // State initialization
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState(faqs) // For the 'All' tab
  const [popularFaqs, setPopularFaqs] = useState(faqs.filter(faq => faq.popular)) // For the 'Popular' tab
  const [activeTab, setActiveTab] = useState("all") // State for internal tabs
  const [showBackToTop, setShowBackToTop] = useState(false)
  const faqContainerRef = useRef<HTMLDivElement>(null)

  // useEffect for filtering based on category and search term
  useEffect(() => {
    const results = faqs.filter((faq) => {
      const categoryMatch = activeCategory === "all" || faq.category === activeCategory
      const searchMatch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      return categoryMatch && searchMatch
    })
    setFilteredFaqs(results)
    setPopularFaqs(results.filter(faq => faq.popular))
  }, [activeCategory, searchTerm, faqs])

  // useEffect for scroll remains the same
  useEffect(() => {
    const handleScroll = () => {
      if (faqContainerRef.current && faqContainerRef.current.scrollTop > 200) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }
    const container = faqContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    faqContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Helper for category change to reset tab if needed
  const handleCategoryChange = (category: string) => {
      setActiveCategory(category);
      // Optionally reset to 'all' tab when category changes, or keep current tab?
      // Let's keep the current tab for now unless user feedback suggests otherwise.
      // if (activeTab !== "popular") { 
      //   setActiveTab("all")
      // }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 border-r p-4 space-y-6 bg-muted/40">
        <h3 className="text-lg font-semibold">Categories</h3>
        <nav className="flex flex-col space-y-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "secondary" : "ghost"}
              className={`w-full justify-start ${
                activeCategory === category.id
                  ? "font-semibold"
                  : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </nav>

        <div className="border-t pt-4 space-y-4">
           <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-1">
                 <Button variant="link" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">How to prepare for checkride?</Button>
                 <Button variant="link" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">Tips for studying?</Button>
                 <Button variant="link" className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground">Managing flight anxiety?</Button>
            </nav>
        </div>

         <div className="border-t pt-4 mt-auto">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2">
                <div className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <h4 className="font-semibold">Pro Tip</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                    Always chair-fly your maneuvers before getting into the actual aircraft. It saves time and money!
                </p>
            </div>
        </div>

      </aside>

      {/* Main Content */}
      <main
        ref={faqContainerRef}
        className="flex-1 p-6 overflow-y-auto relative scroll-smooth"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-6">
            Find answers to common questions about flight training, checkrides,
            and the pilot lifestyle.
          </p>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search questions..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Tabs */}
           <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList>
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
                      setSearchTerm("")
                      setActiveCategory("all")
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq) => (
                    <motion.div
                      key={`${faq.id}-all`}
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
                                   ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                   : faq.category === "checkrides"
                                     ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                     : faq.category === "lifestyle"
                                       ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                       : faq.category === "equipment"
                                         ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                         : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
                               )}
                             >
                               {categories.find(c => c.id === faq.category)?.icon || <HelpCircle className="h-3.5 w-3.5" />}
                             </div>
                            <span>{faq.question}</span>
                             {faq.popular && <Badge className="ml-auto" variant="secondary">Popular</Badge>} { /* Added Badge here too */}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2">
                          <div className="whitespace-pre-line text-muted-foreground prose prose-sm max-w-none dark:prose-invert">{faq.answer}</div>
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
                  <h3 className="mt-4 text-lg font-medium">No popular questions in this category/search</h3>
                   <p className="mt-2 text-muted-foreground">
                     Try adjusting your search or filter.
                   </p>
                   <Button
                     variant="outline"
                     className="mt-4"
                     onClick={() => {
                       setSearchTerm("")
                       setActiveCategory("all") 
                       setActiveTab("all") // Go back to all tab
                     }}
                   >
                     Reset Filters & View All
                   </Button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {popularFaqs.map((faq) => (
                     <motion.div
                      key={`${faq.id}-popular`}
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
                                   ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                   : faq.category === "checkrides"
                                     ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                     : faq.category === "lifestyle"
                                       ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                       : faq.category === "equipment"
                                         ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                         : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
                               )}
                             >
                                {categories.find(c => c.id === faq.category)?.icon || <HelpCircle className="h-3.5 w-3.5" />}
                             </div>
                             <span>{faq.question}</span>
                             <Badge className="ml-auto" variant="secondary">Popular</Badge> { /* Ensure Popular badge is always visible here */}
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2">
                          <div className="whitespace-pre-line text-muted-foreground prose prose-sm max-w-none dark:prose-invert">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              )}
            </TabsContent>
          </Tabs>

          {/* FAQ Accordion */}
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-2">
                       <span className="flex-1 mr-2">{faq.question}</span>
                        {faq.popular && (
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                                Popular
                            </Badge>
                        )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-muted-foreground mt-8">
              No questions found matching your criteria.
            </p>
          )}
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button size="icon" onClick={scrollToTop}>
              <ChevronUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </main>

        {/* Mobile Sidebar Toggle - Optional, could be added if needed */}
         {/* <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50 md:hidden">
             <Menu className="h-5 w-5" />
         </Button> */}
    </div>
  )
} 