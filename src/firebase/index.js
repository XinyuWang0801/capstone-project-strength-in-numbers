import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB3P36XVBUtxQMvjOwujWMJnMAWhhjnxsM',
  authDomain: 'stayin-v2.firebaseapp.com',
  databaseURL: 'https://stayin-v2.firebaseio.com',
  projectId: 'stayin-v2',
  storageBucket: 'stayin-v2.appspot.com',
  messagingSenderId: '946964578132',
  appId: '1:946964578132:web:7337e3ac0ba9d099',
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
