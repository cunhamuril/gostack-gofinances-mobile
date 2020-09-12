import { parseISO, format } from 'date-fns';

export default function (date: Date | string): string {
  let isoDate: Date;

  if (typeof date === 'string') {
    isoDate = parseISO(date);
  } else {
    isoDate = date;
  }

  const formattedDate = format(isoDate, 'dd/MM/yyyy');

  return formattedDate;
}
