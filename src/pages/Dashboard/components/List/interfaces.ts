import { ITransaction } from '../../interfaces';

export interface IListProps {
  data: ITransaction[];
}

export interface IValueListProps {
  type: 'income' | 'outcome';
}

export interface IListItemProps {
  item: ITransaction;
}
