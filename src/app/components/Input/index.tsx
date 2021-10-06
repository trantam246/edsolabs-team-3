import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function InputComponent(props: any) {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
      />
    </>
  );
}
