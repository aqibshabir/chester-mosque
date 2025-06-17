import { Skeleton } from '@/components/ui/skeleton';

export function UpdatesSkeleton() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col justify-center items-start gap-4 md:gap-8 mx-4 xl:mx-0 mb-6">
        <Skeleton className="h-8 w-24 rounded-full" />
        <Skeleton className="h-16 w-full max-w-2xl" />
      </div>

      <div className="flex gap-4 overflow-hidden px-4 xl:px-0">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="flex-shrink-0 w-80 h-80 rounded-lg" />
          ))}
      </div>
    </div>
  );
}
