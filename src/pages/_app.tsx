import type { AppProps } from 'next/app';

import '../ui/normalize.css';
import '../ui/global.css';
import AuthLayout from '../ui/layouts/auth-layout/AuthLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthLayout>
        <Component {...pageProps} />;
      </AuthLayout>
    </>
  );
}
