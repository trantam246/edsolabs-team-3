import React from 'react';
import { ContainerSumTabHome, Rows } from '../../tabsHome/style';
import { Container } from 'reactstrap';

export default function TabsPawnShop() {
  return (
    <>
      <ContainerSumTabHome fluid>
        <Container fluid>
          <Rows>
            <div>content</div>
            <div>banner</div>
          </Rows>
        </Container>
      </ContainerSumTabHome>
    </>
  );
}
