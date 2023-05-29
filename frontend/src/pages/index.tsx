import Head from 'next/head';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../context/globalCtx';
import { useEffect } from 'react';

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
      <div className="h-screen bg-gray-100 pt-5 ">
        <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className=" mt-6  rounded-lg  bg-white p-6 shadow-md md:mt-0 md:w-1/4 ">
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

          <div className=" col-span-8 bg-gradient-to-tr from-indigo-800 to-indigo-500 flex items-center mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-2/3 ">
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
          <div
            className=" grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12
   sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3"
          >
            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-md hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-md hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-md hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>

            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
                </h3>
                <p className="mt-4 text-lg font-thin">$ 2400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
