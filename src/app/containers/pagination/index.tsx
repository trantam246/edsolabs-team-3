import ReactPaginate from 'react-paginate';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { BsChevronRight } from '@react-icons/all-files/bs/BsChevronRight';
import { BsChevronLeft } from '@react-icons/all-files/bs/BsChevronLeft';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { pawnShopAction } from 'redux/slices/pawnShopSlice';
import SearchBorrowCryApi from 'api/searchBorrowCryApi';

const Paginate = styled.div`
  .paginate {
    &__list {
      margin: 5.5rem 0 6.9rem 0;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        width: 3.2rem;
        height: 3.2rem;
        border: 0.1rem solid #d1d1d3;
        box-sizing: border-box;
        border-radius: 0.4rem;
        margin-right: 1.2rem;
        overflow: hidden;
        a,
        svg {
          font-style: normal;
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 2rem;
          text-align: center;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      }
      &:hover {
        /* background-color: #dba83d;
          border: none; */
        a {
          color: #ffffff !important;
        }
      }
    }
    &--disable {
      border: 0.1rem solid #74767b !important;
      svg {
        color: #74767b !important;
        font-size: 1.6rem;
      }
    }
    &--active {
      border: none !important;
      a {
        background-color: #dba83d;
        color: #ffffff !important;
      }
    }
  }
`;

export function Pagination() {
  const history = useHistory();
  const dispatch = useDispatch();
  const totalPages = useSelector(
    (state: any) => state.pawnShop.data.total_pages,
  );
  const changePage = ({ selected }) => {
    const queryString = require('query-string');
    const param = queryString.parse(history.location.search);
    history.push({
      pathname: '/pawn/offer',
      search: queryString.stringify({ ...param, page: selected }),
    });
    SearchBorrowCryApi.search({ ...param, page: selected })
      .then((res: any) => {
        dispatch(pawnShopAction.getPawnShop(res.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Paginate className="paginate">
      <ReactPaginate
        previousLabel={<BsChevronLeft />}
        nextLabel={<BsChevronRight />}
        pageCount={totalPages}
        onPageChange={changePage}
        initialPage={0}
        containerClassName={'paginate__list'}
        previousLinkClassName={'paginate__prev'}
        nextLinkClassName={'paginate__next'}
        disabledClassName={'paginate--disable'}
        activeClassName={'paginate--active'}
      />
    </Paginate>
  );
}
