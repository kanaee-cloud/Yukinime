// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Search from "./components/Search.jsx";
import AnimeDetails from "./pages/AnimeDetails/AnimeDetails.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime-details" element={<AnimeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
