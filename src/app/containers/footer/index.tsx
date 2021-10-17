import { Col, Row } from 'reactstrap';
import Contact from './Contact';
import { Address } from './Address';
import IconsList from './IconsList';
import NavList from './NavList';
import About from './About';
import CopyRight from './CopyRight';
import { ContainerComponent, FooterDefi } from './style';

export function Footer() {
  return (
    <FooterDefi>
      <ContainerComponent>
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
      </ContainerComponent>
      <CopyRight />
    </FooterDefi>
  );
}
