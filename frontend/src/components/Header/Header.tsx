import algoliasearch from 'algoliasearch';
import Link from 'next/link';
import React, { FC, ReactNode, useState } from 'react';
import { Hits, InstantSearch, SearchBox, connectStateResults } from 'react-instantsearch-dom';
import { IconBrandLogo, IconCart, IconFavorites, IconHamburger, IconProfile } from '../../assets/icons';
import { useGlobalContext } from '../../context/globalCtx';

const searchClientAlgolia = algoliasearch('HRVIG2BPW5', 'd5229ed25653540bdca63580fa1c366b');

const searchClient = {
  ...searchClientAlgolia,
  search(requests: any) {
    if (requests.every(({ params }: any) => !params.query)) {
      return;
    }

    return searchClientAlgolia.search(requests);
  },
};

const Hit = ({ hit }: any) => {
  return (
    <div>
      <Link href={`/productDetail/${hit._id}`}>
        <div className="flex items-center justify-between px-5 gap-x-2 cursor-pointer hits-container">
          <span className="text-sm font-medium">{hit.name}</span>
          <img src={hit.image?.imageUrl} alt={hit.name} className="w-10 h-10 object-contain" />
          <span>{hit.description}</span>
          <span>${hit.listings[0].price}</span>
        </div>
      </Link>
    </div>
  );
};

const Results = connectStateResults(({ searchState, searchResults, children }: any) => (
  <div className="absolute top-10 bg-gray-300 z-10 w-full">
    {searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : !searchState.query?.length ? null : (
      <div className="px-5 py-2">No results have been found for {searchState.query}.</div>
    )}
  </div>
));

const Header: FC = props => {
  const { state } = useGlobalContext();

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="py-5 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <IconBrandLogo />
            </div>
          </Link>

          <div className="flex flex-col relative min-w-[500px]">
            <InstantSearch searchClient={searchClient} indexName="dev_ecommerce">
              <div>
                <SearchBox className="w-full" />
              </div>
              <Results>
                <Hits hitComponent={Hit} />
              </Results>
            </InstantSearch>
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
