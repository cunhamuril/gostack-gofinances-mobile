import { parseISO, format as formatDate } from 'date-fns';

import { ptBR } from 'date-fns/locale';

export default function (date: Date | string, format = 'dd/MM/yyyy'): string {
  let isoDate: Date;

  if (typeof date === 'string') {
    isoDate = parseISO(date);
  } else {
    isoDate = date;
  }

  const formattedDate = formatDate(isoDate, format, { locale: ptBR });

  return formattedDate;
}
