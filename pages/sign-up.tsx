import Router from 'next/router';
import React, { useState } from 'react';
import authApi from '../api/authApi';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async () => {
    try {
      await authApi.signUpUser({ email, password });
      Router.push('/home');
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  const onEmailChange = (email: string) => {
    setEmail(email);
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onEmailChange(e.target.value)
        }
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onPasswordChange(e.target.value)
        }
      />

      <p>{error}</p>
      <button onClick={onSubmit}>Sign up</button>
    </>
  );
}
