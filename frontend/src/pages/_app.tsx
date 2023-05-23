import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalContext from '../context/globalCtx';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  );
}

export default MyApp;
