import React from 'react';
import Banner from './Banner/index';
import Borrower from './Borrower';
import NFTIcon from './NFTIcon';
import { Button, Tables, Thead, Th, Td, Tbody, P } from './style';

const data = {
  content: [
    {
      id: 1,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 2,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 3,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 4,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 5,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 6,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 7,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 8,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 9,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
    {
      id: 10,
      Borrower: '0xaa5...a410e',
      NFT: ['ETH', 'DFY'],
      date: '12 months',
    },
  ],
  size: 10,
  page: 0,
};

export default function Table() {
  const chunk = (target, size) => {
    return target.reduce(
      (memo, value, index) => {
        if (index % (target.length / size) === 0 && index !== 0) memo.push([]);
        memo[memo.length - 1].push(value);
        return memo;
      },
      [[]],
    );
  };

  return (
    <>
      <P>10 collateral offers match your search</P>
      {chunk(data.content, 2).map((data, i) => {
        return (
          <>
            <Tables key={i}>
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
              {data.map((o, k) => {
                return (
                  <Tbody key={k}>
                    <tr>
                      <Td>{o.id}</Td>
                      <Td>
                        <Borrower href={o.Borrower} />
                      </Td>
                      {o.NFT.map((n, j) => {
                        return (
                          <>
                            <Td key={j}>
                              <NFTIcon value={n} />
                            </Td>
                          </>
                        );
                      })}

                      <Td>{o.date}</Td>
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
                );
              })}
            </Tables>
            {i % 2 === 0 && <Banner />}
          </>
        );
      })}
    </>
  );
}
