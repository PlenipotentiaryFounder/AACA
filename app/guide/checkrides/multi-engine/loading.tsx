import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center gap-1 mb-6">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Back Button Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-40" />
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 mb-12">
        <div className="px-6 py-16 md:py-24 md:px-12 max-w-4xl">
          <Skeleton className="h-6 w-24 mb-4" />
          <Skeleton className="h-12 w-full max-w-lg mb-4" />
          <Skeleton className="h-8 w-full max-w-md mb-8" />
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </div>

      {/* Alert Skeleton */}
      <div className="rounded-lg border bg-muted p-4 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-6 w-64" />
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Tabs Skeleton */}
      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10" />
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-muted">
          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          <Skeleton className="h-6 w-full max-w-2xl mb-4" />
          <Skeleton className="h-6 w-full max-w-xl mb-4" />
          <Skeleton className="h-6 w-full max-w-3xl mb-8" />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          </div>

          <Skeleton className="h-6 w-64 mb-4" />
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explore Other Checkrides Skeleton */}
      <div className="mb-16">
        <Skeleton className="h-8 w-64 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="p-3 bg-gray-200">
                <Skeleton className="h-6 w-32" />
              </div>
              <CardContent className="pt-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
              <CardFooter className="bg-muted/30 pt-2 pb-2 flex justify-end">
                <Skeleton className="h-4 w-4" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="rounded-3xl bg-gray-200 overflow-hidden">
        <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl w-full">
            <Skeleton className="h-10 w-full max-w-md mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-48" />
            </div>
          </div>
          <div className="hidden md:block">
            <Skeleton className="h-64 w-64 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

