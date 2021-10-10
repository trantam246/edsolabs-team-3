import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

const LogoImg = styled.img`
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    width: 126px;
    height: 30px;
  }
`;
export function Logo() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavLink to="/">
        <LogoImg src={logo}></LogoImg>
      </NavLink>
    </>
  );
}
