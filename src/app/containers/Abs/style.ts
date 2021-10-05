import styled from 'styled-components/macro';
import '../../images/Rectangle 1817.png';

export const Button = styled.button`
  font-size: 1.6rem;
  line-height: 2rem;
  color: #282c37;
  font-weight: 500;
  padding: 1.4rem 2.4rem;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );

  margin-bottom: 1rem;
  border-radius: 17.2rem;
  border: none;
`;

export const P = styled.p`
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 3rem;
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  max-width: 1324px;
  margin: 6rem auto;
  position: relative;

  background: linear-gradient(
    90.03deg,
    #131318 21.91%,
    #211e22 64.64%,
    rgba(23, 26, 35, 0) 68.82%
  );
  border-radius: 2rem;

  &::before {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
  }
`;

export const Box = styled.div`
  padding: 4.8rem 0 4.8rem 9.8rem;
`;
