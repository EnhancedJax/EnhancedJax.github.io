import React from 'react';
import { Routes, Route, useLocation, useRoutes } from "react-router-dom";
import Home from './pages/Home';
import Notes from "./pages/Notes";
import { AnimatePresence } from "framer-motion";
// // import './App.css';
import styles from "./index.css"


function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/hkunotes",
      element: <Notes />
    }
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;