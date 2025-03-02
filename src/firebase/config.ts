import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvTyNlhV4Iw0cs8foxnnHYGfErtoY7lfo",
  authDomain: "relu-331c3.firebaseapp.com",
  projectId: "relu-331c3",
  storageBucket: "relu-331c3.firebasestorage.app",
  messagingSenderId: "792692987841",
  appId: "1:792692987841:web:86074e2f5daa504975c140",
  measurementId: "G-9KKN8S0K9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;