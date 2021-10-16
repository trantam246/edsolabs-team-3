import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import avatarMenu from '../../../../images/avatarMenu.png';
import { DropdownBox, DropdownContent, DropdownUl, DropdownLi } from './style';

export default function DropDownUser(props: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const { t } = useTranslation();
  return (
    <DropdownBox isOpen={dropdownOpen} toggle={toggle}>
      <DropdownContent tag="div" caret>
        <img src={avatarMenu} alt="" /> <span>{props?.name}</span>
      </DropdownContent>
      <DropdownUl>
        <DropdownLi>{t('navBar.changePass')}</DropdownLi>
        <DropdownLi onClick={props.handleLogout}>
          {t('navBar.logOut')}
        </DropdownLi>
      </DropdownUl>
    </DropdownBox>
  );
}
