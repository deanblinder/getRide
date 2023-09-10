import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyA42qVUPWjZOiFdEMEx_bp3R5kX8sgf_ks',
  authDomain: 'getride-e4c3e.firebaseapp.com',
  databaseURL: 'https://getride-e4c3e-default-rtdb.firebaseio.com',
  projectId: 'getride-e4c3e',
  storageBucket: 'getride-e4c3e.appspot.com',
  messagingSenderId: '461795107288',
  appId: '1:461795107288:web:2c53bc9c3af07d64f0d2ad',
  measurementId: 'G-DT8F5CLN2P',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const usersRef = collection(db, 'users');
export const ridesRef = collection(db, 'rides');
export const chatRef = collection(db, 'chat');

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
