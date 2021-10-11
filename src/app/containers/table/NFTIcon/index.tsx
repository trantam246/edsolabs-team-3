import React from 'react';
import ETH from '../../../../images/ETH.png';
import BTC from '../../../../images/BTC.png';
import BNB from '../../../../images/BNB.png';
import DFY from '../../../../images/iconDcoi.png';
import { Box } from './style';

export default function NFTIcon(props: any) {
  const checkValue = (value: string) => {
    if (value === 'ETH') {
      return <img src={ETH} alt="" />;
    } else if (value === 'BTC') {
      return <img src={BTC} alt="" />;
    } else if (value === 'BNB') {
      return <img src={BNB} alt="" />;
    } else if (value === 'DFY') {
      return <img src={DFY} alt="" />;
    }
  };
  return (
    <>
      {props && (
        <Box>
          {checkValue(props.value)}
          {props.value}
        </Box>
      )}
    </>
  );
}
