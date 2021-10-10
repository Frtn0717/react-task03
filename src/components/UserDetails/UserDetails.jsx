import Avatar from './Avatar/Avatar';
import UserInfo from './UserInfo/UserInfo';
import style from './user-details-styles.module.scss';
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <section className={style.details}>
      <Avatar />
      <UserInfo user={user} />
    </section>
  );
};

export default UserDetails;
