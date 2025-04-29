import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <Skeleton className="h-12 w-[300px]" />
          <Skeleton className="h-6 w-[400px]" />
        </div>
      </div>
      <Skeleton className="my-8 h-[1px] w-full" />

      <div className="space-y-6">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />

        <Skeleton className="h-8 w-1/2" />

        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />

        <Skeleton className="h-8 w-1/2" />

        <div className="space-y-4">
          <Skeleton className="h-7 w-1/3" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-4/5" />
        </div>
      </div>
    </div>
  )
}

