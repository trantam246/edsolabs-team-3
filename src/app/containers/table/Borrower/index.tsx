import React from 'react';
import { IconStart, P } from './style';
export default function Borrower(props) {
  return (
    <>
      <div>
        <a href={props.href}>0xaa5...a410e</a>
        <div>
          <P>
            <IconStart />
            1000 | 100 contracts
          </P>
        </div>
      </div>
    </>
  );
}
