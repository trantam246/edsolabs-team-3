import { Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const ModalStyled = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 35rem;

  .modal-content {
    background: #2f3543;
    border: none;
    border-radius: 2rem;
    padding: 3.2rem 2.4rem 2rem 2.4rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.2rem;
    color: white;
    text-align: center;
  }

  .modal-body {
    padding: 0px;
  }

  .buttonDialog {
    margin-top: 2rem;
    width: 6.4rem;
    height: 3.2rem;
    border-radius: 2.8rem;
    background: linear-gradient(
      #bd8727 0%,
      #ffd574 48.31%,
      #feca50 61.12%,
      #bd8727 100%
    );
    color: #282c37;
    font-weight: 500;
    font-size: 1.6rem;
    border: none;
    outline: none;

    &:active {
      transform: translateY(4px);
    }
  }
`;

export default function ModalBox(props: any) {
  return (
    <ModalStyled isOpen={props.status} centered>
      <ModalBody>
        <div>{props.content}</div>
        <button className="buttonDialog" onClick={props.click}>
          OK
        </button>
      </ModalBody>
    </ModalStyled>
  );
}
