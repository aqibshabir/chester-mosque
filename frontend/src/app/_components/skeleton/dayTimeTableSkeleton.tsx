import { Skeleton } from '@/components/ui/skeleton';

function DayTimetableSkeleton() {
  return (
    <div className="mt-22 mb-30 mx-4">
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
        <h3 className="bg-gray-100 px-4 py-1 rounded-full font-semibold">Timetable</h3>
        <p className="text-center mb-8 font-bold text-4xl md:text-6xl flex flex-col">
          <span>Prayer times</span> <span>made simple</span>
        </p>
        <div className="flex space-x-2 mb-8 md:mb-12">
          <Skeleton className="h-10 w-16 rounded-md" />
          <Skeleton className="h-10 w-20 rounded-md" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap">
        {Array(5)
          .fill(0)
          .map((el, index) => (
            <Skeleton
              key={index}
              className="h-[100px] w-full sm:w-[100px] lg:w-[200px] rounded-lg"
            />
          ))}
      </div>
      <div className="flex justify-center">
        <Skeleton className="mt-12 h-10 w-60" />
      </div>
    </div>
  );
}

export default DayTimetableSkeleton;
