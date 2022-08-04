import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginC } from "./containers/Login";
import { DashboardC } from "./containers/Dasboard";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { IncidentsC } from "./containers/Incidents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginC />}></Route>
      <Route path="incidents" element={<IncidentsC />}></Route>
      <Route path="createIncidents" element={<IncidentsC />}></Route>
      <Route path="/dashboard" element={<DashboardC />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
