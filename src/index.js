import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAm3RtpAqXJFDmSQHkcikwYRmf6NYlEfUc",
  authDomain: "wisenote-74a25.firebaseapp.com",
  databaseURL: "https://wisenote-74a25.firebaseio.com",
  projectId: "wisenote-74a25",
  storageBucket: "wisenote-74a25.appspot.com",
  messagingSenderId: "563379665455",
  appId: "1:563379665455:web:922f21d655e8750c71e4da"
});

ReactDOM.render(<App />, document.getElementById("wisenote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
