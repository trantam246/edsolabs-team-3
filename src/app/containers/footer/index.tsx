import textFooter from '../../../images/text_footer.png';
import styled from 'styled-components/macro';
import { Col, Container, Row } from 'reactstrap';
import Contact from './Contact';
import { Address } from './Address';
import IconsList from './IconsList';
import NavList from './NavList';
import About from './About';
import CopyRight from './CopyRight';
const FooterDefi = styled.footer`
  background-color: #171a23;
  min-height: 76.5rem;
  background-image: ${`url(${textFooter})`};
  background-repeat: no-repeat;
  background-size: 70%;
  background-position-y: 7rem;
  color: white;
  border-top: 0.1rem solid rgba(125, 111, 125, 0.2);
  .contact {
    padding-top: 16rem;
  }
  @media screen and (max-width: 1119px) {
    .row__nav-list {
      margin-top: 4rem;
    }
    .contact {
      padding-top: 4rem;
    }
    .row__about {
      margin-top: -8rem;
    }
  }
  @media screen and (max-width: 575px) {
    background-size: 100%;
    background-position-y: 4rem;

    .contact {
      padding: 5.4rem 0.8rem 0 0.8rem;
    }
    .row__nav-list {
      transform: translateY(38rem);
    }
    .row__about {
      margin-top: -22rem;
      padding: 0 0.8rem 24rem 0.8rem;
    }
  }
  @media screen and (max-width: 320px) {
    .row__nav-list {
      transform: translateY(42rem);
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .row__nav-list {
      margin-top: 10rem;
    }
  }
  @media screen and (min-width: 1120px) and (max-width: 1200px) {
    .row__nav-list {
      margin-bottom: -6rem;
      margin-top: 4rem;
    }
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    .row__nav-list {
      margin-top: 10rem;
      .icons {
        width: 20rem;
      }
    }
  }
  @media screen and (min-width: 437px) and (max-width: 575px) {
    .row__nav-list {
      transform: translateY(32rem);
    }
  }
  @media screen and (max-width: 372px) {
    .row__nav-list {
      transform: translateY(40rem);
    }
  }
  @media screen and (max-width: 319px) {
    .row__nav-list {
      transform: translateY(43rem);
    }
  }
`;

export function Footer() {
  return (
    <FooterDefi>
      <Container>
        <Row className="contact">
          <Col className="col-xl-3 col-sm-6 col-12">
            <Contact />
          </Col>
          <Col className="col-xl-5 col-sm-6 col-12">
            <Address />
          </Col>
          <Col className="col-xl-4 col-sm-12 col-12">
            <Row className="row__nav-list">
              <Col className="col-xl-12 col-sm-6 col-12">
                <IconsList />
              </Col>
              <Col className="col-xl-12 col-sm-6 col-12">
                <NavList />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="row__about">
          <Col xl="3"></Col>
          <Col xl="9">
            <About />
          </Col>
        </Row>
      </Container>
      <CopyRight />
    </FooterDefi>
  );
}
