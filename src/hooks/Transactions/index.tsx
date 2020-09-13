import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  createContext,
} from 'react';

import { api } from '../../services';

import { ITransactionsData, ITransactionContext } from './interfaces';

const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext,
);

const TransactionProvider: React.FC = ({ children }) => {
  const [
    transactionsData,
    setTransactionsData,
  ] = useState<ITransactionsData | null>(null);

  const fetchTransactionData = useCallback(async () => {
    try {
      const { data } = await api.get('transactions');

      if (data.transactions.length > 0) {
        setTransactionsData(data);
      }
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    fetchTransactionData();
  }, [fetchTransactionData]);

  return (
    <TransactionContext.Provider
      value={{ transactionsData, fetchTransactionData }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

function useTransaction(): ITransactionContext {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error(
      'useTransaction must be used within an TransactionProvider',
    );
  }

  return context;
}

export { TransactionProvider, useTransaction };
