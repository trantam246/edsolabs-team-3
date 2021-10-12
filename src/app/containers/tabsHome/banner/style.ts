import styled from 'styled-components';
import { Col } from 'reactstrap';
export const Banner = styled(Col)`
  padding-left: 250px;
  flex: 1;
  h1 {
    font-weight: bold;
    font-size: 6rem;
    color: #ffffff;
    margin-bottom: 29px;
    padding-left: 50px;
    width: 628px;
    div {
      display: inline-block;
    }
    .title__span {
      color: #dba83d;
    }
  }
  p {
    padding-left: 50px;
    font-weight: 500;
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 80px;
  }
  div {
    text-align: left;
    img {
      display: inline-block;
    }
  }
  @media (max-width: 1920px) {
    padding-left: 211px;
    h1 {
      font-size: 6rem;
      margin-bottom: 29px;
      padding-left: 70px;
      width: 550px;
    }
    p {
      padding-left: 70px;
    }
  }
  @media (max-width: 1440px) {
    padding-left: 0px;
    h1 {
      font-size: 6rem;
      margin-bottom: 29px;
      padding-left: 80px;
      width: 550px;
    }
    p {
      padding-left: 80px;
    }
  }
  @media (max-width: 1366px) {
    padding-right: 35px;
    padding-left: 0px;
    h1 {
      font-size: 5.4rem;
      margin-bottom: 29px;
      padding-left: 80px;
      width: 550px;
    }
    p {
      padding-left: 80px;
    }
    div {
      text-align: center;
      img {
        width: 100%;
        display: inline-block;
      }
    }
  }

  @media (max-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    h1 {
      margin-bottom: 29px;
      width: 100%;
      text-align: left;
      padding-left: 0px;
      padding-right: 50px;
    }
    p {
      text-align: left;
      padding-left: 0px;
      padding-right: 0px;
    }
    div {
      text-align: left;
      img {
        width: 400px;
        display: inline-block;
      }
    }
  }
  @media (max-width: 1024px) {
    padding-right: 0px;
    padding-left: 0px;
    h1 {
      margin-bottom: 29px;
      width: 100%;
      text-align: left;
      padding-left: 0px;
    }
    p {
      text-align: left;
      padding-left: 0px;
      margin-bottom: 80px;
    }
    div {
      text-align: center;
      img {
        display: inline-block;
      }
    }
  }

  @media (max-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
    h1 {
      padding-left: 0px;
      width: auto;
      div {
        display: inline-block;
      }
      .title__span {
        color: #dba83d;
      }
      font-size: 4.8rem;
      margin-bottom: 10px;
    }
    p {
      padding-left: 0px;
      font-size: 1.4rem;
      margin-bottom: 14px;
    }
    div {
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 425px) {
    padding-right: 0px;
    padding-left: 0px;
    h1 {
      padding-left: 0px;
      width: auto;
      div {
        display: inline-block;
      }
      .title__span {
        color: #dba83d;
      }
      font-size: 4.8rem;
      margin-bottom: 10px;
    }
    p {
      padding-left: 0px;
      font-size: 1.4rem;
      margin-bottom: 14px;
    }
    div {
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 375px) {
    padding-right: 0px;
    padding-left: 0px;
    h1 {
      font-size: 4rem;
      padding-left: 0px;
      width: auto;
      div {
        display: inline-block;
      }
      .title__span {
        color: #dba83d;
      }
      margin-bottom: 10px;
    }
    p {
      padding-left: 0px;
      font-size: 1.4rem;
      margin-bottom: 14px;
    }
    div {
      img {
        width: 344px;
      }
    }
  }
  @media (max-width: 320px) {
    padding-right: 0px;
    padding-left: 0px;
    h1 {
      font-size: 35px;
      padding-left: 0px;
      width: auto;
      div {
        display: inline-block;
      }
      .title__span {
        color: #dba83d;
      }
      font-size: 3.6rem;
      margin-bottom: 10px;
    }
    p {
      padding-left: 0px;
      font-size: 14px;
      margin-bottom: 14px;
    }
    div {
      img {
        width: 100%;
      }
    }
  }
`;
