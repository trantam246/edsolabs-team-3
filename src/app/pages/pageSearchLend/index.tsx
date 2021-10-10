import { FiterNavSearch } from 'app/containers/fiterNavSearch';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import Table from 'app/containers/table';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import { Section } from '../pageHome/style';
export function PageSearchLend() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <Section className="section-even">
        <Container>
          <Row>
            <Col lg="9" md="12">
              {/* phàn anh toàn code */}
              <Table />
            </Col>
            <Col lg="3">
              <FiterNavSearch></FiterNavSearch>
            </Col>
          </Row>
        </Container>
        {/*footter*/}
        <Footer></Footer>
      </Section>
    </>
  );
}
