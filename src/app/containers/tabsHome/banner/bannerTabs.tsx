import React from 'react';
import { Banner } from './style';
import imageTabsHome from '../../.../../../../images/imageTabsHome.png';
import Typewriter from 'typewriter-effect';
export function BannerTabs() {
  return (
    <Banner className="banner">
      <h1>
        <Typewriter
          options={{
            strings: ['Lend', 'Borrow'],
            autoStart: true,
            loop: true,
            cursor: ' ',
          }}
        ></Typewriter>{' '}
        with<span className="title__span"> DeFi For You.</span>
      </h1>
      <p>Get Crypto Loans Instantly, Regardless of Your Credit Rating</p>
      <div>
        <img src={imageTabsHome} alt="" />
      </div>
    </Banner>
  );
}
