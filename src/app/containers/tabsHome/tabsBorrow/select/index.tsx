import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
const AAAAA = styled(Select)`
  .css-1pahdxg-control {
    box-shadow: none;
    border: 1px solid blue;
    outline: none;
    background-color: transparent;
    border-radius: 172px;
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  width: 200px;
  font-size: 16px;
  :focus {
    box-shadow: none;
    border: none;
    outline: none;
    background-color: none;
  }
  .css-1s2u09g-control {
    background-color: transparent;
    border-radius: 172px;
    border: 1px solid red;
    .css-1hb7zxy-IndicatorsContainer {
      .css-1okebmr-indicatorSeparator {
        display: none !important;
      }
      span {
        display: none;
      }
    }
    div {
      div {
        input {
          ::placeholder {
            color: red;
          }
        }
      }
    }
  }
  .css-4ljt47-MenuList {
    background-color: violet;
  }
`;
export default function SelectAA() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <div>
      <AAAAA options={options} />
    </div>
  );
}
// setTimeout(() =>{
//   debugger
// },5000)
