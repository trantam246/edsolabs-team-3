import { ButtonComponent } from 'app/components/Button/Input';
import React from 'react';
import styled from 'styled-components';
import heartActive from '../../../images/heart_active.svg';
import heartDisable from '../../../images/heart_disable.svg';
import checkIcon from '../../../images/check_icon.svg';
import starIcon from '../../../images/star_icon.svg';

const PawnShop = styled.div`
  background: #282c37;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.04rem;

  .pawn {
    display: flex;
    flex-wrap: wrap;

    &__img {
      width: 23.3rem;
      position: relative;
      &-shop {
        max-width: 100%;
        height: 100%;
        border-radius: 0.8rem;
        object-fit: cover;
      }
      &-icon {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
    }
    &__content {
      flex: 1;
      margin-left: 2rem;
      border-right: 0.1rem solid grey;
    }
    &__name {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      color: #ffffff;
    }
    &__star {
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      color: #ffffff;
      margin-top: 0.8rem;
      display: flex;
      align-items: center;
      img {
        margin-right: 0.6rem;
      }
    }
    &__details {
      padding-left: 0;
      margin-top: 3rem;
      padding: 0.7rem 0;
      &-item {
        font-size: 1.6rem;
        list-style: none;
        display: flex;
      }
      &-label {
        color: #a2a3a7;
        min-width: 10rem;
      }
      &-result {
        color: #ffffff;
      }
    }
    &__interest {
      width: 28.6rem;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-end;
    }
    &__rate {
      &-label {
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: right;
        color: #a2a3a7;
      }
      &-result {
        font-style: normal;
        font-weight: 600;
        font-size: 3rem;
        line-height: 3.7rem;
        text-align: right;
        color: #3fd762;
      }
    }
    &__collateral {
      &-label {
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: #a2a3a7;
      }
      &-result {
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2rem;
        color: #ffffff;
      }
    }
    &__method {
      font-style: normal;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.1rem;

      letter-spacing: 0.04rem;
      &--auto {
        color: #2596ff;
        background: rgba(37, 150, 255, 0.2);
        border: 0.1rem solid #2596ff;
      }
      &--semi-auto {
        color: #fe951a;
        border: 0.1rem solid #fe951a;
        background: rgba(254, 149, 26, 0.2);
      }
      &--negotitation {
        color: #ff4848;
        border: 0.1rem solid #ff4848;
        background: rgba(255, 72, 72, 0.2);
      }
    }
    &__view {
      background: linear-gradient(
        221.15deg,
        #bd8727 0%,
        #ffd574 49.02%,
        #feca50 62.02%,
        #bd8727 101.47%
      );
      border: none;
    }
  }
`;
interface IShop {
  item: {
    img: string;
    name: string;
    heart: boolean;
    star: number;
    available: string | number;
    limit_min: number;
    limit_max: number;
    duration: string;
    ltv: string;
    apr: string;
    collateral: string[];
    method: string;
  };
}

const PawnShopItem: React.FC<IShop> = ({ item }) => {
  const renderCollateral =
    item.collateral.length > 3 ? (
      <p className="pawn__collateral-result">
        {item.collateral.slice(0, 3).join(', ')} &{' '}
        {item.collateral.slice(3).length}+ more
      </p>
    ) : (
      <p className="pawn__collateral-result">{item.collateral.join(', ')}</p>
    );
  return (
    <PawnShop>
      <div className="pawn">
        <div className="pawn__img">
          <img className="pawn__img-shop" src={item.img} alt="" />
          <img
            className="pawn__img-icon"
            src={item.heart ? heartActive : heartDisable}
            alt=""
          />
        </div>
        <div className="pawn__content">
          <div className="pawn__name">
            {item.name} <img src={checkIcon} alt="" />
          </div>
          <div className="pawn__star">
            <img src={starIcon} alt="" />
            {item.star}
          </div>
          <ul className="pawn__details">
            <li className="pawn__details-item">
              <p className="pawn__details-label">Available:</p>
              <p className="pawn__details-result">{item.available} USDT</p>
            </li>
            <li className="pawn__details-item">
              <p className="pawn__details-label">Limit:</p>
              <p className="pawn__details-result">
                {item.limit_min} USDT - {item.limit_max} USDT
              </p>
            </li>
            <li className="pawn__details-item">
              <p className="pawn__details-label">Duration:</p>
              <p className="pawn__details-result">{item.duration}</p>
            </li>
            <li className="pawn__details-item">
              <p className="pawn__details-label">LTV:</p>
              <p className="pawn__details-result">{item.ltv}</p>
            </li>
          </ul>
        </div>
        <div className="pawn__interest">
          <div className="pawn__rate">
            <p className="pawn__rate-label">Interest rate</p>
            <p className="pawn__rate-result">{item.apr} APR</p>
          </div>
          <div className="pawn__collateral">
            <p className="pawn__collateral-label">Collateral accepted</p>
            {renderCollateral}
          </div>
          <ButtonComponent
            width="10rem"
            height="2.6rem"
            borderRadius="1.35rem"
            className={`pawn__method pawn__method--${item.method.toLowerCase()}`}
          >
            {item.method}
          </ButtonComponent>
          <ButtonComponent
            fontSize="1.6rem"
            width="14.1rem"
            height="4.8rem"
            borderRadius="4.8rem"
            color="#282c37"
            className="pawn__view"
          >
            View Detail
          </ButtonComponent>
        </div>
      </div>
    </PawnShop>
  );
};

export default PawnShopItem;
