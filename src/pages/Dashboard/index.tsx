import React, { useEffect, useState } from 'react';

import { api } from '../../services';
import { ITransactionsData } from './interfaces';

import { Header } from '../../components';

import { HeaderCards, List } from './components';

const Dashboard: React.FC = () => {
  const [
    transactionsData,
    setTransactionsData,
  ] = useState<ITransactionsData | null>(null);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => {
        setTransactionsData(response.data);
      })
      .catch(err => console.log(err.response.message));
  }, []);

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
