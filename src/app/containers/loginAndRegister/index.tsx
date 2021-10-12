import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import Banner from './banner';
import Tabs from './tabs';
import TextContent from './textContent';

const Wrapper = styled.div`
  background: #232732;
  margin-bottom: 1.2rem;

  @media (max-width: 769px) {
    .row {
      display: flex;
      flex-direction: column-reverse;
    }
  } ;
`;

export function LoginAndRegister() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Login - Register" />
      </Helmet>
      <Wrapper>
        <Container>
          <TextContent />
          <Row>
            <Col lg={6}>
              <Tabs />
            </Col>
            <Col lg={6}>
              <Banner />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
}
