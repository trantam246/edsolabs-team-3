import { HiArrowNarrowRight } from '@react-icons/all-files/hi/HiArrowNarrowRight';
import { useTranslation } from 'react-i18next';
import { Nav } from './style';

const NavList = () => {
  const { t } = useTranslation();

  return (
    <Nav>
      <p className="title">{t('footer.quickNav.title')}</p>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        {t('footer.quickNav.whitepaper')} <HiArrowNarrowRight />
      </a>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        {t('footer.quickNav.mobile')} <HiArrowNarrowRight />
      </a>
      <a
        href="https://app.defiforyou.uk/defi-for-you-whitepaper.v2.pdf"
        className="nav-link"
      >
        <span>
          {t('footer.quickNav.buy')} <span className="dfy"> DFY </span>{' '}
          {t('footer.quickNav.exchange')}
        </span>{' '}
        <HiArrowNarrowRight />
      </a>
    </Nav>
  );
};

export default NavList;
