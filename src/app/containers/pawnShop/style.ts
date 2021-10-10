import styled from 'styled-components';

export const SlideImg = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 428px;
  width: inherit;
  object-fit: cover;
  border-radius: 2rem;

  @media (max-width: 768px) {
    max-width: 283px;
  }
`;
