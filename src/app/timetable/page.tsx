'use client';
import { useEffect, useState } from 'react';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DateTime } from 'luxon';
import { MdOutlineSaveAlt } from 'react-icons/md';

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

  const handleDownloadPDF = () => {
    if (!monthData) return;

    const timetable = new jsPDF();

    const tableColumn = ['Date', 'Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    const tableRows = monthData.map((day) => {
      const [dayCount, month] = day.date.readable.split(' ');
      return [
        `${dayCount} ${month}`,
        day.timings.Fajr,
        day.timings.Dhuhr,
        day.timings.Asr,
        day.timings.Maghrib,
        day.timings.Isha,
      ];
    });

    autoTable(timetable, {
      head: [tableColumn],
      body: tableRows,
      styles: {
        halign: 'center',
      },
      headStyles: {
        fillColor: [79, 70, 229],
        textColor: 255,
      },
    });

    timetable.save(`chester-mosque-timetable.pdf`);
  };

  return (
    <>
      <main className="bg-white">
        <div className="mt-2 p-4">
          <div className="flex items-center justify-between">
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
            <button
              onClick={handleDownloadPDF}
              className="bg-indigo-600 text-white p-2 mr-0 sm:mr-4 rounded-full hover:bg-indigo-600/80 hover:scale-105 transition-all ease-in-out flex justify-center items-center hover:cursor-pointer"
            >
              <MdOutlineSaveAlt size={20} />
            </button>
          </div>
          <div className="mt-4 sm:mx-4">
            <Table className="overflow-x-hidden" id="timetable-container">
              <TableCaption>A timetable of prayer times.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Day</TableHead>
                  <TableHead className="text-center">Fajr</TableHead>
                  <TableHead className="text-center">Dhuhr</TableHead>
                  <TableHead className="text-center">Asr</TableHead>
                  <TableHead className="text-center">Maghrib</TableHead>
                  <TableHead className="text-center">Isha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthData?.map((day) => {
                  const isToday = DateTime.now().toFormat('dd MMM yyyy') === day.date.readable;
                  return (
                    <TableRow
                      className={
                        isToday
                          ? 'bg-indigo-600 hover:bg-indigo-600/95 hover:scale-102 hover:shadow-md text-white ease-in-out transition-all'
                          : ''
                      }
                      key={day.date.readable}
                    >
                      <TableCell className="text-center" key={day.date.readable}>
                        {day.date.readable.split(' ')[0]}
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
                  );
                })}
                <TableRow></TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}
