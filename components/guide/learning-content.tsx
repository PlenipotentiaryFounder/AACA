"use client";

import React, { useState } from "react";
import Image from "next/image"
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Lightbulb,
  ListChecks,
  Smartphone,
  Target,
  Headphones,
  AlertTriangle,
  Users, // Added for techniques tab
  // Ensure any other icons used *within* the tab content are also imported
} from "lucide-react";

// Import UI components used within the tab content
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Assuming Accordion might be used in full content
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Import the shared components
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// --- Type definitions needed for props ---
type TabDefinition = {
  value: string;
  label: string;
  iconName: string;
};

interface PageLink {
  name: string;
  url: string;
}

// --- Interface for client component props ---
interface LearningContentProps {
  tabs: TabDefinition[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

// Rename function and accept props
export default function LearningContent({ 
  tabs, 
  prevPage, 
  nextPage, 
  nextTopicSegue 
}: LearningContentProps) {
  // Get pathname for GuideNavigation
  const pathname = usePathname(); 
  // Re-introduce state for current tab
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <>
      <PremiumTabs 
        tabs={tabs}
        title="Learning Fundamentals" 
        // Pass state management props back to PremiumTabs
        currentValue={currentTab} 
        onChange={setCurrentTab}
        className="mb-6" // Add margin if needed, similar to FlightTrainingContent
      />
        
      {/* Content Area - Render conditionally based on currentTab */}
      {currentTab === 'styles' && (
        <div className="space-y-8 pt-0"> {/* Apply pt-0 here if needed */} 
          {/* Styles Content... */}
           <div className="grid gap-6 md:grid-cols-2">
             <Card>
              <CardHeader>
                <CardTitle>Understanding Your Learning Style</CardTitle>
                <CardDescription>Knowing how you learn best is the first step to effective studying.</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>Everyone absorbs information differently. Some prefer reading (visual), others listening (auditory), some doing (kinesthetic), and some a mix. Identifying your primary style helps you tailor study methods.</p>
                <p>Think about past learning experiences: Did you remember charts better than lectures? Did you learn best by building models or discussing concepts? This self-awareness is key in a demanding program like AACA.</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
               <CardHeader>
                 <CardTitle>Why It Matters at AACA</CardTitle>
               </CardHeader>
               <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>Flight training involves complex theory (visual/auditory) and hands-on skills (kinesthetic). You'll encounter all types of learning.</p>
                  <ul>
                    <li>Ground school: Lectures (Auditory), Textbooks/Diagrams (Visual)</li>
                    <li>Simulators/Flights: Doing/Feeling (Kinesthetic), Procedures (Visual/Auditory)</li>
                  </ul>
                  <p>Adapting your study to match the material and your style boosts efficiency and retention.</p>
               </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
             <Card>
               <CardHeader className="items-center"><BookOpen className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Visual</CardTitle></CardHeader>
               <CardContent><p className="text-sm text-muted-foreground">Learns best through reading, charts, diagrams, written notes.</p></CardContent>
             </Card>
             <Card>
               <CardHeader className="items-center"><Headphones className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Auditory</CardTitle></CardHeader>
               <CardContent><p className="text-sm text-muted-foreground">Learns best through listening, lectures, discussions, recordings.</p></CardContent>
             </Card>
             <Card>
               <CardHeader className="items-center"><Compass className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Kinesthetic</CardTitle></CardHeader>
               <CardContent><p className="text-sm text-muted-foreground">Learns best through doing, hands-on practice, simulators, chair-flying.</p></CardContent>
             </Card>
          </div>
           <div className="rounded-xl border bg-muted/50 p-6 prose prose-sm max-w-none dark:prose-invert">
             <h3 className="text-lg font-semibold">Adapting Your Learning Style</h3>
             <p>Don't limit yourself! Even if you prefer one style, practice engaging with others. Use flashcards (visual) for procedures you heard (auditory). Chair-fly (kinesthetic) maneuvers you read about (visual). The goal is flexible, effective learning.</p>
           </div>
        </div>
      )}

      {currentTab === 'techniques' && (
        <div className="space-y-8 pt-0">
           {/* Techniques Content... */}
           <Card>
             <CardHeader>
               <CardTitle>Study Like a Pilot, Not a College Student</CardTitle>
               <CardDescription>Aviation demands long-term retention and real-time application. Cramming doesn't work.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
               <Alert variant="default">
                 <Lightbulb className="h-4 w-4" />
                 <AlertTitle>Personal Note</AlertTitle>
                 <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                   I've noticed two types of cadets... The difference isn't intelligence—it's strategy... Success isn't about how much time you study—it's about how you study.
                 </AlertDescription>
               </Alert>
               <div className="grid gap-6 md:grid-cols-2">
                 <Card className="bg-muted/50">
                   <CardHeader><CardTitle>Recency: Use It or Lose It</CardTitle></CardHeader>
                   <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                     <p>The more often you review, the better it sticks. Daily review of small chunks (flashcards, diagrams, chair flying) makes knowledge instinctual.</p>
                   </CardContent>
                 </Card>
                 <Card className="bg-muted/50">
                   <CardHeader><CardTitle>Readiness: Don't Study When Fried</CardTitle></CardHeader>
                   <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                     <p>Learn best when fresh and focused. Quality beats quantity. 90 focused minutes {'>'} 6 distracted hours. Recognize when you're too tired/frustrated.</p>
                   </CardContent>
                 </Card>
               </div>
             </CardContent>
           </Card>
         
           <Card>
              <CardHeader>
                <CardTitle>Creating a Study Routine That Works</CardTitle>
                <CardDescription>Be deliberate with your time. Structure beats chaos.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                   <AccordionItem value="plan">
                      <AccordionTrigger>1. Plan Your Day Like a Pro</AccordionTrigger>
                      <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                         <p>Set daily goals. Know your schedule (flights, sims), what needs review before/after, and specific study topics. Start with structure.</p>
                      </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value="blocks">
                      <AccordionTrigger>2. Break It Into Blocks</AccordionTrigger>
                      <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                          <p>Don't study everything at once. Schedule sessions: Morning brief, midday debrief/review, evening focused study. Use timers (e.g., Pomodoro) to maintain focus.</p>
                      </AccordionContent>
                   </AccordionItem>
                   <AccordionItem value="alternate">
                      <AccordionTrigger>3. Alternate Topics</AccordionTrigger>
                      <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                          <p>Balance flight maneuvers with ground knowledge. Study aerodynamics & chair-fly turns. Review weather & plan XC. Reinforce flight learning with ground study.</p>
                      </AccordionContent>
                   </AccordionItem>
                </Accordion>
              </CardContent>
           </Card>
           
            <Card>
               <CardHeader>
                  <CardTitle>Avoiding Burnout & Asking Better Questions</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <p>Burnout (fatigue, low motivation, poor retention) happens when you push too hard without structure.</p>
                    <h4>How to Avoid Burnout:</h4>
                    <ul>
                      <li>Build in recovery time (breaks, exercise, rest).</li>
                      <li>Track progress (goals, checklists), not just effort. Celebrate wins.</li>
                    </ul>
                    <h4>Ask Better Questions to Prioritize:</h4>
                    <p>Instead of "What do I need for the checkride?" (Answer: Everything), ask:</p>
                    <ul>
                       <li>"What topic do most students struggle with at this stage?"</li>
                       <li>"If I had a checkride tomorrow, what would you want me to brush up on today?"</li>
                       <li>"What's the most important takeaway from this maneuver?"</li>
                    </ul>
                    <p><strong>Pro Tip:</strong> Triage weak spots. Focus on tomorrow's lesson, not next month's oral.</p>
                  </div>
               </CardContent>
            </Card>
         
            <Card>
              <CardHeader>
                <CardTitle>Effective Study Methods</CardTitle>
                <CardDescription>Combine active techniques for maximum retention.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-medium">Top 5 Techniques (Active Learning):</h4>
                 <ul className="space-y-3">
                   <li className="flex items-start gap-3">
                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                     <div><span className="font-medium">Active Recall:</span> <span className="text-muted-foreground text-sm">Test yourself frequently without looking at notes (e.g., flashcards, practice questions).</span></div>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                     <div><span className="font-medium">Spaced Repetition:</span> <span className="text-muted-foreground text-sm">Review material at increasing intervals to combat the forgetting curve.</span></div>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                     <div><span className="font-medium">Elaboration:</span> <span className="text-muted-foreground text-sm">Explain concepts in your own words, connect them to existing knowledge.</span></div>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                     <div><span className="font-medium">Interleaving:</span> <span className="text-muted-foreground text-sm">Mix different topics or types of problems during a study session rather than blocking one topic.</span></div>
                   </li>
                    <li className="flex items-start gap-3">
                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                     <div><span className="font-medium">Chair Flying:</span> <span className="text-muted-foreground text-sm">Mentally (or physically) rehearse procedures and maneuvers step-by-step.</span></div>
                   </li>
                 </ul>
                 <hr/>
                 <h4 className="font-medium">More Practical Methods:</h4>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <ListChecks className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                        <div><span className="font-medium">Flashcards & Spaced Repetition (Tools):</span> <span className="text-muted-foreground text-sm">Use Anki/Quizlet for V-speeds, systems, memory items. Review daily.</span></div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Compass className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                        <div><span className="font-medium">Chair Flying (Detailed):</span> <span className="text-muted-foreground text-sm">Visualize in real-time. Call out steps, move hands, practice radio calls aloud. Builds muscle memory.</span></div>
                    </li>
                     <li className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                        <div><span className="font-medium">Teaching Others:</span> <span className="text-muted-foreground text-sm">Explain concepts to peers. Debrief each other. Quiz each other. If you can teach it, you know it.</span></div>
                    </li>
                 </ul>
                 <Alert>
                   <Lightbulb className="h-4 w-4"/>
                   <AlertTitle>Implementing Techniques</AlertTitle>
                   <AlertDescription>Start small. Pick one or two techniques. Use active recall for limitations. Try spaced repetition for FARs. Integrate chair flying daily. Track what works.</AlertDescription>
                 </Alert>
              </CardContent>
            </Card>
           
            <Card>
               <CardHeader>
                  <CardTitle>The Systematic Approach: Levels of Learning</CardTitle>
                  <CardDescription>Master complex topics by progressing through Rote → Understanding → Application → Correlation.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                     <Alert variant="default">
                       <Brain className="h-4 w-4" />
                       <AlertTitle>Personal Note</AlertTitle>
                       <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                         Rote learning isn't bad—it's the essential first step... The trick isn't to stop at rote—it's to build up from it.
                       </AlertDescription>
                     </Alert>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="rote">
                           <AccordionTrigger>Step 1: Rote (Build Your Foundation)</AccordionTrigger>
                           <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                              <p>Memorize the basic facts, numbers, definitions, even without full understanding yet. Essential building blocks.</p>
                              <p><strong>How:</strong> Flashcards (Anki/Quizlet), forced repetition (recite, rewrite), mnemonics (IM SAFE, PAVE), immersion.</p>
                              <p><strong>Example:</strong> Memorize "Vx = 64 kts", "Vy = 76 kts".</p>
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="understanding">
                           <AccordionTrigger>Step 2: Understanding (Know the "Why")</AccordionTrigger>
                           <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                                <p>Connect the facts. Understand what the memorized information means.</p>
                                <p><strong>How:</strong> Ask "Why?" and "How?". Break down complex topics. Teach it to someone else. Use visuals (diagrams, videos).</p>
                                <p><strong>Example:</strong> Understand *why* Vx is for obstacle clearance (best angle) and Vy is for efficiency (best rate).</p>
                            </AccordionContent>
                         </AccordionItem>
                             <AccordionItem value="application">
                                <AccordionTrigger>Step 3: Application (Use Knowledge in Context)</AccordionTrigger>
                                <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                                   <p>Apply understanding to real or simulated situations. Make decisions based on knowledge.</p>
                                   <p><strong>How:</strong> Scenario-Based Training (SBT - "What if...?"), detailed chair flying (flows + callouts), practice quizzes (FAA test banks).</p>
                                   <p><strong>Example:</strong> Choose Vx (64 kts) for a short-field takeoff with obstacles.</p>
                                </AccordionContent>
                             </AccordionItem>
                                 <AccordionItem value="correlation">
                                    <AccordionTrigger>Step 4: Correlation (Mastery & Instinct)</AccordionTrigger>
                                    <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                                       <p>Connect knowledge across different areas. Apply learning to new, complex situations instinctively. Anticipate, don't just react.</p>
                                       <p><strong>How:</strong> Cross-train concepts (aerodynamics + approach speed). Connect regulations to real flying. Debrief & self-correct ("How can I connect this to the next flight?").</p>
                                       <p><strong>Example:</strong> Handling an unexpected ATC reroute by correlating knowledge of airspace, charts, lost comms, and cockpit resources.</p>
                                    </AccordionContent>
                                 </AccordionItem>
                     </Accordion>
                     <hr/>
                     <div className="prose prose-sm max-w-none dark:prose-invert">
                         <h4>Domains of Learning: Engage the Whole Pilot</h4>
                         <ul className="list-disc pl-5">
                            <li><strong>Cognitive (Head):</strong> Knowledge, understanding.</li>
                            <li><strong>Psychomotor (Hands):</strong> Physical skills, muscle memory.</li>
                            <li><strong>Affective (Heart):</strong> Attitudes, motivation, mindset.</li>
                         </ul>
                         <p>Engage all three constantly. Don't just study—apply. Don't just fly—think. Don't just follow procedures—believe in the discipline.</p>
                          <p><strong>Final Thought:</strong> Study like a pilot, not a parrot. Use this structure to make learning less overwhelming and more exciting.</p>
                     </div>
                  </CardContent>
               </Card>
             </div>
           )}
           
           {currentTab === 'memory' && (
             <div className="space-y-8 pt-0">
            {/* Memory Content... */}
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                 <CardHeader>
                   <CardTitle>Boosting Memory Retention</CardTitle>
                   <CardDescription>Techniques to make information stick.</CardDescription>
                 </CardHeader>
                 <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                   <p>Aviation requires memorizing a vast amount of information: regulations, procedures, limitations, airspace, weather codes, and more. Effective memory techniques are crucial for safety and checkride success.</p>
                   <p>Focus on understanding first, then memorizing. Rote memorization without comprehension is fragile.</p>
                 </CardContent>
               </Card>
               <Card className="bg-muted/50">
                  <CardHeader>
                   <CardTitle>The Power of Visualization</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                    <p>Creating vivid mental images associated with information can significantly improve recall.</p>
                    <ul>
                      <li>Visualize the instrument panel during procedure flows.</li>
                      <li>Imagine the airspace structure when studying charts.</li>
                      <li>Picture the engine components when learning systems.</li>
                    </ul>
                  </CardContent>
               </Card>
            </div>
             <div className="grid gap-6 md:grid-cols-3">
               <Card>
                 <CardHeader className="items-center"><ListChecks className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Mnemonics</CardTitle></CardHeader>
                 <CardContent><p className="text-sm text-muted-foreground">Acronyms, rhymes, or phrases to remember lists or sequences (e.g., TOMATO FLAMES, ANDS).</p></CardContent>
               </Card>
               <Card>
                 <CardHeader className="items-center"><Brain className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Chunking</CardTitle></CardHeader>
                 <CardContent><p className="text-sm text-muted-foreground">Breaking down large amounts of information into smaller, manageable groups (e.g., phone numbers).</p></CardContent>
               </Card>
               <Card>
                 <CardHeader className="items-center"><Target className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Method of Loci</CardTitle></CardHeader>
                 <CardContent><p className="text-sm text-muted-foreground">Associating items to remember with specific locations along a familiar route (Memory Palace).</p></CardContent>
               </Card>
            </div>
             <div className="rounded-xl border bg-muted/50 p-6 prose prose-sm max-w-none dark:prose-invert">
                <h3 className="text-lg font-semibold">Combining Methods</h3>
                <p>Use multiple techniques together. Create a mnemonic (visual/auditory) and then practice recalling it using spaced repetition (active recall). Chunk checklist items and then chair-fly them (kinesthetic).</p>
             </div>
          </div>
        )}

        {currentTab === 'overload' && (
          <div className="space-y-8 pt-0">
            {/* Overload Content... */}
             <Card>
              <CardHeader>
                <CardTitle>Foundation First: Why Well-Being Matters (Maslow's Hierarchy)</CardTitle>
                <CardDescription>Your ability to learn is directly tied to your basic needs. Address these first.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle>Personal Note</AlertTitle>
                  <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                    I once had a flight where everything felt sluggish... I later realized I had barely eaten... From then on, I made a habit of fueling my body like I was fueling my airplane. It made a massive difference.
                  </AlertDescription>
                </Alert>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="physiological">
                    <AccordionTrigger>Physiological Needs (Fuel for Your Brain)</AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                      <p>Before you can learn complex flight concepts, your body and brain need fuel. Lack of sleep slows learning. Skipping meals causes brain fog. Dehydration impairs cognition.</p>
                      <p><strong>Solutions:</strong> Prioritize sleep, especially before checkrides. Have a pre-flight meal routine. Drink water and make movement a daily habit.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="safety">
                    <AccordionTrigger>Safety & Security (Stress, Finances, Routine)</AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                      <p>Stress piles up. Financial worries, lack of routine, or training setbacks create anxiety that distracts from learning.</p>
                      <p><strong>Solutions:</strong> Stay ahead of financial requirements and ask for help early. Create a structured daily routine (plan study, flights, rest). Use unexpected delays (like weather) to sharpen weak areas.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="social">
                    <AccordionTrigger>Social Belonging & Emotional Well-Being (Don't Train Alone)</AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                      <p>Isolation can kill motivation, especially when moving for the program. Feeling disconnected hinders progress.</p>
                      <p><strong>Solutions:</strong> Build a new support system with your training group (study together, debrief). Stay connected with home. Find study partners – learn from each other. Remember, these are your future colleagues.</p>
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="self-actualization">
                     <AccordionTrigger>Self-Actualization (When It All Clicks)</AccordionTrigger>
                     <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                       <p>When basic needs are met, focus sharpens, and performance improves dramatically. Landings feel natural, radio calls become automatic, you're ahead of the airplane. This level isn't reached overnight; it's built by managing the lower levels consistently.</p>
                       <p><strong>Final Thought:</strong> If training isn't clicking, check your foundation: Sleep? Nutrition? Stress? Support?</p>
                     </AccordionContent>
                   </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
           
            <Card>
              <CardHeader>
                <CardTitle>Managing Expectations & Staying Resilient</CardTitle>
                <CardDescription>Flight training is hard. Expect challenges and learn to push through.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="prose prose-sm max-w-none dark:prose-invert">
                   <p>Progress isn't linear. You WILL hit learning plateaus where things suddenly feel harder or you feel stalled. This is normal as your brain processes skills deeply.</p>
                   <p><strong>How to handle plateaus:</strong> Trust the process, keep showing up (don't back off), and talk to your instructor.</p>
                 </div>
                 <Alert variant="default">
                   <Lightbulb className="h-4 w-4" />
                   <AlertTitle>Mentality of Successful Cadets</AlertTitle>
                   <AlertDescription>
                       <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li><strong>Grit & Resilience:</strong> Push through frustration. Learn from bad flights.</li>
                          <li><strong>Adaptability:</strong> Adjust in real-time to unexpected changes (weather, ATC, etc.).</li>
                          <li><strong>Confidence Without Ego:</strong> Trust your training but stay humble and coachable.</li>
                       </ul>
                   </AlertDescription>
                 </Alert>
                 <div className="prose prose-sm max-w-none dark:prose-invert">
                   <h4>Staying Motivated When It's Tough:</h4>
                   <ul>
                     <li>Remember your "Why" - your dream job.</li>
                     <li>Break challenges into small, manageable wins.</li>
                     <li>Lean on your cadet community for support.</li>
                   </ul>
                   <p><strong>Final Thought:</strong> Hard training creates stronger pilots. Expect setbacks, keep moving forward, and trust the process.</p>
                 </div>
              </CardContent>
            </Card>
           
            <Card>
              <CardHeader>
                <CardTitle>Recognizing & Overcoming Mental Barriers (Defense Mechanisms)</CardTitle>
                <CardDescription>Subconscious responses that protect ego but hinder learning. Learn to spot them.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Personal Note</AlertTitle>
                    <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                       Defense mechanisms are like a vacation from reality... It's okay to take a quick vacation—but you've got to come back to reality. That's where growth happens.
                    </AlertDescription>
                 </Alert>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="denial">
                       <AccordionTrigger>1. Denial ("I'm not struggling")</AccordionTrigger>
                       <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                          <p>Refusing to acknowledge a problem exists (e.g., downplaying mistakes, insisting performance is fine despite evidence).</p>
                          <p><strong>Solution:</strong> Seek honest feedback, record flights/take notes, accept struggling as part of learning.</p>
                       </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="repression">
                       <AccordionTrigger>2. Repression ("I'll just avoid that")</AccordionTrigger>
                       <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                           <p>Subconsciously avoiding difficult or uncomfortable topics/tasks (e.g., skipping stall practice, avoiding weak areas).</p>
                           <p><strong>Solution:</strong> Identify uncomfortable areas and lean into them. Break them down. Your weakness is your biggest growth opportunity.</p>
                       </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="projection">
                       <AccordionTrigger>3. Projection ("It's not me, it's them")</AccordionTrigger>
                       <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                          <p>Blaming others for performance issues (instructor, ATC, weather, equipment).</p>
                          <p><strong>Solution:</strong> Ask "What could *I* have done better?" Focus on what's in your control. Take ownership.</p>
                       </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="displacement">
                        <AccordionTrigger>4. Displacement ("Why am I mad at everything?")</AccordionTrigger>
                        <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                           <p>Channeling frustration onto the wrong target (snapping at instructor, getting defeated after one mistake).</p>
                           <p><strong>Solution:</strong> Recognize disproportionate frustration. Step back, breathe, debrief calmly. Use your support system.</p>
                        </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="rationalization">
                         <AccordionTrigger>5. Rationalization ("It wasn't really my fault because...")</AccordionTrigger>
                         <AccordionContent className="prose prose-sm max-w-none dark:prose-invert">
                            <p>Justifying poor performance with excuses (lack of sleep, bad briefing, difficult conditions).</p>
                            <p><strong>Solution:</strong> Stop excuses. Replace "Here's why I couldn't" with "Here's what I'll do differently." Own your flight.</p>
                         </AccordionContent>
                     </AccordionItem>
                 </Accordion>
                 <div className="prose prose-sm max-w-none dark:prose-invert">
                     <h4>Overcoming Defense Mechanisms:</h4>
                     <ul>
                       <li>Use your instructor as a mirror – trust their feedback.</li>
                       <li>Debrief honestly after every flight – what went well, what didn't, why?</li>
                       <li>Stay curious, not defensive – ask questions, seek understanding.</li>
                     </ul>
                     <p><strong>Final Thought:</strong> Own the struggle to own the growth. Be honest and coachable.</p>
                 </div>
              </CardContent>
            </Card>
           
             <Alert className="border-red-500 bg-red-50 text-red-700">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Recognizing Burnout</AlertTitle>
                <AlertDescription>
                  Persistent fatigue, lack of motivation, irritability, and decreased performance can be signs of burnout. Address it early: talk to instructors, adjust your schedule, prioritize rest, and seek support. Pushing through burnout is counterproductive.
                </AlertDescription>
             </Alert>
          </div>
        )}

        {currentTab === 'technology' && (
          <div className="space-y-8 pt-0">
            {/* Technology Content... */}
             <div className="grid gap-6 md:grid-cols-2">
                <Card>
                 <CardHeader>
                   <CardTitle>Leveraging Technology</CardTitle>
                   <CardDescription>Using digital tools effectively for learning.</CardDescription>
                 </CardHeader>
                 <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                   <p>Modern technology offers powerful tools for flight training, from electronic flight bags (EFBs) and flight simulators to online ground schools and flashcard apps.</p>
                   <p>Use technology as a supplement, not a replacement, for foundational knowledge and instructor guidance. Ensure you understand the underlying concepts, not just how to push buttons.</p>
                 </CardContent>
               </Card>
               <Card className="bg-muted/50">
                  <CardHeader>
                   <CardTitle>Focus on Fundamentals</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                    <p>Technology can sometimes be a distraction. Master basic skills first:</p>
                    <ul>
                      <li>Hand-flying the aircraft before relying heavily on autopilot.</li>
                      <li>Understanding weather theory before solely trusting weather apps.</li>
                      <li>Knowing regulations before relying on EFB lookups for everything.</li>
                    </ul>
                  </CardContent>
               </Card>
            </div>
            <Card>
                <CardHeader>
                 <CardTitle>Recommended Tech Tools</CardTitle>
                 <CardDescription>Examples of useful technology for cadets.</CardDescription>
               </CardHeader>
               <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                      <div><span className="font-medium">EFB Apps (e.g., ForeFlight, Garmin Pilot):</span> <span className="text-muted-foreground text-sm">Essential for flight planning, charts, weather, navigation.</span></div>
                    </li>
                     <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                      <div><span className="font-medium">Flashcard Apps (e.g., Anki, Quizlet):</span> <span className="text-muted-foreground text-sm">Ideal for active recall and spaced repetition.</span></div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                      <div><span className="font-medium">Online Ground Schools / Video Courses:</span> <span className="text-muted-foreground text-sm">Supplement official materials, offer different perspectives.</span></div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Compass className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                      <div><span className="font-medium">Home Flight Simulators (e.g., X-Plane, MSFS):</span> <span className="text-muted-foreground text-sm">Useful for procedure practice and familiarization (use guided scenarios).</span></div>
                    </li>
                  </ul>
               </CardContent>
            </Card>
             <Alert className="border-aa-blue bg-aa-blue/10 prose prose-sm max-w-none dark:prose-invert">
               <Lightbulb className="h-4 w-4 text-aa-blue" />
               <AlertTitle className="text-aa-blue">Balancing Tech</AlertTitle>
               <AlertDescription>
                 Technology is a tool. Use it wisely to enhance your learning, not as a crutch. Always prioritize understanding the fundamentals and adhere to your flight school's specific policies regarding technology use in training.
               </AlertDescription>
             </Alert>
          </div>
        )}
      
      <GuideNavigation
        prevPage={prevPage ?? undefined}
        nextPage={nextPage ?? undefined}
        currentPageUrl={pathname} 
        nextTopicSegue={nextTopicSegue}
      />
    </>
  );
}