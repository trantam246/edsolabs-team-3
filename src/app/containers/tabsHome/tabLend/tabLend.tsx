import React from 'react';
import { GrInput, WarperInput } from './style';
import { useForm } from 'react-hook-form';
import { SelectAll } from 'app/components/select/select';
import { useState } from 'react';
export function TabLendForm() {
  const [dataSearch, setdataSearch] = useState<any>({ Collateral: '1' });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    setdataSearch({ ...dataSearch, dataSumMit: data });
  };
  const onChangeRadio = e => {
    if (dataSearch.Collateral === '1') {
      setdataSearch({
        ...dataSearch,
        CollateralList: null,
        Collateral: e.target.value,
      });
    } else {
      setdataSearch({ ...dataSearch, Collateral: e.target.value });
    }
  };
  const handleOnchange1 = (e: any) => {
    setdataSearch({ ...dataSearch, Maximumloanamount: e });
  };
  const handleOnchange2 = (e: any) => {
    setdataSearch({ ...dataSearch, CollateralList: e });
  };
  console.log('form lend', dataSearch);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GrInput>
        <p>Maximum loan amount</p>
        <div className="">
          <WarperInput
            width="417px"
            height="44px"
            border={Boolean(errors.Duration)}
          >
            <input
              type="text"
              placeholder="Enter amount"
              autoComplete="off"
              {...register('Maximum', { required: true })}
            />
            {errors.Maximum && (
              <span className="errValiInput">
                Maximum loan amount is required
              </span>
            )}
            <button className="btn__max-lend">Max</button>
          </WarperInput>
          <WarperInput width="111px" height="44px">
            <SelectAll
              onChanges={handleOnchange1}
              default={false}
              heightOption="255px"
              placeholder="All"
              isMuli={false}
              option={'2'}
            ></SelectAll>
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p>Duration</p>
        <div className="">
          <WarperInput
            width="417px"
            height="44px"
            border={Boolean(errors.Duration)}
          >
            <input
              type="text"
              autoComplete="off"
              placeholder="Duration"
              {...register('Duration', { required: true })}
            />
            {errors.Duration && (
              <>
                <span className="errValiInput">Invalid duration</span>
                <fieldset></fieldset>
              </>
            )}
          </WarperInput>
          <WarperInput width="111px" height="44px">
            <SelectAll
              onChanges={handleOnchange1}
              default={false}
              heightOption="255px"
              placeholder="All"
              isMuli={false}
              option={'1'}
            ></SelectAll>
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p>Collateral</p>
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
          <span>Crypto</span>
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
      {dataSearch.Collateral === '1' ? (
        <GrInput>
          <div className="">
            <WarperInput width="540px" height="" className="input__full">
              <SelectAll
                onChanges={handleOnchange2}
                default={false}
                heightOption="255px"
                placeholder="Currency"
                isMuli={true}
              ></SelectAll>
            </WarperInput>
          </div>
        </GrInput>
      ) : (
        ''
      )}
      <GrInput>
        <button>Search</button>
      </GrInput>
    </form>
  );
}
