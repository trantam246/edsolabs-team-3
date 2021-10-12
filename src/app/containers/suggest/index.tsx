import * as React from 'react';
import styled from 'styled-components';

const UISuggest = styled.div`
  padding: 2.05rem 2.6rem;
  max-width: 101.1rem;
  border: 0.1rem solid #45484f;
  border-radius: 2rem;
  box-sizing: border-box;
  .suggest {
    display: flex;
    align-items: center;
    &__img {
      /* min-width: 12rem; */
      width: 13%;
      margin-right: 4.1rem;
      & img {
        width: 100%;
        /* height: 8rem; */
        object-fit: cover;
      }
    }
    &__title {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 2.9rem;
      color: #dba83d;
    }
    &__desc {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2rem;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 767px) {
    .suggest {
      &__img {
        width: 30%;
      }
    }
  }
  @media screen and (max-width: 575px) {
    flex-direction: column;
    /* position: relative; */
    height: auto;
    padding: 1.2rem;
    margin-bottom: 2.4rem;
    .suggest {
      /* width: 100%; */
      flex-direction: column;
      display: flex;
      width: 100%;
      position: relative;
      &__content {
        /* height: 300px; */
      }
      &__img {
        width: 20%;
        /* height: 50%; */
        margin-bottom: 1.4rem;
        margin-right: auto;
      }
      &__content {
        width: 100%;
      }
      &__title {
        width: 70%;
        /* height: 60%; */
        font-size: 1.8rem;
        line-height: 2.2rem;
        position: absolute;
        bottom: -0.4rem;
        left: 26%;
        margin-bottom: 6rem;
      }
      &__desc {
        font-size: 1.4rem;
      }
    }
  }
`;
export interface ISuggest {
  src: string;
  title: string;
  desc: string;
}
export function Suggest(props: ISuggest) {
  return (
    <UISuggest>
      <div className="suggest">
        <div className="suggest__img">
          <img src={props.src} alt="" />
        </div>
        <div className="suggest__content">
          <p className="suggest__title">{props.title}</p>
          <div className="suggest__desc">{props.desc}</div>
        </div>
      </div>
    </UISuggest>
  );
}
