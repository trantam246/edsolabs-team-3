import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconStart, P } from './style';
export default function Borrower(props: any) {
  const convertStr = str => {
    if (str?.length > 16) {
      return `${str.substr(0, 8)}...${str.substr(str?.length - 8, 8)}`;
    }
  };
  const { t } = useTranslation();
  return (
    <>
      <div>
        <a href={props.href}>{convertStr(props.href)}</a>
        <div>
          <P>
            <IconStart />
            {props.reputation} | {props.contract}{' '}
            {props.contract > 1
              ? t('search.lendCrypto.contracts')
              : t('search.lendCrypto.contract')}
          </P>
        </div>
      </div>
    </>
  );
}
