import React from 'react';
import Frame from '../../../../images/Frame.png';
import { Box, Title } from './style';
export default function Banner() {
  return (
    <>
      <Box>
        <Title>
          <h4>Become your own bank</h4>
          <p>
            Sign up for pawnshop to get great benefits from{' '}
            <span>DeFi For You.</span>
          </p>
        </Title>
        <img src={Frame} alt="" />
      </Box>
    </>
  );
}
