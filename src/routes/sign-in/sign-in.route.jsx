import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignInRoute = () => {
  return (
    <>
      <button onClick={signInWithGooglePopup}>
        Google Sign In
      </button>
    </>
  );
}

export default SignInRoute;