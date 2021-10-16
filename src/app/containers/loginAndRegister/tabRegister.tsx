import { useRef, useState } from 'react';
import { TabPane } from 'reactstrap';
import styled from 'styled-components';
import InputCustom from './inputCustom';
import { BsEyeFill } from '@react-icons/all-files/bs/BsEyeFill';
import { BsEyeSlashFill } from '@react-icons/all-files/bs/BsEyeSlashFill';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/slices';
import { useTranslation } from 'react-i18next';

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

  .p2 {
    margin-bottom: 2.9rem;
  }

  .pYellow {
    color: #dba83d;
  }

  .captchaField {
    height: 94px;
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

    .pInfor {
      line-height: 1.7rem;
    }

    .p1 {
      margin-bottom: 0.8rem;
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

  @media (max-width: 1025px) {
    .divButton {
      width: 100%;
    }
  }
`;
//code
interface props {
  id: string;
}
interface IFormInput {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  reCaptcha: string;
}

const SITE_KEY: string = '6LcSG9EaAAAAABvbpHkdugGmjEWeYPp6NoPPDEvt';

export default function TabRegister({ id }: props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInput>();
  const password = useRef({});
  password.current = watch('password', '');
  const dispath = useDispatch();
  const [token, setToken] = useState('');
  const onSubmit = (data: IFormInput) => {
    const datas = {
      name: data.name,
      email: data.email,
      password: data.password,
      recaptcha_response: token,
    };
    dispath(authActions.register(datas));
  };
  const [hide1, setHide1] = useState<boolean>(true);
  const getHide1 = () => setHide1(!hide1);

  const [hide2, setHide2] = useState<boolean>(true);
  const getHide2 = () => setHide2(!hide2);
  const { t } = useTranslation();
  return (
    <TabPaneLogin tabId={id}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom
          label={t('auth.signUp.name')}
          type="text"
          placeHolder={t('auth.signUp.enterName')}
          Icon={null}
          iconClick={null}
          register={register('name', { required: true })}
          err={
            errors?.name?.type === 'required' && (
              <p className="pError">{t('auth.signUp.invalidName')}</p>
            )
          }
        />

        <InputCustom
          label="Email"
          type="text"
          placeHolder={t('auth.signUp.enterEmail')}
          Icon={null}
          iconClick={null}
          register={register('email', { required: true })}
          err={
            errors?.email?.type === 'required' && (
              <p className="pError">{t('auth.signUp.invalidEmail')}</p>
            )
          }
        />

        <InputCustom
          label={t('auth.signUp.password')}
          type={hide1 ? 'password' : 'text'}
          placeHolder={t('auth.signUp.enterPass')}
          Icon={hide1 ? BsEyeSlashFill : BsEyeFill}
          iconClick={getHide1}
          register={register('password', { required: true })}
          err={
            errors?.password?.type === 'required' && (
              <p className="pError">{t('auth.signUp.invalidPass')}</p>
            )
          }
        />

        <InputCustom
          label={t('auth.signUp.confirm')}
          type={hide2 ? 'password' : 'text'}
          placeHolder={t('auth.signUp.enterPass')}
          Icon={hide2 ? BsEyeSlashFill : BsEyeFill}
          iconClick={getHide2}
          register={register('rePassword', {
            required: true,
            validate: value => value === password.current,
          })}
          err={
            (errors?.rePassword?.type === 'required' && (
              <p className="pError">{t('auth.signUp.invalidPass')}</p>
            )) ||
            (errors?.rePassword?.type === 'validate' && (
              <p className="pError">{t('auth.signUp.passErr')}</p>
            ))
          }
        />

        <p className="pInfor p1">{t('auth.signUp.desc')}</p>
        <p className="pInfor p2">
          {t('auth.signUp.action')}
          <span className="pYellow">{t('auth.signUp.create')}</span>
          {t('auth.signUp.actionMore')}
        </p>

        <div className="captchaField">
          <ReCAPTCHA
            className="recaptcha"
            sitekey={SITE_KEY}
            hl="en"
            size="normal"
            {...register('reCaptcha', {
              required: token === '',
            })}
            onChange={token => setToken(token)}
            onExpired={() => setToken('')}
          />
          {errors?.reCaptcha?.type === 'required' && (
            <p className="pError">{t('auth.signUp.captcha')}</p>
          )}
        </div>
        <div className="divButton">
          <button type="submit" className="buttonStyled">
            {t('auth.signUp.button')}
          </button>
        </div>
      </form>
    </TabPaneLogin>
  );
}
