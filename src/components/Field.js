import React from 'react';
import type { FieldProps } from 'redux-form';

import styles from './Field.module.scss';

const Field = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}: FieldProps) => (
  <div className={styles.formField}>
    <label htmlFor={input.name}>{label}</label>

    <input {...input} id={input.name} placeholder={placeholder} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);
export default Field;
