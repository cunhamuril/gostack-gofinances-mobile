export interface ITransactions {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: string;
  created_at: string;
  category: {
    title: string;
  };
}

export interface IListProps {
  data: ITransactions[];
}

export interface IValueListProps {
  type: 'income' | 'outcome';
}
