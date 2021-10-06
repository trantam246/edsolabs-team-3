import React from 'react';

export default function ListSelect(props: any) {
  return (
    <>
      <div
        onClick={() => {
          props.handleIconPosition(props);
        }}
        className="d-flex justify-content-between p-3 align-items-center"
      >
        <span>
          <img src={props.icon} alt="" />
        </span>
        <span>{props.value}</span>
      </div>
    </>
  );
}
