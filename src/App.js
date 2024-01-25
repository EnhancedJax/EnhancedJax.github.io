import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavBar from "./components/navbar";
import Notes from "./pages/Notes";
import { AnimatePresence } from "framer-motion";
// // import './App.css';
import styles from "./index.css"

function App() {
  return (
    <>
      <NavBar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hkunotes" element={<Notes />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;