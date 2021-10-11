import { FiterNavSearch } from 'app/containers/filterNavSearch/lendCryptocurrency';
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import Table from 'app/containers/table';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import { Section } from '../pageHome/style';
import { Filter } from '../pageSearch/style';
import filtericon from '../../../images/filtericon.svg';
import { useState } from 'react';
export function PageSearchLend() {
  const [statusFilterNav, setstatusFilterNav] = useState(false);
  const onClick = () => {
    setstatusFilterNav(!statusFilterNav);
    if (statusFilterNav === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
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
            <Col xl="9">
              <Filter>
                <img
                  src={filtericon}
                  alt=""
                  onClick={onClick}
                  style={{ cursor: 'pointer' }}
                />
              </Filter>
              <Table />
            </Col>
            <Col xl="3">
              <FiterNavSearch
                status={statusFilterNav}
                onClick={onClick}
              ></FiterNavSearch>
            </Col>
          </Row>
        </Container>
        {/*footter*/}
        <Footer></Footer>
      </Section>
    </>
  );
}
