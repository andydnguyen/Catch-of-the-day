import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB6MeK63ymoplUK82c2_z6meAAuq7ShY28',
  authDomain: 'catch-of-the-day-andy-nguyen.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-andy-nguyen.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
