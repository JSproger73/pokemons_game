import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjgpF2ZS1QNTbpBXuKauXIzbiqNY5QOZ4",
  authDomain: "pokemon-game-f90ee.firebaseapp.com",
  databaseURL: "https://pokemon-game-f90ee-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-f90ee",
  storageBucket: "pokemon-game-f90ee.appspot.com",
  messagingSenderId: "637726800851",
  appId: "1:637726800851:web:54e6e72cd4fc2a95efcd26",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
