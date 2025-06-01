'use client';
import { useEffect, useState } from 'react';
import { useTimetable, Timings } from '@/hooks/useTimetable';
import { cn } from '@/lib/utils';
import { DateTime } from 'luxon';
import { Skeleton } from '@/components/ui/skeleton';

function DayTimetable() {
  const [currentTimeNum, setCurrentTimeNum] = useState<number | null>(null);
  const today = DateTime.now();

  const timeToNum = (time: string | undefined) => {
    if (typeof time === 'undefined') return 0;
    return Number(time.split(':').join(''));
  };

  const { monthData, loading } = useTimetable(today.month - 1, today.year);
  const todayData = monthData?.find((day) => day.date.readable === today.toFormat('dd LLL yyyy'));

  useEffect(() => {
    const now = DateTime.now();
    setCurrentTimeNum(timeToNum(now.toLocaleString(DateTime.TIME_SIMPLE)));
  }, []);

  const prayerNames: (keyof Timings)[] = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  if (loading || !todayData || currentTimeNum === null) {
    return (
      <div className="mt-22 mx-4">
        <p className="text-center mb-12 font-semibold text-3xl">Today's Prayer Times</p>
        <div className="flex justify-center items-center gap-8 sm:gap-10 flex-wrap">
          {Array(5)
            .fill(0)
            .map((el, index) => (
              <Skeleton key={index} className="h-[100px] w-full sm:w-[200px] rounded-lg" />
            ))}
        </div>
        <div className="flex justify-center">
          <Skeleton className="mt-8 h-10 w-60" />
        </div>
      </div>
    );
  }

  const firstUpcomingPrayer = prayerNames.find(
    (name) => todayData?.timings && timeToNum(todayData.timings[name]) > currentTimeNum
  );

  return (
    <div className="mt-22 mb-30 mx-4">
      <h3 className="text-center mb-12 font-semibold text-4xl">Today's Prayer Times</h3>
      <div className="flex justify-center items-center gap-8 sm:gap-10  flex-wrap">
        {prayerNames.map((name) => (
          <div
            key={name}
            className={cn(
              'border text-black p-4 rounded-lg flex flex-col justify-center items-center h-[100px] w-full sm:w-[200px] hover:shadow-md',
              currentTimeNum > timeToNum(todayData?.timings[name]) ? 'bg-gray-100' : 'bg-white',
              firstUpcomingPrayer === name && 'border-2 border-indigo-600'
            )}
          >
            <p className="font-semibold text-2xl">{name}</p>
            <p>{todayData?.timings[name] || '-'}</p>
          </div>
        ))}
      </div>
      <a href="/timetable">
        <p className="text-center mt-8 hover:underline ">View Monthly Timetable</p>
      </a>
    </div>
  );
}

export default DayTimetable;
