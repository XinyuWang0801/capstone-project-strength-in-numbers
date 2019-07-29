import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDQWD7JcZ4J_jhh2Kz1RX0I0t51i9IC8CU',
//   authDomain: 'stayin-1ceb4.firebaseapp.com',
//   databaseURL: 'https://stayin-1ceb4.firebaseio.com/',
//   projectId: 'stayin-1ceb4',
//   storageBucket: 'stayin-1ceb4.appspot.com',
//   messagingSenderId: '847200164193',
//   appId: '1:847200164193:web:a0c63168afc3397a',
// };

// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

// export default database;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3P36XVBUtxQMvjOwujWMJnMAWhhjnxsM',
  authDomain: 'stayin-v2.firebaseapp.com',
  databaseURL: 'https://stayin-v2.firebaseio.com',
  projectId: 'stayin-v2',
  storageBucket: 'stayin-v2.appspot.com',
  messagingSenderId: '946964578132',
  appId: '1:946964578132:web:7337e3ac0ba9d099',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();

export {
  database as default,
};
