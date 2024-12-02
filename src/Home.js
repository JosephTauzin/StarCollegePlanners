// src/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
/*
            <Link to="/">
              <img src="https://via.placeholder.com/150x50?text=LOGO" alt="Game Theory College Planners" />
            </Link>
*/
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="flat-navbar" style={{marginBottom:'2vh', paddingTop:'2vh'}}>
        <div className="container-align">
          <div className="navbar-logo">
            <img style={{width:'8vw', height:'20vh', position:'absolute', marginLeft:'-30vw', marginTop:'-1vh'}} src={require('./assets/LogoWithGT.png')} alt="Game Theory College Planners" />
          </div>
          <ul className="navbar-menu">
            <li><Link to="/" className={window.location.pathname === '/' ? 'active' : 'not_active'}>Home</Link></li>
            <li><Link to="/process" className={window.location.pathname === '/process' ? 'active' : 'not_active'}>Process and Thesis</Link></li>
            <li><Link to="/case-studies" className={window.location.pathname === '/case-studies' ? 'active' : 'not_active'}>Case Studies</Link></li>
            <li><Link to="" className={window.location.pathname === '/online-portal' ? 'active' : 'not_active'}>Online Portal</Link></li>
            <li><Link to="/signup" className={`btn btn-primary navbar-btn ${window.location.pathname === '/signup' ? 'active' : 'not_active'}`}><b style={{color:'white'}}>Learn More</b></Link></li>
          </ul>
        </div>
      </nav>


      {/* Hero Section */}
      <header className="hero" >
        <div className="container" style={{width:'70vw', left:0,}}>
          <h1 className="hero-title animate-fade-in" style={{color:'black', fontSize:'3vw'}}>
            Unlock Your Student's Potential for the <b>Best</b> College at the <b>Lowest Price</b>
          </h1>
          <p className="hero-subtitle animate-fade-in-delay">
            Discover how to know which colleges will admit your student and how much they will award before you even apply.
          </p>
          <Link to="/signup" className="btn btn-secondary btn-lg animate-bounce" style={{width:'30vw'}}>
            Sign Up for a Webinar
          </Link>
 
        </div>
      </header>

      {/* Case Studies */}
      <section className="case-studies" >
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">See how we've helped families save on college education.</p>

          {/* Case Studies Grid */}
          <div className="case-studies-grid">
            {/* Case Study Item */}
            <div className="case-study-item animate-zoom-in">
              <img src="https://via.placeholder.com/200x100?text=University+Logo" alt="University Logo" />
              <h3>$271,748 Saved Over 4 Years</h3>
              <p>
                Daniel secured a 4-year college education for less than the price of one year at Johns Hopkins University.
              </p>
              <p><strong>New Cost of Attendance:</strong> $18,072</p>
            </div>

            {/* Additional Case Studies */}
            {/* Repeat similar blocks for other case studies with placeholder images and content */}
          </div>

          {/* Call to Action */}
          <div className="cta">
            <Link to="/signup" className="btn btn-primary btn-lg" style={{width:'30vw'}}>Get Your Price Estimate</Link>
          </div>
        </div>
      </section>

      {/* About Secti
      on */}
      <section className="about">
        <div className="container">
          <h2>Worried About College Costs?</h2>
          <p>
            Every student deserves the best education without the burden of overwhelming debt. We help you find the right colleges that not only admit your student but also offer substantial financial aid.
          </p>
          <p>
            Our proven strategies have helped over 30,000 families save an average of $84,000 on college education.
          </p>
          <Link to="/signup" className="btn btn-secondary" style={{width:'30vw'}}>Learn How We Can Help</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>©2024 Game Theory College Planners, Inc. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-use">Terms of Use</Link>
          </p>
          <p>We are a national service provider based in Atlanta.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
