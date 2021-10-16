import React from 'react';
import { GrInput, WarperInput } from './style';
import { Controller, useForm } from 'react-hook-form';
import { SelectAll } from 'app/components/select/select';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
export function TabLendForm() {
  const history = useHistory();
  const queryString = require('query-string');
  const [Collateral, setCollateral] = useState<any>(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = data => {
    if (Collateral === true) {
      const newObj: any = {
        // durationQty: Number(data.durationQty),
        durationTypes:
          data.durationTypes === undefined
            ? undefined
            : data.durationTypes.value.toString(),
        // loanAmount: Number(data.loanAmount),
        loanSymbols:
          data.loanSymbols === undefined
            ? undefined
            : data.loanSymbols.value.toString(),
        size: 10,
        page: 0,
      };
      const newArr =
        data.collateralSymbols === undefined
          ? undefined
          : data.collateralSymbols.map(value => value.value);
      newObj.collateralSymbols =
        newArr === undefined ? undefined : newArr.toString();
      history.push({
        pathname: '/pawn/lender',
        search: queryString.stringify(newObj),
      });
    } else {
      const newObj = {
        //collateralSymbols: data.collateralSymbols,
        durationQty: Number(data.durationQty),
        durationTypes:
          data.durationTypes === undefined
            ? undefined
            : data.durationTypes.value.toString(),
        // loanAmount: Number(data.loanAmount),
        loanSymbols:
          data.loanSymbols === undefined
            ? undefined
            : data.loanSymbols.value.toString(),
        size: 10,
        page: 0,
      };
      history.push({
        pathname: '/pawn/lender/nft-result',
        search: queryString.stringify(newObj),
      });
    }
  };
  const onChangeRadio = e => {
    setCollateral(!Collateral);
  };
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GrInput>
        <p> {t('home.tabs.lend.maxAmount')}</p>
        <div className="">
          <WarperInput
            width="417px"
            height="44px"
            border={Boolean(errors.Duration)}
          >
            <input
              type="text"
              placeholder={t('home.tabs.lend.enterAmount')}
              autoComplete="off"
              {...register('loanAmount', { required: true })}
            />
            {errors.Maximum && (
              <span className="errValiInput">
                {t('home.tabs.lend.maxRequired')}
              </span>
            )}
            <button className="btn__max-lend">{t('home.tabs.lend.max')}</button>
          </WarperInput>
          <WarperInput width="111px" height="44px">
            <Controller
              control={control}
              name="loanSymbols"
              // rules={{
              //   required: true,
              // }}
              render={({ field: { onChange, value, ref } }) => (
                <SelectAll
                  tab="lend"
                  value={value}
                  onChange={onChange}
                  default={true}
                  heightOption="255px"
                  placeholder="All"
                  isMuli={false}
                  option={'2'}
                  error={Boolean(errors.loanSymbols)}
                ></SelectAll>
              )}
            />
            {errors.loanSymbols && (
              <span className="warning__input">Invalid amount</span>
            )}
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p> {t('home.tabs.lend.duration')}</p>
        <div className="">
          <WarperInput
            width="417px"
            height="44px"
            border={Boolean(errors.durationQty)}
          >
            <input
              type="text"
              autoComplete="off"
              placeholder={t('home.tabs.lend.enterDuration')}
              {...register('durationQty', { required: true })}
            />
            {errors.durationQty && (
              <>
                <span className="errValiInput">
                  {t('home.tabs.invalidDuration')}
                </span>
                <fieldset></fieldset>
              </>
            )}
          </WarperInput>
          <WarperInput width="111px" height="44px">
            <Controller
              control={control}
              name="durationTypes"
              // rules={{
              //   required: true,
              // }}
              render={({ field: { onChange, value, ref } }) => (
                <SelectAll
                  tab="lend"
                  value={value}
                  onChange={onChange}
                  default={true}
                  heightOption="255px"
                  placeholder="All"
                  isMuli={false}
                  option={'3'}
                  error={Boolean(errors.durationTypes)}
                ></SelectAll>
              )}
            />
            {errors.durationTypes && (
              <span className="warning__input">
                {t('home.tabs.lend.enterAmount')}
              </span>
            )}
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p>{t('home.tabs.lend.coll')}</p>
        <div className="">
          <div className="radio">
            <input
              type="radio"
              name="radio"
              value="1"
              defaultChecked
              onChange={onChangeRadio}
            />
          </div>
          <span>{t('home.tabs.lend.crypto')}</span>
          <div className="radio">
            <input
              type="radio"
              name="radio"
              value="2"
              onChange={onChangeRadio}
            />
          </div>
          <span>NFT</span>
        </div>
      </GrInput>
      {Collateral ? (
        <GrInput>
          <div className="">
            <WarperInput width="540px" height="" className="input__full">
              <Controller
                control={control}
                name="collateralSymbols"
                // rules={{
                //   required: true,
                // }}
                render={({ field: { onChange, value, ref } }) => (
                  <SelectAll
                    tab="lend"
                    value={value}
                    onChange={onChange}
                    default={true}
                    heightOption="255px"
                    placeholder="All"
                    isMuli={true}
                    option={'1'}
                    error={Boolean(errors.collateralSymbols)}
                  ></SelectAll>
                )}
              />
              {errors.collateralSymbols && (
                <span className="warning__input">
                  {t('home.tabs.lend.enterAmount')}
                </span>
              )}
            </WarperInput>
          </div>
        </GrInput>
      ) : (
        ''
      )}
      <GrInput>
        <button>{t('home.tabs.search')}</button>
      </GrInput>
    </form>
  );
}
