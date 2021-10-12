import { FiterNavSearch } from 'app/containers/filterNavSearch/borrowCryptocurrency';
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
import filtericon from '../../../images/filtericon.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { Filter } from './style';

const ContainerPage = styled(Container)`
  padding: 0 1.6rem;
`;

const RowPage = styled(Row)`
  .row {
    --bs-gutter-x: 2.3rem;
  }
`;
export function PageSearch() {
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
      <ContainerPage>
        <RowPage>
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
              <NumberOfResult
                content="pawnshop packages match your search"
                amount={5}
              />
            </Col>
            <Col>
              <Suggest
                src={hurry_img}
                title="You are not in a hurry and can await?"
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
              <PawnShop />
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
        </RowPage>
      </ContainerPage>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
