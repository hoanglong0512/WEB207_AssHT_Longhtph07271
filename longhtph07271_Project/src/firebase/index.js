import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAXFhTlCMo6MZemcP43OJttFZFLgwwaOw4",
    authDomain: "longhtph07271-project.firebaseapp.com",
    databaseURL: "https://longhtph07271-project.firebaseio.com",
    projectId: "longhtph07271-project",
    storageBucket: "longhtph07271-project.appspot.com",
    messagingSenderId: "412341203413",
    appId: "1:412341203413:web:976f5b6ebfa43f529e4d5c",
    measurementId: "G-4R647SBPQM"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase