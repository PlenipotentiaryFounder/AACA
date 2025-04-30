import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import Link from "next/link"
import { Home, BookOpen, LifeBuoy, Settings } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"
import { AppSidebarNav } from "@/components/app-sidebar-nav"
import { MainContentWrapper } from "@/components/main-content-wrapper"
import { LayoutContainer } from "@/components/layout-container"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AACA Student Pilot Guide",
  description: "A comprehensive digital guide for American Airlines Cadet Academy students",
  icons: {
    icon: "/images/aa-logo-favicon.svg",
    type: "image/svg+xml",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lexend.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen w-full overflow-x-hidden m-0 p-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="relative flex min-h-screen w-full">
              <Sidebar>
                <AppSidebarNav />
              </Sidebar>
              
              <LayoutContainer>
                <MainContentWrapper>
                  {children}
                </MainContentWrapper>
              </LayoutContainer>
            </div>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}