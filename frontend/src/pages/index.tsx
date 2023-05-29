import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../context/globalCtx';
import Products from './products';
import Basket from '../components/Basket/Basket';
import ProductDetail from './productDetail';
import MainPage from './mainPage';

export default function Home() {
  const router = useRouter();
  const { state, dispatch } = useGlobalContext();

  return (
    <div>
      <Head>
        <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Products /> */}
      {/* <Basket/> */}
      {/* <ProductDetail /> */}
      <MainPage />
    </div>
  );
}
