import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-6 lg:py-10">
      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600/30 to-indigo-700/30 px-6 py-10 sm:px-12 sm:py-16 mb-10">
        <div className="relative z-10 max-w-3xl">
          <Skeleton className="h-12 w-[300px] mb-4" />
          <Skeleton className="h-6 w-[450px]" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Skeleton className="h-8 w-32 rounded-full" />
            <Skeleton className="h-8 w-40 rounded-full" />
            <Skeleton className="h-8 w-36 rounded-full" />
          </div>
        </div>
      </div>

      {/* Introduction Section Skeleton */}
      <div className="mb-12 max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-1 w-12 rounded-full" />
          <Skeleton className="h-5 w-32" />
        </div>

        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-5/6 mb-2" />
        <Skeleton className="h-6 w-4/5" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-[180px] rounded-lg" />
          ))}
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="space-y-8">
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-[120px] w-full rounded-lg" />
            ))}
          </div>

          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Related Resources Skeleton */}
      <div className="mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-6 w-32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}

