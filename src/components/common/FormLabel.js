import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel as ChakraFormLabel } from '@chakra-ui/react';

FormLabel.propTypes = {
  htmlFor: PropTypes.string, labelText: PropTypes.string,
};

function FormLabel({ htmlFor, labelText }) {
  return (<ChakraFormLabel htmlFor={htmlFor}
                           fontWeight='bold'
                           fontSize='lg'
  >
    {labelText}
  </ChakraFormLabel>);
}

export default FormLabel;