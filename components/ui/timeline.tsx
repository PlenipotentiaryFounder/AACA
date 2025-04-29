"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<HTMLOListElement, React.HTMLAttributes<HTMLOListElement>>(
  ({ className, ...props }, ref) => <ol ref={ref} className={cn("relative ml-3.5 pl-4", className)} {...props} />,
)
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("mb-6", className)} {...props} />,
)
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute left-[-15px] top-0 ml-[7px] h-full w-[1px] bg-border dark:bg-secondary/50", className)}
      {...props}
    />
  ),
)
TimelineConnector.displayName = "TimelineConnector"

const TimelineHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
)
TimelineHeader.displayName = "TimelineHeader"

const TimelineIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("z-10 flex h-6 w-6 items-center justify-center rounded-full bg-muted", className)}
      {...props}
    />
  ),
)
TimelineIcon.displayName = "TimelineIcon"

const TimelineDot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute left-[-22px] flex h-3 w-3 items-center justify-center rounded-full bg-primary",
        className,
      )}
      {...props}
    />
  ),
)
TimelineDot.displayName = "TimelineDot"

const TimelineTitle = React.forwardRef<HTMLH3Element, React.HTMLAttributes<HTMLH3Element>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-sm font-semibold", className)} {...props} />,
)
TimelineTitle.displayName = "TimelineTitle"

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mt-2 text-sm", className)} {...props} />,
)
TimelineContent.displayName = "TimelineContent"

const TimelineDescription = React.forwardRef<HTMLPElement, React.HTMLAttributes<HTMLPElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("mt-2 text-sm text-muted-foreground", className)} {...props} />
  ),
)
TimelineDescription.displayName = "TimelineDescription"

const TimelineSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />,
)
TimelineSeparator.displayName = "TimelineSeparator"

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineDot,
  TimelineTitle,
  TimelineContent,
  TimelineDescription,
  TimelineSeparator,
}

