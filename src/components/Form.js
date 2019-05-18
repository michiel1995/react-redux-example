import React from 'react';
import { Field } from 'redux-form';
import CustomField from './Field';

export type FormTemplateProps = {
  renderField: (key: string) => React.node,
};

type FormProps = {
  onSubmit: void,
  isLoading: Boolean,
  globalConfig?: Object<{ submitText?: String }>,
  fields: Object,
  template: (config: FormTemplateProps) => React.Node,
};

const Form = ({
  onSubmit, globalConfig, fields, template, isLoading,
}: FormProps) => {
  console.log(isLoading);
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
      <div className="mb-2">{template({ renderField })}</div>
      <button type="submit" className="btn btn-block btn-primary">
        {globalConfig.submitText || 'Submit'}
      </button>
    </form>
  );
};
Form.defaultProps = {
  globalConfig: {},
};
export default Form;
