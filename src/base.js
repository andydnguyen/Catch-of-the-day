import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB6MeK63ymoplUK82c2_z6meAAuq7ShY28',
  authDomain: 'catch-of-the-day-andy-nguyen.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-andy-nguyen.firebaseio.com'
  // projectId: 'catch-of-the-day-andy-nguyen'
  // storageBucket: 'catch-of-the-day-andy-nguyen.appspot.com',
  // messagingSenderId: '1015047518433',
  // appId: '1:1015047518433:web:29af897c0619e8411d5fa0',
  // measurementId: 'G-PY6QMKLKWV'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
