import styled from 'styled-components/macro';
import github from '../../../images/github_icon.svg';
import tele from '../../../images/tele_icon.svg';
import fb from '../../../images/fb_icon.svg';
import youtube from '../../../images/youtube_icon.svg';
import lin from '../../../images/lin_icon.svg';
import twitter from '../../../images/twitter_icon.svg';
const IconLink = styled.div`
  height: 14rem;
  margin-bottom: 5.6em;
  p {
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-bottom: 2.4rem;
    font-weight: bold;
    color: #ffffff;
  }
  .icons {
    width: 28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 575px) {
    height: 10rem;
    margin-bottom: 0;
    .icons {
      width: 24rem;
    }
  }
`;

const IconsList = () => {
  return (
    <IconLink>
      <p className="title">Find us on</p>
      <div className="icons">
        <a href="https://github.com/defi-vn/" title="Github">
          <img src={github} alt="" />
        </a>
        <a href="https://t.me/DeFiForYou_English" title="Telegram">
          <img src={tele} alt="" />
        </a>
        <a href="https://www.facebook.com/DeFiForYouDFY" title="Facebook">
          <img src={fb} alt="" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCGaSCU17Zo_2CzJNaBeUHaA/featured"
          title="Youtube"
        >
          <img src={youtube} alt="" />
        </a>
        <a href="https://www.linkedin.com/company/defiforyou" title="Linkedin">
          <img src={lin} alt="" />
        </a>
        <a href="https://twitter.com/Defiforyou" title="Twitter">
          <img src={twitter} alt="" />
        </a>
      </div>
    </IconLink>
  );
};

export default IconsList;
