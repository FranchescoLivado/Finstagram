import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCrIzzRhAmhlWRSQYjA-NovbAcKFAj93fg',
  authDomain: 'finsta-fa15a.firebaseapp.com',
  projectId: 'finsta-fa15a',
  storageBucket: 'finsta-fa15a.appspot.com',
  messagingSenderId: '3872126149',
  appId: '1:3872126149:web:e43deb5cc992ee7c1eacac'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
