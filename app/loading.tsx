export default function Loading() {
  return (
    <div className="mx-auto w-[min(1180px,92%)] py-16">
      <div className="glass h-12 w-56 animate-pulse rounded-xl" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass h-40 animate-pulse rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
