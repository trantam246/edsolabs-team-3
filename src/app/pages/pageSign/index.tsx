import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
export function PageSign() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      {/* sử dụng component input button trong thư mục components */}
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
