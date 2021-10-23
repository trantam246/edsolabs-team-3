import styled from 'styled-components';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export const DropdownBox = styled(Dropdown)`
  position: relative;
  display: inline-block;
  width: fit-content;
  margin-left: 20px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DropdownContent = styled(DropdownToggle)`
  font-weight: 500;
  font-size: 1.6rem;
  color: #fff;
  img {
    width: 31px;
    height: 31px;
    margin-right: 7px;
  }
`;

export const DropdownUl = styled(DropdownMenu)`
  border-radius: 10px;
  background-color: rgb(62, 65, 75);
  right: -55px;
  top: 10px !important;
  left: auto !important;
  contain: content;
  will-change: transform;
  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%),
    0 3px 14px 2px rgb(0 0 0 / 12%);
`;

export const DropdownLi = styled(DropdownItem)`
  padding: 1rem 1.5rem;
  margin-top: 5px;
  font-weight: 500;
  font-size: 2rem;
  color: #fff;
  border-bottom: 2px solid #232732;
  &:last-child {
    border-bottom: none;
  }
`;
