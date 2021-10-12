import styled from 'styled-components/macro';
import React from 'react';
import { Logo } from 'app/components/logo';
import { RiGlobalLine } from '@react-icons/all-files/ri/RiGlobalLine';
import { BiRightArrowAlt } from '@react-icons/all-files/bi/BiRightArrowAlt';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';

const ContactList = styled.div`
  min-height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a,
  .right,
  p {
    text-decoration: none;
    color: #9fa6b2;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.1rem;
    margin: 0;
    display: flex;
    align-items: center;
  }
  svg {
    color: #374151;
    margin-right: 1.2rem;
  }
  .language svg {
    width: 2rem;
    height: 2rem;
  }
  .email svg {
    width: 2rem;
    height: 1.7rem;
  }

  @media screen and (max-width: 575px) {
    min-height: 10rem;
    margin-bottom: 3.8rem;
    .email__ask a {
      color: #dba83d;
    }
    .email__support {
      display: none;
    }
  }
`;

const Contact = () => {
  return (
    <ContactList>
      <Logo />
      <div className="language">
        <p>
          <RiGlobalLine /> English (United States){' '}
          <BiRightArrowAlt className="right" />
        </p>
      </div>
      <div className="email email__ask">
        <a href="mailto:ask@defiforyou.uk" target="_blank" rel="noreferrer">
          <AiOutlineMail /> ask@defiforyou.uk
        </a>
      </div>
      <div className="email email__support">
        <a href="mailto:support@defiforyou.uk" target="_blank" rel="noreferrer">
          <AiOutlineMail /> support@defiforyou.uk
        </a>
      </div>
    </ContactList>
  );
};

export default Contact;
