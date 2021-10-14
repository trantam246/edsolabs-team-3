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
  const [dataSearch, setdataSearch] = useState<any>({
    inputSearch: '',
    interestRange: '',
    loanToValue: '',
    CollateralAccepted: [],
    loanToken: [],
    loanType: [],
    duration: [],
  }); //data lấy được từ người dùng khi onchange
  const onChangeInputSearch = (e: any) => {
    setdataSearch({ ...dataSearch, inputSearch: e.target.value });
  }; //lấy dữ liệu từ ô input

  const onChangeInterestRange = (e: any) => {
    setdataSearch({ ...dataSearch, interestRange: e.target.value });
  };
  const onChangeLoanToValue = (e: any) => {
    setdataSearch({ ...dataSearch, loanToValue: e.target.value });
  };

  const onChangeCollateralAccepted = e => {
    if (e.target.checked) {
      const newvalue = [...dataSearch.CollateralAccepted, e.target.value];
      setdataSearch({ ...dataSearch, CollateralAccepted: newvalue });
    } else {
      const newValue1 = [...dataSearch.CollateralAccepted];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, CollateralAccepted: newValue2 });
    }
  };
  const onChangeLoanToken = e => {
    if (e.target.checked) {
      const newvalue = [...dataSearch.loanToken, e.target.value];
      setdataSearch({ ...dataSearch, loanToken: newvalue });
    } else {
      const newValue1 = [...dataSearch.loanToken];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, loanToken: newValue2 });
    }
  };
  const onChangeLoanType = e => {
    if (e.target.checked) {
      const newvalue = [...dataSearch.loanType, e.target.value];
      setdataSearch({ ...dataSearch, loanType: newvalue });
    } else {
      const newValue1 = [...dataSearch.loanType];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, loanType: newValue2 });
    }
  };
  const onChangeDuration = e => {
    if (e.target.checked) {
      const newvalue = [...dataSearch.duration, e.target.value];
      setdataSearch({ ...dataSearch, duration: newvalue });
    } else {
      const newValue1 = [...dataSearch.duration];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, duration: newValue2 });
    }
  };
  //onclick mowr filter nav
  const onClick = () => {
    setstatusFilterNav(!statusFilterNav);
    if (statusFilterNav === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  console.log('data tra ve=', dataSearch);
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
              onChangeInputSearch={onChangeInputSearch}
              onChangeInterestRange={onChangeInterestRange}
              onChangeLoanToValue={onChangeLoanToValue}
              onChangeCollateralAccepted={onChangeCollateralAccepted}
              onChangeLoanToken={onChangeLoanToken}
              onChangeLoanType={onChangeLoanType}
              onChangeDuration={onChangeDuration}
            ></FiterNavSearch>
          </Col>
        </RowPage>
      </ContainerPage>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
