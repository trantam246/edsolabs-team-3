import React from 'react';
import PawnShopItem from './PawnShopItem';

// const shopListData = [
//   {
//     img: shop1,
//     name: 'F88 - Online Pawnshop',
//     heart: false,
//     star: 1000,
//     available: '3232423',
//     limit_min: 1000,
//     limit_max: 10000,
//     duration: '6 - 12 months',
//     ltv: 'Up to 80%',
//     apr: '10 - 15%',
//     collateral: ['BTC', 'ETH', 'BNB', 'DFY', 'YAN'],
//     method: 'Auto',
//   },
//   {
//     img: shop2,
//     name: 'Tam - Online Pawnshop',
//     heart: true,
//     star: 1000,
//     available: '3232423',
//     limit_min: 1000,
//     limit_max: 10000,
//     duration: '6 - 12 months',
//     ltv: 'Up to 80%',
//     apr: '10 - 15%',
//     collateral: ['BTC', 'ETH'],
//     method: 'Semi-Auto',
//   },
//   {
//     img: shop3,
//     name: 'H&T Pawnbrokers',
//     heart: true,
//     star: 1000,
//     available: '3232423',
//     limit_min: 1000,
//     limit_max: 10000,
//     duration: '6 - 12 months',
//     ltv: 'Up to 80%',
//     apr: '10 - 15%',
//     collateral: ['BTC', 'ETH'],
//     method: 'Semi-Auto',
//   },
//   {
//     img: shop4,
//     name: 'F88 - Online Pawnshop',
//     heart: true,
//     star: 1000,
//     available: '3232423',
//     limit_min: 1000,
//     limit_max: 10000,
//     duration: '6 - 12 months',
//     ltv: 'Up to 80%',
//     apr: '10 - 15%',
//     collateral: ['BTC', 'ETH'],
//     method: 'Negotiation',
//   },
//   {
//     img: shop4,
//     name: 'H&T Pawnbrokers',
//     heart: true,
//     star: 1000,
//     available: '3232423',
//     limit_min: 1000,
//     limit_max: 10000,
//     duration: '6 - 12 months',
//     ltv: 'Up to 80%',
//     apr: '10 - 15%',
//     collateral: ['BTC', 'ETH'],
//     method: 'Negotiation',
//   },
// ];
const PawnShopList = (props: any) => {
  const dataPawnShops = props.data?.map(o => ({
    id: o.id,
    name: o.pawnShop.name,
    interest: o.interest,
    interestMin: o.interestMin,
    interestMax: o.interestMax,
    allowedLoanMax: o.allowedLoanMax,
    allowedLoanMin: o.allowedLoanMin,
    durationQtyMax: o.durationQtyMax,
    durationQtyMin: o.durationQtyMin,
    durationQtyType: o.durationQtyType,
    loanToValue: o.loanToValue,
    symbol: o.acceptableAssetsAsLoan[0].symbol,
    collateral: o.acceptableAssetsAsCollateral.map(e => e.symbol),
    reputation: o.pawnShop.reputation,
    avatar: o.pawnShop.avatar,
    type: o.type,
    isFavorite: o.isFavourite,
  }));
  console.log('ok', dataPawnShops);
  return (
    <>
      {dataPawnShops?.map((item, idx) => (
        <PawnShopItem key={idx} item={item} />
      ))}
    </>
  );
};

export default PawnShopList;
