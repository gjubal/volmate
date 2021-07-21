export default function sortWeekdays(days: any): any {
  const dayOfWeek = new Date().getDay();
  const list = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const sortedList = list.slice(dayOfWeek).concat(list.slice(0, dayOfWeek));
  return days.sort((a: any, b: any) => {
    return sortedList.indexOf(a) > sortedList.indexOf(b);
  });
}
