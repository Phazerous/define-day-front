import Router from 'next/router';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/auth/home', {
        method: 'GET',
        credentials: 'include',
      });

      if (!data.ok) {
        Router.push('/login');
      }
    };

    fetchData();

    return;
  });

  return (
    <>
      <h1>Welcome to homepage!</h1>
    </>
  );
}
