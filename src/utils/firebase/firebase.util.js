import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyBqLbhlxwC9mcf7WfNQGlUA88Covwr6dbI",
  authDomain: "crwn-clothing-ecom-1972b.firebaseapp.com",
  projectId: "crwn-clothing-ecom-1972b",
  storageBucket: "crwn-clothing-ecom-1972b.appspot.com",
  messagingSenderId: "197621596649",
  appId: "1:197621596649:web:38bdb60d19bfe633d34b78"
};

export const firebaseApp = initializeApp(config);