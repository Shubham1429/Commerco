import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDX3EfIKuvgIGZsekQF2n6P8X16SBlt2ng",
  authDomain: "amaclone-b1034.firebaseapp.com",
  databaseURL: "https://amaclone-b1034.firebaseio.com",
  projectId: "amaclone-b1034",
  storageBucket: "amaclone-b1034.appspot.com",
  messagingSenderId: "60406105326",
  appId: "1:60406105326:web:c48325e79402da77771fff",
  measurementId: "G-BB2Q1Y0G4Q"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};