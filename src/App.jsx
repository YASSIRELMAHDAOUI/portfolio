// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './components/home';
import Nav from './components/nav';
import Project from './components/project';
import Contact from './components/contact';
import Foter from './components/foter';
import Competence from "./components/competance";

function App() {
  return (
   <div className="bg-black min-h-screen text-white">
      <Router>
        <Nav />
        <div className="pt-16 pb-20"> {/* Pour espace entre nav et footer */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Competence" element={<Competence />} />
          </Routes>
        </div>
        <Foter />
      </Router>
    </div>
  );
}

export default App;
