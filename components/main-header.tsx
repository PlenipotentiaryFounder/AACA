"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Search, Bell, User, ChevronRight, Menu } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define Logo component directly here or import if extracted
const Logo = () => (
  <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-aa-blue to-aa-navy">
    <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-sm">AA</div>
  </div>
)

export function MainHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { toggleSidebar } = useSidebar()

  // Handle scroll effect for glass header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    if (pathname === "/") return []

    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        href,
        active: index === segments.length - 1,
      }
    })
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-background border-b"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-display font-medium text-lg hidden md:inline-block">
              AACA Guide
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Search (⌘K)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                  <User className="h-5 w-5 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Progress Tracker</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

