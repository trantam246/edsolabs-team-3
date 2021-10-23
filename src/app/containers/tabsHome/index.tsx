import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container } from 'reactstrap';
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
          <Container>
            <Rows>
              <Col className="col-xl-6 col-lg-6 col-md-12 col-12 col__banner-one">
                <BannerTabs></BannerTabs>
              </Col>
              <Col className="col-xl-6 col-lg-6 col-md-12 col-12 col__banner-two">
                <TabsComponent></TabsComponent>
              </Col>
            </Rows>
          </Container>
        </Container>
      </ContainerSumTabHome>
    </>
  );
}
