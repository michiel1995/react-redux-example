import React from 'react';
import { reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';
import Form from '../components/Form';
import registerFormConfig from '../config/forms/register';

const RegisterFormContainer = ({ handleSubmit }: FormProps) => (
  <Form
    onSubmit={handleSubmit}
    globalConfig={registerFormConfig.global}
    template={registerFormConfig.template}
    fields={registerFormConfig.fields}
  />
);

const reduxFormConfig = {
  form: 'auth.registerForm',
};

export default reduxForm(reduxFormConfig)(RegisterFormContainer);
