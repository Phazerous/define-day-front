import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import NavigationBar from '../components/NavigationBar';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthLayout>
        <NavigationBar />
        <Component {...pageProps} />;
      </AuthLayout>
    </>
  );
}
