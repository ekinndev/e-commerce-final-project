import React, { FC, useState } from 'react';
import { IconBrandLogo, IconCart, IconFavorites, IconHamburger, IconMessage, IconProfile } from '../../assets/icons';
import { useGlobalContext } from '../../context/globalCtx';
import Link from 'next/link';

const Header: FC = props => {
  const { state } = useGlobalContext();
  const [search, setSearch] = useState<string | null>('');
  const handleText = (e: React.FocusEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="py-5 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <IconBrandLogo />
            </div>
          </Link>

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

          {!state.profile ? (
            <div className="ml-2 flex gap-x-4">
              <Link href="/signin">Sign-in</Link>
              <Link href="/signup">Sign-up</Link>
            </div>
          ) : (
            <div className="ml-2 flex">
              <Link href="/profile">
                <div className="flex flex-col cursor-pointer items-center gap-x-1 rounded-md py-2 px-4">
                  <IconProfile />
                  <span className="text-xs font-normal text-gray-500 pt-1">Profile</span>
                </div>
              </Link>
              <Link href="/favorites">
                <div className="flex flex-col cursor-pointer items-center gap-x-1 rounded-md py-2 px-4">
                  <IconFavorites />
                  <span className="text-xs font-normal text-gray-500 pt-1">Favorites</span>
                </div>
              </Link>

              <Link href="/basket">
                <div className="flex flex-col cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 last:pr-0">
                  <IconCart />
                  <span className="text-xs font-normal text-gray-500 pt-1">My cart</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <nav className=" py-3 max-w-[1440px] mx-auto flex items-center justify-between sticky top-0">
        <div className="flex gap-x-4 items-center">
          <div className="flex cursor-pointer select-none items-center gap-x-2 py-1 px-2 first:px-0 text-black">
            <IconHamburger />
            <span className="text-sm font-medium">All Category</span>
          </div>
          <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium ">Hot offers</span>
          <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium ">Gift boxes</span>
          <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium ">Projects</span>
          <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium ">Menu item</span>
          <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium ">Help</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
