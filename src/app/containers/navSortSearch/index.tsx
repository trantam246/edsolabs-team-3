import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import increaseIcon from '../../../images/arrow_increase.svg';
import decreaseIcon from '../../../images/arrow_decrease.svg';
import { Row } from 'reactstrap';
const SortNav = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  color: #ffffff;
  background: #232732;
  border-radius: 0.9rem;
  margin: 2.8rem 0 2rem 0;
  letter-spacing: 0.04rem;
  .sort-nav {
    &__list {
      height: 5rem;
      margin: 0;
    }
  }
  @media screen and (max-width: 1200px) {
    background-color: #171a23;
    .sort-nav {
      &__list {
        height: auto;
      }
      &__item {
        flex: none;
        width: auto;
        background: #232732;
        margin-right: 2.4rem;
        margin-bottom: 1.6rem;
        padding: 1rem;
        border-radius: 0.9rem;
        border-right: none;
        img {
          margin-left: 1rem;
        }
        &:nth-child(4) {
          order: 5;
        }
      }
    }
  }
`;

const NavItem: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  padding: 0 2rem;
  border-right: 0.1rem grey solid;
  ${({ active }: any) =>
    active &&
    `
    background-color: rgba(219, 168, 61, 0.1);
    border: 0.1rem solid #dba83d !important;`}
  &:last-child {
    border: none;
  }
  &:nth-child(even) {
    background: #282c37;
  }
`;

const navList = [
  {
    value: 'Interest rate',
    src: increaseIcon,
  },
  {
    value: 'Loan to value',
    src: increaseIcon,
  },
  {
    value: 'Duration',
    src: increaseIcon,
  },
  {
    value: 'Limitation',
    src: increaseIcon,
  },
  {
    value: 'Pawnshop rating',
    src: increaseIcon,
  },
];
export function NavSortSearch() {
  const [items, setItems] = useState(navList);
  const [active, setActive] = useState('');

  const handleClick = v => {
    setItems(
      items.map(o =>
        o.value === v
          ? { ...o, src: o.src === increaseIcon ? decreaseIcon : increaseIcon }
          : o,
      ),
    );
    setActive(v);
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
              onClick={handleClick.bind(null, o.value)}
            >
              {o.value} <img src={o.src} alt="" />
            </NavItem>
          ))}
        </Row>
      </SortNav>
    </>
  );
}
