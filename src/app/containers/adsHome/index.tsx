import React from 'react';
import { Col } from 'reactstrap';
import { Button, P, H4, Box, ContainerAbs } from './style';
import absWatch from '../../../images/abs-Watch.png';

export function AdsHome() {
  return (
    <div>
      <ContainerAbs color={absWatch}>
        <Col md="12" lg="8" xl="7">
          <Box>
            <H4>Become a Pawnshop</H4>
            <P>
              Open your own pawn shop and discover a new business opportunity
              with an unmatched ROI. Be a part of the world's financial
              revolution.
            </P>
            <Button>Learn More</Button>
          </Box>
        </Col>
      </ContainerAbs>
    </div>
  );
}
