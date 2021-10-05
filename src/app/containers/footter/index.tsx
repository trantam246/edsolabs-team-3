import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function Footter() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <p>Footter</p>
    </>
  );
}
