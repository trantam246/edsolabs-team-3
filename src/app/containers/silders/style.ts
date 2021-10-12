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

export const Box = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 428px;
  width: inherit;

  @media (max-width: 768px) {
    max-width: 283px;
  }
`;

export const Title = styled.div`
  display: block;
  max-width: 428px;
  width: inherit;
  margin: 12px auto 0;
  color: #ffffff;
  h4 {
    font-weight: normal;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  p {
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-top: 4px;
  }
  @media (max-width: 768px) {
    max-width: 283px;
    h4 {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
    p {
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
`;

export const H3 = styled.h3`
  text-align: center;
  color: #dba83d;
  font-size: 36px;
  font-weight: 600;
  padding-top: 6rem;
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 0;
    padding-bottom: 3rem;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  max-width: 428px;
  width: inherit;
  padding: 12px;
  .icon {
    padding: 4px 8px;
    border-radius: 1.55rem;
    color: #ffffff;
    &-Brand {
      background: rgba(255, 72, 72, 1);
    }
    &-rank {
      background: rgba(248, 176, 23, 1);
      svg {
        padding-right: 0.3rem;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 283px;
  }
`;
export const content = styled.p`
  display: block;
  max-width: 428px;
  width: inherit;
  object-fit: cover;
  border-radius: 2rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 283px;
  }
`;

export const SwiperSlideCustom = styled.div`
  position: relative;
  .swiper-button-next,
  .swiper-button-prev {
    &::after {
      color: inherit;
      font-size: inherit;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    background: rgba(201, 202, 205, 0.1);
    color: #dba83d;
    font-size: 2.5rem;

    width: 74px;
    height: 74px;
    border-radius: 100%;
    transition: all 0.5s ease-out;
    &:hover {
      background: rgba(219, 168, 61, 0.5);
      color: #ffffff;
    }
  }
  .swiper-button-next {
    right: -120px;
  }
  .swiper-button-prev {
    left: -120px;
  }
  @media (max-width: 1600px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 60px;
      height: 60px;
      font-size: 2rem;
    }
    .swiper-button-next {
      right: -55px;
    }
    .swiper-button-prev {
      left: -55px;
    }
  }
  @media (max-width: 1024px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
    }
    .swiper-button-next {
      right: -25px;
    }
    .swiper-button-prev {
      left: -25px;
    }
  }
  @media (max-width: 576px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 30px;
      height: 30px;
      font-size: 1.2rem;
    }
    .swiper-button-next {
      right: 10px;
    }
    .swiper-button-prev {
      left: 10px;
    }
  }
  @media (max-width: 375px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 30px;
      height: 30px;
      font-size: 1.2rem;
    }
    .swiper-button-next {
      right: 0;
    }
    .swiper-button-prev {
      left: 0;
    }
  }
`;
