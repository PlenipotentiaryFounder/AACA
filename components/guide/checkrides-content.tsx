"use client";

// Imports moved from page.tsx
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Gauge,
  HeartPulse,
  Lightbulb,
  Plane,
  Shield,
  AlertTriangle,
  ArrowRight,
  Brain,
  UserCheck,
  Layers,
  UserCog,
  Users,
  PlaneTakeoff,
  MessageSquareQuote,
  LucideIcon, // Kept LucideIcon from original state
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PremiumTabs } from "@/components/premium-tabs"; // Correct import
import { GuideNavigation } from "@/components/guide-navigation"; 
import { AppSidebar } from "@/components/guide/app-sidebar";
import { SidebarInset } from "@/components/guide/sidebar-inset";
import { Tabs, TabsContent } from "@/components/ui/tabs"; // Correct import for Tabs and TabsContent

// Type definitions
type PremiumTab = {
  value: string;
  label: string;
  iconName?: string; // Matches server component data structure
  mobileLabel?: string;
};

type PageLink = {
  href: string;
  label: string;
};

// Prop interface
interface CheckridesContentProps {
  tabs: PremiumTab[]; // Expects tabs with iconName from server
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

// Component definition using props and integrated markdown content
export default function CheckridesContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: CheckridesContentProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0].value);
  const pathname = usePathname();

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Original Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-aa-blue to-aa-navy text-white mb-12">
        <div className="absolute inset-0 bg-[url('/images/cessna-in-flight-blue-sky.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">Chapter 7</Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Passing Your Checkrides
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
            The final hurdle—mastering the moment that counts
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="bg-white text-aa-navy hover:bg-white/90">
              Start Preparing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              View Checkride Resources <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4">Jump to specific checkride:</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guide/checkrides/private">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Private Pilot
                </Button>
              </Link>
              <Link href="/guide/checkrides/instrument">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Instrument Rating
                </Button>
              </Link>
               <Link href="/guide/checkrides/commercial">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Commercial Pilot
                </Button>
              </Link>
               <Link href="/guide/checkrides/cfi">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  Certified Flight Instructor (CFI)
                </Button>
              </Link>
               <Link href="/guide/checkrides/cfii">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 border-none text-white">
                  CFI - Instrument (CFII)
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 -mb-12 -mr-12 opacity-20 md:opacity-30">
          <div className="w-full h-full bg-[url('/images/mock_oral.jpg')] bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Original Alert */}
      <Alert className="bg-muted border-muted-foreground/20 mb-8">
         <Brain className="h-4 w-4" />
          <AlertTitle>A Note from Your Instructors</AlertTitle>
          <AlertDescription>
            Checkrides are more than just tests; they're rites of passage. We've seen countless students succeed, and the common thread is meticulous preparation combined with a calm, confident mindset. Use this guide, trust your training, and know that we're here to support you every step of the way. Fly safe, fly smart!
          </AlertDescription>
      </Alert>

      {/* Tabs Section with Integrated Markdown Content */}
      <section className="mb-16">
        <Tabs defaultValue={tabs[0].value} value={currentTab} onValueChange={setCurrentTab}>
          <PremiumTabs
            tabs={tabs} // Pass tabs from props
            title="Checkride Preparation"
            className="mb-8"
          />

          {/* Content populated from markdown */}
          <TabsContent value="what-is-checkride" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
            <h2>What Is a Checkride?</h2>
            <p>A checkride, officially known as a Practical Test, is the final examination required by the Federal Aviation Administration (FAA) to obtain a pilot certificate or rating. Unlike the written knowledge test, the checkride assesses both your theoretical knowledge and practical flying skills.</p>
            <p>Think of it as the ultimate validation of your training. It's conducted by a Designated Pilot Examiner (DPE), an experienced aviator authorized by the FAA to administer these tests.</p>
            <h3>Checkride vs. Stage Check</h3>
            <p>While similar in format, a checkride differs significantly from the stage checks you complete during your training. Stage checks are internal progress evaluations conducted by your flight school's check instructors. They ensure you're meeting training standards before moving to the next phase.</p>
            <p>A checkride, however, is the official FAA evaluation. Passing means earning your certificate or rating; failing means you'll need further training and have to retake the test. The stakes are higher, but the sense of accomplishment upon passing is immense.</p>
            <h3>How is it Conducted?</h3>
            <p>Checkrides typically consist of two main parts:</p>
            <ul>
              <li><strong>Oral Examination:</strong> A ground session where the DPE quizzes you on aviation knowledge relevant to the certificate or rating sought. This often involves scenario-based questions testing your understanding of regulations, aerodynamics, weather, aircraft systems, and decision-making.</li>
              <li><strong>Flight Portion:</strong> The practical flying test where you demonstrate proficiency in required maneuvers and procedures as outlined in the Airman Certification Standards (ACS).</li>
            </ul>
            <p>The entire process can take several hours, depending on the certificate or rating. The DPE's goal is to ensure you can consistently operate the aircraft safely and competently according to FAA standards.</p>
          </TabsContent>

          <TabsContent value="the-acs" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
             <h2>The Airman Certification Standards (ACS)</h2>
            <p>The Airman Certification Standards (ACS) is the official guide published by the FAA that outlines exactly what knowledge and skills you need to demonstrate to pass your checkride. Think of it as the "blueprint" for the test.</p>
            <p>For every task required (like slow flight, stalls, or navigation), the ACS details:</p>
            <ul>
              <li><strong>Objective:</strong> What you're trying to achieve with the maneuver or knowledge area.</li>
              <li><strong>Knowledge Areas:</strong> Specific topics the DPE might ask about during the oral exam related to that task.</li>
              <li><strong>Risk Management Elements:</strong> How to identify and mitigate hazards associated with the task.</li>
              <li><strong>Skills/Tolerances:</strong> The precise performance standards you must meet during the flight portion (e.g., maintaining altitude within +/- 100 feet).</li>
            </ul>
            <h3>Why It Matters</h3>
            <p>The ACS eliminates guesswork. It tells you and the DPE exactly what constitutes a successful performance. Knowing the ACS inside and out is crucial for several reasons:</p>
            <ul>
              <li><strong>Focuses Your Study:</strong> You know precisely what knowledge areas to master for the oral exam.</li>
              <li><strong>Defines Success:</strong> You understand the exact tolerances for each flight maneuver.</li>
              <li><strong>Builds Confidence:</strong> Familiarity with the standards reduces anxiety and helps you perform predictably.</li>
              <li><strong>Ensures Fairness:</strong> It provides an objective standard for the DPE's evaluation.</li>
            </ul>
            <Alert>
              <FileText className="h-4 w-4" />
              <AlertTitle>Know Your Tolerances!</AlertTitle>
              <AlertDescription>
                Being familiar with the ACS completion standards is non-negotiable. If the standard is +/- 100 feet, aim for +/- 50 feet in training. Knowing the limits allows you to self-correct during the checkride and understand if a deviation is within acceptable parameters. Download the relevant ACS for your checkride from the FAA website and make it your constant companion.
              </AlertDescription>
            </Alert>
          </TabsContent>

           <TabsContent value="the-oral-exam" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
            <h2>The Oral Exam: Demonstrating Knowledge</h2>
            <p>The oral portion of the checkride is typically the first part. It's a one-on-one discussion with the DPE designed to assess your understanding of aviation principles, regulations, and procedures relevant to the certificate or rating you're seeking.</p>
            <h3>Scenario-Based Testing</h3>
            <p>Modern oral exams heavily emphasize scenario-based questions (SBQs). Instead of just asking "What are the VFR weather minimums in Class D airspace?", the DPE might present a hypothetical flight scenario:</p>
            <blockquote>"Okay, we're planning a VFR flight from [Airport A] to [Airport B] in this Cessna 172. The TAF for our destination, which is in Class D airspace, is forecasting conditions right around basic VFR minimums around our arrival time. Talk me through the weather considerations, potential hazards, and what regulations we need to be mindful of regarding airspace entry and visibility."</blockquote>
            <p>This approach tests not just rote memorization, but your ability to apply knowledge, manage risk, and make sound aeronautical decisions (ADM).</p>
            <h3>Key Areas Covered (Examples):</h3>
            <ul>
              <li><strong>Regulations (FARs):</strong> Airspace rules, pilot privileges and limitations, aircraft certification, maintenance requirements.</li>
              <li><strong>Aerodynamics:</strong> Principles of flight, stability, control, performance characteristics.</li>
              <li><strong>Aircraft Systems:</strong> Engine, electrical, fuel, flight controls, avionics specific to the aircraft used.</li>
              <li><strong>Weather:</strong> Weather products (METARs, TAFs, charts), interpreting forecasts, weather theory, hazards.</li>
              <li><strong>Performance and Limitations:</strong> Calculating takeoff/landing distances, weight and balance, cruise performance.</li>
              <li><strong>Navigation:</strong> Pilotage, dead reckoning, VOR/GPS navigation (as applicable).</li>
              <li><strong>Human Factors:</strong> Aeronautical Decision Making (ADM), risk management, situational awareness, stress management.</li>
              <li><strong>Emergency Procedures:</strong> Handling system failures, engine-out procedures, emergency landings.</li>
            </ul>
            <Alert variant="default" className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
              <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-800 dark:text-blue-300">Think Like a PIC</AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-400">
                The DPE wants to see that you think and act like a safe, competent Pilot in Command. Don't just recite facts; explain your reasoning. Connect different knowledge areas. Show that you understand the "why" behind the rules and procedures, not just the "what." If you don't know an answer immediately, know where to find it (FAR/AIM, POH).
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="the-flight-portion" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
            <h2>The Flight Portion: Demonstrating Skills</h2>
            <p>Following the oral exam, you'll head to the aircraft for the practical flight test. This is where you demonstrate your ability to safely and proficiently control the aircraft and perform maneuvers according to the ACS standards.</p>
            <h3>What to Expect</h3>
            <p>The flight portion is structured around the tasks outlined in the ACS. The DPE will give you instructions for specific maneuvers and scenarios. Expect to demonstrate:</p>
            <ul>
              <li><strong>Preflight Procedures:</strong> Thorough preflight inspection, engine start, taxi, and pre-takeoff checks.</li>
              <li><strong>Airport Operations:</strong> Radio communications, traffic pattern operations, wake turbulence avoidance.</li>
              <li><strong>Takeoffs and Landings:</strong> Normal, crosswind, short-field, soft-field (as applicable).</li>
              <li><strong>Basic Maneuvering:</strong> Straight-and-level flight, climbs, descents, turns, slow flight, stalls (power-on/power-off).</li>
              <li><strong>Navigation:</strong> Pilotage, dead reckoning, use of navigation systems (VOR/GPS, as required).</li>
              <li><strong>Emergency Operations:</strong> Simulated engine failures, emergency approaches and landings, system malfunctions.</li>
              <li><strong>Post-Flight Procedures:</strong> Parking, shutdown, securing the aircraft.</li>
            </ul>
            <p>The DPE is evaluating your ability to consistently manage the aircraft's flight path, airspeed, and configuration while maintaining situational awareness and adhering to safety procedures.</p>
            <Alert variant="default" className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-800 dark:text-green-300">Smooth and Safe</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-400">
                Perfection isn't expected, but competence and safety are. Fly smoothly and predictably. Verbalize your actions and intentions, especially during checklists and maneuvers ("Clearing turns complete," "Applying full power," "Checking airspeed"). If you make a mistake, acknowledge it, correct it safely, and move on. Demonstrate good decision-making throughout the flight.
              </AlertDescription>
            </Alert>
            <h3>The Role of the DPE</h3>
            <p>The DPE is not there to teach or trick you. Their role is to evaluate your performance against the established standards in the ACS. They will provide instructions clearly but expect you to manage the flight as the Pilot in Command.</p>
          </TabsContent>

          <TabsContent value="dpe-expectations" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
            <h2>What the DPE Is Really Looking For</h2>
            <p>While meeting the ACS standards for each maneuver is essential, the Designated Pilot Examiner (DPE) is evaluating more than just your stick-and-rudder skills or rote knowledge. They are assessing your potential to be a safe, competent, and responsible Pilot in Command (PIC).</p>
            <h3>Beyond the Maneuvers:</h3>
            <ul>
              <li><strong>Safety Consciousness:</strong> Is safety your top priority? This is demonstrated through proper checklist usage, clearing turns, go-around decisions, adherence to regulations, and risk management.</li>
              <li><strong>Aeronautical Decision Making (ADM):</strong> Can you analyze situations, evaluate risks, and make sound judgments? This is evident in your flight planning, go/no-go decisions, weather assessment, and handling of simulated abnormalities.</li>
              <li><strong>Situational Awareness:</strong> Do you know where you are, what the aircraft is doing, what's happening around you (traffic, weather), and what might happen next?</li>
              <li><strong>Consistency and Control:</strong> Can you consistently manage the aircraft's attitude, airspeed, and altitude within standards? Smooth, deliberate control inputs are key.</li>
              <li><strong>Knowledge Application:</strong> Can you apply your theoretical knowledge from the oral exam to practical flight situations?</li>
              <li><strong>Professionalism and Attitude:</strong> Do you take the role of PIC seriously? Are you prepared, organized, and communicative? Do you handle stress appropriately?</li>
              <li><strong>Ability to Learn/Correct:</strong> If you deviate from standards, can you recognize it and make appropriate corrections? Stubbornness or unwillingness to correct errors is a red flag.</li>
            </ul>
            <Alert variant="default" className="bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800">
              <UserCheck className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-800 dark:text-yellow-300">It's About Judgment</AlertTitle>
              <AlertDescription className="text-yellow-700 dark:text-yellow-400">
                A DPE understands that minor deviations might happen under pressure. What often distinguishes a pass from a fail is the applicant's judgment. Did you recognize the deviation? Did you correct it promptly and safely? Did you make a poor decision that compromised safety (like pressing on into deteriorating weather or attempting a landing that was clearly unstable)? They are looking for sound judgment above all else.
              </AlertDescription>
            </Alert>
            <h3>Who Gives the Checkride?</h3>
            <p>Designated Pilot Examiners (DPEs) are highly experienced pilots authorized by the FAA to conduct practical tests. They undergo rigorous training and recurrent checks to ensure consistency and adherence to FAA standards. While they represent the FAA, they are not FAA employees. They operate independently and charge a fee for their services. Treat them with respect, be prepared, and remember they were once in your shoes.</p>
          </TabsContent>

          <TabsContent value="common-failures" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
            <h2>Common Reasons for Checkride Failure</h2>
            <p>Understanding why applicants fail checkrides is crucial for avoiding the same pitfalls. While specific reasons vary, several common themes emerge across different certificates and ratings.</p>
            <Alert variant="destructive" className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
              <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-800 dark:text-red-300">Top Failure Areas</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-400">
                Based on FAA data and DPE feedback, common reasons for disapproval include:
              </AlertDescription>
              <ul className="mt-2 list-disc pl-6 text-red-700 dark:text-red-400">
                <li><strong>Poor Airspeed Control:</strong> Especially during approaches, landings, and slow flight/stalls. Exceeding ACS tolerances.</li>
                <li><strong>Inadequate Stall/Spin Awareness:</strong> Failure to recognize an impending stall or improper recovery technique.</li>
                <li><strong>Unstable Approaches:</strong> Failing to maintain a stabilized approach path, airspeed, and configuration to the landing threshold. Poor go-around decision-making.</li>
                <li><strong>Lack of Situational Awareness:</strong> Getting lost, airspace busts, not seeing conflicting traffic, failing to manage tasks effectively.</li>
                <li><strong>Deficient Aeronautical Decision Making (ADM):</strong> Poor risk assessment, hazardous attitudes, failure to make safe choices (e.g., regarding weather, fuel, aircraft condition).</li>
                <li><strong>Checklist Discipline:</strong> Improper or incomplete use of checklists, especially critical ones like pre-landing checks.</li>
                <li><strong>Failure to Meet ACS Standards:</strong> Consistently exceeding tolerances for altitude, heading, or airspeed during required maneuvers.</li>
                 <li><strong>Weak Knowledge During Oral:</strong> Inability to answer questions correctly or apply knowledge, particularly regarding regulations, aircraft systems, or performance.</li>
              </ul>
            </Alert>
             <h3>Underlying Causes:</h3>
            <ul>
              <li><strong>Insufficient Practice/Preparation:</strong> Not enough flight time practicing specific maneuvers or inadequate ground study.</li>
              <li><strong>Checkride Anxiety:</strong> Letting nerves negatively impact performance.</li>
              <li><strong>Poor Foundational Skills:</strong> Weaknesses in basic aircraft control (pitch, bank, power coordination).</li>
              <li><strong>Complacency:</strong> Assuming mastery without rigorous self-assessment or instructor feedback.</li>
              <li><strong>Not Taking Ownership:</strong> Relying too heavily on the instructor during training instead of acting as PIC.</li>
            </ul>
            <p>The good news is that all these are preventable with dedicated training, thorough preparation, and the right mindset.</p>
          </TabsContent>

          <TabsContent value="checkride-day-mindset" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
            <h2>Mastering the Checkride Day Mindset</h2>
            <p>Your mental state on checkride day is just as important as your flying skills or knowledge. Nerves are normal, but letting them overwhelm you can sabotage your performance. Cultivating a confident, prepared, and focused mindset is key.</p>

            <h3>The Winner's Mindset: Walk In Like You've Already Passed</h3>
            <p>Adopt an attitude of quiet confidence. You've put in the work, honed your skills, and passed numerous stage checks. Your instructor signed you off because they believe you are ready. Trust your training.</p>
            <ul>
               <li><strong>Own It:</strong> Act like the Pilot in Command from the moment you meet the DPE. You are responsible for the flight.</li>
               <li><strong>Be Professional:</strong> Dress appropriately, be organized, communicate clearly and respectfully.</li>
               <li><strong>Speak Clearly:</strong> Articulate your thought processes during the oral and verbalize actions during the flight. Confidence in your voice matters.</li>
               <li><strong>Visualize Success:</strong> Imagine yourself performing maneuvers smoothly and answering questions confidently.</li>
            </ul>

            <h3>Managing Nerves and Stress</h3>
            <ul>
              <li><strong>Preparation is Key:</strong> The more prepared you are, the less reason you have to be overly nervous. Know the ACS, POH, and likely scenarios.</li>
              <li><strong>Good Night's Sleep:</strong> Rest is crucial for cognitive function and managing stress. Avoid cramming the night before.</li>
              <li><strong>Arrive Early:</strong> Don't rush. Give yourself time to settle in, organize your materials, and mentally prepare.</li>
              <li><strong>Breathe:</strong> If you feel overwhelmed, take a few deep, slow breaths to calm your nervous system.</li>
              <li><strong>Focus on the Task at Hand:</strong> Don't dwell on past minor mistakes or worry excessively about future maneuvers. Stay present.</li>
              <li><strong>Remember the DPE is Human:</strong> They want you to succeed. They are evaluating your competence, not trying to fail you.</li>
              <li><strong>It's Just Flying:</strong> Treat it like another flight lesson, albeit with an evaluator. Fly the plane as you were trained.</li>
            </ul>

             <Alert>
              <Brain className="h-4 w-4" />
              <AlertTitle>Trust Your Training</AlertTitle>
              <AlertDescription>
                Your instructor wouldn't have signed you off if you weren't ready. You've demonstrated competence repeatedly. The checkride is your opportunity to showcase those skills. Believe in your abilities and fly the airplane.
              </AlertDescription>
            </Alert>

            <h3>The Night Before</h3>
            <p>Review key procedures and knowledge areas lightly, but prioritize rest over last-minute cramming. Prepare your flight bag, documents, and clothes. Ensure the aircraft is ready (maintenance logs, fuel, etc.). Eat a good meal and get to bed early.</p>
          </TabsContent>

          <TabsContent value="after-the-checkride" className="space-y-6 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
             <h2>After the Checkride: Learning and Moving Forward</h2>
            <h3>Passing: Celebrate and Reflect</h3>
            <p>Congratulations! Earning a new certificate or rating is a major accomplishment. Take time to celebrate your hard work and dedication. </p>
            <p>However, remember that the certificate is a "license to learn." Reflect on the checkride: What went well? What could have been better? Use the experience to identify areas for continued improvement. Discuss the flight with your DPE and instructor for valuable feedback.</p>

            <h3>Failing: Debrief, Learn, and Retrain</h3>
            <p>Failing a checkride (receiving a Notice of Disapproval) can be disheartening, but it's not the end of the world. Many excellent pilots have failed a checkride at some point in their careers. The most important thing is how you respond.</p>
            <ul>
              <li><strong>Understand the Reasons:</strong> Pay close attention during the debrief with the DPE. Understand exactly which tasks did not meet ACS standards and why. Take detailed notes.</li>
              <li><strong>Debrief with Your Instructor:</strong> Discuss the disapproval with your CFI. Develop a plan for retraining focused specifically on the deficient areas.</li>
              <li><strong>Retrain and Practice:</strong> Work diligently with your instructor to correct the weaknesses identified. Practice until you consistently meet and exceed the standards.</li>
              <li><strong>Retest with Confidence:</strong> Once you and your instructor are confident, reschedule the checkride (often just for the failed portions). Approach it with a positive attitude, having learned from the experience.</li>
            </ul>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Failing Checkrides and Airline Careers</AlertTitle>
              <AlertDescription>
                A common concern is how failed checkrides impact airline hiring prospects. While airlines do review training records, a single failure, especially early in training (like Private or Instrument), is generally not a career-ender if handled correctly. Airlines look for patterns. Multiple failures, failures for the same reasons, or attempts to hide failures are bigger red flags. Honesty during interviews, demonstrating that you learned from the experience, and showing a strong training record afterward are crucial. The key is to treat a failure as a learning opportunity, correct the deficiency, and move forward as a safer, more knowledgeable pilot.
              </AlertDescription>
            </Alert>

             <h3>Checkrides are Where Pilots are Made</h3>
             <p>Whether you pass or fail, the checkride process itself is a valuable learning experience. It forces you to consolidate your knowledge, refine your skills under pressure, and truly take command of the aircraft. It's a crucible that tests your preparation and mindset, ultimately making you a better pilot.</p>
          </TabsContent>

        </Tabs>
      </section>

      {/* Original Guide Navigation */}
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.label, url: prevPage.href } : undefined}
        nextPage={nextPage ? { name: nextPage.label, url: nextPage.href } : undefined}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
} 