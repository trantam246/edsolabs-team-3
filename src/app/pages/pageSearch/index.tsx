/* eslint-disable react-hooks/exhaustive-deps */
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
import { useHistory } from 'react-router';
import SearchBorrowCryApi from 'api/searchBorrowCryApi';
import { useEffect } from 'react';
import searchPersonalLend from 'api/searchPersonalLendApi';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { navSortAction } from 'redux/slices/navSort';
import { Loading } from 'app/components/loading';
const ContainerPage = styled(Container)`
  padding: 0 1.6rem 2rem 1.6rem;
`;

const RowPage = styled(Row)`
  .row {
    --bs-gutter-x: 2.3rem;
  }
`;
export function PageSearch() {
  const queryString = require('query-string');
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [statusFilterNav, setstatusFilterNav] = useState(false);
  // chuyển đổi url ra obj
  const param = queryString.parse(history.location.search);
  //data lấy từ filter search
  const [dataSearch, setdataSearch] = useState<any>({
    status: 3,
    size: 5,
  }); //data lấy được từ người dùng khi onchange
  const dispatch = useDispatch();
  const resetDataFilter = () => {
    setdataSearch({
      size: 5,
      status: 3,
    });
    history.push({
      pathname: '/pawn/offer',
      search: queryString.stringify({
        size: 5,
        status: 3,
      }),
    });
    dispatch(navSortAction.toggle(''));
  };
  const onChangeInputSearch = (e: any) => {
    setdataSearch({ ...dataSearch, name: e.target.value });
  }; //lấy dữ liệu từ ô input

  const onChangeInterestRange = (e: any) => {
    setdataSearch({ ...dataSearch, interestRanges: e.target.value });
  };
  const onChangeLoanToValue = (e: any) => {
    setdataSearch({ ...dataSearch, loanToValueRanges: e.target.value });
  };

  const onChangeCollateralAccepted = e => {
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
  const onChangeLoanToken = e => {
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
      const newValue1 = [...dataSearch.loanSymbols];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, loanSymbols: newValue2 });
    }
  };
  const onChangeLoanType = e => {
    if (e.target.checked) {
      const data = {
        loanTypes: [],
      };
      const newvalue =
        dataSearch.loanTypes === undefined
          ? [...data.loanTypes, e.target.value]
          : typeof dataSearch.loanTypes === 'string'
          ? [dataSearch.loanTypes]
          : [...dataSearch.loanTypes, e.target.value];
      setdataSearch({ ...dataSearch, loanTypes: newvalue });
    } else {
      const newValue1 = [...dataSearch.loanTypes];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, loanTypes: newValue2 });
    }
  };
  const onChangeDuration = e => {
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
      const newValue1 = [...dataSearch.durationTypes];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, durationTypes: newValue2 });
    }
  };
  //lấy api render ra mà hình
  const [dataRender, setdataRender] = useState<any>({});
  const [dataPersonalLend, setDataPersonalLend] = useState<any>([]);

  const fetchDataPersonalLend = async () => {
    try {
      setLoading(true);
      const response = await searchPersonalLend.search();
      const data = await response.data;
      setDataPersonalLend(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };
  useEffect(() => {
    fetchDataPersonalLend();
  }, []);
  //truyền param vào state 1 lần
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
    const cusSort = param.cusSort === undefined ? undefined : param.cusSort;
    setdataSearch({
      durationTypes: durationTypes,
      loanSymbols: loanSymbols,
      collateralSymbols: collateralSymbols,
      collateralAmount: param.collateralAmount, //
      durationQty: param.durationQty, //
      loanAmount: param.loanAmount, //
      loanTypes: param.loanTypes,
      interestRanges: param.interestRanges,
      loanToValueRanges: param.loanToValueRanges,
      page: param.page,
      status: 3, //
      size: 5, //
      cusSort: cusSort,
      name: param.name,
    });
  }, []);
  // lấy api render
  useEffect(() => {
    const newObj = {
      name:
        dataSearch.name === undefined ? undefined : dataSearch.name.toString(),
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
      collateralAmount:
        dataSearch.collateralAmount === undefined
          ? undefined
          : dataSearch.collateralAmount.length === 0
          ? undefined
          : dataSearch.collateralAmount.toString(),
      durationQty:
        dataSearch.durationQty === undefined
          ? undefined
          : dataSearch.durationQty.length === 0
          ? undefined
          : dataSearch.durationQty.toString(),
      loanAmount:
        dataSearch.loanAmount === undefined
          ? undefined
          : dataSearch.loanAmount.length === 0
          ? undefined
          : dataSearch.loanAmount.toString(),
      loanTypes:
        dataSearch.loanTypes === undefined
          ? undefined
          : dataSearch.loanTypes.length === 0
          ? undefined
          : dataSearch.loanTypes.toString(),
      interestRanges:
        dataSearch.interestRanges === undefined
          ? undefined
          : dataSearch.interestRanges.length === 0
          ? undefined
          : dataSearch.interestRanges.toString(),
      loanToValueRanges:
        dataSearch.loanToValueRanges === undefined
          ? undefined
          : dataSearch.loanToValueRanges.length === 0
          ? undefined
          : dataSearch.loanToValueRanges.toString(),
      size: dataSearch.size === undefined ? undefined : Number(dataSearch.size),
      page: dataSearch.page === undefined ? undefined : Number(dataSearch.page),
      status:
        dataSearch.status === undefined ? undefined : Number(dataSearch.status),
      cusSort:
        dataSearch.cusSort === undefined
          ? undefined
          : dataSearch.cusSort.toString(),
    };
    SearchBorrowCryApi.search(newObj)
      .then((res: any) => {
        setdataRender(res.data);
      })
      .catch(error => {
        // console.log(error);
        throw error;
      });
    history.push({
      pathname: '/pawn/offer',
      search: queryString.stringify(newObj),
    });
  }, [dataSearch]);

  const editPageCount = e => {
    setdataSearch({ ...dataSearch, page: e });
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
  const handleSort = o => {
    setdataSearch({ ...dataSearch, cusSort: o });
  };
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>DeFi For You | DeFi For You UK</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/*navbar*/}
      <Navbar></Navbar>
      <ContainerPage>
        {loading ? (
          <Loading />
        ) : (
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
                  content={t('search.borrowCrypto.amountResult')}
                  amount={dataRender.total_elements}
                />
              </Col>
              <Col>
                <Suggest
                  src={hurry_img}
                  title={t('search.borrowCrypto.suggest.first.title')}
                  desc={t('search.borrowCrypto.suggest.first.content')}
                ></Suggest>
              </Col>
              <Col>
                <PersonalLending data={dataPersonalLend} />
              </Col>
              <Col>
                <Suggest
                  src={loan_img}
                  title={t('search.borrowCrypto.suggest.second.title')}
                  desc={t('search.borrowCrypto.suggest.second.content')}
                ></Suggest>
              </Col>
              <Col>
                <NavSortSearch handleSort={handleSort} />
              </Col>
              <Col>
                <PawnShop data={dataRender} />
              </Col>
              {dataRender?.total_pages > 0 && (
                <Col>
                  <Pagination
                    editPageCount={editPageCount}
                    dataRender={dataRender}
                  />
                </Col>
              )}
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
                resetDataFilter={resetDataFilter}
                dataSearch={dataSearch}
              ></FiterNavSearch>
            </Col>
          </RowPage>
        )}
      </ContainerPage>
      {/*footter*/}
      <Footer></Footer>
    </>
  );
}
