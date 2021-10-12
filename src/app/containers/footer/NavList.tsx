import styled from 'styled-components/macro';
import { HiArrowNarrowRight } from '@react-icons/all-files/hi/HiArrowNarrowRight';

const Nav = styled.div`
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
    }
  }
  .dfy {
    font-weight: bold;
  }
  svg {
    margin-left: 0.6rem;
  }
`;
const NavList = () => {
  return (
    <Nav>
      <p className="title">Quick navigation</p>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        Whitepaper <HiArrowNarrowRight />
      </a>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        Get the mobile app <HiArrowNarrowRight />
      </a>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        <span>
          Buy <span className="dfy"> DFY </span> on Exchanges
        </span>{' '}
        <HiArrowNarrowRight />
      </a>
    </Nav>
  );
};

export default NavList;
