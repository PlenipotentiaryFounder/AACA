"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { MainHeader } from "@/components/main-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Filter, ArrowUpDown, FileText, Plane, AlertTriangle, CloudSun } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type SearchResult = {
  title: string
  excerpt: string
  url: string
  category: string
  type: "article" | "glossary" | "resource" | "video"
  icon: any
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchResult[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  // Simulated search results - in a real app, this would query your content database
  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true)

      // Simulate API call delay
      setTimeout(() => {
        // This is a mock implementation - you would replace with actual search logic
        const mockResults: SearchResult[] = [
          {
            title: "Risk Management Basics",
            excerpt:
              "Aviation is a thrilling pursuit—but make no mistake, it carries real risk. Every single flight—no matter how short or routine—requires judgment...",
            url: "/fundamentals/risk-management",
            category: "Training Fundamentals",
            type: "article",
            icon: AlertTriangle,
          },
          {
            title: "PAVE Checklist for Risk Assessment",
            excerpt:
              "PAVE is a preflight tool to help pilots identify risk in four broad categories: Pilot, Aircraft, enVironment, External Pressures...",
            url: "/fundamentals/risk-management/pave",
            category: "Training Fundamentals",
            type: "article",
            icon: AlertTriangle,
          },
          {
            title: "PAVE",
            excerpt:
              "Pilot, Aircraft, enVironment, External pressures. A checklist used for risk assessment and management before flight.",
            url: "/glossary#pave",
            category: "Glossary",
            type: "glossary",
            icon: BookOpen,
          },
          {
            title: "Understanding Weather METARs",
            excerpt:
              "METARs are standardized weather reports issued hourly at thousands of airports across the country...",
            url: "/fundamentals/weather",
            category: "Weather",
            type: "article",
            icon: CloudSun,
          },
          {
            title: "METAR",
            excerpt:
              "Meteorological Terminal Aviation Routine Weather Report. A format for reporting weather information.",
            url: "/glossary#metar",
            category: "Glossary",
            type: "glossary",
            icon: BookOpen,
          },
          {
            title: "How to Chair Fly",
            excerpt:
              "Chair flying is one of the most effective techniques to prepare for your flights without actually being in the airplane...",
            url: "/flight-training/chair-flying",
            category: "Flight Training",
            type: "article",
            icon: Plane,
          },
          {
            title: "FAA Risk Management Handbook",
            excerpt: "Official FAA handbook covering risk management principles for pilots at all levels.",
            url: "/resources/faa-risk-management",
            category: "Resources",
            type: "resource",
            icon: FileText,
          },
          {
            title: "Weather Decision Making",
            excerpt: "Video tutorial on making safe go/no-go decisions based on weather conditions.",
            url: "/videos/weather-decision-making",
            category: "Videos",
            type: "video",
            icon: CloudSun,
          },
        ]

        setResults(
          mockResults.filter(
            (result) =>
              result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              result.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        )

        setIsLoading(false)
      }, 500)
    } else {
      setResults([])
    }
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  const filteredResults = activeTab === "all" ? results : results.filter((result) => result.type === activeTab)

  return (
    <main className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <MainHeader />

        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
          <section className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-8">
              <h1 className="font-display text-4xl font-bold tracking-tight mb-6">Search Results</h1>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for topics, terms, or procedures..."
                  className="w-full pl-12 py-6 text-lg rounded-full border-primary/20 focus-visible:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
                  Search
                </Button>
              </div>
            </form>

            {searchQuery && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium">
                    {isLoading ? (
                      <span className="animate-pulse">Searching...</span>
                    ) : (
                      <span>
                        {results.length} results for "{searchQuery}"
                      </span>
                    )}
                  </h2>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      Sort
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                  <TabsList className="grid grid-cols-5">
                    <TabsTrigger value="all" className="flex items-center gap-1">
                      All ({results.length})
                    </TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-1">
                      Articles ({results.filter((r) => r.type === "article").length})
                    </TabsTrigger>
                    <TabsTrigger value="glossary" className="flex items-center gap-1">
                      Glossary ({results.filter((r) => r.type === "glossary").length})
                    </TabsTrigger>
                    <TabsTrigger value="resource" className="flex items-center gap-1">
                      Resources ({results.filter((r) => r.type === "resource").length})
                    </TabsTrigger>
                    <TabsTrigger value="video" className="flex items-center gap-1">
                      Videos ({results.filter((r) => r.type === "video").length})
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-6">
                    <ResultsList results={filteredResults} isLoading={isLoading} />
                  </TabsContent>

                  <TabsContent value="article" className="mt-6">
                    <ResultsList results={filteredResults} isLoading={isLoading} />
                  </TabsContent>

                  <TabsContent value="glossary" className="mt-6">
                    <ResultsList results={filteredResults} isLoading={isLoading} />
                  </TabsContent>

                  <TabsContent value="resource" className="mt-6">
                    <ResultsList results={filteredResults} isLoading={isLoading} />
                  </TabsContent>

                  <TabsContent value="video" className="mt-6">
                    <ResultsList results={filteredResults} isLoading={isLoading} />
                  </TabsContent>
                </Tabs>
              </>
            )}

            {!searchQuery && (
              <div className="text-center py-16 bg-muted/30 rounded-xl border">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Start searching</h3>
                <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                  Enter a search term above to find articles, glossary terms, resources, and videos.
                </p>
              </div>
            )}

            {searchQuery && results.length === 0 && !isLoading && (
              <div className="text-center py-16 bg-muted/30 rounded-xl border">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                  We couldn't find any matches for "{searchQuery}". Try different keywords or browse the categories in
                  the sidebar.
                </p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </div>
            )}
          </section>
        </div>
      </SidebarInset>
    </main>
  )
}

function ResultsList({ results, isLoading }: { results: SearchResult[]; isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 border rounded-xl animate-pulse">
            <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {results.map((result, index) => (
        <div key={index} className="p-6 border rounded-xl hover:shadow-md transition-shadow bg-card">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-2 bg-primary/10 text-primary">
              <result.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline">{result.category}</Badge>
                <Badge variant="secondary">{result.type}</Badge>
              </div>
              <Link
                href={result.url}
                className="text-xl font-display font-semibold hover:text-primary transition-colors"
              >
                {result.title}
              </Link>
              <p className="mt-2 text-muted-foreground">{result.excerpt}</p>
              <div className="mt-3">
                <Link href={result.url} className="text-sm text-primary hover:underline inline-flex items-center">
                  View{" "}
                  {result.type === "article"
                    ? "article"
                    : result.type === "glossary"
                      ? "term"
                      : result.type === "resource"
                        ? "resource"
                        : "video"}{" "}
                  →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

