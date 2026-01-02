import { Skeleton, ProjectCardSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-16 h-5" />
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-6">
              <Skeleton className="w-12 h-4" />
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-14 h-4" />
            </div>
            <div className="flex gap-1">
              <Skeleton className="w-7 h-7 rounded-lg" />
              <Skeleton className="w-7 h-7 rounded-lg" />
              <Skeleton className="w-7 h-7 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="pt-32 md:pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Skeleton className="w-20 h-4 mx-auto mb-4" />
            <Skeleton className="w-64 h-10 mx-auto mb-4" />
            <Skeleton className="w-80 h-5 mx-auto" />
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="fixed bottom-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/60">
        <div className="w-4 h-4 border-2 border-rose-200 border-t-rose-500 rounded-full animate-spin" />
        <span className="text-sm text-gray-500">Loading...</span>
      </div>
    </div>
  );
}
