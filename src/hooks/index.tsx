import React from 'react';

import { TransactionProvider } from './Transactions';

const AppProvider: React.FC = ({ children }) => (
  <TransactionProvider>{children}</TransactionProvider>
);

export default AppProvider;
