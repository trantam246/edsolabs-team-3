import styled from 'styled-components';
import { ButtonComponent } from '../../components/Button/Input/index';
export const Button = styled(ButtonComponent)`
  padding: 0.95rem 2rem;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  &:hover {
    opacity: 0.7;
    transition: all ease-in-out 0.5s;
  }
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #d1d1d3;
  padding: 2rem 0;
`;

export const Tables = styled.table`
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 1.6rem;
  }
`;

export const Thead = styled.thead`
  @media (max-width: 768px) {
    display: none;
  }
  tr {
    background: rgba(40, 44, 55, 0.5);
    color: #ffffff;
  }
`;

export const Th = styled.th`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  padding: 1.6rem 0;
  &:first-child {
    padding-left: 2.4rem;
    border-radius: 10px 0px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 10px 0px 0px;
  }
`;

export const Tbody = styled.tbody`
  tr {
    background-color: #282c37;
    &:hover {
      background: #475674;
      transition: all ease-in-out 0.2s;
    }
  }
`;

export const Td = styled.td`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #ffffff;

  padding: 1.6rem 0;
  height: 8rem;
  border-bottom: 2px solid #171a23 !important;
  &:first-child {
    padding-left: 2.4rem;
  }

  @media (max-width: 768px) {
    position: relative;
    display: block;
    padding-left: 30%;
    border-bottom: 0 !important;
    max-height: 6rem;

    &:first-child {
      display: none;
    }
    &::before {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
      padding: 1.6rem 0;
      width: fit-content;
      padding-top: 0;
    }
    &:nth-child(2)::before {
      content: 'Borrower';
      position: absolute;
      left: 15px;
    }
    &:nth-child(3)::before {
      content: 'Collateral';
      position: absolute;
      left: 15px;
    }
    &:nth-child(4)::before {
      content: 'Loan currency';
      position: absolute;
      left: 15px;
    }
    &:nth-child(5)::before {
      content: 'Duration';
      position: absolute;
      left: 15px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 40%;
  }
`;
