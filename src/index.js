import "./resetstyle.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import firebase from "firebase/app";
import "firebase/database";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const firebaseConfig = {
  apiKey: "AIzaSyA039CBnh0-nrgUBFXg8pRdQ-0pr5sxUIk",
  authDomain: "book-catalog-2edb8.firebaseapp.com",
  databaseURL: "https://book-catalog-2edb8-default-rtdb.firebaseio.com",
  projectId: "book-catalog-2edb8",
  storageBucket: "book-catalog-2edb8.appspot.com",
  messagingSenderId: "900926281078",
  appId: "1:900926281078:web:5bddf847fcfad357999657",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router history={history}>
    <App history={history}></App>
  </Router>,
  document.querySelector("#root")
);
