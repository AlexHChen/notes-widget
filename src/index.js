import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAX5kxQorzVSRPjmYjJXF2rjfkKYlvahDk",
  authDomain: "newtabproject-63546.firebaseapp.com",
  projectId: "newtabproject-63546",
  storageBucket: "newtabproject-63546.appspot.com",
  messagingSenderId: "286756192420",
  appId: "1:286756192420:web:98446f78da53c196c52631"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();