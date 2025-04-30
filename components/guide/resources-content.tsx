"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Download,
  ExternalLink,
  FileText,
  Smartphone,
  BookOpen,
  Users,
  Star,
  CheckCircle,
  BookText,
  Lightbulb,
  Brain,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// --- Type Definitions for Props ---
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
  name: string;
  url: string;
}

interface ResourcesContentProps {
  tabs: PremiumTab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

export default function ResourcesContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: ResourcesContentProps) {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Hero Section Removed - Now handled by GuidePageHeader */}
      
      {/* Tabs Component */}
      <PremiumTabs
        tabs={tabs}
        defaultValue={tabs[0].value}
        currentValue={currentTab}
        onChange={setCurrentTab}
        title="Resources & Tools"
      />

      {/* Main Content */}
      <div className="space-y-8">
        {/* FAA Resources Tab Content */}
        {currentTab === 'faa' && (
          <div className="space-y-6 pt-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold">FAA Resources – The Foundation of Your Knowledge</h2>
              <p className="text-muted-foreground">
                These official FAA publications form the foundation of your aviation knowledge. Learning to use them
                effectively is a critical skill that will serve you throughout your career.
              </p>
            </div>
            <Alert className="bg-amber-50 border-amber-200">
              <Lightbulb className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Personal Note from an Instructor</AlertTitle>
              <AlertDescription className="text-amber-700">
                When I first started training, I thought FAA books were just boxes to check—things you skim through to
                pass the written. But that mindset changed fast. I realized that every single piece of knowledge I
                needed—whether I was preparing for a maneuver, an oral exam, or making a real-world decision in the
                airplane—was in one of those FAA resources. The trick wasn't just reading them—it was learning how to use
                them like a pro.
              </AlertDescription>
            </Alert>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* FAR/AIM Card */}
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-white/10 text-white">Essential</Badge>
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-display text-xl font-bold text-white">FAR/AIM</h3>
                      <p className="text-sm text-white/80">Your Legal Guidebook</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">The Federal Aviation Regulations (FARs) are the laws that govern every part of aviation in the U.S. The AIM (Aeronautical Information Manual) is the FAA's guide to recommended procedures and best practices.</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Key Sections for Cadets:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>• Part 61 – Pilot certification requirements</li><li>• Part 91 – General operating rules</li><li>• Part 141 – Flight school curriculum (for 141 schools)</li></ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                  <span className="text-xs text-muted-foreground">When to use: Checking legal requirements, prepping for orals</span>
                  <Button variant="ghost" size="sm" asChild><Link href="https://www.faa.gov/regulations_policies/faa_regulations" target="_blank" className="flex items-center gap-1">Access <ExternalLink className="h-3 w-3" /></Link></Button>
                </CardFooter>
              </Card>
              {/* Airplane Flying Handbook Card */}
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-green-600 to-green-800 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">Essential</Badge></div>
                    <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">Airplane Flying Handbook (AFH)</h3><p className="text-sm text-white/80">Your How-To-Fly Manual</p></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">The AFH is your how-to-fly manual. It explains each maneuver, procedure, and fundamental flight skill step by step with detailed illustrations and explanations.</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">When to Use It:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>• Before and after every flight lesson</li><li>• To understand what your instructor is teaching—and why</li><li>• To prep for maneuver-heavy oral questions</li></ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                  <span className="text-xs text-muted-foreground">Pro Tip: Review before each flight lesson</span>
                  <Button variant="ghost" size="sm" asChild><Link href="https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook" target="_blank" className="flex items-center gap-1">Download <ExternalLink className="h-3 w-3" /></Link></Button>
                </CardFooter>
              </Card>
              {/* PHAK Card */} 
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-purple-600 to-purple-800 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">Essential</Badge></div>
                    <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">Pilot's Handbook of Aeronautical Knowledge</h3><p className="text-sm text-white/80">Your Aviation Encyclopedia</p></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">The PHAK is your aviation encyclopedia covering aerodynamics, weather, aircraft systems, airspace, regulations, and much more.</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">When to Use It:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>• While studying for the written</li><li>• To understand why things work the way they do</li><li>• For deeper concept review (especially when something isn't clicking)</li></ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                  <span className="text-xs text-muted-foreground">Pro Tip: Use as a reference for specific topics</span>
                  <Button variant="ghost" size="sm" asChild><Link href="https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak" target="_blank" className="flex items-center gap-1">Download <ExternalLink className="h-3 w-3" /></Link></Button>
                </CardFooter>
              </Card>
              {/* Instrument Flying Handbook Card */} 
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-orange-500 to-orange-700 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">Instrument Phase</Badge></div>
                    <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">Instrument Flying Handbook (IFH)</h3><p className="text-sm text-white/80">Your IFR Guide</p></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Your go-to guide when you begin instrument training, covering instrument scan, IFR procedures, approaches, departures, and holding patterns.</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">When to Use It:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>• During your instrument phase</li><li>• To understand IFR rules, procedures, and cockpit workload</li><li>• To prep for IFR checkrides and stage checks</li></ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                  <span className="text-xs text-muted-foreground">Pro Tip: Start reviewing scan techniques early</span>
                  <Button variant="ghost" size="sm" asChild><Link href="https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook" target="_blank" className="flex items-center gap-1">Download <ExternalLink className="h-3 w-3" /></Link></Button>
                </CardFooter>
              </Card>
              {/* Risk Management Handbook Card */} 
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-red-600 to-red-800 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">Decision Making</Badge></div>
                    <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">Risk Management Handbook</h3><p className="text-sm text-white/80">Your Decision-Making Guide</p></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">A guide to making good decisions as a pilot, introducing key models like PAVE, 3P Model, and DECIDE.</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">When to Use It:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>• Before soloing</li><li>• During cross-country and decision-making lessons</li><li>• To sharpen your judgment and situational awareness</li></ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                  <span className="text-xs text-muted-foreground">Pro Tip: Know PAVE and DECIDE for checkrides</span>
                  <Button variant="ghost" size="sm" asChild><Link href="https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/risk_management_handbook" target="_blank" className="flex items-center gap-1">Download <ExternalLink className="h-3 w-3" /></Link></Button>
                </CardFooter>
              </Card>
              {/* FOI Card */} 
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-teal-600 to-teal-800 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">CFI Phase</Badge></div>
                    <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">Fundamentals of Instruction (FOI)</h3><p className="text-sm text-white/80">Psychology for Pilots</p></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">The psychology book for pilots and instructors, covering how people learn, mental barriers to learning, communication, and human behavior.</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">When to Use It:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>• During CFI training (required)</li><li>• If you're struggling to absorb new information</li><li>• When tutoring or mentoring others</li></ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                  <span className="text-xs text-muted-foreground">Helpful for understanding learning plateaus</span>
                  <Button variant="ghost" size="sm" asChild><Link href="https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook" target="_blank" className="flex items-center gap-1">Download <ExternalLink className="h-3 w-3" /></Link></Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-8 rounded-lg bg-muted p-6">
              <h3 className="font-display text-xl font-semibold">Mastering the Art of Finding Information</h3>
              <p className="mt-2 text-muted-foreground">
                You'll rarely need to memorize everything word-for-word. What you really need is the skill to quickly find
                the right answer when it matters. Whether you're in a ground lesson, a stage check, or mid-flight trying
                to clarify an airspace rule, your ability to reference FAA material is part of what makes you a
                professional.
              </p>
              <div className="mt-4 flex items-center gap-2 text-aa-blue">
                <Lightbulb className="h-5 w-5" />
                <p className="font-medium">
                  Pro Tip: Start getting familiar with the table of contents and the index in each major resource. You
                  don't have to know everything—but you need to know where to find it.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Study Materials Tab Content */}
        {currentTab === 'study' && (
          <div className="space-y-6 pt-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold">Quick Guide – Where to Find What You Need</h2>
              <p className="text-muted-foreground">
                The most successful students aren't the ones who have every detail memorized—but the ones who know where
                to go to find the answer confidently, calmly, and fast. Use this as your go-to reference when you're
                studying, preparing for an oral, or just trying to figure out where a topic fits in the bigger picture.
              </p>
            </div>
            <Alert className="bg-amber-50 border-amber-200">
              <Lightbulb className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Personal Note from an Instructor</AlertTitle>
              <AlertDescription className="text-amber-700">
                One of the most powerful things you can develop as a cadet is the ability to quickly locate exactly what
                you need, when you need it. The most successful students aren't the ones who have every number
                memorized—but the ones who know where to go to find the answer confidently, calmly, and fast. This page is
                your cheat code.
              </AlertDescription>
            </Alert>
            <Card>
              <CardHeader>
                <CardTitle>Quick Reference Table: Where to Look for What</CardTitle>
                <CardDescription>
                  Use this table to quickly identify which resource contains the information you need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Topic</TableHead>
                        <TableHead>Resource</TableHead>
                        <TableHead className="hidden md:table-cell">What You'll Find There</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Pilot Licensing Requirements</TableCell>
                        <TableCell>FAR Part 61</TableCell>
                        <TableCell className="hidden md:table-cell">Eligibility, training requirements, logging time, certificate privileges and limitations.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Flight Rules & Legal Requirements</TableCell>
                        <TableCell>FAR Part 91</TableCell>
                        <TableCell className="hidden md:table-cell">Operating rules, VFR/IFR requirements, equipment, airspace rules, fuel requirements.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Flight School Curriculum</TableCell>
                        <TableCell>FAR Part 141</TableCell>
                        <TableCell className="hidden md:table-cell">Structure of your school's training program, stage checks, hours required.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Basic Flight Maneuvers</TableCell>
                        <TableCell>Airplane Flying Handbook (AFH)</TableCell>
                        <TableCell className="hidden md:table-cell">Step-by-step breakdown of climbs, turns, stalls, slow flight, and common errors.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Aerodynamics, Systems, Theory</TableCell>
                        <TableCell>Pilot's Handbook of Aeronautical Knowledge (PHAK)</TableCell>
                        <TableCell className="hidden md:table-cell">Everything from how lift works to aircraft engines and flight instruments.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Instrument Flying</TableCell>
                        <TableCell>Instrument Flying Handbook (IFH)</TableCell>
                        <TableCell className="hidden md:table-cell">Scanning techniques, IFR approaches, procedures, holding, and system failures.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Risk Management & ADM</TableCell>
                        <TableCell>Risk Management Handbook</TableCell>
                        <TableCell className="hidden md:table-cell">Decision-making models (PAVE, DECIDE, 3P), judgment training, risk mitigation.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Learning Theory & Teaching Skills</TableCell>
                        <TableCell>Fundamentals of Instruction (FOI)</TableCell>
                        <TableCell className="hidden md:table-cell">Human behavior, barriers to learning, communication, and how to teach aviation concepts.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ATC Communications & Procedures</TableCell>
                        <TableCell>Aeronautical Information Manual (AIM)</TableCell>
                        <TableCell className="hidden md:table-cell">Phraseology, airspace classifications, procedures, NOTAMs, and weather services.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Required Aircraft Documents & Inspections</TableCell>
                        <TableCell>FAR/AIM Part 91 + PHAK</TableCell>
                        <TableCell className="hidden md:table-cell">Find out what must be onboard (AROW), inspection intervals, and maintenance rules.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Weather Services & Interpretation</TableCell>
                        <TableCell>PHAK + AIM</TableCell>
                        <TableCell className="hidden md:table-cell">How weather forms, how to interpret METARs/TAFs, how to use Flight Service stations.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Checkride Requirements</TableCell>
                        <TableCell>Airman Certification Standards (ACS)</TableCell>
                        <TableCell className="hidden md:table-cell">Knowledge, risk management, and skill elements for each certificate and rating.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 rounded-lg bg-muted p-6">
              <h3 className="font-display text-xl font-semibold">How to Use This Table in Real Time</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-md bg-background p-4 shadow-sm">
                  <h4 className="font-display text-lg font-medium">During Ground School</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Use this table to know which book to crack open when a new topic is introduced.</p>
                </div>
                <div className="rounded-md bg-background p-4 shadow-sm">
                   <h4 className="font-display text-lg font-medium">Studying for a Written</h4>
                   <p className="mt-1 text-sm text-muted-foreground">Prioritize PHAK, AFH, and FAR/AIM—highlight and flashcard key sections.</p>
                </div>
                <div className="rounded-md bg-background p-4 shadow-sm">
                   <h4 className="font-display text-lg font-medium">Prepping for a Stage Check</h4>
                   <p className="mt-1 text-sm text-muted-foreground">Pair this guide with the ACS so you can match each task to the FAA reference.</p>
                </div>
                <div className="rounded-md bg-background p-4 shadow-sm">
                  <h4 className="font-display text-lg font-medium">After a Flight</h4>
                  <p className="mt-1 text-sm text-muted-foreground">If something confuses you, write it down, then use this table to track down answers.</p>
                </div>
              </div>
            </div>
            <Alert className="bg-aa-blue/10 text-aa-blue">
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Final Thought: Use This Like a Toolbox</AlertTitle>
              <AlertDescription>
                Imagine each FAA resource as a tool in your aviation toolbox. This page tells you which tool to grab for
                the job at hand. Over time, this will become second nature. You'll hear a question and instantly think,
                "That's in Part 91" or "That's covered in the PHAK Chapter 5." That kind of confidence? It's built right
                here.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Digital Tools Tab Content */}
        {currentTab === 'digital' && (
          <div className="space-y-6 pt-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold">Essential Digital Tools</h2>
              <p className="text-muted-foreground">
                These digital tools will become your constant companions throughout your flight training journey. From
                flight planning to weather briefings, these apps and platforms are industry standards that will help you
                train like a professional from day one.
              </p>
            </div>
            <Alert>
              <Star className="h-4 w-4" />
              <AlertTitle>AACA Student Discount Program</AlertTitle>
              <AlertDescription>
                As an American Airlines Cadet Academy student, you have access to exclusive discounts on many of these
                tools. Check the student portal for current discount codes before purchasing.
              </AlertDescription>
            </Alert>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* ForeFlight Card */}
              <Card className="overflow-hidden">
                 <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 p-6">
                   <div className="flex h-full flex-col justify-between">
                     <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">Industry Standard</Badge><Badge variant="outline" className="bg-white/10 text-white">Student Discount</Badge></div>
                     <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">ForeFlight</h3><p className="text-sm text-white/80">Electronic Flight Bag</p></div>
                   </div>
                 </div>
                 <CardContent className="p-6">
                   <p className="text-sm text-muted-foreground">The industry-leading electronic flight bag platform that combines powerful flight planning, charts, weather, and navigation into one seamless app.</p>
                   <div className="mt-4 flex flex-wrap gap-2"><Badge variant="secondary">Flight Planning</Badge><Badge variant="secondary">Charts</Badge><Badge variant="secondary">Weather</Badge><Badge variant="secondary">Logbook</Badge></div>
                 </CardContent>
                 <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                   <span className="text-xs text-muted-foreground">Subscription Required</span>
                   <Button variant="ghost" size="sm" asChild><Link href="https://foreflight.com" target="_blank" className="flex items-center gap-1">Visit <ExternalLink className="h-3 w-3" /></Link></Button>
                 </CardFooter>
              </Card>
              {/* Garmin Pilot Card */}
              <Card className="overflow-hidden">
                 <div className="h-40 bg-gradient-to-r from-green-600 to-green-800 p-6">
                   <div className="flex h-full flex-col justify-between">
                     <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">Comprehensive</Badge><Badge variant="outline" className="bg-white/10 text-white">Student Discount</Badge></div>
                     <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">Garmin Pilot</h3><p className="text-sm text-white/80">Electronic Flight Bag</p></div>
                   </div>
                 </div>
                 <CardContent className="p-6">
                   <p className="text-sm text-muted-foreground">A powerful alternative to ForeFlight with excellent integration with Garmin avionics and a comprehensive suite of flight planning and navigation tools.</p>
                   <div className="mt-4 flex flex-wrap gap-2"><Badge variant="secondary">Flight Planning</Badge><Badge variant="secondary">Charts</Badge><Badge variant="secondary">Weather</Badge><Badge variant="secondary">Synthetic Vision</Badge></div>
                 </CardContent>
                 <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                   <span className="text-xs text-muted-foreground">Subscription Required</span>
                   <Button variant="ghost" size="sm" asChild><Link href="https://fly.garmin.com/fly-garmin/garmin-pilot/" target="_blank" className="flex items-center gap-1">Visit <ExternalLink className="h-3 w-3" /></Link></Button>
                 </CardFooter>
              </Card>
              {/* CloudAhoy Card */}
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-orange-500 to-orange-700 p-6">
                   <div className="flex h-full flex-col justify-between">
                     <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">Training Tool</Badge><Badge variant="outline" className="bg-white/10 text-white">Student Discount</Badge></div>
                     <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">CloudAhoy</h3><p className="text-sm text-white/80">Flight Debriefing</p></div>
                   </div>
                 </div>
                <CardContent className="p-6">
                   <p className="text-sm text-muted-foreground">A powerful flight debriefing tool that allows you to record and analyze your flights, helping you identify areas for improvement and track your progress.</p>
                   <div className="mt-4 flex flex-wrap gap-2"><Badge variant="secondary">Flight Analysis</Badge><Badge variant="secondary">3D Playback</Badge><Badge variant="secondary">Maneuver Scoring</Badge></div>
                 </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                   <span className="text-xs text-muted-foreground">Free Trial Available</span>
                   <Button variant="ghost" size="sm" asChild><Link href="https://www.cloudahoy.com/" target="_blank" className="flex items-center gap-1">Visit <ExternalLink className="h-3 w-3" /></Link></Button>
                 </CardFooter>
              </Card>
            </div>
            <div className="mt-8 rounded-lg bg-muted p-6">
              <h3 className="font-display text-xl font-semibold">Flight Planning Resources</h3>
              <p className="mt-2 text-muted-foreground">
                These essential flight planning tools will help you prepare for cross-countries and develop professional
                planning habits.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div><span className="font-medium">SkyVector</span><p className="text-sm text-muted-foreground">Free online flight planning with aeronautical charts and weather information.</p><Button variant="link" size="sm" className="h-6 p-0 text-xs" asChild><Link href="https://skyvector.com" target="_blank">Visit Website</Link></Button></div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div><span className="font-medium">1800WXBrief</span><p className="text-sm text-muted-foreground">Official source for weather briefings, flight plans, and NOTAMs from Leidos Flight Service.</p><Button variant="link" size="sm" className="h-6 p-0 text-xs" asChild><Link href="https://www.1800wxbrief.com" target="_blank">Visit Website</Link></Button></div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                   <div><span className="font-medium">Aviation Weather Center (AWC)</span><p className="text-sm text-muted-foreground">Official source for aviation weather products including METARs, TAFs, and weather charts.</p><Button variant="link" size="sm" className="h-6 p-0 text-xs" asChild><Link href="https://aviationweather.gov" target="_blank">Visit Website</Link></Button></div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Support Resources Tab Content */}
        {currentTab === 'support' && (
          <div className="space-y-6 pt-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold pb-4">Student Support Resources</h2>
              <p className="text-muted-foreground">
                Embarking on your journey to become a professional pilot is both exhilarating and demanding. While the
                challenges are significant, the support systems in place are designed to ensure you not only succeed but
                thrive.
              </p>
            </div>
            <Alert className="bg-amber-50 border-amber-200">
              <Lightbulb className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Personal Note from an Instructor</AlertTitle>
              <AlertDescription className="text-amber-700">
                Leveraging these resources effectively can make all the difference in your training experience. Don't try
                to go it alone—the most successful pilots know when to ask for help and how to build a strong support
                network.
              </AlertDescription>
            </Alert>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Mental Health and Performance Support */}
              <Card>
                <CardHeader className="bg-gradient-to-r from-aa-blue/10 to-aa-navy/10">
                  {/* ... */}
                </CardHeader>
                <CardContent className="pt-6">
                  {/* ... */}
                </CardContent>
              </Card>
              {/* Mentorship Programs */}
              <Card>
                <CardHeader className="bg-gradient-to-r from-aa-blue/10 to-aa-navy/10">
                  {/* ... */}
                </CardHeader>
                <CardContent className="pt-6">
                  {/* ... */}
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Dedicated Support Staff */}
              <Card>
                {/* ... */}
              </Card>
              {/* Peer Support */}
              <Card>
                {/* ... */}
              </Card>
            </div>
          </div>
        )}

        {/* Test Prep Tab Content */}
        {currentTab === 'test' && (
          <div className="space-y-6 pt-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold">Test Prep & Study Resources</h2>
              <p className="text-muted-foreground">
                Preparing for written exams and checkrides is a significant part of your training. These tools and
                strategies will help you excel in these assessments.
              </p>
            </div>
            <Alert className="bg-amber-50 border-amber-200">
              <Lightbulb className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Personal Note from an Instructor</AlertTitle>
              <AlertDescription className="text-amber-700">
                There's a lot of pressure around the FAA written exams—but here's the truth: they're very passable if you
                study the right way. You don't need to reinvent the wheel. Just use the tools that work, stay consistent,
                and you'll knock them out with confidence. For me—and pretty much every cadet I've met—the golden ticket
                was Sheppard Air. If you're serious about passing with a high score, this is where you start.
              </AlertDescription>
            </Alert>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Sheppard Air */}
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex justify-between"><Badge variant="outline" className="bg-white/10 text-white">#1 Recommended</Badge></div>
                    <div className="mt-auto"><h3 className="font-display text-xl font-bold text-white">Sheppard Air</h3><p className="text-sm text-white/80">The King of Written Exam Prep</p></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Sheppard Air is a test prep software built specifically for FAA written exams. It's designed around one concept: memorization mastery. Their system uses a guided study method that trains you to lock in every question and answer from the FAA test bank.</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Why It Works:</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>• Direct question exposure – You're studying real FAA-style questions</li><li>• Smart repetition system – Their software helps you master every question</li><li>• Confidence building – By test time, you'll have seen every possible variation</li></ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Which Tests It Covers:</h4>
                    <div className="mt-2 flex flex-wrap gap-2"><Badge variant="secondary">Instrument</Badge><Badge variant="secondary">Commercial</Badge><Badge variant="secondary">CFI / CFII</Badge><Badge variant="secondary">FOI</Badge><Badge variant="secondary">ATP</Badge></div>
                    <p className="mt-2 text-xs text-muted-foreground">(Note: They do not currently offer a Private Pilot version.)</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-3">
                  <span className="text-xs text-muted-foreground">Paid software—around $45 per test</span>
                  <Button variant="ghost" size="sm" asChild><Link href="https://www.sheppardair.com/" target="_blank" className="flex items-center gap-1">Visit <ExternalLink className="h-3 w-3" /></Link></Button>
                </CardFooter>
              </Card>
              {/* Other Test Prep Tools */}
              <Card>
                {/* ... */}
              </Card>
            </div>
            <div className="mt-8 rounded-lg bg-muted p-6">
              <h3 className="font-display text-xl font-semibold">How to Make the Most of Your Study Time</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {/* ... 5 grid divs ... */} 
              </div>
            </div>
            <Alert className="bg-aa-blue/10 text-aa-blue">
              <GraduationCap className="h-4 w-4" />
              <AlertTitle>Final Thought: Don't Study to Pass—Study to Fly</AlertTitle>
              <AlertDescription>
                Written exams are just one step in your journey—but they matter. The knowledge you lock in now becomes the
                foundation for every decision you make in the air. Use the tools. Follow the process. Trust the system.
                Thousands of pilots have gone before you—and now it's your turn.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* ACS Guide Tab Content */}
        {currentTab === 'acs' && (
          <div className="space-y-6 pt-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold">
                Understanding the Airman Certification Standards (ACS)
              </h2>
              <p className="text-muted-foreground">
                The Airman Certification Standards (ACS) is your roadmap to success on every checkride. Understanding how
                to use it effectively will transform your approach to training and give you confidence.
              </p>
            </div>
            <Alert className="bg-amber-50 border-amber-200">
              <Lightbulb className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Personal Note from an Instructor</AlertTitle>
              <AlertDescription className="text-amber-700">
                When I first started my flight training, the checkride felt like a mysterious gatekeeper—unpredictable and
                intimidating. Then I discovered the Airman Certification Standards (ACS), and it was like someone handed
                me the playbook. Understanding the ACS transformed my approach to training and gave me the confidence to
                tackle each phase head-on.
              </AlertDescription>
            </Alert>
            <div className="grid gap-6 md:grid-cols-2">
              {/* What is the ACS? */}
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5 text-aa-blue" />What is the ACS?</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">The Airman Certification Standards (ACS) is the FAA's comprehensive guide detailing the knowledge, skills, and risk management practices you need to master for each pilot certificate and rating. It replaced the older Practical Test Standards (PTS) to provide a more integrated and systematic approach to pilot certification.</p>
                  <div className="mt-4">
                     <h4 className="text-sm font-medium">Key Components of the ACS:</h4>
                     <ul className="mt-2 space-y-1 text-sm text-muted-foreground"><li>1. <span className="font-medium">Areas of Operation:</span> Broad categories that organize related tasks (e.g., Preflight Preparation, Takeoffs, Landings).</li><li>2. <span className="font-medium">Tasks:</span> Specific pilot operations within each Area of Operation (e.g., Normal Takeoff and Climb).</li><li>3. <span className="font-medium">Elements:</span> Each Task is broken down into:<ul className="ml-6 mt-1 space-y-1"><li>• <span className="font-medium">Knowledge:</span> Information you must know.</li><li>• <span className="font-medium">Risk Management:</span> Identifying and mitigating risks associated with the task.</li><li>• <span className="font-medium">Skills:</span> Physical actions and maneuvers you must perform.</li></ul></li></ul>
                  </div>
                </CardContent>
              </Card>
              {/* How to Access & Use the ACS */}
              <Card>
                 <CardHeader><CardTitle className="flex items-center gap-2"><Download className="h-5 w-5 text-aa-blue" />How to Access & Use the ACS</CardTitle></CardHeader>
                 <CardContent>
                   <div className="space-y-4">
                     <div>
                       <h4 className="text-sm font-medium">Accessing the ACS:</h4>
                       <p className="mt-1 text-sm text-muted-foreground">The ACS for various certificates and ratings are available on the FAA's website. For example:</p>
                       <Button variant="link" size="sm" className="h-6 p-0 text-xs mt-1" asChild><Link href="https://www.faa.gov/training_testing/testing/acs" target="_blank">Access FAA ACS Documents</Link></Button>
                     </div>
                     <div>
                       <h4 className="text-sm font-medium">Using the ACS Effectively:</h4>
                       <ul className="mt-1 space-y-1 text-sm text-muted-foreground"><li>1. <span className="font-medium">Start Early:</span> Familiarize yourself with the ACS from the beginning of your training.</li><li>2. <span className="font-medium">Integrate into Training:</span> Align your study and practice sessions with the Areas of Operation and Tasks outlined in the ACS.</li><li>3. <span className="font-medium">Self-Assessment:</span> Use the ACS as a checklist to evaluate your proficiency in each task.</li><li>4. <span className="font-medium">Targeted Improvement:</span> Focus on the Knowledge, Risk Management, and Skill elements where you identify weaknesses.</li></ul>
                     </div>
                   </div>
                 </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Why the ACS Matters */}
              <Card>
                 <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-aa-blue" />Why the ACS Matters</CardTitle></CardHeader>
                 <CardContent>
                   <div className="space-y-4">
                     <div>
                       <h4 className="text-sm font-medium">For Your Training:</h4>
                       <ul className="mt-1 space-y-1 text-sm text-muted-foreground"><li>• <span className="font-medium">Clarity:</span> The ACS provides clear expectations, eliminating guesswork about what you need to know and do.</li><li>• <span className="font-medium">Structure:</span> It offers a structured path, helping you and your instructor plan lessons effectively.</li></ul>
                     </div>
                     <div>
                       <h4 className="text-sm font-medium">For Your Checkride:</h4>
                       <ul className="mt-1 space-y-1 text-sm text-muted-foreground"><li>• <span className="font-medium">Transparency:</span> Examiners use the ACS to conduct checkrides, so you'll know exactly what to expect.</li><li>• <span className="font-medium">Preparation:</span> By training to ACS standards, you're essentially rehearsing for the checkride every day.</li></ul>
                     </div>
                   </div>
                 </CardContent>
              </Card>
              {/* Tips for Mastering the ACS */}
              <Card>
                 <CardHeader><CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-aa-blue" />Tips for Mastering the ACS</CardTitle></CardHeader>
                 <CardContent>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-green-600" /><div><span className="font-medium">Cross-Reference</span><p className="text-xs text-muted-foreground">Each task in the ACS references specific FAA materials. Use these references to deepen your understanding.</p></div></li>
                     <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-green-600" /><div><span className="font-medium">Scenario-Based Training</span><p className="text-xs text-muted-foreground">Incorporate real-world scenarios to enhance your risk management skills as outlined in the ACS.</p></div></li>
                     <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-green-600" /><div><span className="font-medium">Continuous Review</span><p className="text-xs text-muted-foreground">Regularly revisit the ACS to track your progress and adjust your training focus as needed.</p></div></li>
                   </ul>
                 </CardContent>
              </Card>
            </div>
            <Alert className="bg-aa-blue/10 text-aa-blue">
              <FileText className="h-4 w-4" />
              <AlertTitle>Final Thought: Embrace the ACS as Your Training Partner</AlertTitle>
              <AlertDescription>
                The ACS is more than just a document; it's a strategic tool designed to guide you through your pilot
                training journey. By embracing it fully, you align yourself with the FAA's expectations and set the stage
                for success—not just in passing checkrides, but in becoming a competent and confident pilot.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>

      {/* CTA Section - Restore full content */}
      <div className="mt-12 rounded-xl bg-gradient-to-r from-aa-blue to-aa-navy p-8 text-white">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold">Ready to maximize your training?</h2>
            <p className="mt-2 text-white/90">
              Access all these resources and more through the AACA Student Portal. Log in now to start exploring.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button size="lg" className="bg-white text-aa-navy hover:bg-white/90">
              Access Student Portal
            </Button>
          </div>
        </div>
      </div>

      {/* Footer - Restore full content */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          Resources are updated regularly. Last updated: March 2025. Contact{" "}
          <span className="text-aa-blue">support@aaca.com</span> for assistance.
        </p>
        <Separator className="my-4 mx-auto w-24" />
        <p>© 2025 American Airlines Cadet Academy. All rights reserved.</p>
      </div>

      {/* Add Guide Navigation */}
      <GuideNavigation 
        prevPage={prevPage ?? undefined}
        nextPage={nextPage ?? undefined}
        currentPageUrl={pathname}
        nextTopicSegue={nextTopicSegue} 
      />
    </div>
  );
} 