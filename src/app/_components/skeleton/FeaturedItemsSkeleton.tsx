import { Skeleton } from '@/components/ui/skeleton';

export function FeaturedItemsSkeleton() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full mt-6 mx-4 sm:mx-6 xl:mx-2 2xl:mx-0 max-w-7xl h-[80vh] xl:max-h-[40rem]">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
}
