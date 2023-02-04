import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDip5AIxhGsYzHb7IWbzzRfkfKlNXg1JRk",
  authDomain: "note-61f47.firebaseapp.com",
  projectId: "note-61f47",
  storageBucket: "note-61f47.appspot.com",
  messagingSenderId: "896903580579",
  appId: "1:896903580579:web:a8fba071cc207ac1876816",
  measurementId: "G-88071W8Q4Q",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
