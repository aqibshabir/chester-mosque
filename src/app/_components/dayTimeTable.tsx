'use client';
import { useTimetable } from '@/hooks/useTimetable';
import { cn } from '@/lib/utils';
import { DateTime } from 'luxon';

function DayTimetable() {
  const today = DateTime.now();
  const currentTime = today.toLocaleString(DateTime.TIME_SIMPLE);

  const timeToNum = (time: string | undefined) => {
    if (typeof time === 'undefined') return 0;
    return Number(time.split(':').join(''));
  };

  const currentTimeNum = timeToNum(currentTime);

  const { monthData, loading } = useTimetable(today.month - 1, today.year);
  const todayData = monthData?.find((day) => day.date.readable === today.toFormat('dd LLL yyyy'));

  return (
    <div className="mt-22 mx-4">
      <p className="text-center mb-4">Today's Prayer Times</p>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <div
          className={cn(
            'border text-black p-4 rounded-lg flex flex-col justify-center items-center w-full sm:w-[200px] hover:shadow-md',
            currentTimeNum > timeToNum(todayData?.timings.Fajr) ? 'bg-gray-100' : 'bg-white'
          )}
        >
          <p className="font-semibold text-2xl">Fajr</p>
          <p>{todayData?.timings.Fajr || '-'}</p>
        </div>
        <div
          className={cn(
            'border text-black p-4 rounded-lg flex flex-col justify-center items-center w-full sm:w-[200px] hover:shadow-md',
            currentTimeNum > timeToNum(todayData?.timings.Dhuhr) ? 'bg-gray-100' : 'bg-white'
          )}
        >
          <p className="font-semibold text-2xl">Dhuhr</p>
          <p>{todayData?.timings.Dhuhr || '-'}</p>
        </div>
        <div
          className={cn(
            'border text-black p-4 rounded-lg flex flex-col justify-center items-center w-full sm:w-[200px] hover:shadow-md',
            currentTimeNum > timeToNum(todayData?.timings.Asr) ? 'bg-gray-100' : 'bg-white'
          )}
        >
          <p className="font-semibold text-2xl">Asr</p>
          <p>{todayData?.timings.Asr || '-'}</p>
        </div>
        <div
          className={cn(
            'border text-black p-4 rounded-lg flex flex-col justify-center items-center w-full sm:w-[200px] hover:shadow-md',
            currentTimeNum > timeToNum(todayData?.timings.Maghrib) ? 'bg-gray-100' : 'bg-white'
          )}
        >
          <p className="font-semibold text-2xl">Maghrib</p>
          <p>{todayData?.timings.Maghrib || '-'}</p>
        </div>
        <div
          className={cn(
            'border text-black p-4 rounded-lg flex flex-col justify-center items-center w-full sm:w-[200px] hover:shadow-md',
            currentTimeNum > timeToNum(todayData?.timings.Isha) ? 'bg-gray-100' : 'bg-white'
          )}
        >
          <p className="font-semibold text-2xl">Isha</p>
          <p> {todayData?.timings.Isha || '-'}</p>
        </div>
      </div>
      <a href="/timetable">
        <p className="text-center mt-4 hover:underline">View Monthly Timetable</p>
      </a>
    </div>
  );
}

export default DayTimetable;
