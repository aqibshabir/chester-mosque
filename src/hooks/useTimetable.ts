import { useEffect, useState } from 'react';
import { getMonthlyTimeTable } from '@/app/api/getMonthlyTimetable';
import { getStartAndEndDate } from '@/lib/getStartAndEndDate';

interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}

interface DayData {
  timings: Timings;
  date: {
    readable: string;
    timestamp: string;
  };
  meta: unknown;
}

export const useTimetable = (month: number, year: number) => {
  const [monthData, setMonthData] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);

  const [start, end] = getStartAndEndDate(year, month);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getMonthlyTimeTable(start, end);
        setMonthData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [month, year]);

  return { monthData, loading };
};
