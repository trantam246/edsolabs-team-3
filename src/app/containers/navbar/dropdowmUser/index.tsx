import React, { useState } from 'react';
import avatarMenu from '../../../../images/avatarMenu.png';
import { DropdownBox, DropdownContent, DropdownUl, DropdownLi } from './style';

export default function DropDownUser(props: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <DropdownBox isOpen={dropdownOpen} toggle={toggle}>
      <DropdownContent tag="div" caret>
        <img src={avatarMenu} alt="" /> <span>{props?.name}</span>
      </DropdownContent>
      <DropdownUl>
        <DropdownLi>change pass</DropdownLi>
        <DropdownLi onClick={props.handleLogout}>Log out</DropdownLi>
      </DropdownUl>
    </DropdownBox>
  );
}
