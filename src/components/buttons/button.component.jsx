import React from 'react';
import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPE = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const renderButton = (buttonType = BUTTON_TYPE.base) => (
  {
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.google]: GoogleButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
  }[buttonType]
);

const Button = ({ children, buttonType, ...buttonProps}) => {
  const RenderedButton = renderButton(buttonType);
  return <RenderedButton {...buttonProps}>{children}</RenderedButton>
}

export default Button;