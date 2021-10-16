import { Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const ModalStyled = styled(Modal)`
  .modal-content {
    background: #2f3543;
    border: none;
    border-radius: 2rem;
  }

  .modal-body {
    max-width: 35rem;
    padding: 3.2rem 2.4rem 2rem 2.4rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.2rem;
    color: white;
    text-align: center;
  }
`;

export default function ModalBox() {
  return (
    <ModalStyled isOpen={true} centered>
      <ModalBody>
        <div>
          This account has not been activated yet. Please confirm email to
          activate your account
        </div>
        <button>OK</button>
      </ModalBody>
    </ModalStyled>
  );
}
