import React, { FC } from 'react';
import { INavbarProps } from './types';
import { IconHamburger } from '../../assets/icons';

const Navbar: FC = props => {
  return (
    <nav className=" py-3 max-w-[1440px] mx-auto flex items-center justify-between">
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
  );
};

export default Navbar;
