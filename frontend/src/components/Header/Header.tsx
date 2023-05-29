import React, { FC, useState } from 'react';
import { IHeaderProps } from './types';
import { IconBrandLogo, IconCart, IconFavorites, IconMessage, IconProfile } from '../../assets/icons';
import { Navbar } from '../';

const Header: FC = props => {
  const [search, setSearch] = useState<string | null>('');
  const handleText = (e: React.FocusEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };
  return (
    <header className="bg-white border-b">
      <div className="max-w-[1440px] mx-auto">
        <div className="py-5 flex justify-between items-center">
          <div className="flex items-center">
            <IconBrandLogo />
          </div>

          <div className="flex w-1/2 relative">
            <input
              type="text"
              className="w-full overflow-hidden rounded-lg border border-[#0D6EFD] h-10 pl-4 pr-20 text-sm"
              value={search as string}
              onChange={handleText}
              placeholder="Search"
            />
            <button className="absolute top-0 right-0 bg-blue-600 font-normal text-base text-white px-6 h-10 flex items-center rounded-lg	">
              Search
            </button>
          </div>

          <div className="ml-2 flex">
            <div className="flex flex-col cursor-pointer items-center gap-x-1 rounded-md py-2 px-4">
              <IconProfile />
              <span className="text-xs font-normal text-gray-500 pt-1">Profile</span>
            </div>

            <div className="flex flex-col cursor-pointer items-center gap-x-1 rounded-md py-2 px-4">
              <IconMessage />
              <span className="text-xs font-normal text-gray-500 pt-1">Message</span>
            </div>

            <div className="flex flex-col cursor-pointer items-center gap-x-1 rounded-md py-2 px-4">
              <IconFavorites />
              <span className="text-xs font-normal text-gray-500 pt-1">Orders</span>
            </div>

            <div className="flex flex-col cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 last:pr-0">
              <IconCart />
              <span className="text-xs font-normal text-gray-500 pt-1">My cart</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
