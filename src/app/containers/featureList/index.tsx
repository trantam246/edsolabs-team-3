import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Container, Row } from 'reactstrap';
import FeatureItem from './featureItem';
import Au_fastTime from '../../../images/Au_fastTime.png';
import Au_rate from '../../../images/Au_rate.png';
import Au_moneyManagement from '../../../images/Au_moneyManagement.png';
import Au_approved from '../../../images/Au_approved.png';

const Wrapper = styled.div`
  background: #171a23; ;
`;

const Title = styled.h1`
  text-align: center;
  color: #dba83d;
  padding-top: 6rem;
  padding-bottom: 9.5rem;
`;

const List = styled(Row)`
  padding-bottom: 8rem;
`;

type featureType = {
  path: any;
  title: string;
  description: string;
};

const data: featureType[] = [
  {
    path: Au_fastTime,
    title: 'Quicker than the bank',
    description:
      'Banks are yesterdays news. Get the money you need without having to wait.',
  },
  {
    path: Au_rate,
    title: 'Better interest rates',
    description:
      'P2P lending lets you negotiate with the lender to arrange the best possible interest rates.',
  },
  {
    path: Au_moneyManagement,
    title: 'Finance assets without selling ',
    description:
      'Put your assets to work so you can continue to meet your financial obligations. ',
  },
  {
    path: Au_approved,
    title: 'No credit checks',
    description:
      'Borrow without the background checks. Anyone can get the financing they need.',
  },
];

export function FeatureList() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Container>
          <Title>Why borrow with us?</Title>
          <List>
            {data.map((o, i) => (
              <FeatureItem
                key={i}
                path={o.path}
                title={o.title}
                description={o.description}
              />
            ))}
          </List>
        </Container>
      </Wrapper>
    </>
  );
}
