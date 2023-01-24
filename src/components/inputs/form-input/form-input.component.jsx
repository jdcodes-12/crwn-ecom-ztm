import React from 'react';
import {
  FormLabel,
  Input,
  FormControlsGroup,
} from './form-input.styles';

const FormInput = ({ label, htmlFor, inputOptions }) => {
  return (
    <FormControlsGroup>
      <Input {...inputOptions} />
     {
      label && (
        <FormLabel
          htmlFor={htmlFor}
          shrink={ inputOptions.value.length ? 'shrink' : ''}
        >
          {label}
        </FormLabel>
      )
     }
    </FormControlsGroup>
  );
}

export default FormInput;