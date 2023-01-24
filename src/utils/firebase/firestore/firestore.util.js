import { firebaseApp } from '../firebase.util';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  collection,
  query,
  getDocs,
} from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

export async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);

  objectsToAdd.forEach(async (object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
}

export async function getCollectionAndDocuments(collectionKey) {
  const collectionRef = collection(firestore, collectionKey);
  const queryToRunOnDocs = query(collectionRef);
 
  try {
    const querySnapshot = await getDocs(queryToRunOnDocs);
    const categoriesMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {});
    return categoriesMap;

  } catch(error) {
    console.log(error);
  }  
}

export async function createUserDocFromAuth(userAuth) {
  const userDocRef = doc(firestore, 'users', userAuth.uid);

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

function createUserData(userAuth, additionalInfo={}) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  return {
    displayName,
    email,
    createdAt,
    ...additionalInfo,
  };
}