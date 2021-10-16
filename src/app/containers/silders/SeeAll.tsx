import styled from 'styled-components/macro';
import { HiArrowNarrowRight } from '@react-icons/all-files/hi/HiArrowNarrowRight';

const See = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: #ffffff;
  text-align: right;
  margin-bottom: 1.2rem;
  cursor: pointer;
  & svg {
    margin-left: 0.6rem;
  }
  &:hover {
    color: #dba83d;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

const SeeAll = () => {
  return (
    <See>
      See all
      <HiArrowNarrowRight />
    </See>
  );
};

export default SeeAll;
