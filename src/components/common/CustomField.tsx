import React from 'react';
import ICustomField from '../../typings/ICostumField';

const CustomField = ({
  errorText,
  name,
  label = '',
  type = 'text',
  placeholder = '',
  value,
  setValue,
  ...rest
}: ICustomField) => {
  return (
    <div className="field">
      <label className="field-head">{label}</label>
      <input
        className="field-input"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
      {errorText && <p className="field-error">{errorText}</p>}
    </div>
  );
};

export default CustomField;
