import Head from 'next/head';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../context/globalCtx';
import { useEffect, useState } from 'react';
import apiClient from '../lib/api';
import Link from 'next/link';
import Payment from './payment';
import Draw from './draw';

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState<
    | {
        _id: '6474971cb362baadaceb8e1d';
        name: 'Ekin';
        description: 'test';
        creator: '643c41db22b81a7754aa20ba';
        image: '6474971cb362baadaceb8e1b';
        createdAt: '2023-05-29T12:14:20.619Z';
        updatedAt: '2023-05-29T12:14:20.619Z';
        __v: 0;
      }[]
    | null
  >(null);

  useEffect(() => {
    apiClient.get('/product').then(products => {
      setProducts(products.data);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Products /> */}
      {/* <Basket/> */}
      {/* <ProductDetail /> */}
      {/* <Payment /> */}
      {/* <Draw /> */}

      <div className="min-h-screen bg-gray-100 py-5 ">
        <div className="mx-auto max-w-[1440px] justify-center  md:grid grid-cols-12">
          <div className=" mt-6  rounded-lg  bg-white p-6 shadow-md md:mt-0 col-span-3 ">
            <div className="bg-white  rounded-md ">
              <div className=" bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Automobilies</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Clothes and wear</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Home interiors</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Computer and tech</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Tools and equipments</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Sports and outdoor</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Animal and pets</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">Machinery tools</a>
              </div>

              <div className="my-2  bg-white py-1 rounded-md cursor-pointer  text-gray-600 hover:bg-blue-200">
                <a className=" mx-6 text-lg ">More category</a>
              </div>
            </div>
          </div>

          <div className=" bg-gradient-to-tr from-indigo-800 to-indigo-500 flex items-center mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 col-span-9 ">
            <div className="ml-20 w-80">
              <h2 className="text-white text-4xl">Latest trending</h2>
              <h2 className="text-white text-4xl">
                <b>Electronic items</b>
              </h2>

              <a
                href="#"
                className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className=" max-w-[1440px]  mx-auto flex flex-wrap justify-between gap-8 mt-8 xl:mt-12 xl:gap-12">
            {products?.map?.((product: any) => {
              return (
                <Link href={`/productDetail/${product._id}`}>
                  <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                    <div>
                      <img src={product.image?.imageUrl} alt="" />
                    </div>
                    <div className="py-4 px-4 bg-white">
                      <h3 className="text-lg font-semibold text-gray-600">{product.name}</h3>
                      <p className="mt-4 text-lg font-thin">$ {product.listings[0].price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
