import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layout/Layout";
import Routes from "./components/Routes/Routes";
import { BrowserRouter } from "react-router-dom";

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
