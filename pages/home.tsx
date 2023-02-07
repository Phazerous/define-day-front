import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import styles from '../styles/home.module.scss';
import authApi from '../lib/authApi';
import { useState } from 'react';
import { createWord } from '../lib/wordApi';

interface homeProps {
  email?: string;
}

export default function HomePage({ email }: homeProps) {
  const [word, setWord] = useState('');

  const onLogOut = async () => {
    try {
      await authApi.logoutUser();
      Router.push('login');
    } catch (e) {
      console.log(e);
    }
  };

  const onWordCreate = async () => {
    try {
      await createWord(word);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.email}>{email}</li>
          <li className={styles.logout}>
            <a
              href='#'
              onClick={onLogOut}>
              Logout
            </a>
          </li>
        </ul>
      </nav>

      <h1>Welcome to homepage!</h1>

      <input
        type='text'
        value={word}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setWord(e.target.value)
        }
      />
      <button onClick={onWordCreate}>Create!</button>

      <FullWordTable />
    </>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const cookie = 'token=' + context.req.cookies['token'];

//   const response = await fetch('http://localhost:3000/auth/home', {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//       cookie: cookie,
//     },
//   });

//   if (!response.ok) return { props: {} };

//   const data = await response.json();

//   const { email } = data;

//   return { props: { email } };
// }
