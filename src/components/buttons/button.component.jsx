import React from 'react';
import './button.styles.scss';

const BUTTON_TYPE = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...buttonProps}) => {
  return (
    <button 
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;