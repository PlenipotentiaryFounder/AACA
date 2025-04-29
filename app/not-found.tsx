import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="max-w-md p-8 mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900">
            <AlertTriangle className="w-12 h-12 text-amber-600 dark:text-amber-400" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold font-display">Page Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/glossary">View Glossary</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

