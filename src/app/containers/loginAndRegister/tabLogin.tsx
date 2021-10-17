/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane } from 'reactstrap';
import styled from 'styled-components';
import InputCustom from './inputCustom';
import { BsEyeFill } from '@react-icons/all-files/bs/BsEyeFill';
import { BsEyeSlashFill } from '@react-icons/all-files/bs/BsEyeSlashFill';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions, selectIsLoggedIn } from 'redux/slices';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppSelector } from 'redux/hocks';
import ModalBox from './modalBox';
import { useTranslation } from 'react-i18next';

const TabPaneLogin = styled(TabPane)`
  padding-top: 3rem;

  .pError {
    color: rgb(255, 72, 72);
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding-top: 0.4rem;
  }

  .aStyle {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: #e0e0e0;
    font-size: 1.2rem;
    line-height: 1rem;
    text-decoration: underline;
    cursor: pointer;
  }

  .divButton {
    width: 58.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonStyled {
    margin-top: 4rem;
    margin-bottom: 13.1rem;
    width: 17.4rem;
    height: 4.4rem;
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

  @media (max-width: 376px) {
    padding-top: 2.5rem;

    .divButton {
      width: 100%;
    }
    .buttonStyled {
      margin-bottom: 2.8rem;
      width: 17rem;
      height: 4.2rem;
    }
  }

  @media (max-width: 426px) {
    .divButton {
      width: 100%;
    }
    .buttonStyled {
      margin-bottom: 3rem;
      width: 17rem;
      height: 4.2rem;
    }
  }
  @media (max-width: 769px) {
    .recaptcha {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 1201px) {
    .divButton {
      width: 100%;
    }
  }

  @media (min-width: 1440px) {
    padding-bottom: 213px;

    .aStyle {
      width: 58.4rem;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`;

//code
interface props {
  id: string;
}

interface IFormInput {
  username: string;
  password: string;
}

export default function TabLogin({ id }: props) {
  const dispath = useDispatch();
  const history = useHistory();
  const islogin = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (islogin) {
      history.push('/');
    }
  }, [islogin]);

  //react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  //submit
  const onSubmit = (data: IFormInput) => {
    dispath(authActions.login(data));
  };
  //modal box
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //hide-show
  const [hide, setHide] = useState<boolean>(true);
  const getHide = () => setHide(!hide);

  //translation
  const { t } = useTranslation();

  return (
    <TabPaneLogin tabId={id}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom
          label="Email"
          type="text"
          placeHolder={t('auth.logIn.enterEmail')}
          Icon={null}
          iconClick={null}
          register={register('username', { required: true })}
          err={
            errors?.username?.type === 'required' && (
              <p className="pError">{t('auth.logIn.invalidEmail')}</p>
            )
          }
        />

        <InputCustom
          label={t('auth.logIn.password')}
          type={hide ? 'password' : 'text'}
          placeHolder={t('auth.logIn.enterPass')}
          Icon={hide ? BsEyeSlashFill : BsEyeFill}
          iconClick={getHide}
          register={register('password', { required: true })}
          err={
            errors?.password?.type === 'required' && (
              <p className="pError">{t('auth.logIn.invalidPass')}</p>
            )
          }
        />

        <div className="aStyle" onClick={toggle}>
          {t('auth.logIn.forget')}
        </div>

        <div className="divButton">
          <button type="submit" className="buttonStyled">
            {t('auth.logIn.button')}
          </button>
        </div>
      </form>

      <ModalBox status={modal} click={toggle} content="Coming soon !!!" />
    </TabPaneLogin>
  );
}
