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
  @media (max-width: 320px) {
    font-size: 14px;
    width: 227px;
    height: 45px;
    margin-right: 0px;
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
      margin-top: 20px;
      margin-bottom: 5px;
    }
    & > div {
      display: flex;
      justify-content: space-between;
    }
    Button {
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
  @media (max-width: 1024px) {
    form {
      .btn__submit {
        width: 50%;
      }
    }
  }
  @media (max-width: 768px) {
    form {
      .btn__submit {
        width: 100%;
      }
    }
  }
  @media (max-width: 425px) {
    form {
      .btn__submit {
        width: 319px;
      }
    }
  }
  @media (max-width: 375px) {
    form {
      .btn__submit {
        width: 319px;
      }
    }
  }
  @media (max-width: 320px) {
    form {
      .btn__submit {
        width: 240px;
      }
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
  height: ${(props: wrapperInput) => (props.height ? props.height : '0px')};
  div {
    cursor: pointer;
  }
  width: ${(props: wrapperInput) => (props.width ? props.width : '0px')};
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
    box-sizing: border-box;
    border-radius: 22px;
    padding: 0px 16px;
    background-color: transparent;
    color: ${(props: wrapperInput) =>
      props.colorFont ? props.colorFont : '#fff'};
    font-size: 16px;
    &:focus {
      outline: none;
      border: 2px solid #dba83d;
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
  select {
    width: 100%;
    height: 100%;
    border: 1px solid #74767b;
    border-radius: 22px;
    color: #fff;
    font-size: 16px;
    background-color: transparent;
    padding: 0px 10px;
    &:focus {
      outline: none;
      border: 2px solid #dba83d;
    }
    option {
      background-color: #232732;
      border: none;
      border-radius: 20px;
    }
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
  @media (max-width: 1024px) {
    width: ${(props: wrapperInput) =>
      props.width === '417px' || props.width === '225px' ? '670px' : '200px'};
    .btn_max {
      width: 54px;
      font-size: 14px;
    }
    div {
      .input__Choose {
      }
    }
  }
  @media (max-width: 768px) {
    width: ${(props: wrapperInput) =>
      props.width === '417px' || props.width === '225px' ? '500px' : '170px'};
    .btn_max {
      width: 54px;
      font-size: 14px;
    }
    div {
      .input__Choose {
      }
    }
  }
  @media (max-width: 425px) {
    width: ${(props: wrapperInput) =>
      props.width === '417px' || props.width === '225px' ? '240px' : '100px'};
    .btn_max {
      width: 54px;
      font-size: 14px;
    }
    div {
      .input__Choose {
      }
    }
  }
  @media (max-width: 375px) {
    width: ${(props: wrapperInput) =>
      props.width === '417px' || props.width === '225px' ? '218px' : '94px'};
    .btn_max {
      width: 54px;
      font-size: 14px;
    }
    div {
      .input__Choose {
      }
    }
  }
  @media (max-width: 320px) {
    width: ${(props: wrapperInput) =>
      props.width === '417px' || props.width === '225px' ? '180px' : '110px'};
    .btn_max {
      width: 54px;
      font-size: 14px;
    }
    div {
      .input__Choose {
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
`;
