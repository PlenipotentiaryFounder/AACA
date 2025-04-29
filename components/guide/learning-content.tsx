"use client";

import React, { useState } from "react";
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
  // Ensure any other icons used *within* the tab content are also imported
} from "lucide-react";

// Import UI components used within the tab content
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Assuming Accordion might be used in full content
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Import the shared components
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";

// --- Type definitions needed for props ---
type PremiumTab = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

interface PageLink {
  name: string;
  url: string;
}

// --- Interface for client component props ---
interface LearningContentProps {
  tabs: PremiumTab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

// --- Client Component Definition ---
export default function LearningContent({ 
  tabs,
  prevPage,
  nextPage,
  nextTopicSegue 
}: LearningContentProps) {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <>
      {/* Main Content Area - Copied from original page.tsx */}
      <div className="space-y-8">
        <PremiumTabs 
          tabs={tabs} 
          defaultValue={tabs[0].value} 
          currentValue={currentTab} 
          onChange={setCurrentTab}
          title="Learning Fundamentals" // Copied title
        />
        
        {/* Conditional Content Blocks - Copied from original page.tsx */}
        {currentTab === 'styles' && (
          <div className="space-y-8 pt-6">
            {/* --- START: Original content for 'styles' tab --- */}
            <div className="grid gap-6 md:grid-cols-2">
               {/* Placeholder was here - Actual content added below */}
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
               {/* Placeholder was here - Actual content added below */}
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
               {/* Placeholder was here - Actual content added below */}
               <h3 className="text-lg font-semibold">Adapting Your Learning Style</h3>
               <p>Don't limit yourself! Even if you prefer one style, practice engaging with others. Use flashcards (visual) for procedures you heard (auditory). Chair-fly (kinesthetic) maneuvers you read about (visual). The goal is flexible, effective learning.</p>
            </div>
             {/* --- END: Original content for 'styles' tab --- */}
          </div>
        )}

        {currentTab === 'techniques' && (
           <div className="space-y-8 pt-6">
            {/* --- START: Original content for 'techniques' tab --- */}
            <div className="grid gap-6 md:grid-cols-2">
               {/* Placeholder was here - Actual content added below */}
                <Card>
                 <CardHeader>
                   <CardTitle>Effective Study Techniques</CardTitle>
                   <CardDescription>Go beyond passive reading. Engage actively with the material.</CardDescription>
                 </CardHeader>
                 <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                   <p>Simply reading the textbook or listening to a lecture isn't enough for long-term retention, especially with the volume of information in flight training. Active study techniques force your brain to process and connect information.</p>
                   <p>Experiment with different methods to find what works best for you and the specific subject matter (e.g., memorizing limitations vs. understanding aerodynamic concepts).</p>
                 </CardContent>
               </Card>
               <Card className="bg-muted/50">
                 <CardHeader>
                   <CardTitle>Consistency is Key</CardTitle>
                 </CardHeader>
                  <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                    <p>Cramming doesn't work for building a solid foundation. Short, focused, and frequent study sessions are far more effective than occasional marathon sessions.</p>
                    <ul>
                      <li>Aim for daily review, even if brief.</li>
                      <li>Preview material before a lesson.</li>
                      <li>Debrief and review immediately after.</li>
                    </ul>
                  </CardContent>
               </Card>
            </div>
            <Card>
               {/* Placeholder was here - Actual content added below */}
               <CardHeader>
                 <CardTitle>Top 5 Techniques for Cadets</CardTitle>
               </CardHeader>
               <CardContent>
                 {/* Simple Table structure or List */}
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
               </CardContent>
            </Card>
            <div className="rounded-xl border bg-muted/50 p-6 prose prose-sm max-w-none dark:prose-invert">
               {/* Placeholder was here - Actual content added below */}
               <h3 className="text-lg font-semibold">Implementing Techniques</h3>
               <p>Start small. Pick one or two techniques to focus on for a week. Use active recall for your aircraft limitations. Try spaced repetition for FARs. Integrate chair flying before every sim or flight lesson. Track what feels most effective and adjust.</p>
            </div>
            {/* --- END: Original content for 'techniques' tab --- */}
          </div>
        )}

        {currentTab === 'memory' && (
          <div className="space-y-8 pt-6">
            {/* --- START: Original content for 'memory' tab --- */}
            <div className="grid gap-6 md:grid-cols-2">
               {/* Placeholder was here - Actual content added below */}
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
               {/* Placeholder was here - Actual content added below */}
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
               {/* Placeholder was here - Actual content added below */}
                <h3 className="text-lg font-semibold">Combining Methods</h3>
                <p>Use multiple techniques together. Create a mnemonic (visual/auditory) and then practice recalling it using spaced repetition (active recall). Chunk checklist items and then chair-fly them (kinesthetic).</p>
            </div>
            {/* --- END: Original content for 'memory' tab --- */}
          </div>
        )}

        {currentTab === 'overload' && (
           <div className="space-y-8 pt-6">
             {/* --- START: Original content for 'overload' tab --- */}
            <div className="grid gap-6 md:grid-cols-2">
               {/* Placeholder was here - Actual content added below */}
                <Card>
                 <CardHeader>
                   <CardTitle>Managing Information Overload</CardTitle>
                   <CardDescription>Staying afloat when the information firehose opens.</CardDescription>
                 </CardHeader>
                 <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                   <p>Flight training is intense. You'll often feel overwhelmed by the amount you need to learn. This is normal! The key is to have strategies to manage it effectively.</p>
                   <p>Trying to learn everything at once leads to burnout and poor retention. Focus on mastering one concept before moving to the next.</p>
                 </CardContent>
               </Card>
                <Card className="bg-muted/50">
                  <CardHeader>
                   <CardTitle>Break It Down</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                    <p>Don't try to tackle the entire POH in one sitting. Focus on specific systems or chapters relevant to your current training stage.</p>
                    <ul>
                      <li>Identify the core objectives for your next lesson.</li>
                      <li>Prioritize understanding key concepts over memorizing details initially.</li>
                      <li>Use your syllabus as a guide.</li>
                    </ul>
                  </CardContent>
               </Card>
            </div>
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
               {/* Placeholder was here - Actual content added below */}
                <Card>
                 <CardHeader className="items-center"><Calendar className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Plan</CardTitle></CardHeader>
                 <CardContent><p className="text-sm text-muted-foreground">Schedule regular study time and stick to it.</p></CardContent>
               </Card>
                <Card>
                 <CardHeader className="items-center"><Target className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Prioritize</CardTitle></CardHeader>
                 <CardContent><p className="text-sm text-muted-foreground">Focus on what's most important for your current stage.</p></CardContent>
               </Card>
               <Card>
                 <CardHeader className="items-center"><Clock className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Take Breaks</CardTitle></CardHeader>
                 <CardContent><p className="text-sm text-muted-foreground">Step away regularly to avoid mental fatigue.</p></CardContent>
               </Card>
               <Card>
                 <CardHeader className="items-center"><Lightbulb className="h-6 w-6 text-primary"/><CardTitle className="ml-2 text-lg">Ask Help</CardTitle></CardHeader>
                 <CardContent><p className="text-sm text-muted-foreground">Talk to instructors or peers if you're stuck.</p></CardContent>
               </Card>
            </div>
            <Alert className="border-red-500 bg-red-50 text-red-700">
               {/* Placeholder was here - Actual content added below */}
               <AlertTriangle className="h-4 w-4" />
               <AlertTitle>Recognizing Burnout</AlertTitle>
               <AlertDescription>
                 Persistent fatigue, lack of motivation, irritability, and decreased performance can be signs of burnout. Address it early: talk to instructors, adjust your schedule, prioritize rest, and seek support. Pushing through burnout is counterproductive.
               </AlertDescription>
            </Alert>
            {/* --- END: Original content for 'overload' tab --- */}
          </div>
        )}

        {currentTab === 'technology' && (
           <div className="space-y-8 pt-6">
            {/* --- START: Original content for 'technology' tab --- */}
            <div className="grid gap-6 md:grid-cols-2">
               {/* Placeholder was here - Actual content added below */}
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
               {/* Placeholder was here - Actual content added below */}
                <CardHeader>
                 <CardTitle>Recommended Tech Tools</CardTitle>
                 <CardDescription>Examples of useful technology for cadets.</CardDescription>
               </CardHeader>
               <CardContent>
                 {/* Simple table or list */}
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
               {/* Placeholder was here - Actual content added below */}
               <Lightbulb className="h-4 w-4 text-aa-blue" />
               <AlertTitle className="text-aa-blue">Balancing Tech</AlertTitle>
               <AlertDescription>
                 Technology is a tool. Use it wisely to enhance your learning, not as a crutch. Always prioritize understanding the fundamentals and adhere to your flight school's specific policies regarding technology use in training.
               </AlertDescription>
            </Alert>
            {/* --- END: Original content for 'technology' tab --- */}
          </div>
        )}
      </div>

      {/* Add GuideNavigation at the end - Copied from original page.tsx */}
      <GuideNavigation 
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined} // Use correct prop format
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined} // Use correct prop format
        currentPageUrl={pathname} // Pass pathname
        nextTopicSegue={nextTopicSegue} 
      />
    </>
  );
} 