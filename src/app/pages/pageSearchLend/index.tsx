/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect } from 'react';
import SearchLendCryApi from 'api/searchLendCry';
import { useHistory } from 'react-router';
import { Pagination } from 'app/containers/pagination';
import styled from 'styled-components/macro';

const ContainerPage = styled(Container)`
  padding: 0 1.6rem 2rem 1.6rem;
`;
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
  const queryString = require('query-string');
  const history = useHistory();
  const param = queryString.parse(history.location.search);
  const [dataSearch, setdataSearch] = useState<any>({ page: 0, size: 10 }); //data lấy được từ người dùng khi onchange
  //onclik clear sạch gầy ỏ ỏ
  const clickResetAll = () => {
    history.push('/pawn/lender');
    setdataSearch({ page: 0, size: 10 });
  };
  // on change lấy data search
  const collateralSymbols = e => {
    if (e.target.checked) {
      const data = {
        collateralSymbols: [],
      };
      const newvalue =
        dataSearch.collateralSymbols === undefined
          ? [...data.collateralSymbols, e.target.value]
          : typeof dataSearch.collateralSymbols === 'string'
          ? [dataSearch.collateralSymbols]
          : [...dataSearch.collateralSymbols, e.target.value];
      setdataSearch({ ...dataSearch, collateralSymbols: newvalue });
    } else {
      const newValue1 = [...dataSearch?.collateralSymbols];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, collateralSymbols: newValue2 });
    }
  };
  const loanSymbols = e => {
    if (e.target.checked) {
      const data = {
        loanSymbols: [],
      };
      const newvalue =
        dataSearch.loanSymbols === undefined
          ? [...data.loanSymbols, e.target.value]
          : typeof dataSearch.loanSymbols === 'string'
          ? [dataSearch.loanSymbols]
          : [...dataSearch.loanSymbols, e.target.value];
      setdataSearch({ ...dataSearch, loanSymbols: newvalue });
    } else {
      const newValue1 = [...dataSearch?.loanSymbols];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, loanSymbols: newValue2 });
    }
  };
  const durationTypes = e => {
    if (e.target.checked) {
      const data = {
        durationTypes: [],
      };
      const newvalue =
        dataSearch.durationTypes === undefined
          ? [...data.durationTypes, e.target.value]
          : typeof dataSearch.durationTypes === 'string'
          ? [dataSearch.durationTypes]
          : [...dataSearch.durationTypes, e.target.value];
      setdataSearch({ ...dataSearch, durationTypes: newvalue });
    } else {
      const newValue1 = [...dataSearch?.durationTypes];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, durationTypes: newValue2 });
    }
  };
  useEffect(() => {
    const durationTypes =
      param.durationTypes === undefined
        ? undefined
        : param.durationTypes.split(',');
    const loanSymbols =
      param.loanSymbols === undefined
        ? undefined
        : param.loanSymbols.split(',');
    const collateralSymbols =
      param.collateralSymbols === undefined
        ? undefined
        : param.collateralSymbols.split(',');
    setdataSearch({
      loanSymbols: loanSymbols,
      durationTypes: durationTypes,
      collateralSymbols: collateralSymbols,
      size: 10,
      page: param.page,
    });
  }, []);
  const [dataRender, setdataRender] = useState<any>({});
  useEffect(() => {
    const newObj = {
      page: dataSearch.page === undefined ? undefined : Number(dataSearch.page),
      size: dataSearch.size === undefined ? undefined : Number(dataSearch.size),
      durationTypes:
        dataSearch.durationTypes === undefined
          ? undefined
          : dataSearch.durationTypes.length === 0
          ? undefined
          : dataSearch.durationTypes.toString(),
      loanSymbols:
        dataSearch.loanSymbols === undefined
          ? undefined
          : dataSearch.loanSymbols.length === 0
          ? undefined
          : dataSearch.loanSymbols.toString(),
      collateralSymbols:
        dataSearch.collateralSymbols === undefined
          ? undefined
          : dataSearch.collateralSymbols.length === 0
          ? undefined
          : dataSearch.collateralSymbols.toString(),
      name:
        dataSearch.name === undefined ? undefined : dataSearch.name.toString(),
    };
    SearchLendCryApi.search(newObj)
      .then((res: any) => {
        setdataRender(res.data);
      })
      .catch(error => {
        // console.log(error);
        throw error;
      });
    history.push({
      pathname: '/pawn/lender',
      search: queryString.stringify(newObj),
    });
  }, [dataSearch]);
  const editPageCount = e => {
    setdataSearch({ ...dataSearch, page: e });
  };
  return (
    <>
      <Helmet>
        <title>DeFi For You | DeFi For You UK</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <Section className="section-even">
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
              <Table dataRender={dataRender} />
              <Col>
                {dataRender?.total_pages > 0 && (
                  <Pagination
                    editPageCount={editPageCount}
                    dataRender={dataRender}
                  />
                )}
              </Col>
            </Col>
            <Col xl="3">
              <FiterNavSearch
                status={statusFilterNav}
                onClick={onClick}
                editPageCount={editPageCount}
                durationTypes={durationTypes}
                loanSymbols={loanSymbols}
                collateralSymbols={collateralSymbols}
                clickResetAll={clickResetAll}
              ></FiterNavSearch>
            </Col>
          </Row>
        </ContainerPage>
        {/*footter*/}
        <Footer></Footer>
      </Section>
    </>
  );
}
