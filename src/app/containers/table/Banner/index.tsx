import React from 'react';
import { useTranslation } from 'react-i18next';
import Frame from '../../../../images/Frame.png';
import { Box, Title } from './style';
export default function Banner() {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <Title>
          <h4>{t('search.lendCrypto.ads.title')}</h4>
          <p>
            {t('search.lendCrypto.ads.content')}
            <span>DeFi For You.</span>
          </p>
        </Title>
        <img src={Frame} alt="" />
      </Box>
    </>
  );
}
