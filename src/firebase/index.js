import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDQWD7JcZ4J_jhh2Kz1RX0I0t51i9IC8CU',
  authDomain: 'stayin-1ceb4.firebaseapp.com',
  databaseURL: 'https://stayin-1ceb4.firebaseio.com/',
  projectId: 'stayin-1ceb4',
  storageBucket: 'stayin-1ceb4.appspot.com',
  messagingSenderId: '847200164193',
  appId: '1:847200164193:web:a0c63168afc3397a',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
