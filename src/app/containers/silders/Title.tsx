import styled from 'styled-components/macro';

const TitleSliders = styled.h3`
  font-size: 3.6rem;
  color: #dba83d;
  text-align: center;
  font-weight: 600;
  padding-top: 6rem;
  margin-bottom: 7.6rem;
`;
const Title: React.FC = () => {
  return <TitleSliders>Explore Featured Pawnshops</TitleSliders>;
};
export default Title;
