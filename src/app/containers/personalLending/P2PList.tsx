import React from 'react';
import { Col, Row } from 'reactstrap';
import P2PItem from './P2PItem';

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
        <Col key={idx} className="col-12 col-md-6">
          {' '}
          <P2PItem item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default P2PList;
