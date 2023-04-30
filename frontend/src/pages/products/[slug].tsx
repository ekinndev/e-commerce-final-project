import Head from 'next/head';
import { useRouter } from 'next/router';
import { Footer, Newsletter, Header } from '../../components';

export default function ProductDetails({ data }) {
  console.log(data);
  return (
    <div className="h-screen">
      <Head>
        <title>Product Details </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="py-20 flex items-center justify-center">Product Details Page</p>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(`https://mern-ecommerce-backend-ten.vercel.app/api/products/${params.slug}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
