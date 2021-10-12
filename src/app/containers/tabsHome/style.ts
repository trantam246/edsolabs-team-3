import { Container, Row } from 'reactstrap';
import styled from 'styled-components/macro';
//con tai lơ tổng tabs home
export const ContainerSumTabHome = styled(Container)`
  background-color: #232732;
  min-height: 875px;
  padding: 0px;
`;
// row
export const Rows = styled(Row)`
  display: flex;
  flex-direction: row;
  padding: 83px 16px;
  @media (max-width: 1280px) {
    padding: 27px 16px 20px 16px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 27px 16px 20px 16px;
  }
`;
