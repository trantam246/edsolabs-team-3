import { FiterNavSearch } from 'app/containers/fiterNavSearch';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { NavSortSearch } from 'app/containers/navSortSearch';
import { Pagination } from 'app/containers/pagination';
import { PawnShop } from 'app/containers/pawnShop';
import { PersonnalLending } from 'app/containers/personnalLending';
import { Suggest } from 'app/containers/suggest';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
export function PageSearch() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col lg="9" md="12">
            <Col>
              <Suggest></Suggest>
            </Col>
            <Col>
              <PersonnalLending></PersonnalLending>
            </Col>
            <Col>
              <Suggest></Suggest>
            </Col>
            <Col>
              <NavSortSearch></NavSortSearch>
            </Col>
            <Col>
              <PawnShop></PawnShop>
            </Col>
            <Col>
              <Pagination></Pagination>
            </Col>
          </Col>
          <Col lg="3">
            <FiterNavSearch></FiterNavSearch>
          </Col>
        </Row>
      </Container>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
