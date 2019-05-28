import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBPk0ONmq9z2TohWYY17wIMgQtfuVgRLEU',
  authDomain: 'piano-sheets-ffc6b.firebaseapp.com',
  databaseURL: 'https://piano-sheets-ffc6b.firebaseio.com',
  projectId: 'piano-sheets-ffc6b',
  storageBucket: 'piano-sheets-ffc6b.appspot.com',
  messagingSenderId: '122854642414',
  appId: '1:122854642414:web:279fbb7386a0ed07'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true }); // a fb settings

export default firebase;
