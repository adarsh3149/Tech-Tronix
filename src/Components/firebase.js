import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARY6D6frvVcA1_5dmEm3twoZtsf00EzIU",
  authDomain: "techtronix-9bb05.firebaseapp.com",
  projectId: "techtronix-9bb05",
  storageBucket: "techtronix-9bb05.appspot.com",
  messagingSenderId: "1060794731832",
  appId: "1:1060794731832:web:648ecd8ab39249374d45cd",
  measurementId: "G-PNPJVPN6Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Add this line for authentication
const db = getDatabase(app);

export { app, auth, db as database };
