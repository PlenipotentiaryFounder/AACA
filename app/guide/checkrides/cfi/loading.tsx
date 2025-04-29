import { Skeleton } from "@/components/ui/skeleton"

export default function CFICheckrideLoading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-2">
        <Skeleton className="h-9 w-36" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-6 w-full max-w-2xl" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg p-6 space-y-4">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
        <div className="border rounded-lg p-6 space-y-4">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>

      <div className="space-y-6">
        <Skeleton className="h-10 w-full" />

        <div className="border rounded-lg p-6 space-y-4">
          <Skeleton className="h-7 w-64" />
          <Skeleton className="h-32 w-full" />
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <Skeleton className="h-7 w-64" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
    </div>
  )
}

