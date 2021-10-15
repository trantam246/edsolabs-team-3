import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  background: #475674;
  border-radius: 1rem;
  margin: 2rem 0;

  img {
    padding-right: 2.4rem;
    object-fit: contain;
  }
  @media (max-width: 425px) {
    margin: 1.6rem;
    img {
      position: absolute;
      top: 16px;
      right: 0;
      padding-right: 0.4rem;
    }
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
  @media (max-width: 425px) {
    padding: 1.6rem 1.2rem;
    h4 {
      width: max-content;
    }
    p {
      max-width: 50%;
      padding-right: 3rem;
    }
  }
`;
