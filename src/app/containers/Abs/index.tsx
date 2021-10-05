import React from 'react';
import { Row, Col } from 'reactstrap';
import { Button, P, Container, H3, Box } from './style';

export default function index() {
  return (
    <>
      <Row>
        <Container>
          <Col xs="7">
            <Box>
              <H3>Become a Pawnshop</H3>
              <P>
                Open your own pawn shop and discover a new business opportunity
                with an unmatched ROI. Be a part of the world's financial
                revolution.
              </P>
              <Button>Learn More</Button>
            </Box>
          </Col>
        </Container>
      </Row>
    </>
  );
}
