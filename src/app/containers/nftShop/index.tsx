import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NumberOfResult } from '../numberOfResult';
import NftShopList from './NftShopList';
export function NftShop() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NumberOfResult
        amount={10}
        content="collateral offers match your search"
      />
      <NftShopList></NftShopList>
    </>
  );
}
