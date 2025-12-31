export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-3 border-pink-200 border-t-rose-400 rounded-full animate-spin"></div>

        {/* Skeleton cards */}
        <div className="flex gap-4 mt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-64 h-40 bg-white/60 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
