import { ITransactionsData } from '../../interfaces';

export interface IHeaderCardsProps {
  data: ITransactionsData;
}

export interface IStyleProps {
  isTotal?: boolean;
  isFirst?: boolean;
}

export interface IDatesHistory {
  income: string;
  outcome: string;
  total: string;
}
