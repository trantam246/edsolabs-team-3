import styled from 'styled-components';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export const DropdownBox = styled(Dropdown)`
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
  right: -10px !important;
  left: auto !important;
`;

export const DropdownLi = styled(DropdownItem)`
  padding: 1.6rem 1rem;
  font-weight: 500;
  font-size: 2rem;
  color: #fff;
`;
