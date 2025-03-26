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

export const getMonthlyTimeTable = async (dateOne: string, dateTwo: string) => {
  const response = await fetch(
    `https://api.aladhan.com/v1/calendarByAddress/from/${dateOne}/to/${dateTwo}?address=Chester%2C+UK&school=1&method=99&methodSettings=15,null,12&tune=1,-4,-3,5,-3,2,2,8,-24`
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const { data }: { data: DayData[] } = await response.json();

  data.forEach((day) => formatTimings(day.timings));

  return data;
};

const formatTimings = (timings: Timings) => {
  for (const key in timings) {
    timings[key as keyof Timings] = timings[key as keyof Timings].replace(' (UTC)', '');
  }
};
