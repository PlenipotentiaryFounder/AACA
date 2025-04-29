"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ChevronRight, Award, BookOpen, Users, Compass, GraduationCap, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";

// Define the types locally *within the client component file*
// Although they might be defined in the server component too for prop validation,
// having them here makes this component self-contained for type checking its own props.
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
    name: string;
    url: string;
}

// Props interface for this client component
interface WelcomeContentProps {
  tabs: PremiumTab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

// The actual client component function
export default function WelcomeContent({
  tabs,
  prevPage,
  nextPage,
  nextTopicSegue
}: WelcomeContentProps) {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <>
      <section className="mb-16">
         <PremiumTabs
           tabs={tabs}
           defaultValue={tabs[0].value}
           currentValue={currentTab}
           onChange={setCurrentTab}
           title="Welcome Overview"
         />

         <div className="pt-8">
            {currentTab === 'welcome' && (
                <div className="space-y-8">
                  <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Find the icon from the tabs prop matching the current value - more robust than hardcoding */} 
                        {tabs.find(tab => tab.value === 'welcome')?.icon} 
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold">From One Cadet to Another</h2>
                        <p className="text-muted-foreground">A personal welcome from an AACA graduate</p>
                      </div>
                    </div>
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                       <p className="lead">
                         If you're holding this handbook, you're either about to start your journey at the American Airlines
                         Cadet Academy—or you've just taken your first steps. Either way, congratulations. You've made it into
                         one of the most exciting and rewarding training programs in the country, and your career as a
                         professional pilot is officially underway.
                       </p>
                       <p className="font-medium">Now, take a deep breath—because things move fast from here.</p>
                       <p>
                         I remember my first days in the program. The excitement. The pressure. The rush of stepping into a
                         world I had dreamed about for years. But even with great instructors, detailed syllabi, and a clear
                         training path, there were still moments where I had questions I didn't even know how to ask. Moments
                         where I just wanted someone a step ahead of me to say, "Here's what's coming next, and here's how to
                         handle it."
                       </p>
                       <p>That's why this handbook was created.</p>
                       <p>
                         It's not here to replace anything you'll be given at the Academy—it's here to enhance it. To give you
                         the kind of insight, clarity, and real-world advice that only cadets who've gone through the program
                         can share. This isn't corporate. It's not sugar-coated. It's the straight talk you'd get from a good
                         upperclassman, the kind who's walked the path, learned a few things the hard way, and wants to help
                         you fly through it smarter, stronger, and more prepared.
                       </p>
                       <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                         <h3 className="text-xl font-display font-semibold mb-4 text-primary">Inside, you'll learn:</h3>
                         <ul className="space-y-2">
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>How to study efficiently and actually retain what matters</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>How to walk into checkrides with confidence—not hope</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>How to bounce back from tough flights and keep your momentum</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>How to manage burnout, time pressure, and nerves</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>How to build a professional reputation that will follow you into the airlines</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                             <span>How to think like a pilot—not just act like one</span>
                           </li>
                         </ul>
                       </div>
                       <p>
                         This program is demanding. It's meant to be. You're learning how to operate aircraft in complex
                         airspace under pressure—and do it safely, consistently, and professionally. That takes more than
                         skill. It takes the right mindset.
                       </p>
                       <p>
                         That's what this handbook is really about. Helping you sharpen your habits, focus your time, and
                         develop the mental framework that sets great cadets apart.
                       </p>
                       <p className="font-medium">
                         You already earned your seat. Now it's time to earn your wings—with clarity, consistency, and purpose.
                       </p>
                       <p className="font-medium">Let's get to work.</p>
                       <p className="text-right italic">— An AACA Graduate</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="hover-card-effect">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-10 w-10 rounded-full bg-aa-red/10 flex items-center justify-center">
                            <Award className="h-5 w-5 text-aa-red" />
                          </div>
                          <h3 className="font-display text-xl font-semibold">Congratulations & Welcome</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          You've been chosen from over 60,000 applicants. This isn't just a flight school—this is a direct
                          pipeline to American Airlines.
                        </p>
                        <Link
                          href="/welcome/overview" // Note: Consider if this link is correct
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                        >
                          Read More <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </CardContent>
                    </Card>
                    <Card className="hover-card-effect">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Compass className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-display text-xl font-semibold">The Start of Something Incredible</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          You're about to push yourself harder than ever before. The best pilots aren't made in their comfort
                          zones.
                        </p>
                        <Link
                          href="/welcome/overview" // Note: Consider if this link is correct
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                        >
                          Read More <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
            )}

            {currentTab === 'purpose' && (
                <div className="space-y-8">
                   <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                           {/* Find the icon from the tabs prop */} 
                           {tabs.find(tab => tab.value === 'purpose')?.icon} 
                         </div>
                         <div>
                            <h2 className="text-2xl font-display font-bold">The Purpose of This Guide</h2>
                            <p className="text-muted-foreground">Made by Students, for Students</p>
                         </div>
                      </div>
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                         <p className="lead">
                            If there's one thing you'll realize quickly, it's that flight training comes at you fast. One day
                            you're learning basic aerodynamics, the next you're briefing complex instrument approaches, managing
                            emergencies, and juggling checkride prep. It's a lot.
                         </p>
                         <p className="font-medium">That's exactly why this guide exists.</p>
                         <p>
                            This isn't some corporate manual written by people who've never set foot in a cockpit. This was built
                            by students who have been exactly where you are. Every section, every piece of advice, every tip in
                            here comes from real cadets who have gone through the same ground schools, flown the same aircraft,
                            taken the same checkrides, and faced the same challenges you're about to tackle.
                         </p>
                         <p>
                           If you ever find yourself struggling—wondering how to get ahead, how to manage the workload, how to
                           prepare for a tough stage check, or even just how to stay sane through it all—this guide is your first
                           resource.
                         </p>
                          <div className="bg-card rounded-xl border p-6 my-8">
                             <h3 className="text-xl font-display font-semibold mb-4">What This Guide Covers (and What It Doesn't)</h3>
                             <p className="mb-4">
                               Think of this as your unofficial upperclassman mentor. It won't teach you how to fly a steep turn or
                               recite FARs—your instructors and official materials handle that. Instead, this guide focuses on the
                               <em>how</em> behind the <em>what</em>:
                             </p>
                             <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                   <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                   <span>Effective study strategies for long-term retention, not just test-passing.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                   <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                   <span>Mindset adjustments to handle pressure, setbacks, and the intensity of training.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                   <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                   <span>Practical tips for checkride preparation beyond just knowing the maneuvers.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                   <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                   <span>Insights into building the professionalism expected of an American Airlines pilot from Day 1.</span>
                                </li>
                             </ul>
                             <p className="font-medium">It's designed to supplement, not replace, your official training.</p>
                          </div>
                          <h3 className="text-xl font-display font-semibold mt-8 mb-4">How to Use This Guide</h3>
                           <p>Don't just read it once and put it away. Keep it handy. Refer back to sections as you approach different stages of training. Use it as a starting point for discussions with your instructors and fellow cadets.</p>
                          <p>The goal isn't just to get you through the program, but to help you excel and build a foundation for a long, successful career.</p>
                          <div className="bg-muted p-5 rounded-lg italic text-sm my-6">
                             <p>"I wish I'd had something like this when I started. Would've saved me a lot of stress trying to figure things out on my own. Use it."</p>
                           </div>
                      </div>
                   </div>
                </div>
            )}

            {currentTab === 'expectations' && (
                 <div className="space-y-8">
                    <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                             {/* Find the icon from the tabs prop */} 
                             {tabs.find(tab => tab.value === 'expectations')?.icon} 
                           </div>
                           <div>
                              <h2 className="text-2xl font-display font-bold">What It Means to Be an AACA Cadet</h2>
                              <p className="text-muted-foreground">Professionalism, Dedication, and the Path Ahead</p>
                           </div>
                        </div>
                       <div className="prose prose-lg max-w-none dark:prose-invert">
                          <p className="lead">
                             Being accepted into the American Airlines Cadet Academy isn't just about getting into a flight school;
                             it's about stepping onto a direct pathway to becoming a pilot for the world's largest airline. That
                             comes with a unique set of expectations and opportunities.
                          </p>
                          <p className="font-medium">This isn't just training; it's your first step into a professional career.</p>
                          <p>
                            From day one, you're expected to conduct yourself with the professionalism, dedication, and commitment
                            that American Airlines demands of its pilots. This means more than just showing up on time—it's about
                            your attitude, your preparation, your integrity, and how you represent the program and the airline.
                          </p>
                          <h3 className="text-xl font-display font-semibold mt-8 mb-4">Core Expectations</h3>
                          <div className="grid md:grid-cols-2 gap-6 my-8">
                             <Card>
                                <CardHeader className="pb-2">
                                   <CardTitle className="text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Professionalism</CardTitle>
                                </CardHeader>
                                <CardContent>
                                   <p className="text-sm text-muted-foreground">Appearance, conduct, communication, and respect for instructors, staff, and peers. Treat training like your job.</p>
                                </CardContent>
                             </Card>
                              <Card>
                                 <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary"/> Preparation & Dedication</CardTitle>
                                 </CardHeader>
                                 <CardContent>
                                   <p className="text-sm text-muted-foreground">Consistent study, thorough preparation for every lesson, and a commitment to mastering the material beyond minimum standards.</p>
                                 </CardContent>
                              </Card>
                              <Card>
                                 <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2"><Users className="h-5 w-5 text-primary"/> Integrity & Honesty</CardTitle>
                                 </CardHeader>
                                 <CardContent>
                                    <p className="text-sm text-muted-foreground">Upholding academic honesty, reporting errors or difficulties truthfully, and taking ownership of your training progress.</p>
                                 </CardContent>
                              </Card>
                               <Card>
                                  <CardHeader className="pb-2">
                                     <CardTitle className="text-lg flex items-center gap-2"><Compass className="h-5 w-5 text-primary"/> Adaptability & Resilience</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <p className="text-sm text-muted-foreground">Handling challenges, learning from mistakes, managing stress effectively, and maintaining a positive attitude through difficulties.</p>
                                  </CardContent>
                               </Card>
                          </div>
                          <div className="bg-card rounded-xl border p-6 my-8">
                             <h3 className="text-xl font-display font-semibold mb-4">Why These Expectations Matter</h3>
                             <p className="mb-4">
                               American Airlines isn't just looking for pilots who can fly; they're looking for future leaders who
                               embody their values. The habits and reputation you build here will directly impact your transition
                               to the regional carriers and eventually to American.
                             </p>
                             <p className="italic text-muted-foreground">
                               "Your instructors aren't just teaching you to fly; they're evaluating your potential as a future AA
                               pilot every single day. How you handle pressure, how you study, how you interact with others—it all
                               matters."
                             </p>
                          </div>
                           <h3 className="text-xl font-display font-semibold mt-8 mb-4">Embrace the Opportunity</h3>
                           <p>This program is designed to challenge you and push you to become the best pilot you can be. Embrace the standards, support your fellow cadets, and commit fully to the process. The rewards—a fulfilling career flying for American Airlines—are worth the effort.</p>
                           <p className="font-medium">You're not just a student; you're a future American Airlines pilot in training. Act like it.</p>
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