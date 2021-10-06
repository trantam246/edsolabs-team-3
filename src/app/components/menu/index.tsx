import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const Menu = styled(Col)`
  ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    li {
      display: inline-block;
      padding-left: 36px;
      a {
        font-weight: 500;
        font-size: 1.6rem;
        text-decoration: none;
        color: #d1d1d3;
        :hover {
          color: #dba83d;
        }
      }
      @media (max-width: 1366px) {
        padding-left: 26px;
      }
    }
  }
  @media (max-width: 1440px) {
    display: none;
  }
`;
export function MenuNavbar() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Menu>
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected">
              Pawn
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Brorow</NavLink>
          </li>
          <li>
            <NavLink to="/">Lend</NavLink>
          </li>
          <li>
            <NavLink to="/">NFT</NavLink>
          </li>
          <li>
            <NavLink to="/">My Account</NavLink>
          </li>
          <li>
            <NavLink to="/">FAQ</NavLink>
          </li>
        </ul>
      </Menu>
    </>
  );
}
