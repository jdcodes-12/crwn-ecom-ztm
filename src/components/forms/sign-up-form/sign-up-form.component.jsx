import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../../utils/firebase/auth/auth.util';
import { createUserDocFromAuth } from '../../../utils/firebase/firestore/firestore.util';
import './sign-up-form.styles.scss';
import FormInput from '../../inputs/form-input/form-input.component';
import Button from '../../buttons/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;

  const isEmailTaken = (errorCode) => errorCode === 'auth/email-already-in-use'; 
  const resetFormFields = () => setFormFields(defaultFormFields);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert('Passwords do not match');
      return;
    }
   
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      alert('Created. Welcome to Crwn.');
      resetFormFields();
      
    } catch(error) {
      if (isEmailTaken(error.code)) {
        alert('Email already in use.');
        console.log(`handleSubmit(): ${error}`);
      } else {
        console.log(`handleSubmit(): ${error}`);
      }
    }
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <section className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          htmlFor="displayName"
          inputOptions={{
            required: true,
            id: "displayName",
            type: "text",
            name: "displayName",
            value: displayName,
            onChange: handleChange,
          }}
        />
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
        <FormInput
          label="Confirm Password"
          htmlFor="confirmed-password"
          inputOptions={{
            required: true,
            id: "confirmed-password",
            type: "password",
            name: "confirmedPassword",
            value: confirmedPassword,
            onChange: handleChange,
          }}
        />
        <Button buttonType='inverted' type='submit'>
          Sign Up
        </Button>
      </form>
    </section>
  );
}

export default SignUpForm;

