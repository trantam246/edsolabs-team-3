import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footter } from 'app/containers/footter';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Row } from 'reactstrap';
export function pageHome() {
  document.title = 'home';
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>

      <Row>
        {/*tabshome*/}
        <TabsHome></TabsHome>
      </Row>
      <Row>
        {/*featurelist*/}
        <FeatureList></FeatureList>
      </Row>
      <Row>
        {/*silders*/}
        <Silder></Silder>
      </Row>
      <Row>
        {/*adsHome*/}
        <AdsHome></AdsHome>
      </Row>
      <Row>
        {/*footter*/}
        <Footter></Footter>
      </Row>
    </>
  );
}
