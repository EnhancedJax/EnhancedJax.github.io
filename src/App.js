import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hkunotes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;