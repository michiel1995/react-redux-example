import React from 'react';
import { FormTemplateProps } from '../../components/Form';

export default {
  global: {
    submitText: 'Create Account',
  },
  fields: {
    password: {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter password',
    },
    email: {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter email',
    },
    passwordRepeat: {
      type: 'password',
      label: 'Password repeat',
      placeholder: 'Enter password',
    },
  },
  template: ({ renderField }: FormTemplateProps) => (
    <>
      {renderField('password')}
      {renderField('email')}
      {renderField('passwordRepeat')}
    </>
  ),
};
