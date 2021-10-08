import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from 'reactstrap';
import { BannerTabs } from './banner/bannerTabs';
import { ContainerSumTabHome, Rows } from './style';
import { TabsComponent } from './tabs/tabsHome';
export function TabsHome() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <ContainerSumTabHome fluid>
        <Container fluid>
          <Rows>
            <BannerTabs></BannerTabs>
            <TabsComponent></TabsComponent>
          </Rows>
        </Container>
      </ContainerSumTabHome>
    </>
  );
}
