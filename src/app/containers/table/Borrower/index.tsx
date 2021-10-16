import React from 'react';
import { IconStart, P } from './style';
export default function Borrower(props: any) {
  const convertStr = str => {
    if (str?.length > 16) {
      return `${str.substr(0, 8)}...${str.substr(str?.length - 8, 8)}`;
    }
  };
  return (
    <>
      <div>
        <a href={props.href}>{convertStr(props.href)}</a>
        <div>
          <P>
            <IconStart />
            {props.reputation} | {props.contract} contracts
          </P>
        </div>
      </div>
    </>
  );
}
