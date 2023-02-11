import type { AppProps } from 'next/app';

import '../ui/normalize.css';
import '../ui/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
