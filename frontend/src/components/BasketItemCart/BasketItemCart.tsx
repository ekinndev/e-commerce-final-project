import React from 'react';
import { IBasketItemCartProps } from './types';

const BasketItemCart: React.FC<IBasketItemCartProps> = props => {
  return (
    <body>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">My cart (3)</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-2/3">
            <div className="justify-between mb-6 bg-white p-6 sm:flex sm:justify-start">
              <img
                src="https://akn-lacoste.b-cdn.net/products/2022/08/31/192512/e13b1c37-7fc3-4e11-a460-de5421fcb2b8_size2000x2000_cropCenter.jpg"
                alt="product-image"
                className="w-32 h-32 rounded-lg "
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">Backpack 2019</h2>
                  <p className="mt-1 text-xs text-gray-400">Size: Medium</p>
                  <p className="mt-1 text-xs text-gray-400">Seller: Artel Market</p>

                  <br />
                  <div className="space-x-2">
                    <button className="bg-transparent hover:bg-[#FA3434] text-[#FA3434] font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded">
                      Remove
                    </button>
                    <button className="bg-transparent hover:bg-[#0D6EFD] text-[#0D6EFD] font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded">
                      Save for later
                    </button>
                  </div>
                </div>
                <div className="space-y-2 ">
                  <p className="text-md font-bold">$78.99</p>
                  <select className="border border-gray-300 rounded ">
                    <option value="1">Qty:1</option>
                    <option value="2">Qty:2</option>
                    <option value="3">Qty:3</option>
                    <option value="4">Qty:4</option>
                    <option value="5">Qty:5</option>
                    <option value="6">Qty:6</option>
                    <option value="7">Qty:7</option>
                    <option value="8">Qty:8</option>
                    <option value="9">Qty:9</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />

            <div className="justify-between mb-6 bg-white p-6 sm:flex sm:justify-start">
              <img
                src="https://akn-lacoste.b-cdn.net/products/2022/08/31/192512/e13b1c37-7fc3-4e11-a460-de5421fcb2b8_size2000x2000_cropCenter.jpg"
                alt="product-image"
                className="w-32 h-32 rounded-lg"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">Backpack 2019</h2>
                  <p className="mt-1 text-xs text-gray-400">Size: Medium</p>
                  <p className="mt-1 text-xs text-gray-400">Seller: Artel Market</p>

                  <br />
                  <div className="space-x-2">
                    <button className="bg-transparent hover:bg-[#FA3434] text-[#FA3434] font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded">
                      Remove
                    </button>
                    <button className="bg-transparent hover:bg-[#0D6EFD] text-[#0D6EFD] font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded">
                      Save for later
                    </button>
                  </div>
                </div>
                <div className="space-y-2 ">
                  <p className="text-md font-bold">$39.00</p>
                  <select className="border border-gray-300 rounded ">
                    <option value="1">Qty:1</option>
                    <option value="2">Qty:2</option>
                    <option value="3">Qty:3</option>
                    <option value="4">Qty:4</option>
                    <option value="5">Qty:5</option>
                    <option value="6">Qty:6</option>
                    <option value="7">Qty:7</option>
                    <option value="8">Qty:8</option>
                    <option value="9">Qty:9</option>
                  </select>
                </div>
              </div>
            </div>

            <hr />
            <br />

            <div className="space-x-2 flex justify-between">
              <button className="bg-[#0D6EFD] hover:bg-white text-white font-semibold hover:text-[#0D6EFD] py-1 px-4 border border-gray-300 hover:border-gray-300 rounded">
                Back to shop
              </button>
              <button className="bg-transparent hover:bg-[#0D6EFD] text-[#0D6EFD] font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded">
                Remove all
              </button>
            </div>
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal:</p>
              <p className="text-gray-700">$1403.97</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Discount:</p>
              <p className="text-red-400">- $60.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Tax:</p>
              <p className="text-green-500">+$14.00</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total:</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$1357.97</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md py-1.5 font-medium text-green-50 hover:bg-green-600 bg-[#00B517]">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default BasketItemCart;
