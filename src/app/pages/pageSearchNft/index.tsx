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
  const [dataSearch, setdataSearch] = useState<any>({
    name: '',
    durationTypes: [],
    NFTtype: [],
    Assettype: [],
    collateralSymbols: [],
  });
  //lấy dữ liệu input
  const onchangeInputName = e => {
    setdataSearch({ ...dataSearch, name: e.target.value });
  };
  const collateralSymbols = e => {
    if (e.target.checked) {
      const newvalue = dataSearch?.collateralSymbols;
      newvalue.push(e.target.value);
      setdataSearch({ ...dataSearch, collateralSymbols: newvalue });
    } else {
      const newValue1 = [...dataSearch?.collateralSymbols];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, collateralSymbols: newValue2 });
    }
  };
  const NFTtype = e => {
    if (e.target.checked) {
      const newvalue = dataSearch?.NFTtype;
      newvalue.push(e.target.value);
      setdataSearch({ ...dataSearch, NFTtype: newvalue });
    } else {
      const newValue1 = [...dataSearch?.NFTtype];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, NFTtype: newValue2 });
    }
  };
  const durationTypes = e => {
    if (e.target.checked) {
      const newvalue = dataSearch?.durationTypes;
      newvalue.push(e.target.value);
      setdataSearch({ ...dataSearch, durationTypes: newvalue });
    } else {
      const newValue1 = [...dataSearch?.durationTypes];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, durationTypes: newValue2 });
    }
  };
  const Assettype = e => {
    if (e.target.checked) {
      const newvalue = dataSearch?.Assettype;
      newvalue.push(e.target.value);
      setdataSearch({ ...dataSearch, Assettype: newvalue });
    } else {
      const newValue1 = [...dataSearch?.Assettype];
      const newValue2 = newValue1.filter(el => el !== e.target.value);
      setdataSearch({ ...dataSearch, Assettype: newValue2 });
    }
  };
  useEffect(() => {
    SearchLendNFTApi.search(param)
      .then((res: any) => {
        setdataRender(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const editPageCount = e => {
    setdataSearch({ ...dataSearch, page: e });
  };
  console.log('dataSearch', dataSearch);
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
              <NftShop dataLendNFT={dataRender} />
            </Col>
            <Col>
              {' '}
              <Pagination
                editPageCount={editPageCount}
                dataRender={dataRender}
              />
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
            ></FiterNavSearch>
          </Col>
        </Row>
      </ContainerPage>
      <Footer></Footer>
    </>
  );
}
