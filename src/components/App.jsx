import { GlobalStyle } from 'components/GlobalStyle';

import { Wrapper } from './App.styled';
import user from 'data/user.json';
import stat from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { UserProfile } from 'components/Profile/Profile';
import { UserStatistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Wrapper>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <UserStatistics title="Upload stats" stats={stat} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Wrapper>
  );
};
