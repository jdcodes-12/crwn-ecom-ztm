import React from 'react';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form.component';

const AuthenticationRoute = () => {
 
  return (
    <>
      <SignInForm />
      <SignUpForm />
    </>
  );
}

export default AuthenticationRoute;