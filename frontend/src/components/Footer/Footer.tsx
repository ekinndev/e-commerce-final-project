import React, { FC } from 'react';
import { IFooterProps } from './types';
import {
  IconAppStore,
  IconBrandLogo,
  IconFacebook,
  IconGooglePlay,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
  IconYoutube,
} from '../../assets/icons';

const Footer: FC = props => {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-9 mb-14 max-w-[1440px] mx-auto">
        <div>
          <IconBrandLogo />
          <p className="max-w-xs mt-4 text-sm text-gray-600">
            Best information about the company gies here but now lorem ipsum is.
          </p>
          <div className="flex mt-8 space-x-6 text-gray-600">
            <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
              <span className="sr-only"> Facebook </span>
              <IconFacebook />
            </a>
            <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
              <span className="sr-only"> Twitter </span>
              <IconTwitter />
            </a>
            <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
              <span className="sr-only"> LinkedIn </span>
              <IconLinkedin />
            </a>
            <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
              <span className="sr-only"> Instagram </span>
              <IconInstagram />
            </a>
            <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
              <span className="sr-only"> Youtube </span>
              <IconYoutube />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="font-medium">About</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="/">
                About us
              </a>
              <a className="hover:opacity-75" href="/">
                Find store
              </a>
              <a className="hover:opacity-75" href="/">
                Categories
              </a>
              <a className="hover:opacity-75" href="/">
                Blogs
              </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">Partnership</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="/">
                About us
              </a>
              <a className="hover:opacity-75" href="/">
                Find store
              </a>
              <a className="hover:opacity-75" href="/">
                Categories
              </a>
              <a className="hover:opacity-75" href="/">
                Blogs
              </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">Information</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="/">
                Help Center
              </a>
              <a className="hover:opacity-75" href="/">
                Money Refund
              </a>
              <a className="hover:opacity-75" href="/">
                Shipping
              </a>
              <a className="hover:opacity-75" href="/">
                Contact us
              </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">For users</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="/">
                Login
              </a>
              <a className="hover:opacity-75" href="/">
                Register
              </a>
              <a className="hover:opacity-75" href="/">
                Settings
              </a>
              <a className="hover:opacity-75" href="/">
                My Orders
              </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">Get App</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="/">
                <IconAppStore />
              </a>
              <a className="hover:opacity-75" href="/">
                <IconGooglePlay />
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-200 to-gray-200 border-t-2 py-5">
        <div className="max-w-[1440px] mx-auto ">
          <p className="text-xs text-gray-800">© 2023 Ecommerce</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100
