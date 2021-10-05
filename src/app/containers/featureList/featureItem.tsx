import * as React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 375px) {
    flex-direction: row;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;
  padding-top: 3.5rem;
  color: #ffffff;
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 20px;
  padding-top: 2rem;
  color: #ffffff;
`;

interface Props {
  path: any;
  title: string;
  description: string;
}

export default function FeatureItem({ path, title, description }: Props) {
  return (
    <>
      <Col xs={12} lg={3} md={6}>
        <Item className="d-flex justify-content-center">
          <img src={path} alt={title} />
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
        </Item>
      </Col>
    </>
  );
}
