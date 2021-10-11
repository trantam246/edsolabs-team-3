import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { iconCoin } from '../icon';
const SelectCollateral = styled(Select)<any>`
  width: 100%;
  height: 100%;
  font-size: 16px;
  .css-1pahdxg-control {
    box-shadow: none;
    border: 1px solid #dba83d;
    outline: none;
    background-color: transparent;
    border-radius: 172px;
  }
  .css-1pahdxg-control:hover {
    border-color: #dba83d;
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  input {
    color: #fff;
  }
  .css-qc6sy-singleValue {
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    color: #fff;
  }
  :focus {
    box-shadow: none;
    border: none;
    outline: none;
    background-color: none;
  }
  .css-4ljt47-MenuList {
    border-radius: 20px;
  }
  .css-26l3qy-menu {
    background-color: transparent;
    box-shadow: none;
  }
  .css-1s2u09g-control:hover {
    border: 1px solid #74767b;
  }
  .css-1s2u09g-control {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 172px;
    border: 1px solid #74767b;
    .css-1hb7zxy-IndicatorsContainer {
      .css-1okebmr-indicatorSeparator {
        display: none !important;
      }
      span {
        display: none;
      }
    }
  }
  .css-9gakcf-option {
    display: flex;
    justify-content: space-around;
    background-color: #2f3543;
    :hover {
      background-color: #565a6643;
    }
  }
  .css-1pahdxg-control {
    height: 100%;
  }
  .css-14dclt2-Input {
    cursor: text;
  }
  .css-1gtu0rj-indicatorContainer {
    padding: 0px;
  }
  .css-tlfecz-indicatorContainer {
    padding: 0px;
  }
  .css-1n7v3ny-option {
    display: flex;
    justify-content: space-around;
  }
  .css-yt9ioa-option {
    display: flex;
    justify-content: space-around;
  }
  .css-4ljt47-MenuList {
    background-color: #2f3543;
    //height: ${props => props.heightOption};
    overflow-y: auto !important;
    ::-webkit-scrollbar {
      width: 5px;
      background-color: #45484f;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #a2a3a7;
    }
  }
`;
export default function SelectCollateralComponent(props: any) {
  const options = iconCoin.map(e => ({
    value: e.value,
    label: (
      <>
        <img src={e.url} alt="" style={{ height: '20px', width: '20px' }} />
        <span>{e.value}</span>
      </>
    ),
  }));
  const handleOnchangesub = (e: any) => {
    props.onChanges(e);
  };
  const handleOnchangesub2 = (e: any) => {
    props.onChaneg2(e);
  };
  return (
    <>
      {props.default === false ? (
        <SelectCollateral
          heightOption={props.heightOption}
          options={options}
          onChange={handleOnchangesub}
          placeholder={props.placeholder}
        />
      ) : (
        <SelectCollateral
          defaultValue={options[0]}
          options={options}
          onChange={handleOnchangesub2}
          heightOption={props.heightOption}
        />
      )}
    </>
  );
}
// setTimeout(() =>{
//   debugger
// },5000)
