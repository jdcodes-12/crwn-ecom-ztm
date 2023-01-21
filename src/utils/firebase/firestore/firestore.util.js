import { firebaseApp } from '../firebase.util';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export async function createUserDocFromAuth(userAuth) {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  try {
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const newUserData = createUserData(userAuth)
      try {
        await setDoc(userDocRef, newUserData);
      } catch(error) {
        console.log(`setDoc() in CreateUserDocFromAuth(): ${error}`);
      }
    }

  } catch(error) {
    console.log(`createUserDocFromAuth(): ${error}`);
  }

  return userDocRef;
}

function createUserData(userAuth) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  return {
    displayName,
    email,
    createdAt,
  };
}