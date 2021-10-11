import styled from 'styled-components/macro';
import ArrowUp from '../../../images/ArrowUp.svg';
export const Bong = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #494a4fb0;
  z-index: 0;
`;
export const WarperFilterNav = styled.div<any>`
  z-index: 1;
  width: 293px;
  background-color: #282c37;
  border-radius: 20px;
  margin-top: 30px;
  padding-bottom: 16px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #45484f;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #74767b;
    border-radius: 3px;
  }
  @media (max-width: 1024px) {
    position: fixed;
    top: -30px;
    bottom: 0;
    right: 0;
    border-radius: 0px;
    display: ${p => (p.status ? 'block' : 'none')};
  }
  @media (max-width: 768px) {
    position: fixed;
    top: -30px;
    bottom: 0;
    right: 0;
    border-radius: 0px;
    display: ${p => (p.status ? 'block' : 'none')};
  }
  @media (max-width: 425px) {
    position: fixed;
    top: -30px;
    bottom: 0;
    right: 0;
    border-radius: 0px;
    display: ${p => (p.status ? 'block' : 'none')};
  }
  @media (max-width: 375px) {
    position: fixed;
    top: -30px;
    bottom: 0;
    right: 0;
    border-radius: 0px;
    display: ${p => (p.status ? 'block' : 'none')};
  }
  @media (max-width: 320px) {
    position: fixed;
    top: -30px;
    bottom: 0;
    right: 0;
    border-radius: 0px;
    display: ${p => (p.status ? 'block' : 'none')};
  }
`;
export const Resetfilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #45484f;
  padding: 8px 16px;
  span {
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    cursor: pointer;
  }
  img {
    display: none;
  }
  @media (max-width: 1024px) {
    img {
      display: block;
    }
  }
`;
export const InputSearchNameFilter = styled.div`
  padding: 16px 12px 0px 12px;
  & > div {
    height: 40px;
    padding: 0px 12px;
    border-radius: 22px;
    background: #828282;
    display: flex;
    justify-content: start;
    align-items: center;
    div {
      input {
        margin-left: 6px;
        font-size: 14px;
        color: #ffffff;
        border: none;
        background-color: transparent;

        :focus {
          outline: none;
        }
        ::placeholder {
          color: #a2a3a7;
        }
      }
    }
  }
`;
export const Accordion = styled.div`
  .accordion-button {
    box-shadow: none;
    background-color: transparent;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding: 16px 16px 12px 16px;
    &::after {
      background-image: url(${ArrowUp});
    }
  }
  .accordion-body {
    padding: 0px 16px 0px 16px;
    max-height: 140px;
    overflow-y: auto;
    margin-right: 20px;
    margin-bottom: 12px;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: #45484f;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #74767b;
      border-radius: 3px;
    }
    & > div {
      display: flex;
      justify-content: start;
      align-items: center;
      padding-bottom: 12px;
      & > input {
        width: 16px;
        height: 16px;
        margin-right: 6px;
        cursor: pointer;
      }
      & > span {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
      }
    }
  }
  .accordion-item {
    background-color: transparent;
    border-bottom: 1px solid #45484f;
    border-top: none;
    :last-child {
      border: none;
    }
  }
`;
