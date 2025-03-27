export const getStartAndEndDate = (year: number, month: number) => {
  const startOfMonth = new Date(year, month, 1).toLocaleDateString().replaceAll('/', '-');
  const endOfMonth = new Date(year, month + 1, 0).toLocaleDateString().replaceAll('/', '-');

  return [startOfMonth, endOfMonth];
};
