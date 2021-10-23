import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import increaseIcon from '../../../images/arrow_increase.svg';
import decreaseIcon from '../../../images/arrow_decrease.svg';
import { Row } from 'reactstrap';
import { SortNav, NavItem } from './style';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { navSortAction } from 'redux/slices/navSort';

export function NavSortSearch(props) {
  const { t } = useTranslation();
  const navList = [
    {
      value: t('search.borrowCrypto.sort.interest'),
      src: increaseIcon,
      cusSort: o => (o === increaseIcon ? 'interest,desc' : 'interest,asc'),
    },
    {
      value: t('search.borrowCrypto.sort.loan'),
      src: increaseIcon,
      cusSort: o =>
        o === increaseIcon ? 'loanToValue,desc' : 'loanToValue,asc',
    },
    {
      value: t('search.borrowCrypto.sort.duration'),
      src: increaseIcon,
      cusSort: o =>
        o === increaseIcon ? 'durationQty,desc' : 'durationQty,asc',
    },
    {
      value: t('search.borrowCrypto.sort.limit'),
      src: increaseIcon,
      cusSort: o => (o === increaseIcon ? 'limitation,desc' : 'limitation,asc'),
    },
    {
      value: t('search.borrowCrypto.sort.rating'),
      src: increaseIcon,
      cusSort: o => (o === increaseIcon ? 'reputation,desc' : 'reputation,asc'),
    },
  ];
  const [items, setItems] = useState(navList);
  const dispatch = useDispatch();
  const active = useSelector((state: any) => state.navSort.active);
  const handleClick = v => {
    setItems(
      items.map(o =>
        o.value === v.value
          ? { ...o, src: o.src === increaseIcon ? decreaseIcon : increaseIcon }
          : o,
      ),
    );
    dispatch(navSortAction.toggle(v.value));
    props.handleSort(v.cusSort(v.src));
  };
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <SortNav className="sort-nav">
        <Row className="sort-nav__list">
          {items.map((o, i) => (
            <NavItem
              key={i}
              active={active === o.value ? 1 : undefined}
              className="sort-nav__item"
              onClick={handleClick.bind(null, o)}
            >
              {o.value} <img src={o.src} alt="" />
            </NavItem>
          ))}
        </Row>
      </SortNav>
    </>
  );
}
