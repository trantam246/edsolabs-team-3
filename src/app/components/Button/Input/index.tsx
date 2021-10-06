import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
interface props {
  width: string;
  height: string;
  color: string;
  fontSize: string;
  borderRadius: string;
}
const Buttun = styled.button`
  width: ${(p: props) => (p.width ? p.width : '10px')};
  height: ${(p: props) => (p.height ? p.height : '10px')};
  color: ${(p: props) => (p.color ? p.color : '#fff')};
  font-size: ${(p: props) => (p.fontSize ? p.fontSize : '10px')};
  border-radius: ${(p: props) => (p.borderRadius ? p.borderRadius : '10px')};
`;
export function ButtonComponent(props: any) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Buttun
        width={props.width}
        height={props.height}
        color={props.color}
        fontSize={props.fontSize}
        borderRadius={props.borderRadius}
        className={props.className}
        type={props.type}
      >
        {props.children}
      </Buttun>
    </>
  );
}
