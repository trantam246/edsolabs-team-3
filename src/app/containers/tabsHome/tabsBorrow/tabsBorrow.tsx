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
import iconDcoi from '../../../../images/iconDcoi.png';
import { useForm } from 'react-hook-form';
import ListSelect from './listselect/listselect';
import NFT from '../../../../images/NFT.png';
import { Link } from 'react-router-dom';
export default function TabsBorrow(props: any) {
  //trang thai dong mo select
  const [collateralSelectStatus, setcollateralSelectStatus] = useState(false);
  const [LoanamountselectSatus, setLoanamountselectSatus] = useState(false);
  const handleOnBlur = () => {
    setTimeout(() => {
      setcollateralSelectStatus(false);
    }, 200);
  };
  //du lieu
  const collateralSelect = [
    {
      icon: iconDcoi,
      value: 'Duration',
    },
    {
      icon: iconDcoi,
      value: '1',
    },
    {
      icon: iconDcoi,
      value: '2',
    },
    {
      icon: iconDcoi,
      value: '3',
    },
    {
      icon: iconDcoi,
      value: '4',
    },
    {
      icon: iconDcoi,
      value: '5',
    },
    {
      icon: iconDcoi,
      value: '5',
    },
    {
      icon: iconDcoi,
      value: '5',
    },
    {
      icon: iconDcoi,
      value: '5',
    },
    {
      icon: iconDcoi,
      value: '5',
    },
  ];
  const Loanamountselect = [
    {
      icon: iconDcoi,
      value: 'Duration',
    },
    {
      icon: iconDcoi,
      value: '1',
    },
    {
      icon: iconDcoi,
      value: '2',
    },
    {
      icon: iconDcoi,
      value: '3',
    },
  ];
  //lay icon
  interface myIcon {
    icon: string;
    value: string;
  }
  interface myLo {
    Loanamountselect: {
      icon?: string;
      value?: string;
    };
    collateralSelect: {
      icon?: string;
      value?: string;
    };
  }
  const [iconTag, seticonTag] = useState<myLo>({
    Loanamountselect: {},
    collateralSelect: {},
  });
  const handleIconPositionLoanamountselect = (icon: myIcon) => {
    seticonTag({ ...iconTag, Loanamountselect: icon });
    setLoanamountselectSatus(false);
  };
  const handleIconPositionCollateralSelect = (icon: myIcon) => {
    seticonTag({ ...iconTag, collateralSelect: icon });
    setcollateralSelectStatus(false);
  };
  //tabs
  const [activeTabBorRowCryptocurrency, setActiveTabBorRowCryptocurrency] =
    useState('1');
  const toggleCryptocurrency = tab => {
    if (activeTabBorRowCryptocurrency !== tab)
      setActiveTabBorRowCryptocurrency(tab);
  };
  //submit form 1
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSumitFormCryptocurrency = data => {
    console.log(data);
  };
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
                  {...register('Collateral', { required: true })}
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
                <input
                  onFocus={() => setcollateralSelectStatus(true)}
                  onBlur={handleOnBlur}
                  // name="CollateralSelect"
                  type="text"
                  placeholder={iconTag.collateralSelect.value ? '' : 'Currency'}
                  autoComplete="off"
                  // {...register('CollateralSelect', { required: true })}
                ></input>
                <span className="icon_coi">
                  <img src={iconTag.collateralSelect.icon} alt="" />
                </span>
                <span className="value_coi">
                  {iconTag.collateralSelect.value}
                </span>
                {collateralSelectStatus ? (
                  <div className="collateral__Select">
                    {collateralSelect.map((el, index) =>
                      collateralSelectStatus ? (
                        <ListSelect
                          handleIconPosition={
                            handleIconPositionCollateralSelect
                          }
                          icon={el.icon}
                          key={index}
                          value={el.value}
                        ></ListSelect>
                      ) : (
                        ''
                      ),
                    )}
                  </div>
                ) : (
                  ''
                )}
                {errors.CollateralSelect && (
                  <span className="warning__input">Invalid amount</span>
                )}
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
                  defaultValue="Choose Existing collateral"
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
                  placeholder="Enter amount"
                  {...register('Loanamount', { required: true })}
                ></input>
                {errors.Loanamount && (
                  <span className="warning__input">Invalid amount</span>
                )}
              </WrapperInput>
              <WrapperInput
                width="111px"
                height="44px"
                colorFont=""
                colorBr=""
                onFocus={() => setLoanamountselectSatus(true)}
              >
                <input
                  // name="Loanamountselect"
                  type="text"
                  placeholder={
                    iconTag.Loanamountselect.value ? '' : 'Loan amount'
                  }
                  autoComplete="off"
                  // {...register('Loanamountselect', { required: true })}
                ></input>
                <span className="icon_coi">
                  <img src={iconTag.Loanamountselect.icon} alt="" />
                </span>
                <span className="value_coi">
                  {iconTag.Loanamountselect.value}
                </span>
                {LoanamountselectSatus ? (
                  <div className="collateral__Select Loanamount__select">
                    {Loanamountselect.map((el, index) =>
                      Loanamountselect ? (
                        <ListSelect
                          icon={el.icon}
                          key={index}
                          value={el.value}
                          handleIconPosition={
                            handleIconPositionLoanamountselect
                          }
                        ></ListSelect>
                      ) : (
                        ''
                      ),
                    )}
                  </div>
                ) : (
                  ''
                )}
                {errors.Loanamountselect && (
                  <span className="warning__input">Invalid amount</span>
                )}
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
