// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB7KBqTg8OnLEOhivfkTpJxgvbrwcytiCA',
  authDomain: 'test-21884.firebaseapp.com',
  projectId: 'test-21884',
  storageBucket: 'test-21884.appspot.com',
  messagingSenderId: '1093865644997',
  appId: '1:1093865644997:web:dca501a472fedb6b8ba1ac',
  measurementId: 'G-98PPDGC3M3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/prefer-default-export
export const storage = getStorage(app);
export const db = getFirestore(app);
