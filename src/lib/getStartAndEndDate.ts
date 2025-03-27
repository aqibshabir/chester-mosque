export const getStartAndEndDate = (year: number, month: number) => {
  const startOfMonth = new Date(year, month, 1).toLocaleDateString('en-GB').replaceAll('/', '-');
  const endOfMonth = new Date(year, month + 1, 0).toLocaleDateString('en-GB').replaceAll('/', '-');

  return [startOfMonth, endOfMonth];
};
