import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDorWSVMcbQBu6rABfI6NHWR7q7lJ3QsM8",
  authDomain: "shop-f7de5.firebaseapp.com",
  projectId: "shop-f7de5",
  storageBucket: "shop-f7de5.appspot.com",
  messagingSenderId: "981101758208",
  appId: "1:981101758208:web:4b23f9ff627ea1fd7155e5",
  measurementId: "G-KHQ0E7VX9T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
