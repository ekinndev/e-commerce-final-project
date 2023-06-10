import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalContext from '../context/globalCtx';
import Layout from '../components/Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  );
}

export default MyApp;
