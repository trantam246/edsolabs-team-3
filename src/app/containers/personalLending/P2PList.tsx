import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components/macro';
import P2PItem from './P2PItem';
const ColItem = styled(Col)`
  display: flex;
`;
const p2pData = [
  {
    name: 'Tam Pawnshop',
    rate: 1000,
    signed: 100,
    interest_min: 10,
    interest_max: 12,
    tags: ['Good LTV', 'Fast Disburement', 'Trusted'],
    collateral: [0, 1, 2, 3, 2, 3, 4],
  },
  {
    name: 'Tam Pawnshop',
    rate: 1000,
    signed: 100,
    interest_min: 10,
    interest_max: 12,
    tags: ['Good LTV', 'Fast Disburement', 'Trusted'],
    collateral: [0, 3, 1, 1, 2],
  },
  {
    name: 'Tam Pawnshop',
    rate: 1000,
    signed: 100,
    interest_min: 10,
    interest_max: 12,
    tags: ['Good LTV', 'Fast Disburement', 'Trusted'],
    collateral: [0, 3, 1, 1, 2],
  },
];
const P2PList: React.FC = () => {
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
