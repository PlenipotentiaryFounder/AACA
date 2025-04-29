import { Skeleton } from "@/components/ui/skeleton"

export default function ATPCheckrideLoading() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-6">
        <Skeleton className="h-10 w-40" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-700/40 to-slate-900/40 mb-12">
        <div className="px-6 py-16 md:py-24 md:px-12">
          <Skeleton className="h-6 w-24 mb-4" />
          <Skeleton className="h-14 w-full max-w-2xl mb-4" />
          <Skeleton className="h-8 w-full max-w-3xl mb-8" />
          <div className="flex flex-wrap gap-4 mb-8">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-56" />
          </div>
        </div>
      </section>

      {/* Personal Note Alert */}
      <Skeleton className="w-full h-32 mb-8 rounded-lg" />

      {/* Main Content Tabs */}
      <section className="mb-16">
        <div className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10" />
          ))}
        </div>

        <Skeleton className="w-full h-[800px] rounded-xl" />
      </section>

      {/* CTA Section */}
      <Skeleton className="w-full h-64 rounded-3xl" />
    </div>
  )
}

