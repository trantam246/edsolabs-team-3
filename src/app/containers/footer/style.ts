import { Container } from 'reactstrap';
import styled from 'styled-components/macro';
import textFooter from '../../../images/text_footer.png';

export const ContainerComponent = styled(Container)`
  @media screen and (max-width: 575px) {
    position: relative;
  }
`;

export const AboutFooter = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  .about {
    margin-top: 5.6rem;
    font-size: 1.4rem;
    &__title {
      font-weight: bold;
      color: #ffffff;
      padding-bottom: 2.4rem;
      margin: 0;
    }

    &__name {
      color: #dba83d;
      font-weight: 600;
      line-height: 1.7rem;
    }

    &__desc {
      font-family: 'Inter', sans-serif;
      line-height: 1.694rem;
      font-weight: 400;
      color: #9fa6b2;
    }
  }
  @media screen and (max-width: 575px) {
    .about {
      margin-top: 0;
    }
  }
`;

export const AddressList = styled.div`
  ul {
    /* height: 33.5rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0;
    & li:first-child {
      margin-bottom: 4.2rem;
    }
  }

  li {
    list-style: none;
    font-size: 1.4rem;
    line-height: 2.1rem;
    font-weight: 500;
  }
  @media screen and (max-width: 575px) {
    li {
      margin-bottom: 3rem;
    }
    .phone-LD {
      a {
        display: block;
        line-height: 3rem;
      }
      img {
        margin-left: 1.7rem;
      }
    }
  }
`;
export const AddressItem = styled.div`
  .title {
    color: #ffffff;
    font-weight: bold;
    padding-bottom: 2.4rem;
    margin: 0;
  }
  .phone {
    padding-bottom: 0.8rem;
    a {
      text-decoration: none;
      color: #dba83d;
      display: flex;
      width: 15rem;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .phone-LD {
    a {
      width: 30rem;
    }
  }
  .view-companies {
    align-items: center;
    transition: 0.4s;
    text-decoration: none;
    color: #dba83d;
    &:hover {
      margin-left: 2rem;
    }
  }
  p {
    color: #9fa6b2;
  }
  @media screen and (max-width: 767px) {
    .phone-LD {
      a {
        width: 15rem;
      }
    }
  }
`;

export const ContactList = styled.div`
  min-height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a,
  .right,
  p {
    text-decoration: none;
    color: #9fa6b2;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.1rem;
    margin: 0;
    display: flex;
    align-items: center;
  }
  svg {
    color: #374151;
    margin-right: 1.2rem;
  }
  .language svg {
    width: 2rem;
    height: 2rem;
  }
  .email svg {
    width: 2rem;
    height: 1.7rem;
  }

  @media screen and (max-width: 575px) {
    min-height: 10rem;
    margin-bottom: 3.8rem;
    .email__ask a {
      color: #dba83d;
    }
    .email__support {
      display: none;
    }
  }
`;

export const CopyRightFooter = styled.div`
  min-height: 6.1rem;
  background-color: #13171f;
  margin-top: 4rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.1rem;
  color: #74767b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #74767b;
    transition: 0.4s;
    &:hover {
      color: #ffffff;
    }
  }
  p {
    margin-bottom: 0;
  }
  .right {
    margin-right: 1.6rem;
  }
  .left {
    margin-left: 1.6rem;
  }
  @media screen and (max-width: 575px) {
    /* height: 9rem; */
    .copyright {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

export const IconLink = styled.div`
  /* height: 14rem; */
  margin-bottom: 11.4em;
  p {
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-bottom: 2.4rem;
    font-weight: bold;
    color: #ffffff;
  }
  .icons {
    width: 28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 575px) {
    height: 10rem;
    margin-bottom: 0;
    .icons {
      width: 24rem;
    }
  }
`;

export const FooterDefi = styled.footer`
  background-color: #171a23;
  min-height: 76.5rem;
  background-image: ${`url(${textFooter})`};
  background-repeat: no-repeat;
  background-size: 70%;
  background-position-y: 7rem;
  color: white;
  border-top: 0.1rem solid rgba(125, 111, 125, 0.2);
  .contact {
    padding-top: 16rem;
  }
  @media screen and (max-width: 1119px) {
    .row__nav-list {
      margin-top: 4rem;
    }
    .contact {
      padding-top: 4rem;
    }
  }
  @media screen and (max-width: 575px) {
    background-size: 100%;
    background-position-y: 4rem;

    .contact {
      padding: 5.4rem 0.8rem 0 0.8rem;
    }
    .row__nav-list {
      position: absolute;
      bottom: 0;
      right: 1.6rem;
      left: 1.6rem;
    }
    .row__about {
      padding: 0 0.8rem 24rem 0.8rem;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .row__nav-list {
      margin-top: 10rem;
    }
  }
  @media screen and (min-width: 1120px) and (max-width: 1200px) {
    .row__nav-list {
      margin-bottom: -6rem;
      margin-top: 4rem;
    }
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    .row__nav-list {
      margin-top: 10rem;
      .icons {
        width: 20rem;
      }
    }
  }
`;

export const Nav = styled.div`
  font-size: 1.4rem;
  line-height: 2.1rem;
  .title {
    font-weight: bold;
    color: #ffffff;
    padding-bottom: 2.4rem;
    margin: 0;
  }
  .nav-link {
    color: #9fa6b2;
    padding: 0 0 0.8rem 0;
    display: flex;
    align-items: center;
    transition: 0.4s;
    &:hover {
      margin-left: 2rem;
      color: #ffffff;
    }
  }
  .dfy {
    font-weight: bold;
  }
  svg {
    margin-left: 0.6rem;
  }
`;
