import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/navbar";
import Notes from "./pages/Notes";
// // import './App.css';
import styles from "./index.css"

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