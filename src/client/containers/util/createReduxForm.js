import React from 'react';
import { reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';
import Form from '../../components/Form';

export default (uniqueKey, formConfig, reduxFormConfig) => {
  const FormContainer = ({ handleRegisterSubmit, onSubmit, ...props }: FormProps) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    };

    return (
      <Form
        {...props}
        onSubmit={handleSubmit}
        globalConfig={formConfig.global || {}}
        template={formConfig.template || {}}
        fields={formConfig.fields || {}}
      />
    );
  };

  return reduxForm({
    ...reduxFormConfig,
    form: uniqueKey,
  })(FormContainer);
};
