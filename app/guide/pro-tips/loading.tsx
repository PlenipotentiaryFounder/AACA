import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Hero Section Skeleton */}
      <div className="mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 p-8">
        <div className="max-w-3xl">
          <Skeleton className="mb-4 h-6 w-32" />
          <Skeleton className="mb-4 h-12 w-full max-w-2xl" />
          <Skeleton className="mb-6 h-4 w-full max-w-xl" />
          <Skeleton className="mb-2 h-4 w-full max-w-xl" />
          <div className="mt-6 flex gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>

      {/* Chapter Introduction Skeleton */}
      <div className="mb-12 rounded-xl border bg-card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Skeleton className="mb-2 h-8 w-64" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-6 w-32" />
        </div>

        <div className="mt-6 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        <div className="mt-6 rounded-lg bg-muted p-4">
          <Skeleton className="mb-2 h-6 w-3/4" />
          <Skeleton className="mb-4 h-4 w-full" />
          <Skeleton className="mb-4 h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      {/* Words of Wisdom Section Skeleton */}
      <div className="mb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-64" />
          </div>
          <Skeleton className="mt-2 h-4 w-48 ml-11" />
        </div>

        <Skeleton className="mb-8 h-24 w-full rounded-lg" />

        {/* Search and Filter Skeleton */}
        <div className="mb-8 rounded-lg border bg-card p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Skeleton className="h-10 w-full md:w-1/3" />
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-8 w-24" />
              ))}
            </div>
          </div>
        </div>

        {/* Tips Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-lg border bg-card p-4">
              <div className="mb-4 flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>

      {/* Cadet Stories Section Skeleton */}
      <div className="mb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-64" />
          </div>
          <Skeleton className="mt-2 h-4 w-48 ml-11" />
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center text-center md:w-1/3">
              <Skeleton className="mb-4 h-24 w-24 rounded-full" />
              <Skeleton className="mb-2 h-6 w-32" />
              <Skeleton className="mb-4 h-4 w-48" />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-4 w-4" />
                ))}
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

