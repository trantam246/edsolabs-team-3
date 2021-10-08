import * as React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  type: string;
  placeHolder: string;
  Icon: any;
  register: any;
  err: any;
}

const Wrapper = styled.div`
  max-width: 58.4rem;
  height: 9.7rem;

  .inputDiv {
    display: flex;
  }

  .icon {
    font-size: 2.4rem;
    color: white;
    margin-left: -3.4rem;
    margin-top: 1rem;
    cursor: pointer;
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.6rem;
`;

const InputStyled = styled.input`
  height: 4.4rem;
  min-width: 58.4rem;
  background: inherit;
  border-radius: 2.2rem;
  padding-left: 2.4rem;
  padding-right: 3.5rem;
  border: 1px solid #74767b;
  outline: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;

  &:focus {
    border: 1px solid #dba83d;
    caret-color: #dba83d;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 1.4rem;
    color: #a2a3a7;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-size: 1.4rem;
    color: #a2a3a7;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    font-size: 1.4rem;
    color: #a2a3a7;
  }
`;

export default function InputCustom({
  label,
  type,
  placeHolder,
  Icon,
  register,
  err,
}: Props) {
  console.log(err);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <div className="inputDiv">
        <InputStyled type={type} placeholder={placeHolder} {...register} />
        {Icon && <Icon className="icon" />}
      </div>
      {err}
    </Wrapper>
  );
}
