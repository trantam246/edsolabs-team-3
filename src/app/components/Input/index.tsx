import * as React from 'react';

export function InputComponent(props: any) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      defaultValue={props.value}
      autoComplete="off"
    />
  );
}
