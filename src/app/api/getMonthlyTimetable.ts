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

interface HijriDate {
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
    hijri: HijriDate;
  };
  meta: unknown;
}

const ishaMonthlyTuneMinutes: Record<number, number> = {
  1: 90,
  2: 85,
  3: 80,
  4: 75,
  5: 70,
  6: 70,
  7: 70,
  8: 75,
  9: 80,
  10: 85,
  11: 90,
  12: 95,
};

export const getMonthlyTimeTable = async (dateOne: string, dateTwo: string) => {
  const monthStr = dateOne.split('-')[1];
  const month = parseInt(monthStr, 10);

  const ishaTune = ishaMonthlyTuneMinutes[month] || 0;

  const tuneString = `0,3,0,6,-1,6,0,${ishaTune},0`;

  const response = await fetch(
    `https://api.aladhan.com/v1/calendarByAddress/from/${dateOne}/to/${dateTwo}?address=Chester%2C+UK&school=1&method=99&methodSettings=14,null,null&tune=${tuneString}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const { data }: { data: DayData[] } = await response.json();

  data.forEach((day) => {
    formatTimings(day.timings);
  });

  return data;
};

const formatTimings = (timings: Timings) => {
  for (const key in timings) {
    const time = timings[key as keyof Timings].replace(/[^0-9:]*$/, '').trim();
    timings[key as keyof Timings] = time;
  }
};
