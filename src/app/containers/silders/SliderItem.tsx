import styled from 'styled-components';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
export interface ISliderItem {
  item: {
    src: string;
    name: string;
    rate: number | string;
    title: string;
    content: string;
  };
}

const Item = styled.div`
  max-width: 42.8rem;
  position: relative;
  cursor: pointer;
`;

const Img: any = styled.div`
  background-size: cover;
  background-position: center center;
  border-radius: 2rem;
  height: 26.8rem;
  max-width: 42.8rem;
  @media screen and (max-width: 375px) {
    width: 28.3rem;
    height: 17.7rem;
  }
`;

const NameShop = styled.p`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
  background: #ff4848;
  border-radius: 1.55rem;
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  padding: 0.5rem 1.2rem;
`;

const Rate = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
  min-width: 7.2rem;
  background: #f8b017;
  color: #ffffff;
  border-radius: 1.6rem;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSlide = styled.p`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: #ffffff;
  margin: 1.2rem 0 0.8rem;
`;

const ContentSlide = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  color: #ffffff;
`;
const SliderItem: React.FC<ISliderItem> = ({ item }) => {
  const { src, name, rate, title, content } = item;

  return (
    <Item>
      <Img
        style={{
          background: `url(${src}) #c4c4c4`,
        }}
      />
      <NameShop>{name}</NameShop>
      <Rate>
        <AiFillStar />
        {rate}
      </Rate>
      <TitleSlide>{title}</TitleSlide>
      <ContentSlide>{content}</ContentSlide>
    </Item>
  );
};
export default SliderItem;
