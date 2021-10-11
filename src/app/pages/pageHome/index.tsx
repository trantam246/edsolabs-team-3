import * as React from 'react';
import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import { Helmet } from 'react-helmet-async';
import { Container } from 'reactstrap';
import { Section } from './style';
// import { useState, useEffect } from 'react';
export function PageHome() {
  document.title = 'home';
  // const [state, setstate] = useState(window.innerWidth);
  // const a = () => {
  //   setstate(window.innerWidth);
  // };
  // window.addEventListener('resize', a);
  // console.log(state);
  return (
    <>
      <Helmet>
        <title>DeFi For You | DeFi For You UK</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      {/*tabshome*/}
      <TabsHome></TabsHome>
      {/*featurelist*/}
      <FeatureList></FeatureList>
      <Section>
        {/*silders*/}
        <Container>
          <Silder></Silder>
        </Container>
      </Section>
      <Section>
        {/*adsHome*/}
        <Container>
          <AdsHome></AdsHome>
        </Container>
      </Section>
      {/*footter*/}

      <Footer></Footer>
    </>
  );
}
