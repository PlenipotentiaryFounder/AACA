"use client";

import type React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function LayoutContainer({ children }: { children: React.ReactNode }) {
  const { state, isMobile } = useSidebar();

  const marginLeftClass = !isMobile
    ? state === "expanded"
      ? "ml-[var(--sidebar-width)]"
      : "ml-[var(--sidebar-width-icon)]"
    : "";

  return (
    <div
      className={cn(
        "flex-1 transition-[margin-left] duration-300 ease-in-out", // flex-1 takes space, transition for margin
        marginLeftClass
      )}
    >
      {children} 
    </div>
  );
} 