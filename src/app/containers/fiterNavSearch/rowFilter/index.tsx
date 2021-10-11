import React from 'react';
import { ContentItem, RowFilter, TitleItem } from './style';
import ArrowUp from '../../../../images/ArrowUp.svg';
export function RowFilterComponent(props: any) {
  const onclick = key => {
    props.onclickStatusBlock(key);
  };
  return (
    <>
      <RowFilter>
        <TitleItem onClick={() => onclick(props.name)}>
          <div>{props.data.title}</div>
          <div>
            <img
              src={ArrowUp}
              alt=""
              style={{
                transform:
                  props.status === false ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </div>
        </TitleItem>
        <ContentItem style={{ display: props.status ? 'block' : 'none' }}>
          {props.data.data.map((item, index) => (
            <div key={index}>
              <div>
                <input type={item.type} name={props.name} />
              </div>
              <div>{item.content}</div>
            </div>
          ))}
        </ContentItem>
      </RowFilter>
    </>
  );
}
