import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import PawnShopList from './PawnShopList';
export function PawnShop() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <PawnShopList></PawnShopList>
    </>
  );
}
