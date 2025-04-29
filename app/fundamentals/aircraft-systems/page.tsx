import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { MainHeader } from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Wrench,
  ChevronLeft,
  ChevronRight,
  Power,
  Droplet,
  CircuitBoard,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  Bookmark,
  Printer,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AircraftSystemsPage() {
  return (
    <main className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <MainHeader />

        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Section */}
              <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/images/cockpit-controls-closeup.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
                  <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                    Training Fundamentals
                  </Badge>
                  <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                    Aircraft Systems
                  </h1>
                  <p className="text-xl text-white/80 mb-6 max-w-2xl">
                    Understanding the Components That Keep You Flying
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="sm" className="bg-white text-gray-800 hover:bg-white/90">
                      Download Systems Guide
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                      Share <Share2 className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -mb-6 -mr-6 opacity-20 md:opacity-30">
                  <div className="w-full h-full bg-[url('/images/aircraft-propeller-engine-detail.jpg')] bg-contain bg-no-repeat"></div>
                </div>
              </section>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 justify-end">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Save to bookmarks</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Printer className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Print page</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download as PDF</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Introduction */}
              <section className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">
                  Aircraft systems are the intricate network of components that work together to enable flight. From the
                  powerplant that generates thrust to the electrical system that powers instruments, understanding these
                  systems is vital for safe and efficient operation.
                </p>

                <p>
                  This section provides an overview of the key systems found in typical training aircraft, helping you
                  build a foundational knowledge crucial for preflight checks, normal operations, and handling potential
                  malfunctions.
                </p>
              </section>

              {/* Placeholder for System Sections */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-6">Key Aircraft Systems</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="engine" className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="text-xl font-display font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Power className="h-5 w-5 text-primary" /> Engine and Propeller
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 prose dark:prose-invert max-w-none">
                      <p>
                        Detailed explanation of the powerplant, fuel system, oil system, ignition, cooling, and
                        propeller mechanics will go here.
                      </p>
                      {/* Add more content, images, diagrams as needed */}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="electrical" className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="text-xl font-display font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <CircuitBoard className="h-5 w-5 text-primary" /> Electrical System
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 prose dark:prose-invert max-w-none">
                      <p>
                        Overview of the battery, alternator/generator, buses, circuit breakers/fuses, and powered
                        components will be detailed here.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="fuel" className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="text-xl font-display font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Droplet className="h-5 w-5 text-primary" /> Fuel System
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 prose dark:prose-invert max-w-none">
                      <p>
                        Explanation of fuel tanks, lines, pumps, selectors, and fuel management principles will be
                        covered here.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Add more system sections as needed (e.g., Flight Controls, Landing Gear, Hydraulic, Pitot-Static) */}
                </Accordion>
              </section>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Aerodynamics
                </Button>
                <Button className="flex items-center">
                  Flight Instruments <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Table of Contents */}
              <div className="sticky top-24 rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">In This Section</h3>
                <nav className="space-y-1">
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium"
                  >
                    Systems Overview
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Engine & Propeller
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Electrical System
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    Fuel System
                  </a>
                  {/* Add more links as sections are added */}
                </nav>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Glossary Terms
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    POH/AFM Resources
                  </Button>
                </div>
              </div>

              {/* Related Content Placeholder */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Related Content</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        <a href="#">Preflight Inspections</a>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Connecting system knowledge to practical checks.
                      </p>
                    </div>
                  </div>
                  {/* Add more related links */}
                </div>
              </div>

              {/* Resources Placeholder */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Resources</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Systems Diagram (Generic)</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                  {/* Add more resource links */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </main>
  )
}
