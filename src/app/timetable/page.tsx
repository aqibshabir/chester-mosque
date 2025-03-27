'use client';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { getMonthlyTimeTable } from '@/api/getMonthlyTimetable';
import { getDates } from '@/lib/getDates';
import { getStartAndEndDate } from '@/lib/getStartAndEndDate';

interface MonthOption {
  month: number;
  year: number;
  label: string;
}

const dates = getDates();

export default function TimeTable() {
  const [selectedDate, setSelectedDate] = useState<MonthOption>(dates[0]);

  const handleDateChange = (label: string) => {
    if (selectedDate.label !== label) {
      setSelectedDate(dates.find((date) => date.label === label) || selectedDate);
    }
  };

  const dateRanges = getStartAndEndDate(selectedDate.year, selectedDate.month);

  // console.log(getMonthlyTimeTable(dateRanges[0], dateRanges[1]));

  return (
    <>
      <main className="bg-white">
        <div className="h-200 mt-2 p-4">
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
            {dateRanges[0]} {dateRanges[1]}
          </div>
        </div>
      </main>
    </>
  );
}
