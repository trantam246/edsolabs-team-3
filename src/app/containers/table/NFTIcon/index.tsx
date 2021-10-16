import React from 'react';
import { Box } from './style';
import { iconCoin, LoanAmount } from '../../../components/icon/index';

export default function NFTIcon(props: any) {
  const checkValue = (arr: any, src: string) => {
    return arr.find(o => o.value === src);
  };

  const typeArr = props.type === 'collateral' ? iconCoin : LoanAmount;
  const srcImg = checkValue(typeArr, props.value)?.url;

  return (
    <>
      {props && (
        <Box>
          <img src={srcImg} alt={props.value} />
          {props.value}
          <span>{props.Amount}</span>
        </Box>
      )}
      {!props && <div></div>}
    </>
  );
}
