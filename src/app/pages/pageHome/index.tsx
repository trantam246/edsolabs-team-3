import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footter } from 'app/containers/footter';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import * as React from 'react';
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
      {/*footter*/}
      <Footter></Footter>
      {/*adsHome*/}
      <AdsHome></AdsHome>
    </>
  );
}
