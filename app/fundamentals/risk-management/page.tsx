"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { MainHeader } from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  AlertTriangle,
  Shield,
  Plane,
  Brain,
  ChevronRight,
  ChevronLeft,
  User,
  CloudSun,
  AlertOctagon,
  BookOpen,
  ExternalLink,
  Info,
  ListChecks,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs as InnerTabs, TabsContent as InnerTabsContent, TabsList as InnerTabsList, TabsTrigger as InnerTabsTrigger } from "@/components/ui/tabs"
import { PremiumTabs } from "@/components/premium-tabs"
import { FundamentalsNavigation } from "@/components/fundamentals-navigation"
import { usePathname } from 'next/navigation'

export default function RiskManagementPage() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState("introduction")

  const tabs = [
    { value: 'introduction', label: 'Introduction', icon: <Info className="h-4 w-4" /> },
    { value: 'principles', label: 'Principles', icon: <Shield className="h-4 w-4" /> },
    { value: 'pave', label: 'PAVE Model', icon: <ListChecks className="h-4 w-4" /> }
  ]

  const prevPage = null;
  const nextPage = { name: "Basic Aerodynamics", url: "/fundamentals/aerodynamics" };

  return (
    <main className="min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-8">
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aa-navy to-aa-blue text-white">
              <div className="absolute inset-0 bg-[url('/images/cockpit-controls-closeup.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10 px-6 py-12 md:py-16 md:px-10">
                <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                  Training Fundamentals
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">Risk Management</h1>
                <p className="text-xl text-white/80 mb-6 max-w-2xl">Why Risk Management Matters for Every Pilot</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm" className="bg-white text-aa-navy hover:bg-white/90" onClick={() => setCurrentTab('pave')}>
                    PAVE Model <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                    Download PDF
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -mb-6 -mr-6 opacity-20 md:opacity-30">
                <div className="w-full h-full bg-[url('/images/pilot-preflight-inspection.jpg')] bg-contain bg-no-repeat"></div>
              </div>
            </section>

            <PremiumTabs
              tabs={tabs}
              currentValue={currentTab}
              onChange={setCurrentTab}
              defaultValue="introduction"
              title="Risk Management Topics"
            />

            <div className="pt-8">
              {currentTab === 'introduction' && (
                <section className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="lead">
                    Aviation is a thrilling pursuit—but make no mistake, it carries real risk. Every single flight—no
                    matter how short or routine—requires judgment, preparation, and disciplined decision-making. That's
                    why risk management is one of the first and most foundational concepts you'll learn as a pilot.
                  </p>

                  <p>
                    From your very first lesson, you're not just learning how to fly an airplane—you're learning how to{" "}
                    <strong>think like a pilot</strong>. That means identifying potential hazards and making smart
                    decisions to reduce those risks to an acceptable level.
                  </p>

                  <h2 className="font-display text-2xl font-semibold mt-8 mb-4">What is Risk Management?</h2>

                  <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                    <p className="italic text-muted-foreground mb-0">
                      "Risk management is a decision-making process designed to identify hazards, assess the degree of
                      risk, and determine the best course of action."
                    </p>
                    <p className="text-sm mt-2 mb-0">— FAA Risk Management Handbook</p>
                  </div>

                  <p>
                    According to the FAA's Risk Management Handbook, risk management is a decision-making process designed
                    to identify hazards, assess the degree of risk, and determine the best course of action. In short:
                    it's how pilots stay alive.
                  </p>

                  <p>
                    More importantly, the FAA teaches that risk management is not a checklist—it's a mental discipline.
                    The best pilots are constantly evaluating the environment and adapting their decisions in real time.
                  </p>
                </section>
              )}

              {currentTab === 'principles' && (
                <section>
                  <h2 className="font-display text-2xl font-semibold mb-6">The Four Principles of Risk Management</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    These four principles are the backbone of aviation decision-making. They don't just apply to
                    emergencies—they apply to every flight you take.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="hover-card-effect border-t-4 border-t-primary">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-primary" />
                          <CardTitle>Accept No Unnecessary Risk</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>
                          This principle is simple but powerful: If you can avoid a risk, do it. There is no reward in
                          pushing limits just for the sake of it.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover-card-effect border-t-4 border-t-primary">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <Brain className="h-5 w-5 text-primary" />
                          <CardTitle>Make Risk Decisions at the Appropriate Level</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Risk decisions should always be made by the person with the authority—and perspective—to make
                          them wisely.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover-card-effect border-t-4 border-t-primary">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <Plane className="h-5 w-5 text-primary" />
                          <CardTitle>Accept Risk When Benefits Outweigh the Costs</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Flying always involves risk. The question is whether the benefit of the flight justifies it.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover-card-effect border-t-4 border-t-primary">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-5 w-5 text-primary" />
                          <CardTitle>Integrate Risk Management into All Phases</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Risk management isn't just a preflight activity—it's continuous. You should be reevaluating risk
                          before, during, and even after each flight.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              )}

              {currentTab === 'pave' && (
                <section className="bg-transparent rounded-2xl">
                  <h2 className="font-display text-2xl font-semibold mb-4">
                    The PAVE Checklist: The Cadet's Risk Management Framework
                  </h2>

                  <p className="text-lg mb-6">
                    Before you even think about turning the key, you need to ask yourself one thing:{" "}
                    <strong>Should I be flying today?</strong>
                  </p>

                  <p className="mb-6">
                    That's not a gut-check question—it's a calculated, methodical one. And the FAA gives us a framework to
                    answer it: PAVE.
                  </p>

                  <InnerTabs defaultValue="pilot" className="w-full">
                    <InnerTabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6">
                      <InnerTabsTrigger value="pilot" className="flex items-center gap-2">
                        <User className="h-4 w-4" /> Pilot
                      </InnerTabsTrigger>
                      <InnerTabsTrigger value="aircraft" className="flex items-center gap-2">
                        <Plane className="h-4 w-4" /> Aircraft
                      </InnerTabsTrigger>
                      <InnerTabsTrigger value="environment" className="flex items-center gap-2">
                        <CloudSun className="h-4 w-4" /> enVironment
                      </InnerTabsTrigger>
                      <InnerTabsTrigger value="external" className="flex items-center gap-2">
                        <AlertOctagon className="h-4 w-4" /> External
                      </InnerTabsTrigger>
                    </InnerTabsList>

                    <InnerTabsContent value="pilot" className="border rounded-xl p-6 bg-card">
                      <h3 className="font-display text-xl font-semibold mb-4">P – Pilot (Are YOU ready?)</h3>
                      <p className="mb-4">
                        This is about you. Not the plane. Not the weather. Not the destination. Just you.
                      </p>
                      <p className="mb-4">
                        The FAA gives us a secondary tool here called IMSAFE—a personal health checklist:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          <strong>Illness</strong> – Do you have any symptoms?
                        </li>
                        <li>
                          <strong>Medication</strong> – Are you taking anything that might impair performance?
                        </li>
                        <li>
                          <strong>Stress</strong> – Personal issues, finances, relationships—these things affect focus.
                        </li>
                        <li>
                          <strong>Alcohol</strong> – The FAA says 8 hours bottle to throttle, but that's a minimum.
                        </li>
                        <li>
                          <strong>Fatigue</strong> – Sleep deprivation is a killer. Literally.
                        </li>
                        <li>
                          <strong>Emotion</strong> – Are you focused? Distracted? Mentally sharp?
                        </li>
                      </ul>
                      <p className="font-medium">
                        Why it matters: A perfectly maintained aircraft and great weather won't help if the pilot isn't
                        100%. You're the final authority on whether or not you're safe to fly.
                      </p>
                    </InnerTabsContent>

                    <InnerTabsContent value="aircraft" className="border rounded-xl p-6 bg-card">
                      <h3 className="font-display text-xl font-semibold mb-4">A – Aircraft (Is the airplane ready?)</h3>
                      <p className="mb-4">This goes way beyond "does it start?"</p>
                      <p className="mb-4">You need to know:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          <strong>Is it airworthy?</strong> (Has it had its inspections, ADs, and maintenance?)
                        </li>
                        <li>
                          <strong>Is it properly equipped?</strong> (Do you have the required instruments for VFR or IFR?)
                        </li>
                        <li>
                          <strong>Is it capable?</strong> (Can it handle the terrain, weather, and performance
                          requirements?)
                        </li>
                        <li>
                          <strong>Are YOU proficient in this specific aircraft?</strong>
                        </li>
                      </ul>
                      <p className="mb-4">
                        Check your SPARROW documents (Supplements, Placards, Airworthiness Certificate, Registration,
                        Radio Operator's License, Operating Limitations, and Weight & Balance), and use AVIATE+S Radio
                        for inspections.
                      </p>
                       <p className="font-medium">
                         Why it matters: An aircraft problem discovered on the ground is an inconvenience. Discovered in
                         the air? It could be deadly.
                       </p>
                    </InnerTabsContent>

                     <InnerTabsContent value="environment" className="border rounded-xl p-6 bg-card">
                       <h3 className="font-display text-xl font-semibold mb-4">V – enVironment (What's the world doing?)</h3>
                       <p className="mb-4">
                         This category covers everything outside the aircraft that can affect your flight:
                       </p>
                       <ul className="list-disc pl-6 space-y-2 mb-4">
                         <li>
                           <strong>Weather</strong> (Forecasts, METARs, TAFs, winds aloft, icing, thunderstorms)
                         </li>
                         <li>
                           <strong>Terrain</strong> (Mountains, obstacles, airport elevation)
                         </li>
                         <li>
                           <strong>Airspace</strong> (Classes, TFRs, special use airspace)
                         </li>
                         <li>
                           <strong>Day/Night Conditions</strong> (Visibility, lighting)
                         </li>
                         <li>
                           <strong>Airport Conditions</strong> (Runway lengths, NOTAMs, traffic density)
                         </li>
                       </ul>
                       <p className="font-medium">
                         Why it matters: The environment is dynamic. What was safe an hour ago might not be safe now.
                         Constant vigilance is key.
                       </p>
                     </InnerTabsContent>

                     <InnerTabsContent value="external" className="border rounded-xl p-6 bg-card">
                       <h3 className="font-display text-xl font-semibold mb-4">E – External Pressures (What's pushing YOU?)</h3>
                       <p className="mb-4">
                         These are the subtle (and not-so-subtle) factors that can cloud judgment:
                       </p>
                       <ul className="list-disc pl-6 space-y-2 mb-4">
                         <li>
                           <strong>Desire to complete the mission</strong> ("Get-there-itis")
                         </li>
                         <li>
                           <strong>Pressure from passengers or management</strong>
                         </li>
                         <li>
                           <strong>Trip planning / schedule pressure</strong>
                         </li>
                         <li>
                           <strong>Financial pressure</strong>
                         </li>
                         <li>
                           <strong>Desire to impress</strong>
                         </li>
                       </ul>
                       <p className="font-medium">
                         Why it matters: External pressures often lead pilots to accept unnecessary risks. Recognizing
                         these pressures is the first step in resisting them.
                       </p>
                     </InnerTabsContent>
                  </InnerTabs>
                </section>
              )}
            </div>

            <FundamentalsNavigation
              prevPage={prevPage}
              nextPage={nextPage}
              currentPageUrl={pathname}
            />
          </div>
        </div>
      </SidebarInset>
    </main>
  )
}

