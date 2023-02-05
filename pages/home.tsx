import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import styles from '../styles/home.module.scss';
import authApi from '../lib/authApi';

interface homeProps {
  email?: string;
}

export default function HomePage({ email }: homeProps) {
  const onLogOut = async () => {
    try {
      await authApi.logoutUser();
      Router.push('login');
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
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookie = 'token=' + context.req.cookies['token'];

  const response = await fetch('http://localhost:3000/auth/home', {
    method: 'GET',
    credentials: 'include',
    headers: {
      cookie: cookie,
    },
  });

  if (!response.ok) return { props: {} };

  const data = await response.json();

  const { email } = data;

  return { props: { email } };
}
