import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { NftShop } from 'app/containers/nftShop';
import { Pagination } from 'app/containers/pagination';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const ContainerPage = styled(Container)`
  @media screen and (max-width: 575px) {
    padding: 0 1.6rem;
  }
`;
export function PageSearchNft() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navbar></Navbar>
      <ContainerPage>
        <Row>
          <Col xl="9">
            <Col>
              <NftShop />
            </Col>
            <Col>
              <Pagination />
            </Col>
          </Col>
          <Col xl="3"></Col>
        </Row>
      </ContainerPage>
      <Footer></Footer>
    </>
  );
}
