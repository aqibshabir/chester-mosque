// dateOne will be the first of the month, dateTwo will be last of the month

export const getMonthlyTimeTable = async (dateOne, dateTwo) => {
  const response = await fetch(
    `https://api.aladhan.com/v1/calendarByAddress/from/${dateOne}/to/${dateTwo}?address=Chester%2C+UK&school=1&method=99&methodSettings=15,null,12&tune=1,-4,-3,5,-3,2,2,8,-24`
  );
  const { data } = await response.json();

  data.forEach((day) => {
    for (const key in day.timings) {
      day.timings[key] = day.timings[key].replace(' (UTC)', '');
    }
  });

  return data;
};
