import * as React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Button, P, H3, Box, ContainerAbs } from './style';
import absWatch from '../../../images/abs-Watch.png';

export function AdsHome() {
  return (
    <>
      <Container>
        <Row>
          <ContainerAbs color={absWatch}>
            <Col md="12" lg="8" xl="7">
              <Box>
                <H3>Become a Pawnshop</H3>
                <P>
                  Open your own pawn shop and discover a new business
                  opportunity with an unmatched ROI. Be a part of the world's
                  financial revolution.
                </P>
                <Button>Learn More</Button>
              </Box>
            </Col>
          </ContainerAbs>
        </Row>
      </Container>
    </>
  );
}
