import React from 'react';
import type { FieldProps } from 'redux-form';

const Field = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}: FieldProps) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input {...input} id={input.name} placeholder={placeholder} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
export default Field;
