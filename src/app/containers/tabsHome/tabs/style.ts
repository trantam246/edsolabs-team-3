import styled from 'styled-components';
import { Nav, TabPane, Col } from 'reactstrap';
//tabs home
export const Tabs = styled(Col)`
  @media (min-width: 1920px) {
    width: 600px;
    margin-left: auto;
  }
  @media (max-width: 1920px) {
    width: 600px;
    margin-left: auto;
  }
  @media (max-width: 1440px) {
    width: 600px;
    margin-left: auto;
  }
  @media (max-width: 1366px) {
    width: 100%;
    margin-left: auto;
  }
`;
//menu-tabSum
export const TabSum = styled(Nav)`
  border: none;
  margin-bottom: 12px;
  div {
    span {
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
    .active {
      display: block;
      font-weight: 600;
      font-size: 24px;
      color: #dba83d;
      margin-top: -7px;
    }
    :nth-child(1) {
      margin-right: 32px;
    }
  }
`;
///--tab borrow
export const Tabborrow = styled(TabPane)`
  background: #171a23;
  border-radius: 30px;
  padding: 24px 30px;
  margin-left: auto;
  text-align: center;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 24px 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 12px;
  }
  @media (max-width: 425px) {
    width: 100%;
    padding: 16px 12px;
  }
  @media (max-width: 375px) {
    min-height: 533px;
    width: 343px;
    padding: 16px 12px;
  }
  @media (max-width: 320px) {
    width: 100%;
    padding: 16px 12px;
    margin-right: 0px;
  }
`;
///-tab lend
export const TabLend = styled(TabPane)`
  /* min-height: 521px; */
  padding: 30px;
  background: #171a23;
  border-radius: 30px;
  margin-left: auto;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
  @media (max-width: 425px) {
    width: 100%;
    padding: 16px 12px;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 16px 12px;
  }
  @media (max-width: 320px) {
    width: 100%;
    padding: 16px 12px;
  }
`;
