import * as React from 'react';
import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import { Helmet } from 'react-helmet-async';
export function PageHome() {
  document.title = 'home';
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      {/*tabshome*/}
      <TabsHome></TabsHome>
      {/*featurelist*/}
      <FeatureList></FeatureList>
      {/*silders*/}
      <Silder></Silder>
      {/*adsHome*/}
      <AdsHome></AdsHome>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
