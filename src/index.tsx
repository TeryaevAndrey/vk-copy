import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layout/Layout";
import Routes from "./components/Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import * as firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCO4aI_Qvv2YaMfxwFUzgdbh8bXuLO3peQ",
  authDomain: "vk-copy-57e5b.firebaseapp.com",
  projectId: "vk-copy-57e5b",
  storageBucket: "vk-copy-57e5b.appspot.com",
  messagingSenderId: "198112997326",
  appId: "1:198112997326:web:0af426aebb9069a1e2859f" 
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
