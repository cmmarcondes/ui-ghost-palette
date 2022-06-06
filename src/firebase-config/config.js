// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClmyeDaz4nP27Sn8nORq1RDrS6_baeBR0",
  authDomain: "ghost-palette.firebaseapp.com",
  projectId: "ghost-palette",
  storageBucket: "ghost-palette.appspot.com",
  messagingSenderId: "774994189942",
  appId: "1:774994189942:web:ed7e637aef667af301c957",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export const auth = getAuth();

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = doc(firestore, `users/${uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const getAllPalettes = async () => {
  const palettesArray = [];
  const palettesRef = collection(firestore, "paletas");
  const palettesSnap = await getDocs(palettesRef);

  palettesSnap.forEach((doc) => {
    if (doc.exists()) {
      palettesArray.push(doc.data());
    }
  });

  return palettesArray;
};

export const persistPalette = async (palette, songName) => {
  const palettesRef = collection(firestore, "paletas");
  console.log(palette);
  await addDoc(palettesRef, { hex: palette, song: songName });
};
