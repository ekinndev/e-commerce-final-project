import React, { FC, useState } from 'react';
import { INewsletterProps } from './types';

const Newsletter: FC = props => {
  const [email, setEmail] = useState<string | null>('');
  const handleText = (e: React.FocusEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };
  return (
    <section className="newsletter w-full flex justify-center items-center flex-col bg-gradient-to-r from-gray-200 to-gray-200 border-t-2 py-5 px-20">
      <div className="text-center">
        <p className="text-xl text-h4 font-semibold tracking-[-0.2px]	">Subscribe on our newsletter</p>
        <p className="font-light text-base text-[#606060] tracking-[-0.2px]">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
      </div>
      <div className="flex mt-5">
        <input
          value={email}
          onChange={handleText}
          placeholder="Email"
          className="h-10 w-60 px-2 font-light text-base rounded-lg border border-gray-300"
        />
        <button className="bg-blue-600 font-normal text-base text-white px-4 h-10 ml-2 flex items-center rounded-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
