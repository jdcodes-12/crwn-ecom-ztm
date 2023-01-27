import React from 'react';
import {
  SpinnerOverlay,
  SpinnerContainer,
} from './spinner.styles';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  );
}

export default Spinner;