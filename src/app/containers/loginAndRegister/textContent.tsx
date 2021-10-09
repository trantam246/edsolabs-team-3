import * as React from 'react';
import styled from 'styled-components';

const All = styled.div`
  padding-top: 1.9rem;
  padding-bottom: 2.4rem;
`;

const Span = styled.span`
  color: #dba83d;
`;

const BigText = styled.div`
  font-size: 5.4rem;
  font-weight: 700;
  color: white;
`;

const SmallText = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: white;
  width: 70rem;
`;

export default function textContent() {
  return (
    <All>
      <BigText>
        Exclusive on <Span>DeFi For You</Span>!!!
      </BigText>
      <SmallText>
        Register new DeFi For You account from <Span>01/08/2021</Span> to&nbsp;
        <Span>31/12/2021</Span> to have 100% chance of receiving DFY tokens
      </SmallText>
    </All>
  );
}
