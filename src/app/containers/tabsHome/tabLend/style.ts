import styled from 'styled-components';

export const GrInput = styled.div`
  margin-top: 24px;
  button {
    width: 540px;
    height: 54px;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
    border-radius: 172px;
    border: none;
    color: #282c37;
    font-weight: 500;
    font-size: 20px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 0px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    & > span {
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      margin-right: 172px;
      margin-top: 13px;
    }
    .radio {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      input[type='radio'] {
        width: 0px;
        height: 0px;
        position: relative;
        background: transparent;
      }
      input[type='radio']:after {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: transparent;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid #dba83d;
        box-sizing: border-box;
      }
      input[type='radio']:checked:before {
        display: block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: #dba83d;
        content: '';
        display: inline-block;
        visibility: visible;
        z-index: 88;
      }
      input[type='radio'] {
        :before:hover {
          box-shadow: 0 0 0 3px rgb(red);
        }
      }
    }
  }
  @media (max-width: 1024px) {
    & > div {
      & > span {
        margin-right: 30px;
        margin-top: 13px;
      }
      .input__full {
        width: 100%;
      }
    }
    button {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    & > div {
      & > span {
        margin-right: 30px;
        margin-top: 13px;
      }
      .input__full {
        width: 100%;
      }
    }
    button {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
    & > div {
      & > span {
        margin-right: 30px;
        margin-top: 13px;
      }
      .input__full {
        width: 100%;
      }
    }
    button {
      width: 100%;
    }
  }
  @media (max-width: 375px) {
    & > div {
      & > span {
        margin-right: 10px;
        margin-top: 13px;
      }
      .input__full {
        width: 100%;
      }
    }
    button {
      width: 100%;
    }
  }
  @media (max-width: 320px) {
    & > div {
      & > span {
        margin-right: 10px;
        margin-top: 13px;
      }
      .input__full {
        width: 100%;
      }
    }
    button {
      width: 100%;
    }
  }
`;
export const WarperInput = styled.div<any>`
  height: ${p => (p.height ? p.height : 'auto')};
  width: ${p => (p.width ? p.width : '10px')};
  position: relative;
  & > .btn__max-lend {
    position: absolute;
    width: 64px;
    height: 34px;
    font-size: 16px;
    line-height: 19px;
    color: #282c37;
    right: 5px;
    top: 5px;
  }
  & > select {
    width: 100%;
    height: 100%;
    border-radius: 22px;
    border: 1px solid ${p => (p.border ? 'red' : '#74767b')};
    box-sizing: border-box;
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    color: #a2a3a7;
    padding: 0px 20px;
    & > option {
      background-color: red;
      height: 50px;
    }
    &:focus {
      outline: none;
      border: 2px solid #dba83d;
    }
  }
  .errValiInput {
    position: absolute;
    bottom: -18px;
    left: 0;
    color: #ff5252 !important;
    font-size: 12px;
    margin: 0px;
  }
  &:focus {
    border: 2px solid #dba83d;
  }
  & > input {
    height: 100%;
    width: 100%;
    border-radius: 22px;
    border: 1px solid ${p => (p.border ? '#ff5252' : '#74767b')};
    box-sizing: border-box;
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    color: #a2a3a7;
    padding: 0px 20px;
    &:focus {
      outline: none;
      border: 2px solid #dba83d;
    }
  }
  @media (max-width: 1024px) {
    width: ${p => (p.width === '417px' ? '700px' : '190px')};
  }
  @media (max-width: 768px) {
    width: ${p => (p.width === '417px' ? '500px' : '120px')};
  }
  @media (max-width: 425px) {
    width: ${p => (p.width === '417px' ? '217px' : '120px')};
  }
  @media (max-width: 375px) {
    width: ${p => (p.width === '417px' ? '217px' : '94px')};
  }
  @media (max-width: 320px) {
    width: ${p => (p.width === '417px' ? '150px' : '110px')};
  }
`;
