import React from 'react';
import shop1 from '../../../images/shop_1.png';
import shop2 from '../../../images/shop_2.png';
import shop3 from '../../../images/shop_3.png';
import shop4 from '../../../images/shop_4.png';
import PawnShopItem from './PawnShopItem';

const shopListData = [
  {
    img: shop1,
    name: 'F88 - Online Pawnshop',
    heart: false,
    star: 1000,
    available: '3232423',
    limit_min: 1000,
    limit_max: 10000,
    duration: '6 - 12 months',
    ltv: 'Up to 80%',
    apr: '10 - 15%',
    collateral: ['BTC', 'ETH', 'BNB', 'DFY', 'YAN'],
    method: 'Auto',
  },
  {
    img: shop2,
    name: 'Tam - Online Pawnshop',
    heart: true,
    star: 1000,
    available: '3232423',
    limit_min: 1000,
    limit_max: 10000,
    duration: '6 - 12 months',
    ltv: 'Up to 80%',
    apr: '10 - 15%',
    collateral: ['BTC', 'ETH'],
    method: 'Semi-Auto',
  },
  {
    img: shop3,
    name: 'H&T Pawnbrokers',
    heart: true,
    star: 1000,
    available: '3232423',
    limit_min: 1000,
    limit_max: 10000,
    duration: '6 - 12 months',
    ltv: 'Up to 80%',
    apr: '10 - 15%',
    collateral: ['BTC', 'ETH'],
    method: 'Semi-Auto',
  },
  {
    img: shop4,
    name: 'F88 - Online Pawnshop',
    heart: true,
    star: 1000,
    available: '3232423',
    limit_min: 1000,
    limit_max: 10000,
    duration: '6 - 12 months',
    ltv: 'Up to 80%',
    apr: '10 - 15%',
    collateral: ['BTC', 'ETH'],
    method: 'Negotiation',
  },
  {
    img: shop4,
    name: 'H&T Pawnbrokers',
    heart: true,
    star: 1000,
    available: '3232423',
    limit_min: 1000,
    limit_max: 10000,
    duration: '6 - 12 months',
    ltv: 'Up to 80%',
    apr: '10 - 15%',
    collateral: ['BTC', 'ETH'],
    method: 'Negotiation',
  },
];

const PawnShopList = () => {
  return (
    <>
      {shopListData.slice(0, 4).map((item, idx) => (
        <PawnShopItem key={idx} item={item} />
      ))}
    </>
  );
};

export default PawnShopList;
