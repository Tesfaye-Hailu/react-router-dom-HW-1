
import React from "react";
import { Routes, Route } from "react-router-dom";
import Currencies from "./Pages/Currencies";
import Main from "./Pages/Main";
import Price from "./Pages/Price";
import Nav from "./Components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}