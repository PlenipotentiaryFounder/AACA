import { Skeleton } from "@/components/ui/skeleton"

export default function CheckridesLoading() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Hero Section Skeleton */}
      <Skeleton className="w-full h-[300px] rounded-3xl mb-12" />

      {/* Alert Skeleton */}
      <Skeleton className="w-full h-[120px] rounded-lg mb-8" />

      {/* Tabs Skeleton */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-10 rounded-md" />
            ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <Skeleton className="w-full h-[600px] rounded-xl mb-12" />

      {/* CTA Skeleton */}
      <Skeleton className="w-full h-[200px] rounded-3xl" />
    </div>
  )
}

