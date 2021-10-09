import React from 'react';
import styled from 'styled-components/macro';
const TitlePersonal = styled.div`
  margin: 3rem 0 2rem 0;
  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 0.04rem;

    &__title {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.9rem;
      color: #ffffff;
    }
    &__link-view {
      font-size: 1.6rem;
      font-style: normal;
      color: #ffffff;
      font-weight: 500;
      line-height: 2rem;
      &:hover {
        color: #dba83d;
      }
    }
  }
`;
const Title = () => {
  return (
    <TitlePersonal>
      <div className="label">
        <p className="label__title">Personal Lending</p>
        <a className="label__link-view" href="/">
          View all
        </a>
      </div>
    </TitlePersonal>
  );
};

export default Title;
