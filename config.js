import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDIAbFinmpX54wOgr6Isy4NcWPoIbAJ4dU",
  authDomain: "e-ride-bc90a.firebaseapp.com",
  projectId: "e-ride-bc90a",
  storageBucket: "e-ride-bc90a.appspot.com",
  messagingSenderId: "695968544660",
  appId: "1:695968544660:web:c280d191ab56527571c181"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
