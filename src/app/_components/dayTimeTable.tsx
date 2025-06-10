'use client';
import { useEffect, useState } from 'react';
import { useTimetable, Timings } from '@/hooks/useTimetable';
import { cn } from '@/lib/utils';
import { DateTime } from 'luxon';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

function DayTimetable() {
  const [currentTimeNum, setCurrentTimeNum] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'start' | 'jammah'>('start');
  const today = DateTime.now();

  const timeToNum = (time: string | undefined) => {
    if (typeof time === 'undefined') return 0;
    return Number(time.split(':').join(''));
  };

  const { monthData, jammahTimes, loading } = useTimetable(today.month - 1, today.year);
  const todayData = monthData?.find((day) => day.date.readable === today.toFormat('dd LLL yyyy'));
  const todayJammahData = jammahTimes?.find(
    (day) => day.date.readable === today.toFormat('dd LLL yyyy')
  );

  useEffect(() => {
    const now = DateTime.now();
    setCurrentTimeNum(timeToNum(now.toLocaleString(DateTime.TIME_SIMPLE)));
  }, []);

  const prayerNames: (keyof Timings)[] = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  if (loading || !todayData || !todayJammahData || currentTimeNum === null) {
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

  const currentData = viewMode === 'start' ? todayData : todayJammahData;

  const firstUpcomingPrayer = prayerNames.find(
    (name) => currentData?.timings && timeToNum(currentData.timings[name]) > currentTimeNum
  );

  return (
    <div className="mt-22 mb-30 mx-4">
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
        <h3 className="bg-gray-100 px-4 py-1 rounded-full font-semibold">Timetable</h3>
        <p className="text-center mb-8 font-bold text-4xl md:text-6xl flex flex-col">
          <span>Prayer times</span> <span>made simple</span>
        </p>
        <div className="flex space-x-2 mb-8 md:mb-12">
          <Button
            variant={viewMode === 'start' ? 'default' : 'link'}
            className={cn(
              'hover:no-underline text-black hover:bg-gray-50',
              viewMode === 'start' && 'bg-indigo-600 hover:bg-indigo-600 text-white'
            )}
            onClick={() => setViewMode('start')}
          >
            Start
          </Button>
          <Button
            variant={viewMode === 'jammah' ? 'default' : 'link'}
            className={cn(
              'hover:no-underline text-black hover:bg-gray-50',
              viewMode === 'jammah' && 'bg-indigo-600 hover:bg-indigo-600 text-white'
            )}
            onClick={() => setViewMode('jammah')}
          >
            Jammah
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 sm:gap-6 md:gap-8 lg:gap-10  flex-wrap">
        {prayerNames.map((name) => (
          <div
            key={name}
            className={cn(
              'border text-black p-4 rounded-lg flex flex-col justify-center items-center h-[100px] w-full sm:w-[100px] lg:w-[200px]',
              currentTimeNum > timeToNum(currentData?.timings[name])
                ? 'bg-gray-100 border-none'
                : 'bg-white',
              firstUpcomingPrayer === name && 'border-2 border-indigo-600'
            )}
          >
            <p className="font-semibold text-2xl">{name}</p>
            <p>{currentData?.timings[name] || '-'}</p>
          </div>
        ))}
      </div>
      <a href="/timetable" className="flex justify-center items-center mt-12">
        <Button variant="link" className="sm:text-base">
          View Monthly Timetable
        </Button>
      </a>
    </div>
  );
}

export default DayTimetable;
