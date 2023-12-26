// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AnimeDetails from "./pages/AnimeDetails/AnimeDetails.jsx";
import AnimeList from "./components/Content.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime-details" element={<AnimeDetails />} />
    </Routes>
  );
}

export default App;
