import React from 'react';
import { Container } from 'reactstrap';
import { ButtonGroup, Button, List, H3, Box, Paper, Span } from './styled';
export default function TermsOfService() {
  return (
    <Container>
      <Paper>
        <H3>Terms of Service</H3>
        <Box className="overflow-auto">
          <Span>DeFi For You Crypto Ethics & Regulation UK</Span>
          <List>
            The crypto digital ecosystem is a challenger to the existing
            financial system that has managed the economy since the financial
            services act which was introduced to protect consumers in the late
            1990’s.
          </List>
          <List>
            We are committed to following UK financial services principles
            providing a safe and secure environment for users to enjoy DeFi
            technology within a maintained and secure ecosystem.
          </List>
          <List>
            Our time and experience in this sector have allowed us to trial and
            sandbox varying technologies. Our R&D findings are available to the
            FCA to assist with creating a safe crypto financial instrument that
            has the flexibiListty and scope to provide services that comply with
            AML and principles for business.
          </List>
          <List>
            {' '}
            Our cooperative approach provides the FCA with the assistance needed
            to bridge the knowledge gap between operators and regulators, thus
            providing safe and regulated pathways for users.{' '}
          </List>
          <List>
            Our committed attitude towards regulation is for our users to feel
            confident with the technology, and confident that their personal
            information and tokenised assets are safe when transacting within
            our digital platforms.{' '}
          </List>
          <List>
            Working towards Prudential standards as an instrument provider.{' '}
          </List>
          <List>
            Assurance knowing that certain elements within the peer-to-peer
            transaction process is authorised and regulated by The Financial
            Conduct Authority.{' '}
          </List>
          <List>
            CListents and users are assured that we are a company that treats
            customers fairly.
          </List>
        </Box>
        <ButtonGroup>
          <Button color={''}>Decline</Button>
          <Button color={'gradiend'}>Accept</Button>
        </ButtonGroup>
      </Paper>
    </Container>
  );
}
