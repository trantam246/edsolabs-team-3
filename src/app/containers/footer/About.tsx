import { useTranslation } from 'react-i18next';
import { AboutFooter } from './style';

const About = () => {
  const { t } = useTranslation();
  return (
    <AboutFooter>
      <div className="about">
        <p className="about__title">{t('footer.about.title')}</p>
        <p className="about__content">
          <span className="about__name">DeFi For You </span>
          <span className="about__desc">{t('footer.about.content')}</span>
        </p>
      </div>
    </AboutFooter>
  );
};

export default About;
