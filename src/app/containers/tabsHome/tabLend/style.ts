import styled from 'styled-components';

export const GrInput = styled.div`
  margin-top: 24px;
  button {
    margin-bottom: 154px;
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
    @media (max-width: 1440px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      margin-bottom: 24px;
    }
    @media (max-width: 375px) {
      margin-bottom: 24px;
      width: 100%;
      height: 40px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
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
  }
  & > .radio {
    display: flex;
    & > .radio_input {
      flex: 1;
      display: flex;
      & > span {
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        /* margin-right: 172px; */
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
  width: 417px;
  height: 44px;
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
    @media (max-width: 425px) {
      width: 52px;
      height: 34px;
      right: 3px;
      top: 3px;
      font-size: 14px;
      line-height: 17px;
    }
    @media (max-width: 375px) {
      width: 52px;
      height: 34px;
      right: 3px;
      top: 3px;
      font-size: 14px;
      line-height: 17px;
    }
    @media (max-width: 320px) {
      width: 52px;
      height: 34px;
      right: 3px;
      top: 3px;
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
  @media (max-width: 1366px) {
    width: 65%;
    height: 44px;
  }
  @media (max-width: 991px) {
    width: 70%;
    height: 44px;
  }
  @media (max-width: 768px) {
    width: 70%;
    height: 44px;
  }
  @media (max-width: 425px) {
    width: 55%;
    height: 40px;
  }
  @media (max-width: 375px) {
    width: 218px;
    height: 40px;
  }
  @media (max-width: 320px) {
    width: 160px;
    height: 40px;
  }
`;
export const WarperSelect = styled.div`
  height: 44px;
  width: 111px;
  @media (max-width: 1920px) {
    height: 44px;
    width: 111px;
  }
  @media (max-width: 1366px) {
    width: 30%;
    height: 44px;
  }
  @media (max-width: 991px) {
    width: 20%;
    height: 44px;
  }
  @media (max-width: 768px) {
    width: 111px;
    height: 44px;
  }
  @media (max-width: 425px) {
    width: 40%;
    height: 40px;
  }
  @media (max-width: 375px) {
    width: 94px;
    height: 40px;
  }
  @media (max-width: 320px) {
    width: 100px;
    height: 40px;
  }
`;
export const WarperselectIsmul = styled.div`
  width: 100%;
  min-height: 44px;
  @media (max-width: 375px) {
    width: 100%;
    min-height: 40px;
  }
  @media (max-width: 320px) {
    width: 100%;
    min-height: 40px;
  }
`;
