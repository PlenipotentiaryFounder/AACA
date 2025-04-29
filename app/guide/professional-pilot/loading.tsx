import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      {/* Hero Section Skeleton */}
      <div className="relative mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-aa-navy/30 to-aa-blue/30 p-8">
        <div className="max-w-3xl">
          <Skeleton className="mb-4 h-6 w-24" />
          <Skeleton className="mb-4 h-12 w-full max-w-2xl" />
          <Skeleton className="h-20 w-full max-w-3xl" />
        </div>
      </div>

      {/* Chapter Introduction Skeleton */}
      <div className="mb-12 rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Skeleton className="mb-2 h-8 w-64" />
            <Skeleton className="h-4 w-full max-w-md" />
          </div>
          <Skeleton className="h-6 w-32" />
        </div>

        <div className="mt-6">
          <Skeleton className="mb-4 h-4 w-full" />
          <Skeleton className="mb-4 h-4 w-full" />
          <Skeleton className="mb-4 h-4 w-3/4" />

          <div className="mt-6 rounded-lg bg-muted p-4">
            <Skeleton className="mb-4 h-6 w-48" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="w-full">
        <div className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4">
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
        </div>

        {/* Content Skeleton */}
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Skeleton className="mb-2 h-8 w-64" />
              <Skeleton className="mb-6 h-4 w-full max-w-md" />
              <Skeleton className="h-24 w-full" />
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Skeleton className="mb-4 h-6 w-48" />
              <Skeleton className="mb-4 h-4 w-full" />
              <div className="space-y-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-6">
                <Skeleton className="mb-2 h-6 w-40" />
                <Skeleton className="mb-4 h-4 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="mt-12 rounded-xl bg-gradient-to-r from-aa-blue/30 to-aa-navy/30 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Skeleton className="mb-4 h-8 w-64" />
            <Skeleton className="h-16 w-full" />
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>
    </div>
  )
}

