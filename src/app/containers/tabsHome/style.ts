import { Container, Row } from 'reactstrap';
import styled from 'styled-components/macro';
//con tai lơ tổng tabs home
export const ContainerSumTabHome = styled(Container)`
  background-color: #232732;
  min-height: 875px;
  padding: 0px;
  margin: 0px;
  & > .container-fluid {
    & > .container {
      padding: 83px 16px;
      @media (max-width: 1280px) {
        padding: 27px 16px 20px 16px;
      }
      @media (max-width: 1024px) {
        padding: 27px 16px 20px 16px;
      }
    }
  }
`;
// row
export const Rows = styled(Row)`
  .col__banner-one {
    padding: 0px;
  }
  .col__banner-two {
    padding: 0px;
  }
`;
