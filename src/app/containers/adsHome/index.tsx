import React from 'react';
import { Col } from 'reactstrap';
import { Button, P, H4, Box, ContainerAbs } from './style';
import absWatch from '../../../images/abs-Watch.png';
import { useTranslation } from 'react-i18next';

export function AdsHome() {
  const { t } = useTranslation();
  return (
    <div>
      <ContainerAbs color={absWatch}>
        <Col md="12" lg="8" xl="7">
          <Box>
            <H4>{t('home.ads.title')}</H4>
            <P>{t('home.ads.content')}</P>
            <Button>{t('home.ads.more')}</Button>
          </Box>
        </Col>
      </ContainerAbs>
    </div>
  );
}
