import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { NftShop } from 'app/containers/nftShop';
import { Pagination } from 'app/containers/pagination';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { FiterNavSearch } from 'app/containers/filterNavSearch/lendNFT';
import { useState } from 'react';
import filtericon from '../../../images/filtericon.svg';
import { Filter } from './style';
const ContainerPage = styled(Container)`
  @media screen and (max-width: 575px) {
    padding: 0 1.6rem;
  }
`;
export function PageSearchNft() {
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
      <Navbar></Navbar>
      <ContainerPage>
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
            <Col>
              <NftShop />
            </Col>
            <Col>
              <Pagination />
            </Col>
          </Col>
          <Col xl="3">
            <FiterNavSearch
              status={statusFilterNav}
              onClick={onClick}
            ></FiterNavSearch>
          </Col>
        </Row>
      </ContainerPage>
      <Footer></Footer>
    </>
  );
}
