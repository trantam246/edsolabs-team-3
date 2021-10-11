import ReactPaginate from 'react-paginate';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { BsChevronRight } from '@react-icons/all-files/bs/BsChevronRight';
import { BsChevronLeft } from '@react-icons/all-files/bs/BsChevronLeft';
import styled from 'styled-components';

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
  // const [users, setUsers] = useState(JsonData.slice(0, 50));
  // const [pageNumber, setPageNumber] = useState(0);
  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = users
  //   .slice(pagesVisited, pagesVisited + usersPerPage)
  //   .map(user => {
  //     return (
  //       <div className="user">
  //         <h3>{user.firstName}</h3>
  //         <h3>{user.lastName}</h3>
  //         <h3>{user.email}</h3>
  //       </div>
  //     );
  //   });

  // const pageCount = Math.ceil(users.length / usersPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <Paginate className="paginate">
      {/* {displayUsers} */}
      <ReactPaginate
        previousLabel={<BsChevronLeft />}
        nextLabel={<BsChevronRight />}
        // pageCount={pageCount}
        pageCount={4}
        // onPageChange={changePage}
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
