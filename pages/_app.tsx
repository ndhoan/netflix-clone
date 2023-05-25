import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
