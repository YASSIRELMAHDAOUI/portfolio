// App.jsx
import React from 'react';
import Home from './components/home';
import Nav from './components/nav';
import Project from './components/project';
import Contact from './components/contact';
import Foter from './components/foter';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />
      <Home />
      <Project />
      <Contact />
      <Foter/>
    </div>
  );
}

export default App;
