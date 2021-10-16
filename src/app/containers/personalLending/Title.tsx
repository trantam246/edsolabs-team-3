import { useTranslation } from 'react-i18next';
import { TitlePersonal } from './style';

const Title = () => {
  const { t } = useTranslation();
  return (
    <TitlePersonal>
      <div className="label">
        <p className="label__title">
          {t('search.borrowCrypto.personalLend.label')}
        </p>
        <a className="label__link-view" href="/">
          {t('search.borrowCrypto.personalLend.viewAll')}
        </a>
      </div>
    </TitlePersonal>
  );
};

export default Title;
