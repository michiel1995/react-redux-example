import React from 'react';
import { Field } from 'redux-form';

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
      <div>
        <label htmlFor={key}>{config.label}</label>
        <Field
          name={key}
          component="input"
          type={config.type || 'text'}
          placeholder={config.placeholder}
        />
      </div>
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
