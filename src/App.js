import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Logo from './components/Logo';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="not-found">
      <Link to="/" aria-label="Star College Planners by GameTheory, home"><Logo /></Link>
      <h1>Let’s get you back on track.</h1>
      <p>This page could not be found.</p>
      <Link className="btn btn-gold" to="/">Return to Star College Planners</Link>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
