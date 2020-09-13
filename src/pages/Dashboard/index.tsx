import React from 'react';

import { Header } from '../../components';
import { useTransaction } from '../../hooks/Transactions';

import { HeaderCards, List } from './components';

const Dashboard: React.FC = () => {
  const { transactionsData } = useTransaction();

  return (
    <>
      <Header>
        {transactionsData && <HeaderCards data={transactionsData} />}
      </Header>

      {transactionsData && <List data={transactionsData.transactions} />}
    </>
  );
};

export default Dashboard;
