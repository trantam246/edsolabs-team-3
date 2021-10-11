import React from 'react';
import {
  TabborrowCryptocurrency,
  TabborrowSub,
  TooltipTabs,
  WrapperInput,
} from './style';
import classnames from 'classnames';
import { useState } from 'react';
import { TabContent } from 'reactstrap';
import { TabborrowNFT } from './style';
import { RiInformationFill } from '@react-icons/all-files/ri/RiInformationFill';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';
import { ButtonComponent } from 'app/components/Button/Input';
import { useForm } from 'react-hook-form';
import NFT from '../../../../images/NFT.png';
import { Link } from 'react-router-dom';
import { SelectAll } from 'app/components/select/select';
export default function TabsBorrow(props: any) {
  //tabs
  const [activeTabBorRowCryptocurrency, setActiveTabBorRowCryptocurrency] =
    useState('1');
  const toggleCryptocurrency = tab => {
    if (activeTabBorRowCryptocurrency !== tab)
      setActiveTabBorRowCryptocurrency(tab);
  };
  //submit form 1
  const [dataSearchBorrowTbas1, setdataSearchBorrowTbas1] = useState<any>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSumitFormCryptocurrency = data => {
    setdataSearchBorrowTbas1({ ...dataSearchBorrowTbas1, data: data });
  };
  ///
  const handleOnchange1 = (e: any) => {
    setdataSearchBorrowTbas1({
      ...dataSearchBorrowTbas1,
      selectCollateral: e.value,
    });
  };
  const handleOnchange2 = (e: any) => {
    setdataSearchBorrowTbas1({
      ...dataSearchBorrowTbas1,
      LoanAmount: e.value,
    });
  };
  console.log(dataSearchBorrowTbas1);
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
          Cryptocurrency
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
            <p>Collateral</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  type="number"
                  // name="Collateral"
                  placeholder="Enter amount"
                  className={errors.Collateral ? 'activeBrinput' : ''}
                  {...register('Collateral', { required: true })}
                  autoComplete="off"
                ></input>
                {errors.Collateral && (
                  <span className="warning__input">Invalid amount</span>
                )}
                <ButtonComponent
                  className="btn_max"
                  width="64px"
                  height="34px"
                  borderRadius="172px"
                  type="button"
                >
                  Max
                </ButtonComponent>
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <SelectAll
                  onChanges={handleOnchange1}
                  default={false}
                  heightOption="255px"
                  placeholder="Currency"
                  isMuli={false}
                ></SelectAll>
              </WrapperInput>
            </div>
            <p>Or</p>
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
                  placeholder="Choose Existing collateral"
                  // defaultValue="Choose Existing collateral"
                  className="input__Disabled"
                ></input>
              </WrapperInput>
            </div>
            <p>Collateral</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  // name="Duration"
                  type="number"
                  placeholder="Duration"
                  autoComplete="off"
                  className={errors.Duration ? 'activeBrinput' : ''}
                  {...register('Duration', { required: true })}
                ></input>
                {errors.Duration && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <select
                  // name="Durationselect"
                  {...register('Durationselect')}
                >
                  <option defaultValue="mon">Month</option>
                  <option defaultValue="wek">Weeks</option>
                </select>
              </WrapperInput>
            </div>
            <p>Loan amount</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <input
                  // name="Loanamount"
                  type="number"
                  autoComplete="off"
                  placeholder="Enter amount"
                  className={errors.Loanamount ? 'activeBrinput' : ''}
                  {...register('Loanamount', { required: true })}
                ></input>
                {errors.Loanamount && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <SelectAll
                  onChanges={handleOnchange2}
                  default={true}
                  heightOption="150px"
                  placeholder="Currency"
                  isMuli={false}
                ></SelectAll>
              </WrapperInput>
            </div>
            <TooltipTabs>
              Recommended amount <RiInformationFill />
              <span>
                To get a loan quickly, you should set the desired loan amount
                between 50 - 70% of the collateral value.
              </span>
            </TooltipTabs>
            <ButtonComponent
              borderRadius="172px"
              width="530px"
              height="54px"
              fontSize="16px"
              color="#282C37"
              className="btn__submit"
            >
              <BiSearch />
              Search
            </ButtonComponent>
          </form>
        </TabborrowCryptocurrency>
        <TabborrowNFT tabId="2">
          <div className="img">
            <img src={NFT} alt="" />
          </div>
          <button>Find NFT lenders</button>
          <p>
            Don’t have hard NFT?
            <Link to="/login"> Create new</Link>
          </p>
        </TabborrowNFT>
      </TabContent>
    </>
  );
}
