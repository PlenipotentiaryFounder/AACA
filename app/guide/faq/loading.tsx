import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Hero Section Skeleton */}
      <div className="mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 p-8">
        <Skeleton className="mb-4 h-6 w-32" />
        <Skeleton className="mb-4 h-12 w-full max-w-2xl" />
        <Skeleton className="h-4 w-full max-w-xl" />
      </div>

      {/* Main Content Skeleton */}
      <div className="grid gap-8 md:grid-cols-4">
        {/* Sidebar Skeleton */}
        <div className="md:col-span-1">
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <Skeleton className="mb-3 h-6 w-24" />
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-8 w-full" />
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <Skeleton className="mb-3 h-6 w-24" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-8 w-full" />
                ))}
              </div>
            </div>

            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>

        {/* Main FAQ Content Skeleton */}
        <div className="md:col-span-3">
          {/* Search Skeleton */}
          <div className="mb-6 rounded-lg border bg-card p-4 shadow-sm">
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Tabs Skeleton */}
          <div className="mb-6">
            <Skeleton className="h-10 w-full rounded-lg" />
            <div className="mt-6 space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-16 w-full rounded-lg" />
              ))}
            </div>
          </div>

          {/* Still Have Questions Skeleton */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Skeleton className="mb-2 h-8 w-64" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-3/4" />
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Skeleton className="h-10 w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

