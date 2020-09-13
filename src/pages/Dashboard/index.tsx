import React from 'react';

import { Header } from '../../components';
import { useTransaction } from '../../hooks/Transactions';

import { HeaderCards, List } from './components';

import { EmptyMessageWrapper, EmptyMessageText } from './styles';

const Dashboard: React.FC = () => {
  const { transactionsData } = useTransaction();

  return (
    <>
      <Header>
        {transactionsData && <HeaderCards data={transactionsData} />}
      </Header>

      {transactionsData ? (
        <List data={transactionsData.transactions} />
      ) : (
        <EmptyMessageWrapper>
          <EmptyMessageText>Nenhuma transação cadastrada!</EmptyMessageText>
        </EmptyMessageWrapper>
      )}
    </>
  );
};

export default Dashboard;
