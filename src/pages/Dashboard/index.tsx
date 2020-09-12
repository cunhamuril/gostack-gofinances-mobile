import React from 'react';

import data from './mockData';

import { Header } from '../../components';

import { HeaderCards, List } from './components';

const Dashboard: React.FC = () => (
  <>
    <Header>
      <HeaderCards />
    </Header>

    <List data={data.transactions} />
  </>
);

export default Dashboard;
