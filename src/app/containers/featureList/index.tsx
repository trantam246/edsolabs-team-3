import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Container, Row } from 'reactstrap';
import FeatureItem from './featureItem';
import Au_fastTime from '../../../images/Au_fastTime.png';
import Au_rate from '../../../images/Au_rate.png';
import Au_moneyManagement from '../../../images/Au_moneyManagement.png';
import Au_approved from '../../../images/Au_approved.png';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  background: #171a23; ;
`;

const Title = styled.div`
  text-align: center;
  color: #dba83d;
  font-size: 36px;
  font-weight: 600;
  padding-top: 6rem;
  padding-bottom: 10rem;
  @media (max-width: 376px) {
    font-size: 2.4rem;
    line-height: 30px;
    padding-top: 4rem;
    padding-bottom: 4.1rem;
  }
`;

const List = styled(Row)`
  padding-bottom: 8rem;
  @media (max-width: 376px) {
    padding-bottom: 0rem;
    padding-left: 0.85rem;
    padding-right: 0.85rem;
  }
`;

export function FeatureList() {
  type featureType = {
    id: number;
    path: any;
    title: string;
    description: string;
  };
  const { t } = useTranslation();
  const data: featureType[] = [
    {
      id: 1,
      path: Au_fastTime,
      title: t('home.features.list.bank.title'),
      description: t('home.features.list.bank.content'),
    },
    {
      id: 2,
      path: Au_rate,
      title: t('home.features.list.rate.title'),
      description: t('home.features.list.rate.content'),
    },
    {
      id: 3,
      path: Au_moneyManagement,
      title: t('home.features.list.sell.title'),
      description: t('home.features.list.sell.content'),
    },
    {
      id: 4,
      path: Au_approved,
      title: t('home.features.list.credit.title'),
      description: t('home.features.list.credit.content'),
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Container>
          <Title>{t('home.features.title')}</Title>
          <List>
            {data.map((o, i) => (
              <FeatureItem
                key={i}
                id={o.id}
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
