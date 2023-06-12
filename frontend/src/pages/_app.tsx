import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalContext from '../context/globalCtx';
import Layout from '../components/Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51NIBLvFVIuUG48DZIQwhpDdeWfPfCZEdXrs7IYtJW1FKHOhczb9w6J0RVxb9H9fMbe6oyPZGq8T8timuGr9MN2x8003tKNzLQm',
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripePromise}>
      <GlobalContext>
        <ToastContainer />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext>
    </Elements>
  );
}

export default MyApp;
