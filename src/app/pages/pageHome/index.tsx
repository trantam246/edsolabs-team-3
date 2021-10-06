import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row } from 'reactstrap';
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
      {/*featurelist*/}
      <FeatureList></FeatureList>
      {/*silders*/}
      <Silder></Silder>

      <Container>
        <Row>
          {/*tabshome*/}
          <TabsHome></TabsHome>
        </Row>
        <Row>
          {/*adsHome*/}
          <AdsHome></AdsHome>
        </Row>
      </Container>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
