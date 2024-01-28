import React from 'react';
import { Routes, Route, useLocation, useRoutes } from "react-router-dom";
import HomePage from './pages/Home';
import StackPage from './pages/Stack';
import NotesPage from './pages/Notes';
import WorkPage from './pages/Work';
import AboutPage from './pages/About';
import { AnimatePresence } from "framer-motion";
// // import './App.css';
import styles from "./index.css"


function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/hkunotes",
      element: <NotesPage />
    },
    {
      path: "/stack",
      element: <StackPage />
    },
    {
      path: "/work",
      element: <WorkPage />
    },
    {
      path: "/about",
      element: <AboutPage />
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