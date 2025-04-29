import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import MentalResilienceContent from "@/components/guide/mental-resilience-content"

// --- Types ---
type PremiumTab = {
  value: string;
  label: string;
  iconName: string;
};

type PageLink = {
  href: string;
  label: string;
};

// --- Static Data ---
const tabs: PremiumTab[] = [
  {
    value: "managing-stress",
    label: "Managing Stress",
    iconName: "Brain",
  },
  {
    value: "avoiding-burnout",
    label: "Avoiding Burnout",
    iconName: "Zap",
  },
  {
    value: "impostor-syndrome",
    label: "Impostor Syndrome",
    iconName: "Lightbulb",
  },
  {
    value: "maslows-hierarchy",
    label: "Maslow's Hierarchy",
    iconName: "Layers",
  },
];

const prevPage: PageLink = {
  href: "/guide/professional-pilot",
  label: "Professional Pilot",
};

const nextPage: PageLink = {
  href: "/guide/checkrides",
  label: "Checkrides",
};

const nextTopicSegue = "Prepare effectively for your Checkrides";

// --- Metadata ---
export const metadata: Metadata = {
  title: "Mental Resilience | Cadet Guide",
  description: "Building the psychological strength to thrive during flight training.",
};

// --- Server Component ---
export default function MentalResiliencePage() {
  // Now this component only fetches/defines data and renders the client component
  return (
    <MentalResilienceContent
      tabs={tabs}
      prevPage={prevPage}
      nextPage={nextPage}
      nextTopicSegue={nextTopicSegue}
    />
  );
}

