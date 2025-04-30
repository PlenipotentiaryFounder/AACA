"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { MainHeader } from "@/components/main-header";

// Simplified wrapper - no margin logic here
export function MainContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={cn(
        "flex-1 flex flex-col min-h-screen" // Removed transition, added min-h-screen
      )}
    >
      <MainHeader />
      <div className="flex-1">{children}</div> {/* Content area takes remaining space */}
    </main>
  );
} 