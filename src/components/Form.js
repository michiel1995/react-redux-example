import React from 'react';
import { Field } from 'redux-form';
import CustomField from './Field';

export type FormTemplateProps = {
  renderField: (key: string) => React.node,
};

type FormProps = {
  onSubmit: void,
  globalConfig: Object<{ submitText?: String }>,
  fields: Object,
  template: (config: FormTemplateProps) => React.Node,
};

const Form = ({
  onSubmit, globalConfig, fields, template,
}: FormProps) => {
  const renderField = (key) => {
    const config = fields[key];
    return (
      <Field
        label={config.label}
        name={key}
        component="input"
        component={CustomField}
        type={config.type || 'text'}
        placeholder={config.placeholder}
      />
    );
  };

  return (
    <form onSubmit={onSubmit}>
      {template({ renderField })}
      <button type="submit">{globalConfig.submitText || 'Submit'}</button>
    </form>
  );
};

export default Form;
