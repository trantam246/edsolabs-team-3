import { FiterNavSearch } from 'app/containers/fiterNavSearch';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
export function PageSearchLend() {
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
            {/* phàn anh toàn code */}
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
