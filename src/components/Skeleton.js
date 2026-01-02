// Base Skeleton Component
export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] rounded ${className}`}
    />
  );
}

// Card Skeleton for ProjectCard
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-white/60">
      {/* Image Skeleton */}
      <Skeleton className="h-40 rounded-none" />

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <Skeleton className="h-5 w-3/4 mb-2" />
        {/* Period */}
        <Skeleton className="h-3 w-20 mb-4" />

        {/* Description */}
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />

        {/* Tags */}
        <div className="flex gap-1 mb-4">
          <Skeleton className="h-5 w-14 rounded-md" />
          <Skeleton className="h-5 w-16 rounded-md" />
          <Skeleton className="h-5 w-12 rounded-md" />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1 rounded-lg" />
          <Skeleton className="h-8 flex-1 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// Portfolio Grid Skeleton
export function PortfolioSkeleton({ count = 6 }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Text Line Skeleton
export function TextSkeleton({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        />
      ))}
    </div>
  );
}

// Avatar Skeleton
export function AvatarSkeleton({ size = "md" }) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  return <Skeleton className={`${sizes[size]} rounded-full`} />;
}
