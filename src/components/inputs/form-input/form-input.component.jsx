import React from 'react';

const FormInput = ({ label, htmlFor, ...inputProps}) => {  
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input {...inputProps} />
    </div>
  );
}

export default FormInput;