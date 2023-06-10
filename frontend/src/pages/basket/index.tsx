import React, { useEffect, useState } from 'react';
import apiClient from '../../lib/api';

interface IBasketItemCartProps {
  isOpen: boolean;
  text: string;
}

const BasketItemCart: React.FC<IBasketItemCartProps> = props => {
  const [basketWithItems, setBasketWithItems] = useState<any>(null);
  const totalPrice = basketWithItems?.products.reduce((acc: number, product: any) => {
    return acc + product.productId.listings[0].price;
  }, 0);
  useEffect(() => {
    apiClient.get('/basket').then(res => {
      setBasketWithItems(res.data);
    });
  }, []);

  if (!basketWithItems) {
    return <div>Loading...</div>;
  }

  const removeItemFromBasket = (productId: string) => {
    apiClient.delete(`/basket/${productId}`).then(res => {
      apiClient.get('/basket').then(res => {
        setBasketWithItems(res.data);
      });
    });
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">My cart ({basketWithItems.products.length})</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-2/3">
          {basketWithItems?.products.map((product: any) => {
            return (
              <div className="justify-between mb-6 bg-white p-6 sm:flex sm:justify-start">
                <img src={product.productId.image.imageUrl} alt="product-image" className="w-32 h-32 rounded-lg " />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{product.productId.name}</h2>

                    <br />
                    <div className="space-x-2">
                      <button
                        onClick={e => removeItemFromBasket(product.productId._id)}
                        className="bg-transparent hover:bg-[#FA3434] text-[#FA3434] font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2 ">
                    <p className="text-md font-bold">$ {product.productId.listings[0].price}</p>
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
            );
          })}

          <br />
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal:</p>
            <p className="text-gray-700">${totalPrice}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-700">Tax:</p>
            <p className="text-green-500">0.00</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total:</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${totalPrice}</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md py-1.5 font-medium text-green-50 hover:bg-green-600 bg-[#00B517]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItemCart;
