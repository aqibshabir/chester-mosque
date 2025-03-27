'use client';
import { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { getMonthlyTimeTable } from '@/api/getMonthlyTimetable';
import { getDates } from '@/lib/getDates';
import { getStartAndEndDate } from '@/lib/getStartAndEndDate';

interface MonthOption {
  month: number;
  year: number;
  label: string;
}

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

const dates = getDates();

export default function TimeTable() {
  const [selectedDate, setSelectedDate] = useState<MonthOption>(dates[0]);
  const [monthData, setMonthData] = useState<DayData[]>();

  const handleDateChange = (label: string) => {
    if (selectedDate.label !== label) {
      setSelectedDate(dates.find((date) => date.label === label) || selectedDate);
    }
  };

  const dateRanges = getStartAndEndDate(selectedDate.year, selectedDate.month);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMonthlyTimeTable(dateRanges[0], dateRanges[1]);
        setMonthData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
    <>
      <main className="bg-white">
        <div className="mt-2 p-4">
          <Select defaultValue={selectedDate.label} onValueChange={(e) => handleDateChange(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {dates.map((date) => (
                <SelectItem key={date.label} value={date.label}>
                  {date.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div>
            <Table>
              <TableCaption>A timetable of prayer times.</TableCaption>
              <TableHeader>
                <TableRow className="">
                  <TableHead className="text-left">Date</TableHead>
                  <TableHead className="text-center">Fajr</TableHead>
                  <TableHead className="text-center">Dhuhr</TableHead>
                  <TableHead className="text-center">Asr</TableHead>
                  <TableHead className="text-center">Maghreb</TableHead>
                  <TableHead className="text-center">Isha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthData?.map((day) => (
                  <TableRow>
                    <TableCell className="text-left" key={day.date.readable}>
                      {day.date.readable}
                    </TableCell>
                    <TableCell className="text-center" key={day.timings.Fajr}>
                      {day.timings.Fajr}
                    </TableCell>
                    <TableCell className="text-center" key={day.timings.Dhuhr}>
                      {day.timings.Dhuhr}
                    </TableCell>
                    <TableCell className="text-center" key={day.timings.Asr}>
                      {day.timings.Asr}
                    </TableCell>
                    <TableCell className="text-center" key={day.timings.Maghrib}>
                      {day.timings.Maghrib}
                    </TableCell>
                    <TableCell className="text-center" key={day.timings.Isha}>
                      {day.timings.Isha}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow></TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}
