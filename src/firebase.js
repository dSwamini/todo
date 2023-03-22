import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBgFHijGo7wPqpm7Y-_Kd8yy-GAMqhAxmU",
  authDomain: "my-app-7c8a3.firebaseapp.com",
  projectId: "my-app-7c8a3",
  storageBucket: "my-app-7c8a3.appspot.com",
  messagingSenderId: "870361258401",
  appId: "1:870361258401:web:0c2f8c39740e4c917453e0"
};
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "", 
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
