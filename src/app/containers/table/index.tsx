import React from 'react';
import { useTranslation } from 'react-i18next';
import Banner from './Banner/index';
import Borrower from './Borrower';
import NFTIcon from './NFTIcon';
import { Button, Tables, Thead, Th, Td, Tbody, P } from './style';

export default function Table(props: any) {
  const { dataRender } = props;
  const length =
    dataRender?.content?.length <= dataRender?.size / 2
      ? dataRender?.content?.length
      : dataRender?.size / 2;
  const { t } = useTranslation();

  return (
    <>
      <>
        <P>
          {dataRender.total_elements} {t('search.lendCrypto.result')}
        </P>
        {props.dataRender.total_pages > 0 && (
          <Tables>
            <Thead>
              <tr>
                <Th>#</Th>
                <Th>{t('search.lendCrypto.borrower')}</Th>
                <Th>{t('search.lendCrypto.coll')}</Th>
                <Th>{t('search.lendCrypto.loan')}</Th>
                <Th>{t('search.lendCrypto.duration')}</Th>
                <Th></Th>
              </tr>
            </Thead>
            <Tbody>
              {dataRender?.content?.map((o, i) => {
                return (
                  <React.Fragment key={o.id}>
                    <tr className="item">
                      <Td>{++i}</Td>
                      <Td theme={t('search.lendCrypto.borrower')}>
                        <Borrower
                          href={o?.walletAddress}
                          contract={o?.completedContracts}
                          reputation={o?.reputation}
                        />
                      </Td>
                      <Td theme={t('search.lendCrypto.coll')}>
                        <NFTIcon
                          type={'collateral'}
                          value={o?.collateralSymbol}
                          Amount={o?.collateralAmount}
                        />
                      </Td>
                      <Td theme={t('search.lendCrypto.loan')}>
                        <NFTIcon
                          type={'loan'}
                          value={o?.loanSymbol}
                          Amount={o?.loanAmount}
                        />
                      </Td>
                      <Td theme={t('search.lendCrypto.duration')}>
                        {o?.durationType === 0
                          ? `${o?.durationQty} ${t('search.lendCrypto.months')}`
                          : `${o?.durationQty} ${t('search.lendCrypto.weeks')}`}
                      </Td>
                      <Td>
                        <Button
                          children={t('search.lendCrypto.button')}
                          color="#282C37"
                          borderRadius="2.5rem"
                          width="auto"
                          height="auto"
                        />
                      </Td>
                    </tr>
                    {i === length && (
                      <tr>
                        <td colSpan={6}>
                          <Banner />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </Tbody>
          </Tables>
        )}
      </>
    </>
  );
}
