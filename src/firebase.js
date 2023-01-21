import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_n6Jutiv-zGm6ECVrIPLgsyFBYLFFhk",
  authDomain: "cgp-pl-kc-roulette.firebaseapp.com",
  projectId: "cgp-pl-kc-roulette",
  storageBucket: "cgp-pl-kc-roulette.appspot.com",
  messagingSenderId: "917564040992",
  appId: "1:917564040992:web:d5f8cf54fc4079e0c95945",
  measurementId: "G-FGH2BVB9RB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;