import { HiArrowNarrowRight } from '@react-icons/all-files/hi/HiArrowNarrowRight';

import { useTranslation } from 'react-i18next';
import { See } from './style';

const SeeAll = () => {
  const { t } = useTranslation();
  return (
    <See>
      {t('home.sliders.seeAll')}
      <HiArrowNarrowRight />
    </See>
  );
};

export default SeeAll;
