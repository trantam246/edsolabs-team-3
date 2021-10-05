import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function Not404() {
  return (
    <>
      <Helmet>
        <title>404</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <p>Not404</p>
    </>
  );
}
