import React from 'react';
import { GrInput, WarperInput, WarperSelect, WarperselectIsmul } from './style';
import { Controller, useForm } from 'react-hook-form';
import { SelectAll } from 'app/components/select/select';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import BiSearch from '../../../../images/search.png';
export function TabLendForm() {
  const history = useHistory();
  const queryString = require('query-string');
  const [Collateral, setCollateral] = useState<any>('1');
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = data => {
    if (Collateral === '1') {
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
    setCollateral(e.target.value);
  };
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GrInput>
        <p> {t('home.tabs.lend.maxAmount')}</p>
        <div className="">
          <WarperInput border={Boolean(errors.loanAmount)}>
            <input
              type="text"
              placeholder={t('home.tabs.lend.enterAmount')}
              autoComplete="off"
              {...register('loanAmount', { required: true, pattern: /[0-9]/ })}
            />
            {errors.loanAmount && (
              <span className="errValiInput">
                {t('home.tabs.lend.maxRequired')}
              </span>
            )}
            <button className="btn__max-lend">{t('home.tabs.lend.max')}</button>
          </WarperInput>
          <WarperSelect>
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
          </WarperSelect>
        </div>
      </GrInput>
      <GrInput>
        <p> {t('home.tabs.lend.duration')}</p>
        <div className="">
          <WarperInput border={Boolean(errors.durationQty)}>
            <input
              type="text"
              autoComplete="off"
              placeholder={t('home.tabs.lend.enterDuration')}
              {...register('durationQty', { required: true, pattern: /[0-9]/ })}
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
          <WarperSelect>
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
          </WarperSelect>
        </div>
      </GrInput>
      <GrInput>
        <p>{t('home.tabs.lend.coll')}</p>
        <div className="radio">
          <div className="radio_input">
            <label className="radio__custom">
              <input
                type="radio"
                name="radio"
                value="1"
                defaultChecked
                onChange={onChangeRadio}
              />
              <span></span>
            </label>
            <span>{t('home.tabs.lend.crypto')}</span>
          </div>
          <div className="radio_input">
            <label className="radio__custom">
              <input
                type="radio"
                name="radio"
                value="2"
                onChange={onChangeRadio}
              />
              <span></span>
            </label>
            <span>NFT</span>
          </div>
        </div>
      </GrInput>
      {Collateral === '1' ? (
        <GrInput>
          <div className="">
            <WarperselectIsmul>
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
            </WarperselectIsmul>
          </div>
        </GrInput>
      ) : (
        ''
      )}
      <GrInput>
        <button>
          <img src={BiSearch} alt="" style={{ marginRight: '16px' }} />
          {t('home.tabs.search')}
        </button>
      </GrInput>
    </form>
  );
}
