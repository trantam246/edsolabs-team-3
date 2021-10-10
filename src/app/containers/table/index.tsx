import React from 'react';
import Banner from './Banner/index';
import Borrower from './Borrower';
import NFTIcon from './NFTIcon';
import { Button, Tables, Thead, Th, Td, Tbody, P } from './style';

export default function Table() {
  return (
    <>
      <P>10 collateral offers match your search</P>
      <Tables>
        <Thead>
          <tr>
            <Th>#</Th>
            <Th>Borrower</Th>
            <Th>Collateral</Th>
            <Th>Loan currency</Th>
            <Th>Duration</Th>
            <Th></Th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <Td>1</Td>
            <Td>
              <Borrower />
            </Td>
            <Td>
              <NFTIcon value="ETH" />
            </Td>
            <Td>
              <NFTIcon value="DFY" />
            </Td>
            <Td>12 months</Td>
            <Td>
              <Button
                children="Send Offer"
                color="#282C37"
                borderRadius="2.5rem"
                width="auto"
                height="auto"
              />
            </Td>
          </tr>
        </Tbody>
      </Tables>
      <Banner />
    </>
  );
}
