import { FiterNavSearch } from 'app/containers/fiterNavSearch';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { NavSortSearch } from 'app/containers/navSortSearch';
import { NumberOfResult } from 'app/containers/numberOfResult';
import { Pagination } from 'app/containers/pagination';
import { PawnShop } from 'app/containers/pawnShop';
import { Suggest } from 'app/containers/suggest';
import { PersonalLending } from 'app/containers/personalLending';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import hurry_img from '../../../images/hurry_img.png';
import loan_img from '../../../images/loan_img.png';

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
              <NumberOfResult></NumberOfResult>
            </Col>
            <Col>
              <Suggest
                src={hurry_img}
                title="You are not in a hurry and can await"
                desc="Request a loan from a trusted P2P lender to get a better interest rate and LTV"
              ></Suggest>
            </Col>
            <Col>
              <PersonalLending></PersonalLending>
            </Col>
            <Col>
              <Suggest
                src={loan_img}
                title="Want an instant loan?"
                desc="Submit your collateral to get a loan in seconds"
              ></Suggest>
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
