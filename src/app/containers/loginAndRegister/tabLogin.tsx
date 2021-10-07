import * as React from 'react';
import { TabPane } from 'reactstrap';
import styled from 'styled-components';
import InputCustom from './inputCustom';
import { BsEyeFill } from '@react-icons/all-files/bs/BsEyeFill';
import { BsEyeSlashFill } from '@react-icons/all-files/bs/BsEyeSlashFill';
import { useForm } from 'react-hook-form';

interface props {
  id: string;
}

interface IFormInput {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

const TabPaneLogin = styled(TabPane)`
  padding-top: 3rem;

  .pError {
    color: rgb(255, 72, 72);
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding-top: 0.4rem;
  }

  .pInfor {
    color: white;
    font-size: 1.4rem;
    margin-bottom: 0px;
  }

  .p1 {
    margin-bottom: 0.3rem;
  }

  .buttonStyled {
    margin-top: 4rem;
    height: 4.4rem;
    width: 17.4rem;
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
  }
`;

export default function TabLogin({ id }: props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <TabPaneLogin tabId={id}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom
          label="Name"
          type="text"
          placeHolder="Enter name"
          Icon={null}
          register={register('name', { required: true })}
          err={
            errors?.name?.type === 'required' && (
              <p className="pError">Invalid name</p>
            )
          }
        />

        <InputCustom
          label="Email"
          type="text"
          placeHolder="Enter email"
          Icon={null}
          register={register('email', { required: true })}
          err={
            errors?.email?.type === 'required' && (
              <p className="pError">Invalid email</p>
            )
          }
        />

        <InputCustom
          label="Password"
          type="password"
          placeHolder="Enter password"
          Icon={BsEyeFill}
          register={register('password', { required: true })}
          err={
            errors?.password?.type === 'required' && (
              <p className="pError">Invalid password</p>
            )
          }
        />

        <InputCustom
          label="Confirm password"
          type="password"
          placeHolder="Enter password"
          Icon={BsEyeSlashFill}
          register={register('password', { required: true })}
          err={
            errors?.password?.type === 'required' && (
              <p className="pError">Invalid password</p>
            )
          }
        />
        <p className="pInfor p1">
          We will not share or sell your information to 3rd parties.
        </p>
        <p className="pInfor">
          By clicking on Create Account, you agree to DeFi For You’s Terms and
          Conditions of Use.
        </p>
        <button type="submit" className="buttonStyled">
          Create Account
        </button>
      </form>
    </TabPaneLogin>
  );
}
