import './App.css';
import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import Section from './components/Section';
import user from './components/social-profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';

export default function App() {
  return (
    <Section>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Title" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </Section>
  );
}
