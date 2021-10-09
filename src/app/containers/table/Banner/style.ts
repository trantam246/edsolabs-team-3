import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #475674;
  border-radius: 1rem;

  img {
    padding-right: 2.4rem;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  padding: 1.6rem 3.5rem;

  h4 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: #f8b017;
  }

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #ffffff;

    span {
      color: #f8b017;
    }
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }
`;
