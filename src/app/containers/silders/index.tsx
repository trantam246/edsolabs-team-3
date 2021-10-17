import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import slide1 from '../../../images/slide1.png';
import slide2 from '../../../images/slide2.png';
import slide3 from '../../../images/slide3.png';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import {
  SlideImg,
  SwiperSlideCustom,
  Title,
  IconGroup,
  Box,
  H3,
} from './style';
import { AiFillStar } from 'react-icons/ai';
import SeeAll from './SeeAll';
import { useTranslation } from 'react-i18next';

SwiperCore.use([Pagination, Navigation]);

export function Silder() {
  const { t } = useTranslation();
  const items = [
    {
      src: slide1,
      altText: t('home.sliders.list.name'),
      caption: 'Lorem ipsum dolor sit amet',
    },
    {
      src: slide2,
      altText: t('home.sliders.list.name'),
      caption: 'Lorem ipsum dolor sit amet',
    },
    {
      src: slide3,
      altText: t('home.sliders.list.name'),
      caption: 'Lorem ipsum dolor sit amet',
    },
    {
      src: slide3,
      altText: t('home.sliders.list.name'),
      caption: 'Lorem ipsum dolor sit amet',
    },
    {
      src: slide3,
      altText: t('home.sliders.list.name'),
      caption: 'Lorem ipsum dolor sit amet',
    },
  ];
  return (
    <>
      <H3>
        <span>{t('home.sliders.title')}</span>
      </H3>
      <SeeAll />
      <SwiperSlideCustom>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {items.map((o, index) => {
            return (
              <SwiperSlide key={index}>
                <Box>
                  <IconGroup>
                    <div className="icon icon-Brand">
                      {t('home.sliders.labelShop')}
                    </div>
                    <div className="icon icon-rank">
                      <AiFillStar />
                      1000
                    </div>
                  </IconGroup>
                  <SlideImg src={o.src} alt="" />
                </Box>
                <Title>
                  <h4>{o.altText}</h4>
                  <p>{o.caption}</p>
                </Title>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperSlideCustom>
    </>
  );
}
