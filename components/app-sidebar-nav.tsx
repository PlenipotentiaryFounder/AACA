"use client";

import type React from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Plane,
  GraduationCap,
  BookMarked,
  CloudSun,
  Radio,
  Gauge,
  FileText,
  PenTool,
  MessageSquare,
  Home,
  ChevronDown,
  Bookmark,
  Lightbulb,
  AlertTriangle,
  Compass,
  Headphones,
  Zap,
  Award,
  Brain,
  Map,
  Settings,
  LifeBuoy,
  Wind,
  ShieldQuestion,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

// Navigation structure from AppSidebar
const mainCategories = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/",
    badge: null,
  },
  {
    title: "Welcome to the Academy",
    icon: GraduationCap,
    url: "/guide/welcome",
    badge: null,
    subItems: [
      // { title: "Program Overview", url: "/guide/welcome/overview" },
      // { title: "Meet Your Instructors", url: "/guide/welcome/instructors" },
      // { title: "Cadet Community", url: "/guide/welcome/community" },
    ],
  },
  {
    title: "Training Expectations",
    icon: BookMarked,
    url: "/guide/training-expectations",
    badge: null,
  },
  {
    title: "Learning Fundamentals",
    icon: Lightbulb,
    url: "/guide/learning",
    badge: null,
  },
  {
    title: "Resources & Tools",
    icon: FileText,
    url: "/guide/resources",
    badge: { text: "Essential", variant: "outline" },
  },
  {
    title: "Flight Training",
    icon: Plane,
    url: "/guide/flight-training",
    badge: null,
    subItems: [
      // { title: "Pre-Flight Preparation", url: "/guide/flight-training/pre-flight" },
      // { title: "In-Flight Procedures", url: "/guide/flight-training/procedures" },
      // { title: "Post-Flight Debriefing", url: "/guide/flight-training/debriefing" },
    ],
  },
  {
    title: "Mental Resilience",
    icon: Brain,
    url: "/guide/mental-resilience",
    badge: null,
    subItems: [
      // { title: "Managing Stress & Setbacks", url: "/guide/mental-resilience/managing-stress" },
      // { title: "Avoiding Burnout", url: "/guide/mental-resilience/avoiding-burnout" },
      // { title: "Impostor Syndrome", url: "/guide/mental-resilience/impostor-syndrome" },
      // { title: "Maslow's Hierarchy", url: "/guide/mental-resilience/maslows-hierarchy" },
    ],
  },
  {
    title: "Knowledge Tests",
    icon: PenTool,
    url: "/guide/knowledge-tests",
    badge: null,
  },
  {
    title: "Checkrides",
    icon: Award,
    url: "/guide/checkrides",
    badge: { text: "Important", variant: "default" },
    subItems: [
      // { title: "Private Pilot", url: "/guide/checkrides/private" },
      // { title: "Instrument Rating", url: "/guide/checkrides/instrument" },
      // { title: "Commercial Pilot", url: "/guide/checkrides/commercial" },
      // { title: "Multi-Engine", url: "/guide/checkrides/multi-engine" },
      // { title: "CFI", url: "/guide/checkrides/cfi" },
      // { title: "ATP", url: "/guide/checkrides/atp" },
    ],
  },
  {
    title: "Professional Development",
    icon: Zap,
    url: "/guide/professional-pilot",
    badge: null,
  },
  {
    title: "Pro Tips from Cadets",
    icon: MessageSquare,
    url: "/guide/pro-tips",
    badge: { text: "New", variant: "default" },
  },
  {
    title: "FAQs & How-To Guide",
    icon: Headphones,
    url: "/guide/faq",
    badge: null,
  },
];

// Footer items (moved here for simplicity)
const footerCategories = [
  {
    title: "Help & Support",
    icon: LifeBuoy,
    url: "/help",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
  },
];

// --- NEW NAVIGATION STRUCTURE ---

const guideNav = [
  { title: "Welcome", icon: GraduationCap, url: "/guide/welcome" },
  { title: "Training Expectations", icon: BookMarked, url: "/guide/training-expectations" },
  { title: "Learning Fundamentals", icon: Lightbulb, url: "/guide/learning" },
  { title: "Resources & Tools", icon: FileText, url: "/guide/resources", badge: { text: "Essential", variant: "outline" } },
  { title: "Flight Training", icon: Plane, url: "/guide/flight-training" },
  {
    title: "Mental Resilience", icon: Brain, url: "/guide/mental-resilience",
    subItems: [
      { title: "Overview", url: "/guide/mental-resilience" },
      { title: "Managing Stress", url: "/guide/mental-resilience/managing-stress" },
      { title: "Avoiding Burnout", url: "/guide/mental-resilience/avoiding-burnout" },
      { title: "Impostor Syndrome", url: "/guide/mental-resilience/impostor-syndrome" },
      { title: "Maslow's Hierarchy", url: "/guide/mental-resilience/maslows-hierarchy" },
    ]
  },
  { title: "Knowledge Tests", icon: PenTool, url: "/guide/knowledge-tests" },
  {
    title: "Checkrides", icon: Award, url: "/guide/checkrides", badge: { text: "Important", variant: "default" },
    subItems: [
      { title: "Overview", url: "/guide/checkrides" },
      { title: "Private Pilot", url: "/guide/checkrides/private" },
      { title: "Instrument Rating", url: "/guide/checkrides/instrument" },
      { title: "Commercial Pilot", url: "/guide/checkrides/commercial" },
      { title: "Multi-Engine", url: "/guide/checkrides/multi-engine" },
      { title: "CFI", url: "/guide/checkrides/cfi" },
      { title: "CFII", url: "/guide/checkrides/cfii" },
      { title: "ATP", url: "/guide/checkrides/atp" },
    ]
  },
  { title: "Professional Development", icon: Zap, url: "/guide/professional-pilot" },
  { title: "Pro Tips", icon: MessageSquare, url: "/guide/pro-tips", badge: { text: "New", variant: "default" } },
  { title: "FAQs", icon: ShieldQuestion, url: "/guide/faq" }, // Using ShieldQuestion for FAQ
];

const fundamentalsNav = [
  { title: "Overview", icon: Compass, url: "/fundamentals" },
  { title: "Aerodynamics", icon: Wind, url: "/fundamentals/aerodynamics" },
  { title: "Aircraft Systems", icon: Settings, url: "/fundamentals/aircraft-systems" },
  { title: "Airspace", icon: Map, url: "/fundamentals/airspace" }, // Using Map for Airspace
  { title: "Cross Country Planning", icon: Compass, url: "/fundamentals/cross-country-planning" }, // Re-use Compass?
  { title: "Flight Instruments", icon: Gauge, url: "/fundamentals/flight-instruments" },
  { title: "Navigation", icon: Compass, url: "/fundamentals/navigation" }, // Maybe another Compass?
  { title: "Radio Communications", icon: Radio, url: "/fundamentals/radio-communications" },
  {
    title: "Risk Management", icon: AlertTriangle, url: "/fundamentals/risk-management",
    subItems: [
      { title: "Overview", url: "/fundamentals/risk-management" },
      { title: "PAVE Model", url: "/fundamentals/risk-management/pave" },
    ]
  },
  { title: "Sectional Charts", icon: Map, url: "/fundamentals/sectional-charts" }, // Using Map again
  { title: "Traffic Patterns", icon: Plane, url: "/fundamentals/traffic-patterns" }, // Re-use Plane?
  { title: "Weather", icon: CloudSun, url: "/fundamentals/weather" },
];

const glossaryNav = { title: "Plane English Glossary", icon: BookMarked, url: "/glossary" }; // Assuming /glossary path

// --- Refactored NavMenuItem Helper --- (Re-added)
const NavMenuItem = ({ item, isSubmenu = false }: { item: any; isSubmenu?: boolean }) => {
  const pathname = usePathname(); // Need pathname here
  // Check if the exact path matches or if any sub-item path matches
  const checkIsActive = (currentItem: any): boolean => {
    if (pathname === currentItem.url) return true;
    if (!currentItem.subItems) return false;
    return currentItem.subItems.some(checkIsActive);
  };
  const isActive = checkIsActive(item);
  const activeClasses = "bg-accent text-accent-foreground font-medium"; // Keep activeClasses definition

  if (item.subItems && item.subItems.length > 0) {
    // Collapsible Item
    const isSectionActive = pathname.startsWith(item.url); // Check if current path is within this section
    return (
      <Collapsible defaultOpen={isSectionActive}> 
        <CollapsibleTrigger asChild>
          <div>
            <SidebarMenuButton
              className={cn(
                "justify-between group w-full",
                isSectionActive && !isSubmenu && "font-semibold" // Make top-level trigger bold if section active
                // isSectionActive && activeClasses // Optionally apply full active style to trigger if section active
              )}
              size={isSubmenu ? "sm" : "default"}
              tooltip={item.title}
            >
              <div className="flex items-center flex-1 overflow-hidden mr-2">
                {item.icon && <item.icon className={cn("h-4 w-4 mr-2 shrink-0", isSectionActive && "text-accent-foreground")} />} 
                <span className="truncate">{item.title}</span>
              </div>
              {item.badge && (
                <Badge variant={item.badge.variant as any} className="ml-auto mr-2 px-1 py-0 text-[10px] shrink-0">
                  {item.badge.text}
                </Badge>
              )}
              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180 shrink-0" />
            </SidebarMenuButton>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="ml-2 pl-4 py-1 border-l border-dashed border-border/50">
            {item.subItems.map((subItem: any) => (
              <NavMenuItem key={subItem.title} item={subItem} isSubmenu={true} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    );
  } else {
    // Direct Link Item
    return (
      <SidebarMenuItem> {/* Wrap direct link in SidebarMenuItem for consistent spacing */}
        <SidebarMenuButton 
          asChild 
          size={isSubmenu ? "sm" : "default"}
          tooltip={item.title}
          className={cn(isActive && activeClasses)} // Apply consistent active style
        >
          <Link href={item.url} className="flex items-center flex-1 overflow-hidden mr-2">
            {item.icon && <item.icon className="h-4 w-4 mr-2 shrink-0" />} 
            <span className="truncate">{item.title}</span>
            {item.badge && (
              <Badge variant={item.badge.variant as any} className="ml-auto px-1 py-0 text-[10px] shrink-0">
                {item.badge.text}
              </Badge>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};

export function AppSidebarNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { state } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery);
  };

  // --- Rail Item Helper --- (New helper for collapsed state)
  const RailMenuItem = ({ title, icon: Icon, url }: { title: string; icon: React.ElementType; url: string }) => {
    const isActive = pathname.startsWith(url) || (url === "/glossary" && pathname === url); // Simple active check for rail
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={url} passHref>
            <Button
              variant={isActive ? "secondary" : "ghost"} // Use secondary variant for active rail item
              size="icon"
              className="h-9 w-9 rounded-lg"
              aria-label={title}
            >
              <Icon className="h-5 w-5" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          {title}
        </TooltipContent>
      </Tooltip>
    );
  };

  return (
    <>
      <SidebarHeader className="p-2 border-b h-auto">
        <div className="flex items-center mb-2">
          <SidebarTrigger className="flex-shrink-0" />
        </div>

        {state === 'expanded' && (
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search guide..."
              className="w-full bg-background pl-8 pr-4 h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        )}
        {state === 'collapsed' && (
           <div className="h-9 w-9"></div>
        )}
      </SidebarHeader>

      <SidebarContent className="p-0 flex-1 overflow-y-auto"> 
        {state === 'expanded' ? (
          <SidebarMenu className="p-2"> 
            
            <SidebarGroup>
              <SidebarGroupContent>
                <Collapsible defaultOpen={pathname.startsWith('/guide')}> 
                  <CollapsibleTrigger asChild>
                    <div>
                      <SidebarMenuButton 
                        className="justify-between group w-full font-semibold"
                        tooltip="Pilot Guide"
                        data-active={pathname.startsWith('/guide')}
                      >
                        <div className="flex items-center flex-1 overflow-hidden mr-2">
                          <BookOpen className="h-4 w-4 mr-2 shrink-0" />
                          <span className="truncate">Guide</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180 shrink-0" />
                      </SidebarMenuButton>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="ml-2 pl-4 py-1 border-l border-dashed border-border/50">
                      {guideNav.map((item) => <NavMenuItem key={item.title} item={item} />)}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator className="my-2 mx-2" />

            <SidebarGroup>
              <SidebarGroupContent>
                <Collapsible defaultOpen={pathname.startsWith('/fundamentals')}> 
                  <CollapsibleTrigger asChild>
                    <div>
                      <SidebarMenuButton 
                        className="justify-between group w-full font-semibold"
                        tooltip="Flight Fundamentals"
                        data-active={pathname.startsWith('/fundamentals')}
                      >
                        <div className="flex items-center flex-1 overflow-hidden mr-2">
                          <Lightbulb className="h-4 w-4 mr-2 shrink-0" />
                          <span className="truncate">Fundamentals</span>
                        </div>
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180 shrink-0" />
                      </SidebarMenuButton>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="ml-2 pl-4 py-1 border-l border-dashed border-border/50">
                      {fundamentalsNav.map((item) => <NavMenuItem key={item.title} item={item} />)}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator className="my-2 mx-2" />

            <SidebarGroup>
              <SidebarGroupLabel>Other</SidebarGroupLabel>
              <SidebarGroupContent>
                  <NavMenuItem item={glossaryNav} />
              </SidebarGroupContent>
            </SidebarGroup>

          </SidebarMenu>
        ) : (
          <TooltipProvider delayDuration={0}> 
            <div className="flex flex-col items-center gap-2 p-2 mt-2">
              <RailMenuItem title="Guide" icon={BookOpen} url="/guide" />
              <RailMenuItem title="Fundamentals" icon={Lightbulb} url="/fundamentals" />
              <RailMenuItem title="Glossary" icon={BookMarked} url="/glossary" />
            </div>
          </TooltipProvider>
        )}
      </SidebarContent>
    </>
  );
} 