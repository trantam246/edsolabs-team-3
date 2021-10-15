import React from 'react';
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

  return (
    <>
      {props && (
        <>
          <P>{dataRender.total_elements} collateral offers match your search</P>
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
              {dataRender?.content?.map((o, i) => {
                return (
                  <>
                    <tr key={i}>
                      <Td>{++i}</Td>
                      <Td>
                        <Borrower
                          href={o?.walletAddress}
                          contract={o?.completedContracts}
                          reputation={o?.reputation}
                        />
                      </Td>
                      <Td>
                        <NFTIcon
                          type={'collateral'}
                          value={o?.collateralSymbol}
                          Amount={o?.collateralAmount}
                        />
                      </Td>
                      <Td>
                        <NFTIcon
                          type={'loan'}
                          value={o?.loanSymbol}
                          Amount={o?.loanAmount}
                        />
                      </Td>
                      <Td>
                        {o?.durationType === 0
                          ? `${o?.durationQty} Months`
                          : `${o?.durationQty} Weeks`}
                      </Td>
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

                    <td colSpan={6}>{i === length && <Banner />}</td>
                  </>
                );
              })}
            </Tbody>
          </Tables>
        </>
      )}
    </>
  );
}
