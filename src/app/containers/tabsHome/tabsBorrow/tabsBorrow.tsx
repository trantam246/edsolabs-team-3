import React from 'react';
import {
  TabborrowCryptocurrency,
  TabborrowSub,
  TooltipTabs,
  WrapperInput,
  WrapperInputSelect,
} from './style';
import classnames from 'classnames';
import { useState } from 'react';
import { TabContent } from 'reactstrap';
import { TabborrowNFT } from './style';
import { RiInformationFill } from '@react-icons/all-files/ri/RiInformationFill';
import BiSearch from '../../../../images/search.png';
import { ButtonComponent } from 'app/components/Button/Input';
import { Controller, useForm } from 'react-hook-form';
import NFT from '../../../../images/NFT.png';
import { Link } from 'react-router-dom';
import { SelectAll } from 'app/components/select/select';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function TabsBorrow(props: any) {
  //tabs
  const history = useHistory();
  const [activeTabBorRowCryptocurrency, setActiveTabBorRowCryptocurrency] =
    useState('1');
  const toggleCryptocurrency = tab => {
    if (activeTabBorRowCryptocurrency !== tab)
      setActiveTabBorRowCryptocurrency(tab);
    if (tab === '1') {
      history.push({ pathname: '', search: 'tab=1' });
    }
    if (tab === '2') {
      history.push({ pathname: '', search: 'tab=2' });
    }
  };
  useEffect(() => {
    if (history.location.search.includes('?tab=1')) {
      setActiveTabBorRowCryptocurrency('1');
    }
    if (history.location.search.includes('?tab=2')) {
      setActiveTabBorRowCryptocurrency('2');
    }
  }, [activeTabBorRowCryptocurrency, history.location.search]);
  //submit form 1
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const onSumitFormCryptocurrency = data => {
    const queryString = require('query-string');
    const newObj = {
      collateralAmount: Number(data.collateralAmount),
      collateralSymbols:
        data.collateralSymbols === undefined
          ? undefined
          : data.collateralSymbols.value.toString(),
      durationQty: Number(data.durationQty),
      durationTypes:
        data.durationTypes === undefined
          ? undefined
          : data.durationTypes.value.toString(),
      loanAmount: Number(data.loanAmount),
      loanSymbols:
        data.loanSymbols === undefined
          ? undefined
          : data.loanSymbols.value.toString(),
      status: 3,
      size: 5,
      page: 0,
    };
    history.push({
      pathname: '/pawn/offer',
      search: queryString.stringify(newObj),
    });
  };

  const { t } = useTranslation();
  return (
    <>
      <TabborrowSub tabs>
        <span
          className={classnames({
            activeSub: activeTabBorRowCryptocurrency === '1',
          })}
          onClick={() => {
            toggleCryptocurrency('1');
          }}
        >
          {t('home.tabs.borrow.cryp.active')}
        </span>
        <span
          className={classnames({
            activeSub: activeTabBorRowCryptocurrency === '2',
          })}
          onClick={() => {
            toggleCryptocurrency('2');
          }}
        >
          NFT
        </span>
      </TabborrowSub>
      <TabContent activeTab={activeTabBorRowCryptocurrency}>
        <TabborrowCryptocurrency tabId="1">
          <form onSubmit={handleSubmit(onSumitFormCryptocurrency)}>
            <p> {t('home.tabs.borrow.cryp.coll')}</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  type="number"
                  // name="Collateral"
                  placeholder={t('home.tabs.borrow.cryp.enterAmount')}
                  className={errors.collateralAmount ? 'activeBrinput' : ''}
                  {...register('collateralAmount', { required: true })}
                  autoComplete="off"
                ></input>
                {errors.collateralAmount && (
                  <span className="warning__input">
                    {t('home.tabs.invalidAmount')}
                  </span>
                )}
                <ButtonComponent
                  className="btn_max"
                  width="64px"
                  height="34px"
                  borderRadius="172px"
                  type="button"
                >
                  {t('home.tabs.borrow.cryp.max')}
                </ButtonComponent>
              </WrapperInput>
              <WrapperInputSelect>
                <Controller
                  control={control}
                  name="collateralSymbols"
                  // rules={{
                  //   required: true,
                  // }}
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectAll
                      tab="bor"
                      value={value}
                      onChange={onChange}
                      default={false}
                      heightOption="255px"
                      placeholder="All"
                      isMuli={false}
                      option={'1'}
                      error={Boolean(errors.collateralSymbols)}
                    ></SelectAll>
                  )}
                />
                {errors.collateralSymbols && (
                  <span className="warning__input">
                    {t('home.banner.cryp.invalidAmount')}
                  </span>
                )}
              </WrapperInputSelect>
            </div>
            <p>{t('home.tabs.borrow.cryp.or')}</p>
            <div>
              <WrapperInput
                width="225px"
                height="36px"
                colorFont="#DBA83D"
                colorBr="#DBA83D"
                className="input__Choose"
              >
                <input
                  type="text"
                  disabled
                  placeholder={t('home.tabs.borrow.cryp.choose')}
                  // defaultValue="Choose Existing collateral"
                  className="input__Disabled"
                ></input>
              </WrapperInput>
            </div>
            <p> {t('home.tabs.borrow.cryp.duration')}</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  // name="Duration"
                  type="number"
                  placeholder={t('home.tabs.borrow.cryp.duration')}
                  autoComplete="off"
                  className={errors.durationQty ? 'activeBrinput' : ''}
                  {...register('durationQty', { required: true })}
                ></input>
                {errors.durationQty && (
                  <span className="warning__input">
                    {t('home.tabs.invalidDuration')}
                  </span>
                )}
              </WrapperInput>
              <WrapperInputSelect>
                <Controller
                  control={control}
                  name="durationTypes"
                  // rules={{
                  //   required: true,
                  // }}
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectAll
                      tab="bor"
                      value={value}
                      onChange={onChange}
                      default={false}
                      heightOption="150px"
                      placeholder="All"
                      isMuli={false}
                      option={'3'}
                      error={Boolean(errors.durationTypes)}
                    ></SelectAll>
                  )}
                />
                {errors.durationTypes && (
                  <span className="warning__input">
                    {t('home.tabs.invalidDuration')}
                  </span>
                )}
              </WrapperInputSelect>
            </div>
            <p> {t('home.tabs.borrow.cryp.loanAmount')}</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  // name="Loanamount"
                  type="number"
                  autoComplete="off"
                  placeholder={t('home.tabs.borrow.cryp.enterAmount')}
                  className={errors.loanAmount ? 'activeBrinput' : ''}
                  {...register('loanAmount', { required: true })}
                ></input>
                {errors.loanAmount && (
                  <span className="warning__input">
                    {t('home.tabs.invalidAmount')}
                  </span>
                )}
              </WrapperInput>
              <WrapperInputSelect>
                <Controller
                  control={control}
                  name="loanSymbols"
                  // rules={{
                  //   required: true,
                  // }}
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectAll
                      tab="bor"
                      value={value}
                      onChange={onChange}
                      default={true}
                      heightOption="150px"
                      placeholder="All"
                      isMuli={false}
                      option={'2'}
                      error={Boolean(errors.loanSymbols)}
                    ></SelectAll>
                  )}
                />
                {errors.loanSymbols && (
                  <span className="warning__input">
                    {t('home.tabs.invalidAmount')}
                  </span>
                )}
              </WrapperInputSelect>
            </div>
            <TooltipTabs>
              {t('home.tabs.borrow.cryp.recommend')} <RiInformationFill />
              <span>{t('home.tabs.borrow.cryp.recommendContent')}</span>
            </TooltipTabs>
            <ButtonComponent
              borderRadius="172px"
              width="530px"
              height="54px"
              fontSize="16px"
              color="#282C37"
              className="btn__submit"
            >
              <img src={BiSearch} alt="" style={{ marginRight: '16px' }} />
              {t('home.tabs.search')}
            </ButtonComponent>
          </form>
        </TabborrowCryptocurrency>
        <TabborrowNFT tabId="2">
          <div className="img">
            <img src={NFT} alt="" />
          </div>
          <button>{t('home.tabs.borrow.nft.find')}</button>
          <p>
            {t('home.tabs.borrow.nft.dont')}
            <Link to="/login"> {t('home.tabs.borrow.nft.new')}</Link>
          </p>
        </TabborrowNFT>
      </TabContent>
    </>
  );
}
