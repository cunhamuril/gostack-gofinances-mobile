export interface ITransaction {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  value: string;
  created_at: string;
  category: {
    title: string;
  };
}

export interface ITransactionsData {
  transactions: ITransaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}
