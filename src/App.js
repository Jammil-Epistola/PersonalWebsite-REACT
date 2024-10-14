import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <div style={{padding:'0 20px'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Skills" element={<Skills />}/>
            <Route path="/Contact" element={<Contact />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
