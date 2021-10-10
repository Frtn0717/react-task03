import UserDetails from './UserDetails/UserDetails';
import Content from './Content/Content';
import style from './app-style.module.scss';
import React, { useState } from 'react';

const App = () => {
  const [user] = useState({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  });

  return (
    <section className={style.mainContent}>
      <UserDetails user={user} />
      <Content user={user} />
    </section>
  );
};

export default App;
