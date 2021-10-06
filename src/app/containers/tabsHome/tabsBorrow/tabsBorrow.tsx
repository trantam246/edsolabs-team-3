import React from 'react';
import {
  TabborrowCryptocurrency,
  TabborrowSub,
  TooltipTabs,
  WrapperInput,
} from './style';
import classnames from 'classnames';
import { useState } from 'react';
import { Form, TabContent } from 'reactstrap';
import { InputComponent } from 'app/components/Input';
import { TabborrowNFT } from './style';
import { RiInformationFill } from '@react-icons/all-files/ri/RiInformationFill';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';
import { ButtonComponent } from 'app/components/Button/Input';
export default function TabsBorrow(props: any) {
  const [activeTabBorRowCryptocurrency, setActiveTabBorRowCryptocurrency] =
    useState('1');
  const toggleCryptocurrency = tab => {
    if (activeTabBorRowCryptocurrency !== tab)
      setActiveTabBorRowCryptocurrency(tab);
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
          <Form>
            <p>Collateral</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <InputComponent
                  name="Collateral"
                  type="number"
                  placeholder="Enter amount"
                  value=""
                ></InputComponent>
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <InputComponent
                  name="CollateralSelect"
                  type="text"
                  placeholder="Currency"
                  value=""
                ></InputComponent>
              </WrapperInput>
            </div>
            <p>Or</p>
            <div>
              <WrapperInput
                width="225px"
                height="36px"
                colorFont="#DBA83D"
                colorBr="#DBA83D"
              >
                <InputComponent
                  name="CollatChooseExistingcollateraleral"
                  type="text"
                  value="Choose Existing collateral"
                  placeholder=""
                ></InputComponent>
              </WrapperInput>
            </div>
            <p>Collateral</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <InputComponent
                  name="Duration"
                  type="number"
                  placeholder="Duration"
                ></InputComponent>
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <select name="Durationselect">
                  <option defaultValue="mon">Month</option>
                  <option defaultValue="wek">Weeks</option>
                </select>
              </WrapperInput>
            </div>
            <p>Loan amount</p>
            <div>
              <WrapperInput width="417px" height="44px" colorFont="" colorBr="">
                <InputComponent
                  name="Loanamount"
                  type="number"
                  placeholder="Enter amount"
                  value=""
                ></InputComponent>
              </WrapperInput>
              <WrapperInput width="111px" height="44px" colorFont="" colorBr="">
                <InputComponent
                  name="Loanamountselect"
                  type="text"
                  placeholder="Loan amount"
                  value=""
                ></InputComponent>
              </WrapperInput>
            </div>
            <TooltipTabs>
              Recommended amount <RiInformationFill />
              <span>
                To get a loan quickly, you should set the desired loan amount
                between 50 - 70% of the collateral value.
              </span>
            </TooltipTabs>
            <ButtonComponent width="100px" height="50px" fontSize="16px">
              <BiSearch />
              Search
            </ButtonComponent>
          </Form>
        </TabborrowCryptocurrency>
        <TabborrowNFT tabId="2">
          <hr />
          aaaaaaaaaaaaaaaaa
        </TabborrowNFT>
      </TabContent>
    </>
  );
}
