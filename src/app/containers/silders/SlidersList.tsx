// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import slide_1 from '../../../images/slide_1.png';
// import slide_2 from '../../../images/slide_2.png';
// import slide_3 from '../../../images/slide_3.png';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import SliderItem from './SliderItem';
// import styled from 'styled-components';

const SlidersList: React.FC = () => {
  //   const items = [
  //     {
  //       src: slide_1,
  //       name: 'Super Shop',
  //       rate: 1000,
  //       title: 'Pawnshop America',
  //       content: 'Lorem ipsum dolor sit amet',
  //     },
  //     {
  //       src: slide_2,
  //       name: 'Super Shop',
  //       rate: 1000,
  //       title: 'Pawnshop America',
  //       content: 'Lorem ipsum dolor sit amet',
  //     },
  //     {
  //       src: slide_3,
  //       name: 'Super Shop',
  //       rate: 1000,
  //       title: 'Pawnshop America',
  //       content: 'Lorem ipsum dolor sit amet',
  //     },
  //   ];

  // const primaryOptions = {
  //   type: 'slider',
  //   rewind: true,
  //   width: '100%',
  //   autoplay: true,
  //   perPage: 3,
  //   perMove: 1,
  //   pagination: false,
  //   breakpoints: {
  //     '600': {
  //       perPage: 1,
  //       // width: '100%',
  //       pagination: true,
  //     },
  //   },
  // };
  // const Sliders = styled(Splide)`
  //   .splide {
  //     &__arrow {
  //       width: 7.4rem;
  //       height: 7.4rem;
  //       transform: translateY(-100%);
  //       background: #c9cacd;
  //       opacity: 0.1;
  //       & svg {
  //         width: 1.3rem;
  //         height: 2.4rem;
  //         color: #dba83d;
  //       }
  //       &--prev {
  //         left: -10rem;
  //       }
  //       &--next {
  //         right: -10rem;
  //       }
  //     }
  //     &__list {
  //       width: 100%;
  //       justify-content: space-between;
  //       margin: 0 auto !important;
  //     }
  //     &__slide {
  //       width: calc(100% / 3 - 2rem) !important;
  //       @media screen and (max-width: 375px) {
  //         width: 28.3rem;
  //         height: 17.7rem;
  //       }
  //     }
  //   }
  // `;
  return (
    <>
      {/* <Sliders options={primaryOptions}>
        {items.map((item, idx) => (
          <SplideSlide key={idx}>
            <SliderItem item={item} />
          </SplideSlide>
        ))}
      </Sliders> */}
    </>
  );
};
export default SlidersList;
