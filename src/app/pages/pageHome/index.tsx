import React, { useState } from 'react';
import { AdsHome } from 'app/containers/adsHome';
import { FeatureList } from 'app/containers/featureList';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { Silder } from 'app/containers/silders';
import { TabsHome } from 'app/containers/tabsHome';
import { Helmet } from 'react-helmet-async';
import { Container } from 'reactstrap';
import { Section } from './style';
import TermsOfService from '../../components/termsOfService/index';
export function PageHome() {
  const [modal, setModal] = useState(false);

  if (!localStorage.hasOwnProperty('terms-and-conditions')) {
    setTimeout(() => {
      setModal(true);
    }, 1000);
  }
  const toggle = () => {
    localStorage.setItem('terms-and-conditions', '1');
    setModal(!modal);
  };

  const handleClose = () => {
    localStorage.setItem('terms-and-conditions', '0');
    setModal(!modal);
  };
  return (
    <>
      <TermsOfService
        isOpen={modal}
        handleClose={handleClose}
        handleAccept={toggle}
      />
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
