import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../../utils/firebase/auth/auth.util';
import { createUserDocFromAuth } from '../../../utils/firebase/firestore/firestore.util';
import FormInput from '../../inputs/form-input/form-input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

const SignInForm = () => {

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
    <section>
      <h1>Sign in with your email & password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          htmlFor="displayName"
          inputOptions={{
            required: true,
            inputId: "displayName",
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
            inputId: "email",
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
            inputId: "password",
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
            inputId: "confirmed-password",
            type: "password",
            name: "confirmedPassword",
            value: confirmedPassword,
            onChange: handleChange,
          }}
        />
        <button type="sumbit">Sign Up</button>
      </form>
    </section>
  );
}

export default SignInForm;

