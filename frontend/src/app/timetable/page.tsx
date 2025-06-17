'use client';
import { useState } from 'react';
import { useTimetable } from '@/hooks/useTimetable';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DateTime } from 'luxon';
import { MdOutlineSaveAlt } from 'react-icons/md';
import { logoBase64 } from '../../assets/logoBase64';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

import { getDates } from '@/lib/getDates';
import Hero from './components/hero';
import { cn } from '@/lib/utils';

interface MonthOption {
  month: number;
  year: number;
  label: string;
}

const dates = getDates();

export default function TimeTable() {
  const [selectedDate, setSelectedDate] = useState<MonthOption>(dates[0]);
  const [viewMode, setViewMode] = useState<'start' | 'jammah'>('start');
  const { monthData, jammahTimes, loading } = useTimetable(selectedDate.month, selectedDate.year);

  const handleDateChange = (label: string) => {
    if (selectedDate.label !== label) {
      setSelectedDate(dates.find((date) => date.label === label) || selectedDate);
    }
  };

  const handleDownloadPDF = () => {
    if (!monthData || !jammahTimes) return;

    const timetable = new jsPDF();

    timetable.addImage(logoBase64, 'PNG', 62, 10, 80, 20);

    const pageHeight = timetable.internal.pageSize.height;
    timetable.setFont('helvetica', 'normal');
    timetable.setFontSize(6);
    timetable.setTextColor(100);
    timetable.text(
      'Chester Mosque & Islamic Centre, 25 Clifton Drive, Blacon, Chester, CH1 5LT, United Kingdom',
      62,
      pageHeight - 10
    );

    const tableColumn = [
      'Date',
      'Fajr Start',
      'Fajr Jammah',
      'Dhuhr Start',
      'Dhuhr Jammah',
      'Asr Start',
      'Asr Jammah',
      'Maghrib Start',
      'Maghrib Jammah',
      'Isha Start',
      'Isha Jammah',
    ];

    const tableRows = monthData.map((day, index) => {
      const [dayCount] = day.date.readable.split(' ');
      const jammahDay = jammahTimes[index];
      return [
        `${dayCount}`,
        `${day.timings.Fajr}`,
        `${jammahDay.timings.Fajr}`,
        `${day.timings.Dhuhr}`,
        `${jammahDay.timings.Dhuhr}`,
        `${day.timings.Asr}`,
        `${jammahDay.timings.Asr}`,
        `${day.timings.Maghrib}`,
        `${jammahDay.timings.Maghrib}`,
        `${day.timings.Isha}`,
        `${jammahDay.timings.Isha}`,
      ];
    });

    autoTable(timetable, {
      startY: 36,
      head: [tableColumn],
      body: tableRows,
      styles: {
        halign: 'center',
      },
      headStyles: {
        fillColor: [79, 70, 229],
        textColor: 255,
        fontSize: 8,
        fontStyle: 'bold',
        valign: 'middle',
      },
      didParseCell: function (data) {
        if (data.column.index === 0 && data.section === 'body') {
          data.cell.styles.fontStyle = 'bold';
        }
        if (data.column.index === 4 && data.section === 'body') {
          const dayData = monthData[data.row.index];
          if (dayData) {
            const date = DateTime.fromSeconds(Number(dayData.date.timestamp));
            const isFriday = date.weekday === 5;

            if (isFriday) {
              data.cell.styles.fontStyle = 'bold';
            }
          }
        }
      },
    });
    timetable.save(`chester-mosque-timetable.pdf`);
  };

  return (
    <>
      <Hero heading="Timetable" />
      <div className="mb-20 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center md:mx-4">
          <div className="flex items-center justify-center md:justify-start">
            {loading ? (
              <Skeleton className="w-[180px] h-10 rounded-md" />
            ) : (
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
            )}

            {loading ? (
              <Skeleton className="w-10 h-10 rounded-md mx-2" />
            ) : (
              <>
                <Button variant="outline" onClick={handleDownloadPDF} className="ml-2" size="icon">
                  <MdOutlineSaveAlt />
                </Button>
              </>
            )}
          </div>
          <div className="flex space-x-2 my-4 md:my-0">
            <Button
              variant={viewMode === 'start' ? 'default' : 'link'}
              className={cn(
                'hover:no-underline text-black hover:bg-gray-50',
                viewMode === 'start' && 'bg-indigo-600 hover:bg-indigo-600 text-white'
              )}
              onClick={() => viewMode !== 'start' && setViewMode('start')}
            >
              Start
            </Button>
            <Button
              variant={viewMode === 'jammah' ? 'default' : 'link'}
              className={cn(
                'hover:no-underline text-black hover:bg-gray-50',
                viewMode === 'jammah' && 'bg-indigo-600 hover:bg-indigo-600 text-white'
              )}
              onClick={() => viewMode !== 'jammah' && setViewMode('jammah')}
            >
              Jammah
            </Button>
          </div>
        </div>
        {loading ? (
          <div className="mt-4 space-y-2 mb-4">
            {[...Array(30)].map((_, i) => (
              <Skeleton key={i} className="w-full h-10 rounded-md" />
            ))}
          </div>
        ) : (
          <div className="mt-4 sm:mx-4">
            <Table className="overflow-hidden" id="timetable-container">
              <TableCaption>Timetable for {selectedDate.label}</TableCaption>
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
                {viewMode === 'start'
                  ? monthData?.map((day) => {
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
                    })
                  : jammahTimes?.map((day) => {
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
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}
