import styled from 'styled-components/macro';
import { Jumbotron } from 'reactstrap';
import { Modal } from 'reactstrap';

export const Button = styled.button`
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${props =>
    props.color === 'gradiend'
      ? '#282c37'
      : '#FF4848' && props.color === 'disable'
      ? '#74767b'
      : '#FF4848'};
  font-weight: 500;
  padding: 1.4rem 2.4rem;

  background: ${props =>
    props.color === 'gradiend'
      ? 'linear-gradient(221.15deg, #BD8727 0%, #FFD574 49.02%, #FECA50 62.02%, #BD8727 101.47%)'
      : 'unset' && props.color === 'disable'
      ? '#45484f'
      : 'unset'};

  margin-bottom: 1rem;
  border-radius: 17.2rem;
  border: ${props => (props.color ? 'none' : '1px solid #FF4848')};
  &:hover {
    opacity: 0.7;
    transition: all ease-in-out 0.5s;
  }
  @media (max-width: 540px) {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`;
export const ModalBG = styled(Modal)`
  margin: 10vh auto 0;
  max-width: 1324px !important;

  .modal-content {
    background: none !important;
  }

  @media (max-width: 1920px) {
    transform: none !important;
  }
  @media (max-width: 1024px) {
    max-width: calc(100% -2.2rem) !important;
  }
  @media (max-width: 540px) {
    max-width: 100% !important;
  }
`;

export const Paper = styled(Jumbotron)`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: #282c37;
  border-radius: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  margin: 3.5rem 0;
`;

export const Span = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin-bottom: 2rem;
  color: #dba83d;
  @media (max-width: 540px) {
    font-size: 1.4rem;
    line-height: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

export const List = styled.li`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;
  color: #dcdcdc;
  margin-bottom: 2rem;
  @media (max-width: 540px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 4rem;
  line-height: 150%;
  color: #ffffff;

  margin-top: 46px;
  margin-bottom: 17px;

  @media (max-width: 540px) {
    margin-top: 24px;
    margin-bottom: 11px;
    line-height: 2rem;
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }
`;

export const Box = styled.div`
  text-align: justify;
  margin-right: 30px;
  max-height: 530px;
  padding: 0 4rem 0 4rem;
  margin-right: 2.2rem;
  text-align: justify;
  ::-webkit-scrollbar {
    position: absolute;
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #45484f;
    border-radius: 0.5rem;
    margin: 2rem 2.2rem 4rem 0 !important;
  }
  ::-webkit-scrollbar-thumb {
    background: #a2a3a7;
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: 1366px) {
    height: 50vh;
  }
  @media (max-width: 768px) {
    padding: 0 1.6rem;
    margin: 0;
    height: 60vh;
  }
  @media (max-height: 600px) {
    height: 40vh;
  }
  @media (max-width: 540px) {
    padding: 1.2rem;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
