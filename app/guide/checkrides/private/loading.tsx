import { Skeleton } from "@/components/ui/skeleton"

export default function PrivateCheckrideLoading() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Breadcrumb Skeleton */}
      <Skeleton className="w-32 h-6 mb-6" />

      {/* Hero Section Skeleton */}
      <Skeleton className="w-full h-[300px] rounded-3xl mb-12" />

      {/* Overview Section Skeleton */}
      <Skeleton className="w-full h-[250px] rounded-xl mb-12" />

      {/* Tabs Skeleton */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-10 rounded-md" />
            ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <Skeleton className="w-full h-[600px] rounded-xl mb-12" />

      {/* Resources Skeleton */}
      <Skeleton className="w-full h-[300px] rounded-xl mb-12" />

      {/* Next Steps Skeleton */}
      <Skeleton className="w-full h-[200px] rounded-xl" />
    </div>
  )
}

