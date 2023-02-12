import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import styles from '../../styles/authForm.module.scss';
import authApi, { signup } from '../lib/authApi';
import Router from 'next/router';

export default function SignUpPage() {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

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
      await signup(data);
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

      <div className={styles.alternative}>
        <p>Have an account?</p>
        <Link
          href='login'
          className={styles.redirect}>
          Sign in
        </Link>
      </div>

      <div className={styles.error}>{error}</div>
    </div>
  );
}
