"use client";

import type React from "react";
import { cn } from "@/lib/utils";

export function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex-1"
      )}
    >
      {children} 
    </div>
  );
} 