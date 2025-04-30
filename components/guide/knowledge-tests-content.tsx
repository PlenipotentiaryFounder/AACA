"use client";

// Imports moved from original page.tsx
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Gauge,
  Lightbulb,
  Plane,
  School,
  Target,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Brain,
  Layers,
  ShieldCheck,
  Milestone,
  Users,
  Headphones,
  Computer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// Removed AppSidebar, SidebarInset as they weren't used in the moved function
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";

// Type definitions moved from original page.tsx
type Tab = {
  value: string;
  label: string;
  iconName?: string;
};

interface PageLink {
    name: string;
    url: string;
}

// Props interface moved from original page.tsx
interface KnowledgeTestsContentProps {
  tabs: Tab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

// The main function moved from page.tsx
// It keeps the original conditional rendering logic for now.
export default function KnowledgeTestsContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: KnowledgeTestsContentProps) {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <div className="container mx-auto">
      {/* Hero Section Removed - Now handled by GuidePageHeader */}

      {/* Alert - Copied from original */}
      <Alert className="bg-muted border-muted-foreground/20 mb-8">
         <AlertTitle className="flex items-center gap-2 text-lg font-display font-semibold">
           <FileText className="h-5 w-5" /> Personal Note from Your Instructor
         </AlertTitle>
         <AlertDescription className="text-base mt-2">
           Let's be honest—nobody gets into flight training because they love standardized testing. But here's the
           reality: if you don't take your knowledge exams seriously, they'll become the anchor that slows your whole
           program down. On the flip side, if you handle them early and effectively, they become a launchpad that makes
           everything easier—from checkrides to ground briefings to your own confidence in the cockpit.
         </AlertDescription>
      </Alert>

      {/* Tabs Section - Refactored to use Tabs and TabsContent */}
      <section className="mb-16">
        <Tabs defaultValue={tabs[0].value} value={currentTab} onValueChange={setCurrentTab}>
          <PremiumTabs
            tabs={tabs} // Pass tabs from props
            onChange={setCurrentTab} // Added onChange prop back
            title="Knowledge Test Strategies"
            className="mb-8" 
          />

          {/* Content moved from conditional blocks into TabsContent */}
          <TabsContent value="what-are-tests" className="pt-0">
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">What Are FAA Knowledge Tests?</h2>
                    <p className="text-muted-foreground">Understanding the first gate to every checkride</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="lead">
                    The FAA doesn't call them "written tests" anymore, because they're not paper-and-pencil exams. They're
                    officially known as Knowledge Tests, and they're taken digitally at FAA-approved testing centers
                    around the country.
                  </p>
                  <p>
                    The name matters—because these tests aren't just about rote memory. They're meant to verify that you
                    actually understand key concepts about flight, safety, navigation, weather, aircraft systems, and FAA
                    regulations.
                  </p>
                  <p className="font-medium">
                    They're designed to make sure you won't be a danger to yourself or others in the air. So yeah—they're
                    a big deal.
                  </p>

                  <h3 className="text-xl font-display font-semibold mt-8 mb-4">How FAA Knowledge Tests Work</h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" /> Test Format
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Location:</span> FAA-approved PSI testing center
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Endorsement:</span> Required from instructor
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Format:</span> Digital, multiple-choice with three options
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Time Limit:</span> 2.5-3 hours (most finish in under 1)
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Passing Score:</span> 70% (but aim for 90%+)
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" /> What You're Tested On
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Regulations:</span> FAR Part 61, 91, NTSB 830
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Aerodynamics:</span> Principles of flight, maneuvers
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Aircraft Systems:</span> Engine, electrical, instruments
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Weather:</span> Theory, reports, forecasts, services
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Navigation:</span> Charts, VOR, GPS, flight planning
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Performance:</span> Weight & balance, charts
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium">Human Factors:</span> ADM, risk management
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    The specific topics are outlined in the FAA's Airman Certification Standards (ACS) for the relevant
                    certificate or rating. We'll dive deeper into those key areas next.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="test-content" className="pt-0">
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">Knowledge Test Content Deep Dive</h2>
                    <p className="text-muted-foreground">Key areas you absolutely must master</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p>
                    While each test (Private, Instrument, Commercial, etc.) has its own specific set of questions, the
                    core knowledge areas overlap significantly. Mastering these fundamentals is crucial for success on
                    all your knowledge tests.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 not-prose">
                    {[ // Array of card data
                      {
                        title: "Regulations (FARs)",
                        icon: FileText,
                        description:
                          "Airspace, weather minimums, pilot privileges/limitations, right-of-way, required documents, NTSB reporting.",
                      },
                      {
                        title: "Aerodynamics",
                        icon: Plane,
                        description:
                          "Lift, drag, thrust, weight, stability, flight controls, turns, climbs, descents, stalls, spins.",
                      },
                      {
                        title: "Aircraft Systems",
                        icon: Gauge,
                        description:
                          "Engine types, fuel systems, electrical systems, flight instruments (pitot-static, gyroscopic), avionics.",
                      },
                      {
                        title: "Weather",
                        icon: Calendar, // Using Calendar icon as a stand-in for weather
                        description:
                          "Atmosphere basics, weather patterns, METARs, TAFs, charts (surface analysis, winds aloft), hazards (icing, thunderstorms).",
                      },
                      {
                        title: "Navigation",
                        icon: Target,
                        description:
                          "Charts (Sectional, TAC), pilotage, dead reckoning, VOR navigation, GPS principles, flight planning.",
                      },
                      {
                        title: "Human Factors",
                        icon: Brain,
                        description:
                          "Aeronautical Decision Making (ADM), risk management (PAVE, 5P), situational awareness, stress, fatigue.",
                      },
                    ].map((item) => (
                      <Card key={item.title} className="flex flex-col">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <item.icon className="h-5 w-5 text-primary" />
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h3>Example Question Breakdown</h3>
                  <p>
                    Let's look at a typical type of question you might encounter and how to approach it. Imagine a
                    question about calculating crosswind component:
                  </p>
                  <Card className="my-6 bg-background/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Sample Question:</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm dark:prose-invert">
                      <p>
                        (Refer to Figure 26.) What is the approximate crosswind component for a landing on Runway 18 if
                        the tower reports the wind as 220° at 30 knots?
                      </p>
                      <ol type="A" className="list-none p-0">
                        <li>A) 19 knots</li>
                        <li>B) 23 knots</li>
                        <li>C) 30 knots</li>
                      </ol>
                      <p>
                        <em className="text-xs text-muted-foreground">
                          (Figure 26 would be a crosswind component chart provided in the test supplement.)
                        </em>
                      </p>
                    </CardContent>
                  </Card>
                  <h4>Thinking Process:</h4>
                  <ol>
                    <li>
                      <strong>Identify the Goal:</strong> Calculate the crosswind component.
                    </li>
                    <li>
                      <strong>Extract Data:</strong> Runway = 18 (180°), Wind = 220° at 30 knots.
                    </li>
                    <li>
                      <strong>Calculate Wind Angle:</strong> Difference between runway heading and wind direction = 220° -
                      180° = 40°.
                    </li>
                    <li>
                      <strong>Use the Tool:</strong> Locate the 40° wind angle line on the crosswind chart (Figure 26).
                      Follow it up to intersect the 30-knot wind speed arc.
                    </li>
                    <li>
                      <strong>Read the Result:</strong> Move horizontally from the intersection point to the left side
                      of the chart to read the crosswind component. It will be approximately 19 knots.
                    </li>
                    <li>
                      <strong>Select Answer:</strong> Choose option A.
                    </li>
                  </ol>
                  <p>
                    This demonstrates how questions often require you to integrate data from provided figures, perform
                    calculations, and apply knowledge—not just recall facts.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="prep-strategy" className="pt-0">
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <School className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">Effective Preparation Strategy</h2>
                    <p className="text-muted-foreground">Study smarter, not just harder, for test success</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p>
                    Passing your knowledge tests requires more than just cramming. A structured approach combining
                    ground school, self-study, and practice tests is essential. Here's the AACA recommended strategy:
                  </p>

                  <h3>The AACA Approach:</h3>
                  <ol>
                    <li>
                      <strong>Ground School Foundation:</strong> Actively participate in your AACA ground school classes.
                      This provides the core understanding and context behind the regulations and concepts. Ask
                      questions!
                    </li>
                    <li>
                      <strong>Targeted Self-Study:</strong> Use reliable study materials (like the Gleim or ASA prep books
                      and software recommended by AACA) to reinforce ground school topics. Focus on understanding the
                      *why*, not just memorizing answers.
                    </li>
                    <li>
                      <strong>Consistent Practice Tests:</strong> Regularly take practice tests using software that mimics
                      the real exam format (like Sheppard Air, Gleim, or ASA Prepware). Aim for consistent scores above
                      90% before considering the real test.
                    </li>
                    <li>
                      <strong>Analyze Weak Areas:</strong> Don't just look at your score. Review every question you missed
                      on practice tests. Understand *why* you missed it and revisit that topic in your study materials.
                    </li>
                    <li>
                      <strong>Instructor Endorsement:</strong> Once you're consistently scoring well (90%+) on multiple
                      practice tests, meet with your AACA instructor. They will review your progress, perhaps give you
                      another practice test, and provide the necessary endorsement to take the official exam.
                    </li>
                  </ol>

                  <Alert variant="default" className="my-8 bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                    <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <AlertTitle className="text-blue-800 dark:text-blue-300">Don't Just Memorize!</AlertTitle>
                    <AlertDescription className="text-blue-700 dark:text-blue-400">
                      While practice tests expose you to the question bank, relying solely on memorization is risky.
                      The FAA occasionally rephrases questions or introduces new ones. True understanding ensures you can
                      answer correctly regardless of the exact wording and apply the knowledge during your oral exam and
                      real-world flying.
                    </AlertDescription>
                  </Alert>

                  <h3>Recommended Timeline:</h3>
                  <p>
                    Ideally, you should aim to take the relevant knowledge test *before* or *early in* the corresponding
                    flight training phase. For example:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Private Pilot Knowledge Test (PAR):</strong> Before or shortly after starting flight lessons.
                    </li>
                    <li>
                      <strong>Instrument Rating Knowledge Test (IRA):</strong> During your instrument ground school, before
                      starting intensive simulator/flight training.
                    </li>
                    <li>
                      <strong>Commercial Pilot Knowledge Test (CAX):</strong> During commercial ground school or early in
                      the commercial flight phase.
                    </li>
                  </ul>
                  <p>
                    Getting the tests done early removes a major roadblock and allows you to focus fully on your flight
                    training and checkride preparation.
                  </p>

                  <h3>Study Resources:</h3>
                   <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                    <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2"> <BookOpen className="h-5 w-5 text-primary" /> AACA Ground School</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Your primary source for foundational knowledge and instructor guidance.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2"> <Computer className="h-5 w-5 text-primary" /> Test Prep Software</CardTitle> 
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Essential for practice tests. (e.g., Gleim, ASA Prepware, Sheppard Air - check current AACA recommendations).</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2"> <FileText className="h-5 w-5 text-primary" /> FAA Handbooks</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Pilot's Handbook of Aeronautical Knowledge (PHAK), Airplane Flying Handbook (AFH) - available free online.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2"> <Users className="h-5 w-5 text-primary" /> Study Groups</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Collaborate with fellow cadets to review concepts and quiz each other.</p>
                        </CardContent>
                    </Card>
                  </div>

                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="test-day" className="pt-0">
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">Test Day Logistics & Tips</h2>
                    <p className="text-muted-foreground">Setting yourself up for success at the testing center</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p>
                    You've studied hard and scored well on practice tests. Now it's time for the real deal. Here's what
                    to expect and how to perform your best on test day.
                  </p>

                  <h3>Before You Go (Test Day Checklist):</h3>
                  <ul className="list-disc pl-5 space-y-2 my-6">
                    <li>
                      <strong>Valid Photo ID:</strong> Government-issued ID (Driver's license, passport) with current
                      address, photo, signature, and date of birth.
                    </li>
                    <li>
                      <strong>Instructor Endorsement:</strong> The signed endorsement in your logbook or on a separate
                      sheet confirming you're prepared.
                    </li>
                    <li>
                      <strong>Test Fee:</strong> Confirm the current fee with the testing center (PSI).
                    </li>
                    <li>
                      <strong>Required Materials:</strong> Flight computer (E6B or electronic), plotter, calculator (basic,
                      non-programmable), testing supplement (provided by the center).
                    </li>
                    <li>
                      <strong>Confirmation:</strong> Your test appointment confirmation details.
                    </li>
                    <li>
                      <strong>Rest & Nutrition:</strong> Get a good night's sleep and eat a balanced meal beforehand. Avoid
                      caffeine jitters if possible.
                    </li>
                     <li>
                      <strong>Directions & Timing:</strong> Know how to get to the testing center and arrive early (at least
                      15-30 minutes).
                    </li>
                  </ul>

                  <h3>At the Testing Center:</h3>
                  <ul>
                      <li><strong>Check-in:</strong> Present your ID and endorsement. You'll store personal belongings (phone, smart watch, bags) in a locker.</li>
                      <li><strong>Instructions:</strong> The proctor will explain the rules and guide you to your computer station.</li>
                      <li><strong>Tutorial:</strong> You'll usually have a brief tutorial on how to use the testing software (navigate questions, flag items, use the calculator).</li>
                      <li><strong>Testing Supplement:</strong> You'll be given a physical book containing all the figures, charts, and legends referenced in the questions.</li>
                  </ul>

                  <h3>During the Test:</h3>
                  <ul className="list-disc pl-5 space-y-2 mt-6">
                    <li>
                      <strong>Read Carefully:</strong> Read each question and all answer choices thoroughly before selecting.
                      Watch out for keywords like "NOT" or "EXCEPT".
                    </li>
                    <li>
                      <strong>Use Your Tools:</strong> Don't rush calculations. Use your E6B, plotter, and calculator accurately.
                      Reference the testing supplement figures carefully.
                    </li>
                    <li>
                      <strong>Manage Time:</strong> Keep an eye on the clock, but don't panic. Most tests allow ample time.
                      If you get stuck, flag the question and move on. You can return to it later.
                    </li>
                    <li>
                      <strong>Answer Everything:</strong> There's no penalty for guessing. If you're unsure after careful
                      consideration, make your best educated guess. Don't leave any questions unanswered.
                    </li>
                    <li>
                      <strong>Review Flagged Questions:</strong> If time permits, review any questions you flagged before
                      submitting.
                    </li>
                     <li>
                      <strong>Stay Calm:</strong> Take deep breaths if you feel stressed. Focus on one question at a time.
                    </li>
                  </ul>
                   <Alert variant="default" className="my-8 bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800">
                     <ShieldCheck className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    <AlertTitle className="text-yellow-800 dark:text-yellow-300">Testing Center Rules</AlertTitle>
                    <AlertDescription className="text-yellow-700 dark:text-yellow-400">
                      Strict rules apply. No outside materials (except approved items), no talking, no looking at other screens. Follow the proctor's instructions precisely. Any violation can result in your test being invalidated.
                    </AlertDescription>
                  </Alert>

                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="after-test" className="pt-0">
            <div className="space-y-6">
               <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                     <Award className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h2 className="text-2xl font-display font-bold">After the Test: Results & Next Steps</h2>
                     <p className="text-muted-foreground">Understanding your score report and moving forward</p>
                   </div>
                 </div>
                 <div className="prose prose-lg max-w-none dark:prose-invert">
                   <p>
                     Once you submit your test, you'll receive your results immediately. The proctor will provide you with an
                     official Airman Knowledge Test Report (AKTR).
                   </p>

                   <h3>Passing Score (70% or Higher):</h3>
                   <ul className="list-disc pl-5 space-y-2 my-6">
                     <li>
                       <strong>Congratulations!</strong> You've cleared a major hurdle.
                     </li>
                     <li>
                       <strong>Review Learning Statement Codes:</strong> Even with a passing score, your report will list
                       codes corresponding to the subject areas of any questions you missed. **This is crucial!** These
                       codes identify your weak areas.
                     </li>
                     <li>
                       <strong>Debrief with Instructor:</strong> Take your test report to your AACA instructor. They will
                       review the codes with you, provide additional instruction on those topics, and sign off on your
                       report certifying that you've reviewed your deficiencies. **You MUST get this sign-off.**
                     </li>
                     <li>
                       <strong>Keep the Report Safe:</strong> You will need to present this signed test report to the
                       examiner (DPE) during your practical test (checkride). The DPE *will* ask you questions related to
                       the learning statement codes on your report during the oral exam.
                     </li>
                     <li>
                       <strong>Validity:</strong> Your passing score is valid for 24 calendar months. You must complete the
                       associated practical test within this timeframe.
                     </li>
                   </ul>
                   <Alert variant="default" className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                     <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertTitle className="text-green-800 dark:text-green-300">Passing is Just the Start</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-400">
                      Aiming for just 70% is selling yourself short. High scores (90%+) indicate a strong grasp of the material, which translates to more confidence in flight training and a smoother checkride oral exam. Use the learning statement codes as a guide for continued study, even after passing.
                    </AlertDescription>
                  </Alert>

                   <h3>Failing Score (Below 70%):</h3>
                   <ul className="list-disc pl-5 space-y-2 my-6">
                     <li>
                       <strong>Don't Panic:</strong> It's a setback, not the end. Many successful pilots have failed a knowledge
                       test.
                     </li>
                     <li>
                       <strong>Analyze the Report:</strong> Your report will show the learning statement codes for *all*
                       questions missed. This is your roadmap for re-studying.
                     </li>
                     <li>
                       <strong>Mandatory Retraining:</strong> You *must* receive additional ground instruction from your CFI
                       on the specific areas identified by the codes.
                     </li>
                     <li>
                       <strong>Instructor Endorsement for Retest:</strong> After retraining, your instructor must provide a
                       *new* endorsement certifying you are prepared for the retest.
                     </li>
                     <li>
                       <strong>Reschedule and Retake:</strong> Once you have the endorsement, you can reschedule the test. There's
                       no waiting period required by the FAA, but ensure you are truly ready.
                     </li>
                   </ul>
                  <Alert variant="destructive" className="my-8 bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
                      <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertTitle className="text-red-800 dark:text-red-300">Learn from Failure</AlertTitle>
                    <AlertDescription className="text-red-700 dark:text-red-400">
                       Treat a failed test as a diagnostic tool. It pinpointed your weaknesses. Address them thoroughly with your instructor. Rushing into a retest without genuine improvement is likely to yield the same result. Own the failure, learn from it, and come back stronger.
                    </AlertDescription>
                  </Alert>

                 </div>
               </div>
            </div>
          </TabsContent>

        </Tabs>
      </section>

      {/* Guide Navigation - Copied from original */}
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined}
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined}
        nextTopicSegue={nextTopicSegue}
      />
    </div>
  );
} 