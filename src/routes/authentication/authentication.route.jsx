import React from 'react';
import './authentication.styles.scss';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form.component';

const AuthenticationRoute = () => {
 
  return (
    <section className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </section>
  );
}

export default AuthenticationRoute;