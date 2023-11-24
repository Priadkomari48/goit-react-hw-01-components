import React from 'react';
import data from './json/data.json';
import user from './json/user.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <StatisticsList data={data} title={'Upload stats'} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
