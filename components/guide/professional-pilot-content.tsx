"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Handshake,
  Heart,
  HelpingHand,
  Lightbulb,
  MessageSquare,
  Plane,
  Search,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";

// Define types needed for props
type PremiumTab = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

interface PageLink {
    name: string;
    url: string;
}

// Define props interface for this component
interface ProfessionalPilotContentProps {
    tabs: PremiumTab[];
    prevPage: PageLink | null;
    nextPage: PageLink | null;
    nextTopicSegue: string;
}

// Component Function
export default function ProfessionalPilotContent({
    tabs,
    prevPage,
    nextPage,
    nextTopicSegue
}: ProfessionalPilotContentProps) {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  // Helper function to render content based on the current tab
  const renderTabContent = () => {
    switch (currentTab) {
      case 'professionalism':
        return (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-bold text-aa-navy">
                   What It Means to Be a Professional Pilot
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Your career doesn't start after graduation—it starts right now.
                </p>
                <Alert className="mt-6 border-aa-blue bg-aa-blue/10">
                  <Lightbulb className="h-4 w-4 text-aa-blue" />
                  <AlertTitle>Key Insight</AlertTitle>
                  <AlertDescription>
                    You might still be a student, but make no mistake: you're already in the industry. Every instructor
                    you fly with, every classmate you train beside, every examiner who signs your certificate—that's your
                    network. That's your reputation.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold">The Aviation World Is Smaller Than You Think</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      <span className="text-sm font-semibold">186K</span>
                    </div>
                    <div>
                      <p className="text-sm">
                        As of 2025, there are approximately 186,000 active ATP certificate holders in the United States.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                       <span className="text-sm font-semibold">15K</span>
                    </div>
                    <div>
                      <p className="text-sm">
                        American Airlines employs about 15,000 pilots. That's less than 10% of all ATP holders nationwide.
                      </p>
                    </div>
                  </div>
                  <p className="font-medium">That's your entire industry.</p>
                  <p className="text-sm text-muted-foreground">
                    And because the pool is so concentrated, word travels fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="h-2 bg-aa-blue" />
                <CardHeader>
                  <CardTitle>Connections Matter</CardTitle>
                  <CardDescription>Today's relationships shape tomorrow's opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <Users className="mr-2 h-4 w-4 text-aa-blue mt-0.5 shrink-0" />
                      <span>
                        The instructor you flew with during your first solo? They might be your captain one day.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Users className="mr-2 h-4 w-4 text-aa-blue mt-0.5 shrink-0" />
                      <span>
                        That quiet cadet you studied with for your instrument written? They could be on your interview
                        panel in five years.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Users className="mr-2 h-4 w-4 text-aa-blue mt-0.5 shrink-0" />
                      <span>
                        A DPE you impressed on your private pilot checkride might write your letter of recommendation down
                        the road.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-medium">
                    Every interaction is a brick in the house of your career. Whether that house stands tall or collapses?
                    That's on you.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-green-500" />
                <CardHeader>
                  <CardTitle>Professionalism = Consistency + Integrity</CardTitle>
                  <CardDescription>Being reliable in all situations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Being a professional doesn't mean acting robotic. It means being reliable.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Show up early.</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="mr-2 h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Be prepared.</span>
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="mr-2 h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Take ownership when you mess up—and learn from it.</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="mr-2 h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Treat everyone with respect, even when no one's watching.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-amber-500" />
                <CardHeader>
                  <CardTitle>You're Already Building Your Resume</CardTitle>
                  <CardDescription>What really matters in recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    When it comes time to apply to your first CFI job, or a regional airline, or even a legacy carrier,
                    guess what your recommendations will focus on?
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300 shrink-0">
                        ✗
                      </span>
                      Not your steep turns.
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300 shrink-0">
                        ✗
                      </span>
                      Not your power-off 180s.
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300 shrink-0">
                        ✗
                      </span>
                      Not your ACS tolerances.
                    </p>
                  </div>
                  <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/30">
                    <p className="text-sm font-medium">They'll talk about:</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Your attitude</li>
                      <li>Your work ethic</li>
                      <li>Your ability to make others better</li>
                      <li>Whether you were the kind of cadet that instructors wanted to fly with</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-xl border bg-muted/50 p-6">
              <h3 className="font-display text-xl font-semibold">This Program Sets a Higher Bar—and That's the Point</h3>
              <p className="mt-2 text-muted-foreground">
                At AACA, you're not just any student pilot. You're training under the American Airlines banner. That comes
                with expectations—and opportunity.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-background p-4">
                  <p className="text-center text-lg font-medium text-aa-blue">Your instructors will expect more.</p>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <p className="text-center text-lg font-medium text-aa-blue">Your peers will expect more.</p>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <p className="text-center text-lg font-medium text-aa-blue">You should expect more from yourself.</p>
                </div>
              </div>
              <p className="mt-6 text-center font-display text-lg font-medium">
                Because when you treat every flight, every briefing, every conversation like a reflection of your future
                career—you're already ahead of 90% of the field.
              </p>
              <p className="mt-2 text-center font-display text-lg">
                You're not just becoming a pilot.{" "}
                <span className="font-semibold">You're becoming someone others want to fly with.</span>
              </p>
            </div>
          </div>
        );
      case 'networking':
        return (
           <div className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="font-display text-2xl font-bold text-aa-navy">Networking & Career Advancement</h2>
                  <p className="mt-2 text-muted-foreground">
                    The aviation industry runs on connections—start building yours now.
                  </p>
                  <Alert className="mt-6 border-aa-blue bg-aa-blue/10">
                    <Handshake className="h-4 w-4 text-aa-blue" />
                    <AlertTitle>Industry Reality</AlertTitle>
                    <AlertDescription>
                      In aviation, what you know gets you in the door—who you know keeps it open. That's not just a cliché.
                      It's how the real world works in every phase of your career.
                    </AlertDescription>
                  </Alert>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-display text-lg font-semibold">Why It Matters More Than You Think</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The aviation industry is tight-knit. It runs on relationships, trust, and word-of-mouth. When
                    recruiters, chief pilots, or hiring managers are looking to bring someone on board, they don't just look
                    at hours and checkrides—they ask:
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="rounded-lg bg-muted p-3">
                      <p className="text-sm italic">"Who recommended them?"</p>
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <p className="text-sm italic">"What's their reputation like?"</p>
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <p className="text-sm italic">
                        "Would I want to share a cockpit with this person on a four-day trip?"
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium">
                    That's the difference between getting an interview and being forgotten. Your name is your brand. Build
                    it early, and build it well.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold">Tactical Ways to Start Networking as a Cadet</h3>
                <p className="mt-2 text-muted-foreground">
                  You don't need to wait until you're a CFI or at a job fair to start networking. You can (and should) begin
                  building your professional circle from day one:
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border bg-background p-4 hover:shadow-md transition-shadow">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium">Connect with Classmates & Instructors</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>Add everyone you train with on LinkedIn. These are your future colleagues.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          Include a short message with your invites: "Great flying with you this week—looking forward to
                          staying connected!"
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-background p-4 hover:shadow-md transition-shadow">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium">Attend Aviation Career Events</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          Whether it's a local airport expo, a Women in Aviation chapter meeting, or a national airline job
                          fair—go.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>Don't just attend—ask questions. Introduce yourself. Be seen.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-background p-4 hover:shadow-md transition-shadow">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                      <Plane className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium">Use Your Cadet Mentorship Program</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          Every cadet is assigned a mentor pilot from American Airlines—an actual line pilot who volunteers
                          their time to help you succeed.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          Reach out. Schedule a Zoom call. Ask what their path looked like, what they wish they knew
                          earlier, and how they made themselves stand out.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-background p-4 hover:shadow-md transition-shadow">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium">Stay Active in the Cadet Community</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>Join your school's cadet groups on Facebook, Discord, or WhatsApp.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>Share resources. Study together. Build camaraderie.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>This is your tribe—don't go through training alone.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border bg-muted/50 p-6">
                  <h3 className="font-display text-xl font-semibold">Long-Term Mindset: Plant Seeds Now, Reap Later</h3>
                  <p className="mt-2 text-muted-foreground">
                    You won't always see the benefit of networking right away. But years from now, you'll thank yourself.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg bg-background p-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 shrink-0">
                          <Users className="h-4 w-4" />
                        </div>
                        <p className="text-sm">
                          That classmate you helped pass ground school? They might be a recruiter at your dream airline in
                          five years.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-background p-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 shrink-0">
                          <Plane className="h-4 w-4" />
                        </div>
                        <p className="text-sm">
                          That instructor you trained with? They might invite you into a Part 135 gig while you're building
                          time.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-background p-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 shrink-0">
                          <Award className="h-4 w-4" />
                        </div>
                        <p className="text-sm">
                          That mentor you built a relationship with? They might personally recommend you for your first Part
                          121 interview.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-medium">
                    You never know which connection will change your life. But one thing's for sure—if you don't make them,
                    they can't.
                  </p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-aa-blue to-aa-navy p-6 text-white">
                  <h3 className="font-display text-xl font-semibold">Be Memorable for the Right Reasons</h3>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-center text-lg font-medium">Be the cadet who lifts others up.</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-center text-lg font-medium">Be the one who takes initiative.</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-center text-lg font-medium">
                        Be the one who shows up—professionally, consistently, and with purpose.
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-center text-lg">
                    Your network is your career safety net. Build it strong. Start now.
                  </p>
                </div>
              </div>
           </div>
        );
      case 'community':
        return (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="font-display text-2xl font-bold text-aa-navy">
                    Volunteering & Being Part of the Aviation Community
                  </h2>
                  <p className="mt-2 text-muted-foreground">The best pilots don't just fly—they give back.</p>
                  <Alert className="mt-6 border-green-500 bg-green-500/10">
                    <HelpingHand className="h-4 w-4 text-green-500" />
                    <AlertTitle>Community Impact</AlertTitle>
                    <AlertDescription>
                      There's a difference between a good pilot and a great one. Good pilots pass checkrides, stay current,
                      and do their job well. Great pilots help others rise. They mentor, they give back, and they strengthen
                      the aviation community for the next generation.
                    </AlertDescription>
                  </Alert>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-display text-lg font-semibold">Why Giving Back Matters</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The people you admire in this industry—the instructors who inspired you, the captains who lead with
                    grace, the mentors who made time for you—they didn't get there by keeping to themselves. They gave back.
                    And you can, too.
                  </p>
                  <div className="mt-4 rounded-lg bg-muted p-4">
                    <p className="text-sm">
                      Volunteering doesn't just help others—it reinforces your own knowledge, sharpens your communication
                      skills, and earns the respect of those around you. It builds your legacy while you're still in
                      training.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold">Ways to Give Back (Starting Now)</h3>
                <p className="mt-2 text-muted-foreground">
                  You don't need to have thousands of hours or a captain's epaulets to start contributing. You just need to
                  show up, care, and take action.
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                   <div className="group rounded-xl border bg-background p-5 transition-all hover:border-green-500 hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 transition-colors group-hover:bg-green-500 group-hover:text-white dark:bg-green-900 dark:text-green-300 shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium">Mentor Newer Cadets</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>Even if you're only a few weeks ahead, you know something they don't.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          Offer to quiz a classmate, walk someone through a maneuver, or explain a tough topic after ground
                          school.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="group rounded-xl border bg-background p-5 transition-all hover:border-green-500 hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 transition-colors group-hover:bg-green-500 group-hover:text-white dark:bg-green-900 dark:text-green-300 shrink-0">
                      <Plane className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium">Volunteer with Your Flight School</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>Help organize orientation days or student events.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>Offer to speak with incoming classes about what to expect.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>This shows initiative, leadership, and commitment to the program.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="group rounded-xl border bg-background p-5 transition-all hover:border-green-500 hover:shadow-md">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 transition-colors group-hover:bg-green-500 group-hover:text-white dark:bg-green-900 dark:text-green-300 shrink-0">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium">Get Involved with National Organizations</h4>
                    <p className="mt-2 text-sm">Join respected aviation groups that align with your values and goals:</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          <span className="font-medium">AOPA</span> – Advocacy, education, scholarships.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          <span className="font-medium">EAA</span> – Homebuilding, fly-ins, youth outreach.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                        <span>
                          <span className="font-medium">WAI</span> – Empowering women in all sectors of aviation.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
               <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border bg-muted/50 p-6">
                  <h3 className="font-display text-xl font-semibold">How This Pays Off</h3>
                  <p className="mt-2 text-muted-foreground">
                    Cadets who give back tend to see multiple benefits throughout their career:
                  </p>
                  <div className="mt-4 space-y-4">
                     <div className="rounded-lg border bg-background p-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Learn faster</p>
                          <p className="text-sm text-muted-foreground">Because they reinforce what they teach</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Get recommended more often</p>
                          <p className="text-sm text-muted-foreground">Instructors notice leadership</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                          <Award className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Build stronger reputations</p>
                          <p className="text-sm text-muted-foreground">You become known as someone who lifts others up</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 shrink-0">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Feel more fulfilled</p>
                          <p className="text-sm text-muted-foreground">
                            Because you're part of something bigger than yourself
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-medium">
                    Volunteering may not earn you flight hours—but it earns you something more valuable: respect, trust, and
                    influence.
                  </p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-green-600 to-green-800 p-6 text-white">
                  <h3 className="font-display text-xl font-semibold">
                    The Industry Needs Leaders—Start Acting Like One Now
                  </h3>
                  <div className="mt-6 space-y-4">
                    <p className="text-lg">
                      You don't have to wait until you're a CFI or an airline FO to make a difference. Start where you are,
                      with what you know.
                    </p>
                    <p className="text-lg">Show up for others. Set the tone. Be the pilot people look up to.</p>
                  </div>
                  <p className="mt-6 text-center text-2xl font-light italic">A rising tide lifts all wings.</p>
                </div>
              </div>
          </div>
        );
      case 'learning':
        return (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="font-display text-2xl font-bold text-aa-navy">
                    Always Be Learning – The Mindset of a Great Pilot
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Good pilots know the rules. Great pilots never stop evolving.
                  </p>
                  <Alert className="mt-6 border-amber-500 bg-amber-500/10">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    <AlertTitle>Pilot Wisdom</AlertTitle>
                    <AlertDescription>
                      "A good pilot is always learning." No matter how many hours you've logged, how many ratings you've
                      earned, or how confident you feel behind the controls—complacency is the enemy of safety.
                    </AlertDescription>
                  </Alert>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-display text-lg font-semibold">The Danger of Thinking You're "Done"</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    It's easy to let your foot off the gas after passing a checkride. But aviation doesn't give out finish
                    lines.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center rounded-lg bg-muted p-3">
                      <FileText className="mr-2 h-4 w-4 text-amber-500 shrink-0" />
                      <p className="text-sm">Regulations change.</p>
                    </div>
                    <div className="flex items-center rounded-lg bg-muted p-3">
                      <Compass className="mr-2 h-4 w-4 text-amber-500 shrink-0" />
                      <p className="text-sm">Airspace gets restructured.</p>
                    </div>
                    <div className="flex items-center rounded-lg bg-muted p-3">
                      <Plane className="mr-2 h-4 w-4 text-amber-500 shrink-0" />
                      <p className="text-sm">Procedures are revised.</p>
                    </div>
                    <div className="flex items-center rounded-lg bg-muted p-3">
                      <Zap className="mr-2 h-4 w-4 text-amber-500 shrink-0" />
                      <p className="text-sm">Technology evolves.</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium">
                    The skies don't stay the same—and neither can you. Treat every new flight, every briefing, every hangar
                    conversation as a chance to sharpen your edge.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold">How to Keep Learning—Beyond the Classroom</h3>
                <p className="mt-2 text-muted-foreground">
                  Here are simple, ongoing habits that will keep you sharp and growing long after you graduate:
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="group rounded-xl border bg-background p-5 transition-all hover:border-blue-500 hover:shadow-md">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-900 dark:text-blue-300 shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium">Read Safety Reports</h4>
                      <ul className="mt-3 space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>
                            <span className="font-medium">NASA ASRS:</span> Real reports from real pilots—learn from their
                            mistakes without making them.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>
                            <span className="font-medium">NTSB Reports:</span> Post-accident analysis with detailed lessons in
                            decision-making, systems knowledge, and situational awareness.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="group rounded-xl border bg-background p-5 transition-all hover:border-blue-500 hover:shadow-md">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-900 dark:text-blue-300 shrink-0">
                        <Search className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium">Watch Real-World Debriefs</h4>
                      <ul className="mt-3 space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>
                            YouTube creators like FlightChops, MzeroA, The Finer Points, and Mentour Pilot share breakdowns of
                            real flights and high-level lessons.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>Use these to see how professional pilots analyze, adapt, and explain complex scenarios.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="group rounded-xl border bg-background p-5 transition-all hover:border-blue-500 hover:shadow-md">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-900 dark:text-blue-300 shrink-0">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium">Stay Curious</h4>
                      <ul className="mt-3 space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>Pick one topic per week—weather, performance, aerodynamics—and go deeper than the ACS.</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>Talk to instructors and other pilots about how they approach it.</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>Ask "What don't I know yet?" and chase the answer.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="group rounded-xl border bg-background p-5 transition-all hover:border-blue-500 hover:shadow-md">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-900 dark:text-blue-300 shrink-0">
                        <Plane className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium">Keep Your Mental Game Sharp</h4>
                      <ul className="mt-3 space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>Chair fly regularly.</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>Visualize new emergencies.</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="mr-1 h-3 w-3 text-muted-foreground mt-1 shrink-0" />
                          <span>Try teaching a maneuver to a friend—it forces clarity and exposes knowledge gaps.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border bg-muted/50 p-6">
                    <h3 className="font-display text-xl font-semibold">The Best Pilots Aren't the Ones Who Know It All</h3>
                    <p className="mt-2 text-muted-foreground">They're the ones who never stop asking why.</p>
                    <div className="mt-6 rounded-lg bg-background p-6">
                      <p className="text-center text-lg">
                        When you show up with curiosity, humility, and consistency, people notice. You become the kind of
                        pilot others want to fly with—and the kind of aviator who inspires trust.
                      </p>
                      <p className="mt-4 text-center font-medium">
                        In this industry, your license is the beginning—not the finish line.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-aa-navy to-aa-blue p-6 text-white">
                    <h3 className="font-display text-xl font-semibold">The Sky Isn't the Limit—It's the Starting Point</h3>
                    <div className="mt-6 space-y-4">
                      <p className="text-lg">
                        You've earned your seat in this program. You'll earn your certificates, your ratings, your wings. But
                        the pilots who thrive—who really stand out—are the ones who commit to continuous growth.
                      </p>
                    </div>
                    <p className="mt-6 text-center text-2xl font-medium">
                      Always be learning. Always be leveling up. Always be that pilot.
                    </p>
                  </div>
                </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto">
      {/* Hero Section Removed - Now handled by GuidePageHeader */}

      {/* Alert Section */}
      <Alert className="mb-8 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
        <Users className="h-4 w-4" /> 
        <AlertTitle>Professional Development Matters</AlertTitle>
        <AlertDescription>
          Beyond flying skills, your professional conduct, networking abilities, and community involvement
          are critical factors that will shape your career trajectory. The aviation industry is small, and your
          reputation will follow you throughout your career.
        </AlertDescription>
      </Alert>

      {/* Main Content Area using PremiumTabs */}
      <section className="mb-16">
            <PremiumTabs
                tabs={tabs}
                defaultValue={tabs[0].value}
                currentValue={currentTab}
                onChange={setCurrentTab}
                title="Professional Pilot Topics" 
            />
            <div className="pt-8">
                {renderTabContent()}
            </div>
      </section>

      {/* CTA Section */}
      <div className="mt-12 rounded-xl bg-gradient-to-r from-aa-blue to-aa-navy p-8 text-white">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Ready to Build Your Professional Network?</h2>
            <p className="mt-2 opacity-90">
              Connect with American Airlines mentors, fellow cadets, and industry professionals through the AACA
              networking platform. Start building relationships that will last your entire career.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-aa-navy">
              Join AACA Connect
            </Button>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="mt-12">
        <h2 className="mb-6 font-display text-2xl font-bold">Related Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Networking Events Calendar</CardTitle>
              <CardDescription>Upcoming opportunities to connect with industry professionals</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                View and register for upcoming networking events, job fairs, and industry conferences where you can meet
                potential employers and mentors.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full">
                View Calendar
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Professional Development Workshops</CardTitle>
              <CardDescription>Enhance your soft skills and career readiness</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Access workshops on resume building, interview preparation, professional communication, and other
                essential career skills.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full">
                Browse Workshops
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Mentorship Program</CardTitle>
              <CardDescription>Connect with American Airlines pilots</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Learn how to make the most of your assigned mentor relationship and access additional mentorship
                opportunities within the program.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full">
                Mentorship Guide
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Guide Navigation */}
      <GuideNavigation 
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined}
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
} 