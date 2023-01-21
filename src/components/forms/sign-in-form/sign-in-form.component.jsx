import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../../utils/firebase/auth/auth.util';
import { createUserDocFromAuth } from '../../../utils/firebase/firestore/firestore.util';

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
        <label htmlFor="displayName">Name</label>
        <input
          id="displayName"
          required
          type="text"
          name="displayName"
          placeholder="Biggie Smalls"
          value={displayName}
          onChange={handleChange}
          />
        
        <label htmlFor="email">Email</label>
        <input
          id="email"
          required
          type="email"
          name="email"
          placeholder="mynikesarecool@gmail.com"
          value={email}
          onChange={handleChange}
          />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          />

        <label htmlFor="password-confirmed">Confirm Password</label>
        <input
          id="password-confirmed"
          required
          type="password"
          name="confirmedPassword"
          value={confirmedPassword}
          onChange={handleChange}
          />

        <button type="sumbit">Sign Up</button>
      </form>
    </section>
  );
}

export default SignInForm;

