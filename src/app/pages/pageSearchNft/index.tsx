/* eslint-disable react-hooks/exhaustive-deps */
import { Footer } from 'app/containers/footer';
import { Navbar } from 'app/containers/navbar';
import { NftShop } from 'app/containers/nftShop';
import { Pagination } from 'app/containers/pagination';
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { FiterNavSearch } from 'app/containers/filterNavSearch/lendNFT';
import { useState, useEffect } from 'react';
import filtericon from '../../../images/filtericon.svg';
import { Filter } from './style';
import { useHistory } from 'react-router';
import SearchLendNFTApi from 'api/searchLendNFT';

const ContainerPage = styled(Container)`
  padding: 0 1.6rem 2rem 1.6rem;
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

  const queryString = require('query-string');
  const history = useHistory();
  const param = queryString.parse(history.location.search);
  const [dataRender, setdataRender] = useState<any>({});
  const [dataSearch, setdataSearch] = useState<any>({ page: 0, size: 10 });
  //nut reset
  const clickResetAll = () => {
    history.push('/pawn/lender/nft-result');
    setdataSearch({ page: 0, size: 10 });
  };
  //lấy dữ liệu input
  const onchangeInputName = e => {
    setdataSearch({ ...dataSearch, name: e.target.value });
  };
  const collateralSymbols = e => {
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
  const NFTtype = e => {
    if (e.target.checked) {
      const data = {
        nftType: [],
      };
      const newvalue =
        dataSearch.nftType === undefined
          ? [...data.nftType, e.target.value]
          : typeof dataSearch.nftType === 'string'
          ? [dataSearch.nftType]
          : [...dataSearch.nftType, e.target.value];
      setdataSearch({ ...dataSearch, nftType: newvalue });
    } else {
      const newValue1 = [...dataSearch?.nftType];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, nftType: newValue2 });
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
  const Assettype = e => {
    if (e.target.checked) {
      const data = {
        assetType: [],
      };
      const newvalue =
        dataSearch.assetType === undefined
          ? [...data.assetType, e.target.value]
          : typeof dataSearch.assetType === 'string'
          ? [dataSearch.assetType]
          : [...dataSearch.assetType, e.target.value];
      setdataSearch({ ...dataSearch, assetType: newvalue });
    } else {
      const newValue1 = [...dataSearch?.assetType];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, assetType: newValue2 });
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
    const nftType =
      param.nftType === undefined ? undefined : param.nftType.split(',');
    const assetType =
      param.assetType === undefined ? undefined : param.assetType.split(',');
    setdataSearch({
      page: param.page,
      size: 10,
      // durationQty: param.durationQty, //
      durationTypes: durationTypes,
      loanAmount: param.loanAmount,
      loanSymbols: loanSymbols,
      name: param.name,
      nftType: nftType,
      assetType: assetType,
    });
  }, []);
  useEffect(() => {
    const newObj = {
      page: dataSearch.page === undefined ? undefined : Number(dataSearch.page),
      size: dataSearch.size === undefined ? undefined : Number(dataSearch.size),
      loanAmount:
        dataSearch.loanAmount === undefined
          ? undefined
          : dataSearch.loanAmount.length === 0
          ? undefined
          : dataSearch.loanAmount.toString(),
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
      name:
        dataSearch.name === undefined
          ? undefined
          : dataSearch.name.length === 0
          ? undefined
          : dataSearch.name.toString(),
      nftType:
        dataSearch.nftType === undefined
          ? undefined
          : dataSearch.nftType.length === 0
          ? undefined
          : dataSearch.nftType.toString(),
      assetType:
        dataSearch.assetType === undefined
          ? undefined
          : dataSearch.assetType.length === 0
          ? undefined
          : dataSearch.assetType.toString(),
    };
    SearchLendNFTApi.search(newObj)
      .then((res: any) => {
        setdataRender(res.data);
      })
      .catch(error => {
        // console.log(error);
        throw error;
      });
    history.push({
      pathname: '/pawn/lender/nft-result',
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
              <NftShop dataLendNFT={dataRender} />
            </Col>
            <Col>
              {dataRender.total_pages > 0 && (
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
              onchangeInputName={onchangeInputName}
              collateralSymbols={collateralSymbols}
              NFTtype={NFTtype}
              durationTypes={durationTypes}
              Assettype={Assettype}
              clickResetAll={clickResetAll}
            ></FiterNavSearch>
          </Col>
        </Row>
      </ContainerPage>
      <Footer></Footer>
    </>
  );
}
