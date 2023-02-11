export const convertDateToString = (date: Date) => {
  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = months[date.getMonth()];

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};
