import React from 'react';
import nft1 from '../../../images/shop1_nft.png';
import NftShopItem from './NftShopItem';

const shopListData = [
  {
    img: nft1,
    name: 'F88 - Online Pawnshop',
    hard: true,
    star: 1000,
    borrower: 'Tran Tam',
    duration: '12 months',
    location: 'Manchester City, UK',
    price: 1000000,
    loan: 100000000,
    method: 'Diamond',
  },
  {
    img: nft1,
    name: 'F88 - Online Pawnshop',
    hard: false,
    star: 1000,
    borrower: 'Tran Tam',
    duration: '12 months',
    location: undefined,
    price: undefined,
    loan: 100000000,
    method: 'Artwork',
  },
  {
    img: nft1,
    name: 'F88 - Online Pawnshop',
    hard: true,
    star: 1000,
    borrower: 'Tran Tam',
    duration: '12 months',
    location: 'Manchester City, UK',
    price: 1000000,
    loan: 100000000,
    method: 'Diamond',
  },
];

const NftShopList = () => {
  return (
    <>
      {shopListData.slice(0, 3).map((item, idx) => (
        <NftShopItem key={idx} item={item} />
      ))}
    </>
  );
};

export default NftShopList;
