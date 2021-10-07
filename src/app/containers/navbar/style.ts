import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import { Row, Button, Container } from 'reactstrap';
import styled from 'styled-components';
export const RowNavBar = styled(Row)`
  max-height: 100px;
  padding: 20px 30px;
  background-color: #232732;
  color: #d1d1d3;
  border-bottom: 1px solid #4f4f4f;
  @media (max-width: 600px) {
    padding: 0px 16px;
    max-height: 56px;
    min-height: 56px;
  }
`;

export const ButtonNavBar = styled(Button)`
  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: ${props => (props.color ? '#282C37' : '#dba83d ')};
    border: ${props => (props.color ? 'none' : '1px solid #dba83d')};
    box-sizing: border-box;
    border-radius: 25px;
    padding: 9px 20px;
    background: ${props =>
      props.color
        ? 'linear-gradient(221.15deg, #BD8727 0%, #FFD574 49.02%, #FECA50 62.02%, #BD8727 101.47%)'
        : 'unset'};
    margin-left: 20px;
  }
  @media (max-width: 900px) {
    display: ${props => (props.status ? 'inline-block ' : 'none')};
    a {
      margin-left: 0px;
      padding: 9px 10px;
    }
  }
`;
export const HamburgerMenu = styled.div`
  cursor: pointer;
  margin-left: 16px;
  display: none;
  svg {
    color: white;
    path {
      stroke: white;
    }
  }
  @media (max-width: 1440px) {
    display: inline-block;
    svg {
      color: white;
      path {
        stroke: white;
      }
    }
  }
`;
//menu mobi le
export const MenuMobile = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #171a23;
  border: 1px solid #fff;
  z-index: 999;
`;
export const AvatarAndName = styled.div`
  text-align: center;
  img {
    margin-top: 17px;
  }
  p {
    margin-top: 15px;
    font-size: 20px;
    color: #fff;
  }
`;
export const MenuSubMobile = styled.div`
  margin-top: 19px;
  div {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    padding: 11px 16px 13px 16px;
    margin: 1px 0px 0px 0px;
  }
`;
interface activeMenuMobile {
  status: boolean;
}
export const ActiveMenuMobile = styled.div<any>`
  background-color: ${(p: activeMenuMobile) => (p.status ? '#282c37' : 'none')};
  .active {
    color: ${(p: activeMenuMobile) => (p.status ? '#DBA83D' : '#fff')};
  }
`;
export const AiOutlineLefts = styled(AiOutlineLeft)`
  transform: ${props => (props.children ? 'rotate(270deg)' : '')};
`;
export const MenuSubDown = styled.div`
  padding: 0px !important;
  div {
    padding-left: 40px;
    background-color: #282c37;
    .active {
      color: #dba83d;
    }
  }
`;
export const MenuBorrowerProfile = styled.div`
  padding: 0px !important;
  background-color: transparent !important;
  div {
    margin-top: 1px;
    background-color: #282c37;
    padding-left: 71px;
  }
`;
export const HeaderHome = styled.header`
  #fixed__Header {
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: 1000;
    padding: 0px;
    overflow-y: auto;
    margin: 0px;
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }
    & > div {
      padding: 10px;
      margin: 0px;
      & > div {
        padding: 0px;
      }
    }
  }
`;
export const Containers = styled(Container)``;
