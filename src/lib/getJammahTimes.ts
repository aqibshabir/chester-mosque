import {
  getFajrJammah,
  getDhuhrJammah,
  getAsrJammah,
  getMaghribJammah,
  getIshaJammah,
} from './utils';

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

interface DayDataProps {
  timings: Timings;
  date: {
    readable: string;
    timestamp: string;
    hijiri: HijiriDate;
  };
  meta: unknown;
}

export default async function getJammahTimes(monthData: DayDataProps[]) {
  return monthData.map((day) => {
    const fajr = getFajrJammah(day.timings.Fajr, 20);
    const dhuhr = getDhuhrJammah(day.date.timestamp);
    const asr = getAsrJammah(day.timings.Asr);
    const maghrib = getMaghribJammah(day.timings.Maghrib, day.date.hijiri.month.number);
    const isha = getIshaJammah(day.timings.Isha, day.date.timestamp, day.date.hijiri.month.number);

    return {
      ...day,
      timings: {
        ...day.timings,
        Fajr: fajr,
        Dhuhr: dhuhr,
        Asr: asr,
        Maghrib: maghrib,
        Isha: isha,
      },
    };
  });
}
