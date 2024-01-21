import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";
import './App.css';
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hkunotes" element={<Notes />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;