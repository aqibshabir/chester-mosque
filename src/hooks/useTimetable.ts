import { useEffect, useState } from 'react';
import { getMonthlyTimeTable } from '@/app/api/getMonthlyTimetable';
import { getStartAndEndDate } from '@/lib/getStartAndEndDate';

export interface Timings {
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

interface HijiriDate {
  month: {
    number: number;
    en: string;
  };
}

interface DayData {
  timings: Timings;
  date: {
    readable: string;
    timestamp: string;
    hijiri: HijiriDate;
  };
  meta: unknown;
}

export const useTimetable = (month: number, year: number) => {
  const [monthData, setMonthData] = useState<DayData[]>([]);
  // make some state for jammahTimes
  const [loading, setLoading] = useState(true);

  const [start, end] = getStartAndEndDate(year, month);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getMonthlyTimeTable(start, end);
        // send this data to getJammahTimes and then set to state you created for JammahTimes
        setMonthData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [month, year]);

  return { monthData, loading }; // return jammahTimes also
};
