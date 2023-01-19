import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/auth/auth.utils';

const SignInRoute = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response);
  };

  return (
    <>
      <button onClick={logGoogleUser}>
        Google Sign In
      </button>
    </>
  );
}

export default SignInRoute;