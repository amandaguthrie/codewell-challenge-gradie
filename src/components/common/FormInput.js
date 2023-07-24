import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@chakra-ui/react';

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

function FormInput({ id, name, value, onChange, placeholder, type }) {
  const colorInputBorderPlaceholder = '#8A8A8A';
  return (<Input
    type={type}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    borderColor={colorInputBorderPlaceholder}
    paddingY='2rem'
    isRequired
    _placeholder={{
      color: { colorInputBorderPlaceholder }, opacity: 1,
    }}
    size='lg'
  />);
}

export default FormInput;