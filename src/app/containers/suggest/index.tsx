import * as React from 'react';
import styled from 'styled-components';

const UISuggest = styled.div`
  max-width: 101.1rem;
  /* max-height: 12.3rem; */
  border: 0.1rem solid #45484f;
  border-radius: 2rem;
  box-sizing: border-box;
  .suggest {
    display: flex;
    align-items: center;
    padding: 2.05rem 2.6rem;
    letter-spacing: 0.04rem;
    &__img {
      min-width: 12rem;
      margin-right: 4.1rem;
      & img {
        width: 100%;
        height: 8rem;
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
    @media screen and (max-width: 375px) {
      &__title {
        font-size: 1.8rem;
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
        {/* <Col className="col-3 col-md-3">
          <div className="suggest__img">
            <img src={props.src} alt="" />
          </div>
        </Col>
        <Col className="col-9 col-md-9">
          <div className="suggest__content">
            <p className="suggest__title">{props.title}</p>
          </div>
        </Col>
        <Col className="col-12 col-md-9">
          <div className="suggest__desc">{props.desc}</div>
        </Col> */}
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
