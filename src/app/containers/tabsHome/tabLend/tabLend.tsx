import React from 'react';
import { GrInput, WarperInput } from './style';
import { useForm } from 'react-hook-form';
export function TabLendForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GrInput>
        <p>Maximum loan amount</p>
        <div className="justify-content-between">
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
          </WarperInput>
          <WarperInput width="111px" height="44px">
            <input
              type="text"
              autoComplete="off"
              placeholder="Duration"
              {...register('MaximumSelect', { required: true })}
            />
            {errors.MaximumSelect && (
              <span className="errValiInput">Invalid currency</span>
            )}
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p>Duration</p>
        <div className="justify-content-between">
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
            <input
              type="text"
              autoComplete="off"
              placeholder="Duration"
              {...register('DurationSelect', { required: true })}
            />
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <p>Collateral</p>
        <div className="">
          <div className="radio">
            <input type="radio" name="radio" value="1" defaultChecked />
          </div>
          <span>Crypto</span>
          <div className="radio">
            <input type="radio" name="radio" value="2" />
          </div>
          <span>NFT</span>
        </div>
      </GrInput>
      <GrInput>
        <div className="">
          <WarperInput width="540px" height="44px" className="input__full">
            <input type="text" placeholder="Duration" />
          </WarperInput>
        </div>
      </GrInput>
      <GrInput>
        <button>Search</button>
      </GrInput>
    </form>
  );
}
