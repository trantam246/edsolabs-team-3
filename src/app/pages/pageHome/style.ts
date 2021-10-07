import styled from 'styled-components';

export const Section = styled.section`
  padding: 6rem 0;
  &:nth-last-child() {
    background: #171a23;
  }
  &:nth-child(even) {
    background: #232732;
  }
  &:nth-child(odd) {
    background: #171a23;
  }
`;
