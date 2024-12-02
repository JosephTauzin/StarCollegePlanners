import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Home from './Home';
import Process from './pages/Process';
import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          
          <Route path="/" element={<SignUp />} />
        
        </Routes>

      </div>
    </Router>

  );
}

export default App;

/*
  <Route path="/signup" element={<SignUp />} />
          <Route path="/process" element={<Process />} />
          <Route path="/case-studies" element = {<CaseStudies />} />
*/