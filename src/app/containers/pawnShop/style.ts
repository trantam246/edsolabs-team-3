import styled from 'styled-components';

export const PawnShop = styled.div`
  background: #282c37;
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.04rem;

  .pawn {
    display: flex;
    flex-wrap: wrap;
    &__shop {
      display: flex;
      width: 70%;
    }
    &__img {
      width: 23.3rem;
      position: relative;
      &-shop {
        width: 100%;
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
      border-right: 0.1rem solid #9bcfff36;
    }
    &__name {
      font-style: normal;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.9rem;
      color: #ffffff;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
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
        min-width: 12rem;
      }
      &-result {
        color: #ffffff;
      }
    }
    &__interest {
      width: 30%;
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
      min-width: 10rem;
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
      &--negotiation {
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
  @media screen and (max-width: 1200px) {
    .pawn {
      &__img {
        width: 14rem;
        img {
          height: auto;
        }
      }
      &__name {
        font-size: 1.8rem;
        & > img {
          display: none;
        }
      }
      &__rate-result {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .pawn {
      flex-direction: column;
      &__shop {
        display: flex;
        width: 100%;
      }
      &__img {
        width: 40%;
      }
      &__content {
        width: 100%;
        border-bottom: 0.1rem solid #9bcfff36;
        border-right: none;
      }

      &__details {
        margin-top: 0;
      }
      &__interest {
        width: 100%;
        align-items: flex-start;
        margin-top: 2rem;
        p {
          text-align: left;
        }
      }
      &__view {
        height: 4.2rem;
        min-width: 14.5rem;
      }
    }
  }
  @media screen and (max-width: 575px) {
    padding: 1.2rem;
    .pawn {
      position: relative;
      height: auto;
      flex-direction: column;
      &__shop {
        width: 100%;
        flex-direction: column;
      }
      &__content {
        margin-left: 0;
      }
      &__name {
        position: absolute;
        top: 0;
        right: -4%;
        width: 56%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      &__img {
        width: 44%;
      }
      &__details {
        margin-top: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .pawn {
      &__img {
        width: 45%;
      }
      &__name {
        right: -4%;
        height: auto;
      }
    }
  }
`;
