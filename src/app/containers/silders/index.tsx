import styled from 'styled-components/macro';
import SlidersList from './SlidersList';
import Title from './Title';
import { Container } from 'reactstrap';
import SeeAll from './SeeAll';

const SliderSection = styled.section`
  min-height: 61.6rem;
  background-color: #232732;
  @media screen and (max-width: 375px) {
    min-height: 39rem;
  }
`;
export function Silder() {
  return (
    <SliderSection>
      <Container>
        <Title />
        <SeeAll />
        <SlidersList />
      </Container>
    </SliderSection>
  );
}
