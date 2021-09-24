import './App.css';
import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import Section from './components/Section';
import user from './components/social-profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friends-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Title" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
