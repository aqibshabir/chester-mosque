interface MonthOption {
  month: number;
  year: number;
  label: string;
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDates = (): MonthOption[] => {
  const dates: MonthOption[] = [];

  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();

  for (let i = 0; i < 12; i++) {
    dates.push({ month, year, label: `${monthNames[month]} ${year}` });
    month++;

    if (month === 12) {
      month = 0;
      year++;
    }
  }

  return dates;
};
