import { Nav, TabPane } from 'reactstrap';
import styled from 'styled-components/macro';

//tabs borrow sub
export const TabborrowSub = styled(Nav)`
  color: red;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background: #282c37;
  border-radius: 27px;
  padding: 4px;
  display: inline-flexbox;
  height: 54px;
  align-items: center;
  margin-bottom: 10px;
  span {
    cursor: pointer;
    padding: 13px 24px;
    border-radius: 172px;
    color: #fff;
  }
  .activeSub {
    color: #282c37;
    background-color: violet;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
  }
`;
////-tab borrow Cryptocurrency
export const TabborrowCryptocurrency = styled(TabPane)`
  form {
    p {
      font-weight: 500;
      font-size: 14px;
      color: #fff;
      text-align: left;
      padding: 0px;
      margin-top: 16px;
      margin-bottom: 5px;
    }
    & > div {
      display: flex;
      justify-content: space-between;
    }
    Button {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      border: none;
      position: relative;
      background: linear-gradient(
        221.15deg,
        #bd8727 0%,
        #ffd574 49.02%,
        #feca50 62.02%,
        #bd8727 101.47%
      );
      transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
      &:hover {
        opacity: 0.8;
      }
    }
  }
  //input mau vang
  .input__Choose {
    width: 225px !important;
    height: 36px !important;
  }
  //btn
  .btn__submit {
    @media (min-width: 1920px) {
      width: 530px;
      height: 54px;
      margin-bottom: 108px;
    }
    @media (max-width: 1920px) {
      width: 530px;
      height: 54px;
      margin-bottom: 108px;
    }
    @media (max-width: 1440px) {
      width: 530px;
      height: 54px;
    }
    @media (max-width: 1366px) {
      width: 470px;
      height: 54px;
    }
    @media (max-width: 1280px) {
      width: 470px;
      height: 54px;
      margin-bottom: 40px !important;
    }
    @media (max-width: 1200px) {
      width: 400px;
      height: 54px;
    }
    @media (max-width: 1024px) {
      width: 400px;
      height: 54px;
    }
    @media (max-width: 991px) {
      width: 100%;
      height: 54px;
    }
    @media (max-width: 375px) {
      width: 319px;
      height: 44px;
      margin-bottom: 40px !important;
    }
    @media (max-width: 320px) {
      width: 100%;
      height: 44px;
    }
  }
`;
/////-wrapper input
interface wrapperInput {
  height: string;
  width: string;
  colorFont: string;
  colorBr: string;
}
export const WrapperInput = styled.div`
  position: relative;
  .activeBrinput {
    border: 2px solid #ff5252 !important;
  }
  .input__Disabled {
    border: 1px solid #dba83d;
    ::placeholder {
      color: #dba83d;
    }
  }
  input {
    width: 100%;
    height: 100%;
    border: 1px solid #74767b;
    border-radius: 22px;
    padding: 0px 16px;
    background-color: transparent;
    color: ${(props: wrapperInput) =>
      props.colorFont ? props.colorFont : '#fff'};
    font-size: 16px;
    &:hover {
      border-color: #ffffff;
    }
    &:focus {
      outline: none;
      border: 2px solid;
      border-color: #dba83d;
    }
    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: #a2a3a7;
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  .btn_max {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #282c37;
    font-size: 16px;
    line-height: 19px;
  }
  .icon_coi {
    position: absolute;
    left: 18px;
    top: 10px;
  }
  .value_coi {
    position: absolute;
    right: 20px;
    top: 15px;
    color: #fff;
    font-size: 10px;
    outline: none;
  }
  .warning__input {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: #ff5252;
  }
  @media (min-width: 1920px) {
    width: 417px;
    height: 44px;
  }
  @media (max-width: 1920px) {
    width: 417px;
    height: 44px;
  }
  @media (max-width: 1366px) {
    width: 375px;
    height: 44px;
  }
  @media (max-width: 1280px) {
    width: 250px;
    height: 44px;
  }

  @media (max-width: 1024px) {
    width: 470px;
    height: 44px;
  }
  @media (max-width: 768px) {
    width: 470px;
    height: 44px;
  }
  @media (max-width: 425px) {
    width: 240px;
    height: 44px;
  }
  @media (max-width: 375px) {
    width: 217px;
    height: 40px;
    .btn_max {
      right: 3px;
      top: 3px;
      font-size: 14px;
      line-height: 17px;
      width: 52px;
      height: 34px;
    }
    input {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      ::placeholder {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
  @media (max-width: 320px) {
    width: 217px;
    height: 40px;
    .btn_max {
      right: 3px;
      top: 3px;
      font-size: 14px;
      line-height: 17px;
      width: 52px;
      height: 34px;
    }
    input {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      ::placeholder {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`;
////Tooltip
export const TooltipTabs = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #c9cacd !important;
  padding: 0;
  margin-top: 20px !important;
  margin-bottom: 60px !important;
  position: relative;
  span {
    z-index: 4;
    display: none;
    position: absolute;
    top: 20px;
    left: 0;
    background-color: #232732;
    border-radius: 8px;
    padding: 5px;
  }
  &:hover span {
    display: block;
  }
  @media (max-width: 375px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 40px !important;
  }
`;

////-tab borrow NFT
export const TabborrowNFT = styled(TabPane)`
  .img {
    margin-top: 57px;
  }
  button {
    color: #282c37;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
    border-radius: 172px;
    padding: 14px 24px;
    border: none;
    margin-top: 40px;
  }
  p {
    margin-top: 32px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    a {
      text-decoration-line: underline;
      color: #dba83d;
    }
  }
  @media (max-width: 375px) {
    .img {
      margin-top: 40px;
    }
    button {
      color: #282c37;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      background: linear-gradient(
        221.15deg,
        #bd8727 0%,
        #ffd574 49.02%,
        #feca50 62.02%,
        #bd8727 101.47%
      );
      border-radius: 172px;
      padding: 14px 24px;
      border: none;
      margin-top: 40px;
    }
    p {
      margin-top: 24px;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      a {
        text-decoration-line: underline;
        color: #dba83d;
      }
    }
  }
`;
export const WrapperInputSelect = styled.div`
  @media (min-width: 1920px) {
    width: 111px;
    height: 44px;
  }
  @media (max-width: 1920px) {
    width: 111px;
    height: 44px;
  }
  @media (max-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 425px) {
    width: 94px;
    height: 40px;
  }
  @media (max-width: 375px) {
    width: 94px;
    height: 40px;
  }
  @media (max-width: 320px) {
    width: 94px;
    height: 40px;
  }
`;
