import React, { useState, useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { createUserDocFromAuth } from '../../../utils/firebase/firestore/firestore.util';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../../utils/firebase/auth/auth.util';

import './sign-in-form.styles.scss';
import Button from '../../buttons/button.component';
import FormInput from '../../inputs/form-input/form-input.component';

const ERROR_TYPES = {
  'wrongPassword': 'auth/wrong-password',
  'userNotFound': 'auth/user-not-found',
};

// TODO: Handle errors for SignInForm
const renderError = (errorCode) => {
  switch(errorCode) {
    case ERROR_TYPES['userNotFound']: 
      alert('Oops. That user does not exist. Try creating an account');
      console.log(errorCode);
      break;
    
    case ERROR_TYPES['wrongPassword']:
      alert('Oops. The email or password was invalid. Try again.');
      console.log(errorCode);
      break;

    default:
      console.log(`Uncaught error: ${errorCode}`);
      break;
  }
}

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      await createUserDocFromAuth(user);
      setCurrentUser(user);
    } catch(error) {
      renderError(error);
    }
  };

  const handleSubmit  = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch(error) {
      renderError(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <section className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          htmlFor="email"
          inputOptions={{
            required: true,
            id: "email",
            type: "email",
            name: "email",
            value: email,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="Password"
          htmlFor="password"
          inputOptions={{
            required: true,
            id: "password",
            type: "password",
            name: "password",
            value: password,
            onChange: handleChange,
          }}
        />
       <div className="buttons-container">
          <Button type='submit'>
            Sign In
          </Button>
          <Button
              type='button'
              buttonType='google'
              onClick={signInWithGoogle}>
            Google Sign In
          </Button>
       </div>
      </form>
    </section>
  );
}

export default SignInForm;