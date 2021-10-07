import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footter } from 'app/containers/footter';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row } from 'reactstrap';
import { Section } from './style';
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
      <Section>
        {/*tabshome*/}
        <Container>
          <TabsHome></TabsHome>
        </Container>
      </Section>

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

      <Section>
        {/*footter*/}
        <Container>
          <Footter></Footter>
        </Container>
      </Section>
    </>
  );
}
