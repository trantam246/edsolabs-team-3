import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../navbar/index';
import { Section } from '../../pages/pageHome/style';
import { Container } from 'reactstrap';
import TabsPawnShop from './tabsPawn/index';
export function PawnShop() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Navbar></Navbar>
      <TabsPawnShop></TabsPawnShop>
      <Section>
        <Container>
          <></>
        </Container>
      </Section>
    </>
  );
}
