import { ITransaction } from '../../pages/Dashboard/interfaces';

export interface ITransactionsData {
  transactions: ITransaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}

export interface ITransactionContext {
  transactionsData: ITransactionsData | null;
  fetchTransactionData(): void;
}
