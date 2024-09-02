
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ53ktHCFGnPSNLDHAWlkRzZUQUQqhoBE",
  authDomain: "portfolio-v2-20f7c.firebaseapp.com",
  projectId: "portfolio-v2-20f7c",
  storageBucket: "portfolio-v2-20f7c.appspot.com",
  messagingSenderId: "173183352609",
  appId: "1:173183352609:web:994bf3cdce4df7968c8860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);