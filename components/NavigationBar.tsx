import Router from 'next/router';
import { useEffect, useState } from 'react';
import authApi from '../lib/authApi';
import { getUsername } from '../lib/userApi';

import styles from '../styles/navbar.module.scss';

export default function NavigationBar() {
  const [username, setUsername] = useState<undefined | string>(undefined);

  const onSignout = async () => {
    try {
      await authApi.signout();
      Router.push('/login');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      return await getUsername();
    };

    fetchData().then((res) => setUsername(res));
  });

  return username ? (
    <>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.email}>{username}</li>
          <li
            className={styles.signout}
            onClick={onSignout}>
            Sign out
          </li>
        </ul>
      </nav>
    </>
  ) : null;
}
