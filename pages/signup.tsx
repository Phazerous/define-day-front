import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import styles from '../styles/authForm.module.scss';
import authApi from '../lib/authApi';
import Router from 'next/router';

export default function SignUpPage() {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/auth/auth', {
        method: 'GET',
        credentials: 'include',
      });

      if (data.ok) {
        Router.push('/home');
      }
    };

    fetchData();

    return;
  });

  const onEmailChange = (email: string) => {
    setData({
      ...data,
      email,
    });
  };

  const onPasswordChange = (password: string) => {
    setData({
      ...data,
      password,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await authApi.signUpUser(data);
      Router.push('/home');
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <div className={styles.auth}>
      <h2>Sign up</h2>

      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          placeholder='Email'
          value={data.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onEmailChange(e.target.value)
          }
        />
        <input
          type='password'
          placeholder='Password'
          value={data.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onPasswordChange(e.target.value)
          }
        />
        <button>Sign up</button>
      </form>

      <div>{error}</div>

      <div className={styles.alternative}>
        <p>Have an account?</p>
        <Link
          href='login'
          className={styles.redirect}>
          Sign in
        </Link>
      </div>
    </div>
  );
}
