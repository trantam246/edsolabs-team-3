import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components/macro';
import P2PItem from './P2PItem';
const ColItem = styled(Col)`
  display: flex;
`;

const P2PList = (props: any) => {
  const LendData = props.data?.content?.map(o => ({
    addressLend: o.associatedAddress,
    reputation: o.reputation,
    contract: o.completedContracts,
    interestMin: o.minInterestRate,
    interestMax: o.maxInterestRate,
    collateral: [
      {
        address: o.acceptableAssetAsCollateral.address,
        symbol: o.acceptableAssetAsCollateral.symbol,
      },
    ],
  }));
  console.log('lendata', LendData);
  return (
    <Row>
      {p2pData.slice(0, 2).map((item, idx) => (
        <ColItem key={idx} className="col-12 col-md-6 col__item">
          {' '}
          <P2PItem item={item} />
        </ColItem>
      ))}
    </Row>
  );
};

export default P2PList;
