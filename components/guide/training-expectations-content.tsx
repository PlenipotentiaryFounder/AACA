"use client"

import React, { useState } from "react"
import { usePathname } from 'next/navigation'
import { 
  ChevronRight, // Needed for GuideNavigation and potentially within prose lists
  Clock,
  Plane,
  Award,
  BarChart,
  Calendar,
  Users,
  Gauge,
  Layers,
  Milestone,
  School,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Heart,
  ShieldCheck 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineHeader,
  TimelineIcon,
  TimelineTitle,
} from "@/components/ui/timeline"
import { PremiumTabs } from "@/components/premium-tabs" 
import { GuideNavigation } from "@/components/guide-navigation"

// Type definitions needed for props
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface PageLink {
    name: string;
    url: string;
}

// Interface for client component props
interface TrainingExpectationsContentProps {
  tabs: PremiumTab[]; // Use local type
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

// Client Component Definition
function TrainingExpectationsContent({ 
  tabs,
  prevPage,
  nextPage,
  nextTopicSegue
}: TrainingExpectationsContentProps) {
  const pathname = usePathname() 
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <>
      {/* Main Content Tabs using PremiumTabs */}
      <section className="mb-16">
        <PremiumTabs
          tabs={tabs}
          defaultValue={tabs[0].value}
          currentValue={currentTab} 
          onChange={setCurrentTab} 
          title="Training Expectations"
        />

        {/* Tab Content - Conditional Rendering */}
        <div className="pt-8">
          {currentTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold">Overview of the Training Structure</h2>
                      <p className="text-muted-foreground">Different Schools, Same Goal</p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="lead">
                      One of the first things you'll notice when talking to other cadets is that everyone's training
                      experience is slightly different. That's because the American Airlines Cadet Academy partners with
                      multiple flight schools across the U.S., each with its own instructors, aircraft, and training
                      environment.
                    </p>
                    <p>
                      Some of you might be training in Mesa, Arizona, where the skies are clear 360 days a year. Others
                      might be in Sanford, Florida, dodging afternoon thunderstorms. Some will be learning in high-tech
                      G1000-equipped aircraft, while others will be flying traditional steam-gauge panels.
                    </p>
                    <div className="bg-card rounded-xl border p-6 my-8">
                      <h3 className="text-xl font-display font-semibold mb-4">What Matters Most</h3>
                      <p className="mb-4">
                        Every school follows the same structured pathway based on FAA training requirements. No matter where
                        you train, you will go through the same core phases of flight training, take the same checkrides,
                        and graduate with the same certifications.
                      </p>
                      <p className="italic text-muted-foreground">
                        "When I started at CAE in Falcon Field, I remember talking to cadets at other locations and
                        realizing how small the aviation world really is. Some of us had different instructors, different
                        airports, and different challenges, but when we got together, we were all dealing with the same
                        things—prepping for checkrides, handling tough flights, and pushing through training."
                      </p>
                    </div>
                    <h3 className="text-xl font-display font-semibold mt-8 mb-4">Standardized Progression</h3>
                    <p>
                      Even though each flight school operates independently, your training follows a structured progression
                      that every cadet experiences. You're not just randomly going out and flying when you feel like it—this
                      is a carefully planned program designed to move you efficiently from zero experience to a professional
                      pilot.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      {/* Standardized Progression Cards */}
                      <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Ground School & Simulators</span>
                        </div>
                        <p className="text-sm text-muted-foreground">You'll start with ground school and simulator sessions before stepping into the airplane.</p>
                      </div>
                       <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Student Pilot Certificate</span>
                        </div>
                        <p className="text-sm text-muted-foreground">You'll earn your Student Pilot Certificate, your first official milestone.</p>
                      </div>
                       <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Private Pilot License (PPL)</span>
                        </div>
                        <p className="text-sm text-muted-foreground">You'll progress through the Private Pilot License stage, where you'll experience the thrill of your first solo flight.</p>
                      </div>
                       <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Instrument Rating</span>
                        </div>
                        <p className="text-sm text-muted-foreground">You'll move on to Instrument training, learning to fly in low-visibility conditions using only your instruments.</p>
                      </div>
                       <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Commercial Pilot License (CPL)</span>
                        </div>
                        <p className="text-sm text-muted-foreground">You'll earn your Commercial Pilot License, which allows you to get paid to fly.</p>
                      </div>
                      <div className="bg-card rounded-lg p-4 border">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Certified Flight Instructor (CFI/CFII)</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Many cadets will continue on to become Certified Flight Instructors to gain experience and build flight hours.</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-semibold mt-8 mb-4">You Get to Train Like a Pro</h3>
                    <p>Here's the best part: you're not just learning how to fly—you're training like an airline pilot from day one.</p>
                    <p>Think about it—most pilots who go through traditional flight training bounce between different schools, instructors, and aircraft, trying to piece everything together over several years. They're constantly navigating financing hurdles, scheduling issues, and inconsistent training methods.</p>
                    <p className="font-medium">You don't have to deal with any of that.</p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                      <h3 className="text-xl font-display font-semibold mb-4 text-primary">The AACA Advantage</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>You get to train in a professional environment where instructors treat you like a future airline pilot, not just another flight student.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>You get to follow a fast-paced, regimented training schedule that keeps you moving forward.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>You get to train alongside cadets who are just as serious about this career as you are—future coworkers, captains, and lifelong aviation friends.</span>
                        </li>
                      </ul>
                    </div>
                     <div className="bg-card rounded-xl border p-6 my-8">
                       <h3 className="text-xl font-display font-semibold mb-4">Final Thought: Every School, One Mission</h3>
                       <p className="mb-4">No matter where you're training—Arizona, Florida, Texas, or anywhere else—you're part of the same program, following the same path, and working toward the same future. It doesn't matter which location you're at. What matters is how you train, how you show up, and how seriously you take this opportunity.</p>
                       <p className="font-medium">Because at the end of the day, every cadet at AACA is chasing the same thing: A seat in an American Airlines cockpit.</p>
                       <p className="font-medium mt-2">And the only thing standing between you and that goal? How much effort you put in.</p>
                     </div>
                  </div>
              </div>
            </div>
          )}

          {currentTab === 'stages' && (
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Milestone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold">The Stages of Flight Training & Key Checkpoints</h2>
                      <p className="text-muted-foreground">Your journey from student to professional pilot</p>
                    </div>
                  </div>
                   <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
                      <p className="lead">Flight training isn't just about logging hours—it's about hitting key milestones that mark your progression from a student pilot to a fully certified commercial pilot. Every step builds on the last, pushing you closer to your goal of becoming an airline pilot.</p>
                      <p>Some of these moments will feel like massive achievements (because they are). Others will be smaller but still critical steps in your training. Either way, you'll remember these stages for the rest of your life.</p>
                   </div>
                   <Timeline className="my-8">
                      {/* TimelineItems for Stages */}
                      <TimelineItem>
                          <TimelineHeader>
                            <TimelineDot><TimelineIcon><Award className="h-4 w-4" /></TimelineIcon></TimelineDot>
                            <TimelineTitle>Student Pilot Certificate</TimelineTitle>
                          </TimelineHeader>
                          <TimelineContent className="pt-2 pb-8">
                            <div className="bg-card rounded-lg p-5 border">
                              <h3 className="text-lg font-semibold mb-2">Your First Official Step</h3>
                              <p className="text-sm text-muted-foreground">This initial certification allows you to begin flight training with an instructor. It involves verifying your identity, age, and English proficiency. It's the foundational step, like getting your learner's permit before driving.</p>
                            </div>
                          </TimelineContent>
                          <TimelineConnector />
                      </TimelineItem>
                       <TimelineItem>
                          <TimelineHeader>
                             <TimelineDot><TimelineIcon><Plane className="h-4 w-4" /></TimelineIcon></TimelineDot>
                             <TimelineTitle>First Solo</TimelineTitle>
                          </TimelineHeader>
                          <TimelineContent className="pt-2 pb-8">
                             <div className="bg-card rounded-lg p-5 border">
                                <h3 className="text-lg font-semibold mb-2">A Moment You'll Never Forget</h3>
                                <p className="text-sm text-muted-foreground">After demonstrating proficiency in basic maneuvers and emergency procedures, your instructor will endorse you for solo flight. Taking off alone for the first time is a huge confidence booster and a major milestone in every pilot's journey.</p>
                             </div>
                          </TimelineContent>
                          <TimelineConnector />
                       </TimelineItem>
                        <TimelineItem>
                           <TimelineHeader>
                              <TimelineDot><TimelineIcon><Award className="h-4 w-4" /></TimelineIcon></TimelineDot>
                              <TimelineTitle>Private Pilot License (PPL)</TimelineTitle>
                           </TimelineHeader>
                           <TimelineContent className="pt-2 pb-8">
                              <div className="bg-card rounded-lg p-5 border">
                                 <h3 className="text-lg font-semibold mb-2">The First Major Certification</h3>
                                <p className="text-sm text-muted-foreground">Requires passing a written knowledge test and a practical flight test (checkride) with an FAA examiner. This license allows you to fly single-engine aircraft for personal use, carrying passengers day or night in visual flight conditions (VFR).</p>
                              </div>
                           </TimelineContent>
                           <TimelineConnector />
                        </TimelineItem>
                         <TimelineItem>
                            <TimelineHeader>
                               <TimelineDot><TimelineIcon><Gauge className="h-4 w-4" /></TimelineIcon></TimelineDot>
                               <TimelineTitle>Instrument Rating (IR)</TimelineTitle>
                            </TimelineHeader>
                            <TimelineContent className="pt-2 pb-8">
                               <div className="bg-card rounded-lg p-5 border">
                                  <h3 className="text-lg font-semibold mb-2">Learning to Fly Without Seeing the Ground</h3>
                                <p className="text-sm text-muted-foreground">This rating requires another written test and checkride. It qualifies you to fly under Instrument Flight Rules (IFR), relying solely on aircraft instruments for navigation and control in clouds or low visibility. Essential for airline operations.</p>
                               </div>
                            </TimelineContent>
                            <TimelineConnector />
                         </TimelineItem>
                          <TimelineItem>
                             <TimelineHeader>
                                <TimelineDot><TimelineIcon><Clock className="h-4 w-4" /></TimelineIcon></TimelineDot>
                                <TimelineTitle>Time-Building</TimelineTitle>
                             </TimelineHeader>
                             <TimelineContent className="pt-2 pb-8">
                                <div className="bg-card rounded-lg p-5 border">
                                   <h3 className="text-lg font-semibold mb-2">Some of the Best Flying You'll Ever Do</h3>
                                <p className="text-sm text-muted-foreground">After PPL and IR, you need to build flight hours to meet the requirements for the Commercial license (typically 250 hours total time). This phase involves cross-country flights, practicing maneuvers, and gaining diverse experience.</p>
                                </div>
                             </TimelineContent>
                             <TimelineConnector />
                          </TimelineItem>
                           <TimelineItem>
                              <TimelineHeader>
                                 <TimelineDot><TimelineIcon><Award className="h-4 w-4" /></TimelineIcon></TimelineDot>
                                 <TimelineTitle>Commercial Pilot License (CPL)</TimelineTitle>
                              </TimelineHeader>
                              <TimelineContent className="pt-2 pb-8">
                                 <div className="bg-card rounded-lg p-5 border">
                                    <h3 className="text-lg font-semibold mb-2">Turning Pro</h3>
                                <p className="text-sm text-muted-foreground">Achieved after passing another written test and a more demanding checkride. This license allows you to be paid for flying services (e.g., cargo, aerial photography, flight instruction after obtaining CFI). Requires higher precision in maneuvers.</p>
                                 </div>
                              </TimelineContent>
                              <TimelineConnector />
                           </TimelineItem>
                            <TimelineItem>
                               <TimelineHeader>
                                  <TimelineDot><TimelineIcon><School className="h-4 w-4" /></TimelineIcon></TimelineDot>
                                  <TimelineTitle>Certified Flight Instructor (CFI/CFII)</TimelineTitle>
                               </TimelineHeader>
                               <TimelineContent className="pt-2 pb-8">
                                  <div className="bg-card rounded-lg p-5 border">
                                     <h3 className="text-lg font-semibold mb-2">Learning to Teach, Mastering the Craft</h3>
                                <p className="text-sm text-muted-foreground">Many pilots become CFIs to build the flight time required for airline jobs (typically 1500 hours). Requires passing two written tests and two checkrides (CFI and CFII for instrument instruction). Teaching solidifies your own knowledge and skills immensely.</p>
                                  </div>
                               </TimelineContent>
                               <TimelineConnector />
                            </TimelineItem>
                             <TimelineItem>
                                <TimelineHeader>
                                   <TimelineDot><TimelineIcon><Plane className="h-4 w-4" /></TimelineIcon></TimelineDot>
                                   <TimelineTitle>From CFI to the Airlines</TimelineTitle>
                                </TimelineHeader>
                                <TimelineContent className="pt-2 pb-8">
                                   <div className="bg-card rounded-lg p-5 border">
                                      <h3 className="text-lg font-semibold mb-2">Your Next Steps</h3>
                                <p className="text-sm text-muted-foreground">As a CFI, you'll instruct students while logging flight hours. Once you reach the Airline Transport Pilot (ATP) minimums (often 1500 hours, reducible via certain pathways like AACA), you'll be eligible for regional airline First Officer positions, eventually flowing to American Airlines.</p>
                                   </div>
                                </TimelineContent>
                             </TimelineItem>
                   </Timeline>
              </div>
            </div>
          )}

          {currentTab === 'timeline' && (
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">The Training Timeline – The 13-Month Plan</h2>
                    <p className="text-muted-foreground">Designed for Success</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                   <p className="lead">At AACA, we put a lot of emphasis on staying on track and graduating on time. Not because we want to rush you, but because this program is designed to move you efficiently from where you are right now to where you want to be—a professional pilot.</p>
                   <p className="font-medium">And here's the best part: That goal is closer than you think.</p>
                   <p>In just 12 to 13 months from today, you will be a certified flight instructor, getting paid to fly airplanes, and well on your way to the airlines.</p>
                   <p>That's not something to stress about—that's something to be excited about.</p>
                   <p>This program isn't about pressure—it's about momentum. You've already taken one of the biggest steps just by getting here. Now, all you have to do is keep moving forward.</p>
                   <h3 className="text-xl font-display font-semibold mt-8 mb-4">Why Staying on Track Matters</h3>
                   <p>There are two big reasons why graduating on time is so important:</p>
                   <div className="grid md:grid-cols-2 gap-6 my-8">
                       <div className="bg-card rounded-xl border p-6">
                         <div className="flex items-center gap-3 mb-4">
                           <div className="h-10 w-10 rounded-full bg-aa-blue/10 flex items-center justify-center"><Plane className="h-5 w-5 text-aa-blue" /></div>
                           <h4 className="text-lg font-semibold">Your Spot at a Regional Airline is Already Waiting</h4>
                         </div>
                         <p className="text-sm text-muted-foreground">The conditional job offer you received is contingent on graduating within the expected timeframe. Delays could impact your seniority number and start date at the regional carrier.</p>
                       </div>
                       <div className="bg-card rounded-xl border p-6">
                         <div className="flex items-center gap-3 mb-4">
                           <div className="h-10 w-10 rounded-full bg-aa-blue/10 flex items-center justify-center"><BarChart className="h-5 w-5 text-aa-blue" /></div>
                           <h4 className="text-lg font-semibold">Your Loan is Tied to a Timeline</h4>
                         </div>
                         <p className="text-sm text-muted-foreground">Your student loan (if applicable) is structured around this timeline. Significant delays might require loan extensions or create financial pressure later.</p>
                       </div>
                   </div>
                    <div className="bg-card rounded-xl border p-6 my-8">
                       <h4 className="text-lg font-semibold mb-4">What Happens if You Fall Behind?</h4>
                       <p className="mb-2">Life happens—sometimes cadets face unexpected setbacks (illness, family emergencies, temporary training struggles). The academy understands this and has support systems in place.</p>
                       <p className="mb-4">However, consistently falling behind schedule due to lack of preparation, poor study habits, or not taking training seriously can lead to progress reviews and, in some cases, removal from the program. This isn't meant to scare you, but to emphasize the importance of treating this like the professional career path it is.</p>
                       <Alert className="bg-primary/10 border-primary/20">
                          <AlertTitle>Here's the good news</AlertTitle>
                          <AlertDescription>There is plenty of time built into this program to finish on schedule, even accounting for minor weather delays or brief interruptions. The key is consistency and efficiency.</AlertDescription>
                       </Alert>
                    </div>
                    <h3 className="text-xl font-display font-semibold mt-8 mb-4">The 13-Month Plan: Designed for Success</h3>
                    <p>This timeline isn't arbitrary. It's based on years of experience training professional pilots. It balances intensive learning with enough time to absorb complex material and practice maneuvers to proficiency.</p>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                       <div className="bg-card rounded-xl border p-6">
                         <h4 className="text-lg font-semibold mb-4 text-aa-red">The ones who fall behind usually:</h4>
                         <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                            <li>Don't prioritize study time outside of lessons</li>
                            <li>Show up unprepared for flight or ground sessions</li>
                            <li>Treat it like college, not a career accelerator</li>
                            <li>Get easily distracted by outside commitments</li>
                            <li>Fail to address weak areas proactively</li>
                         </ul>
                       </div>
                       <div className="bg-card rounded-xl border p-6">
                         <h4 className="text-lg font-semibold mb-4 text-primary">The cadets who finish on time (or early!) are the ones who:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                            <li>Study consistently, every single day</li>
                            <li>Prepare thoroughly for every single lesson</li>
                            <li>Treat training like their full-time job (because it is)</li>
                            <li>Minimize distractions and stay focused</li>
                            <li>Ask questions and seek help immediately when stuck</li>
                         </ul>
                       </div>
                    </div>
                     <div className="bg-muted p-5 rounded-lg italic text-sm my-6">
                       <p>"One of the biggest things I learned in training was that momentum is everything. Every day you study, every lesson you prepare for, every hour you fly—it all adds up. Fall behind on one thing, and it snowballs. Stay ahead, and you build confidence and make faster progress. Treat every single day like it matters... because it does."</p>
                     </div>
                     <h3 className="text-xl font-display font-semibold mt-8 mb-4">Total Immersion = Total Success</h3>
                     <p>The beauty of AACA is the immersive environment. You eat, sleep, and breathe aviation. This isn't a hobbyist flight school where you fly once a week. You're expected to dedicate yourself fully.</p>
                     <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                       <h4 className="text-lg font-semibold mb-4 text-primary">That means:</h4>
                       <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>Studying before and after every flight.</span>
                          </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>Chair-flying maneuvers and procedures until they're second nature.</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>Prepping for your next lesson the day before.</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>Living and breathing aviation safety and professionalism.</span>
                           </li>
                       </ul>
                     </div>
                     <p>This intensity is designed to accelerate your learning and prepare you for the rigors of airline operations.</p>
                      <div className="bg-card rounded-xl border p-6 my-8">
                         <h3 className="text-xl font-display font-semibold mb-4">Your Future is Closer Than You Think</h3>
                         <p className="mb-4">Think about it: just over a year from now, you could be a professional pilot, building flight time as a CFI, and on a direct path to flying passengers for the world's largest airline. That future starts with how you approach your training today.</p>
                         <div className="bg-gradient-to-br from-aa-blue to-aa-navy text-white p-4 rounded-lg mt-6">
                           <p className="font-medium text-center">Stay focused. Stay efficient. Stay committed. Every day you train is a day closer to the airlines.</p>
                         </div>
                      </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'daily' && (
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">Daily Life as a Cadet</h2>
                    <p className="text-muted-foreground">What to expect day-to-day</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">Life at the American Airlines Cadet Academy isn't like a traditional college schedule. There's no "Monday-Wednesday-Friday" class structure, no cramming for a test the night before, and definitely no skipping a lecture and catching up later. This is a full-time, fully immersive program designed to train you like a professional pilot.</p>
                  <p>That means your daily life will revolve around flight lessons, ground school, simulator training, checkride prep, and self-study. The pace is fast, and every day matters. But just like professional pilots, you also need to manage your time wisely to stay sharp, healthy, and at the top of your game.</p>
                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">What a Typical Day Looks Like</h3>
                  <p>No two days in flight training are exactly the same, but here's a general idea of what your schedule might include:</p>
                  <div className="grid md:grid-cols-3 gap-4 my-6">
                     <Card>
                       <CardHeader className="pb-2"><CardTitle className="text-lg flex items-center"><span className="text-primary mr-2">☀️</span> Morning</CardTitle></CardHeader>
                       <CardContent>
                          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                             <li>Early flight lesson or simulator block</li>
                             <li>Pre-flight briefing with instructor</li>
                             <li>Ground school session</li>
                             <li>Weather check & flight planning</li>
                          </ul>
                       </CardContent>
                     </Card>
                     <Card>
                       <CardHeader className="pb-2"><CardTitle className="text-lg flex items-center"><span className="text-primary mr-2">🌤️</span> Midday</CardTitle></CardHeader>
                       <CardContent>
                           <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                             <li>Flight lesson or simulator block</li>
                             <li>Post-flight debriefing</li>
                             <li>Lunch break / Study time</li>
                             <li>Group study session</li>
                          </ul>
                       </CardContent>
                     </Card>
                     <Card>
                       <CardHeader className="pb-2"><CardTitle className="text-lg flex items-center"><span className="text-primary mr-2">🌆</span> Afternoon/Evening</CardTitle></CardHeader>
                       <CardContent>
                          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                             <li>Late flight lesson or ground school</li>
                             <li>Self-study / Reviewing material</li>
                             <li>Preparing for the next day's lesson</li>
                             <li>Workout / Relaxation / Social time</li>
                          </ul>
                       </CardContent>
                     </Card>
                  </div>
                   <Alert>
                     <AlertTitle className="flex items-center gap-2"><Lightbulb className="h-4 w-4" /> Pro Tip</AlertTitle>
                     <AlertDescription>Professional pilots prepare for flights well in advance. Don't wait until an hour before your lesson to start planning. Review the objectives, weather, and procedures the night before.</AlertDescription>
                   </Alert>
                   <h3 className="text-xl font-display font-semibold mt-8 mb-4">Structuring Your Days for Maximum Learning</h3>
                   <p>The best cadets don't just go through the motions—they actively train, study, and refine their skills every single day. Here’s how to make the most of your time:</p>
                   <Accordion type="single" collapsible className="w-full my-6">
                       <AccordionItem value="item-1">
                         <AccordionTrigger><span className="font-medium flex items-center gap-2"><BookOpen className="h-4 w-4"/>1. Prioritize Study Time</span></AccordionTrigger>
                         <AccordionContent className="px-4 prose dark:prose-invert max-w-none">
                            <p>Schedule dedicated study blocks every day, even on days you don't fly. Don't just read—actively engage with the material. Use flashcards, explain concepts out loud, chair-fly maneuvers. Consistency beats cramming every time.</p>
                         </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="item-2">
                          <AccordionTrigger><span className="font-medium flex items-center gap-2"><Heart className="h-4 w-4"/>2. Take Care of Your Health</span></AccordionTrigger>
                          <AccordionContent className="px-4 prose dark:prose-invert max-w-none">
                             <p>Get enough sleep (crucial for learning and safety!), eat well, and incorporate exercise. Flying and studying are mentally taxing. A healthy body supports a sharp mind. Don't sacrifice your well-being for an extra hour of study—it's counterproductive in the long run.</p>
                          </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="item-3">
                          <AccordionTrigger><span className="font-medium flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>3. Learn to Manage Stress & Avoid Burnout</span></AccordionTrigger>
                          <AccordionContent className="px-4 prose dark:prose-invert max-w-none">
                            <p>This program is intense. Find healthy ways to de-stress—exercise, hobbies, spending time with fellow cadets, talking to mentors. Recognize the signs of burnout (fatigue, lack of motivation, irritability) and address them early. It's okay to take short breaks to recharge.</p>
                          </AccordionContent>
                       </AccordionItem>
                   </Accordion>
                    <div className="bg-card rounded-xl border p-6 my-8">
                       <h3 className="text-xl font-display font-semibold mb-4">Final Thought: Build a Cadet Lifestyle</h3>
                       <p className="mb-4">Success at AACA isn't just about passing tests; it's about adopting the lifestyle of a professional pilot. This means discipline, time management, continuous learning, prioritizing health, and supporting your peers.</p>
                       <p>Every day in this program is shaping you into the pilot you're going to be. Take control of that process, and success will follow.</p>
                    </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'community' && (
            <div className="space-y-8">
             <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">Cadet Culture & Community</h2>
                    <p className="text-muted-foreground">Building lifelong professional relationships</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">One of the greatest strengths of the American Airlines Cadet Academy isn't just the training—it's the people. When you join this program, you're stepping into a network of future airline pilots who will be training alongside you, supporting you, and ultimately, flying with you one day.</p>
                  <p>This isn't like traditional flight training, where students come and go, doing their own thing. At AACA, you're part of something bigger. The people you train with today will become your colleagues, mentors, and lifelong friends in the industry.</p>
                  <p className="font-medium">And if you really want to succeed here? Surround yourself with people who are as serious about this career as you are.</p>
                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">The Strength of the Cadet Network</h3>
                  <p>Flight training is challenging. You'll have amazing days and frustrating days. Having a strong support system of fellow cadets who understand exactly what you're going through is invaluable. You can:</p>
                   <ul className="list-disc pl-6 space-y-1 mb-6">
                        <li>Form study groups to tackle complex ground school topics.</li>
                        <li>Practice chair-flying procedures together.</li>
                        <li>Quiz each other before stage checks and checkrides.</li>
                        <li>Share tips, resources, and encouragement.</li>
                        <li>Vent about tough lessons or celebrate successes.</li>
                   </ul>
                  <div className="bg-muted p-5 rounded-lg italic text-sm my-6">
                     <p>"When I first started, I didn't think much about networking. I just wanted to fly. But honestly, my study group saved me more than once. Explaining concepts to each other made things click, and prepping for checkrides together made them way less intimidating. Plus, now those guys are flying at Envoy and Piedmont, and we still keep in touch."</p>
                  </div>
                   <h3 className="text-xl font-display font-semibold mt-8 mb-4">Building Connections & Fostering the Culture</h3>
                   <p>The cadet culture at AACA is different from what you'll find at most flight schools. You're not in this alone. You're training alongside some of the most driven, committed, and professional aspiring pilots in the country.</p>
                   <p>And that means two things:</p>
                   <div className="grid md:grid-cols-2 gap-6 my-8">
                       <div className="bg-card rounded-xl border p-6">
                         <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><Users className="h-5 w-5 text-primary" /></div>
                            <h4 className="text-lg font-semibold">1. Surround Yourself with the Right People</h4>
                         </div>
                         <p className="text-sm text-muted-foreground mb-4">Seek out cadets who are serious, motivated, and professional. Study with them. Learn from them. Push each other to be better. Avoid negativity and drama—it's counterproductive to your training.</p>
                         <div className="bg-muted p-4 rounded-lg mt-4">
                           <p className="font-medium">Reality Check:</p>
                           <p className="text-sm">The aviation industry is filled with high-performing professionals. Start acting like one now. Your reputation begins on day one.</p>
                         </div>
                       </div>
                       <div className="bg-card rounded-xl border p-6">
                         <div className="flex items-center gap-3 mb-4">
                           <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><Plane className="h-5 w-5 text-primary" /></div>
                           <h4 className="text-lg font-semibold">2. Stay Connected Beyond Training</h4>
                         </div>
                         <p className="text-sm text-muted-foreground mb-4">Use academy events, social media groups (used responsibly!), and study sessions to build genuine connections. These aren't just classmates; they're your future colleagues.</p>
                         <div className="bg-muted p-4 rounded-lg mt-4 text-sm italic">
                           <p>"Some of the best advice I got in training came from cadets who were just a step ahead of me. They'd share gouge on instructors or tips for a specific checkride maneuver. That camaraderie is huge."</p>
                         </div>
                       </div>
                   </div>
                   <h3 className="text-xl font-display font-semibold mt-8 mb-4">Lifelong Professional Relationships</h3>
                   <p>The people you train with today? They're going to show up in your career over and over again.</p>
                   <p>Years from now, when you're flying for American Airlines, don't be surprised if you run into:</p>
                   <div className="grid md:grid-cols-3 gap-4 my-6">
                       <div className="bg-card rounded-lg p-4 border">
                         <div className="flex items-center gap-2 mb-2"><Plane className="h-5 w-5 text-primary" /><span className="font-medium">A former study partner</span></div>
                         <p className="text-sm text-muted-foreground">who's now your first officer</p>
                       </div>
                        <div className="bg-card rounded-lg p-4 border">
                           <div className="flex items-center gap-2 mb-2"><Plane className="h-5 w-5 text-primary" /><span className="font-medium">A former instructor</span></div>
                           <p className="text-sm text-muted-foreground">who's now a captain</p>
                        </div>
                        <div className="bg-card rounded-lg p-4 border">
                           <div className="flex items-center gap-2 mb-2"><Plane className="h-5 w-5 text-primary" /><span className="font-medium">A cadet who trained ahead of you</span></div>
                           <p className="text-sm text-muted-foreground">who's now a mentor at your airline</p>
                        </div>
                   </div>
                   <p>This isn't just theory—it happens all the time. Aviation is a small, tight-knit community, and the relationships you build here will follow you for decades.</p>
                    <div className="bg-card rounded-xl border p-6 my-8">
                      <h3 className="text-xl font-display font-semibold mb-4">Final Thought: You're Training with Your Future Coworkers</h3>
                      <p className="mb-4">Look around. The cadets in this program? These aren't just your classmates. These are future captains, first officers, and industry leaders.</p>
                      <p className="mb-4">Some of them will go on to be your mentors. Some will be the ones who vouch for you when you're applying for your first airline job. Some will be the ones flying with you on the line, years from now, as you push back from the gate in an American Airlines jet.</p>
                      <p className="font-medium">You're not just learning how to fly airplanes—you're entering a lifelong professional network.</p>
                      <p className="font-medium mt-2">Make the most of it.</p>
                   </div>
                </div>
             </div>
            </div>
          )}
        </div>
      </section>

      {/* Add GuideNavigation at the bottom */}
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined} 
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined} 
        currentPageUrl={pathname}
        nextTopicSegue={nextTopicSegue}
      />
    </>
  );
}

export default TrainingExpectationsContent;
