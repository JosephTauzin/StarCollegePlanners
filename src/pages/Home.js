// src/Home.js
import React from 'react';
import './css/Home.css';
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
            <img style={{width:'9vw', height:'20vh', position:'absolute', marginLeft:'-30vw', marginTop:'-1vh'}} src={require('./assets/LogoWithGT.png')} alt="Game Theory College Planners" />
          </div>
          <ul className="navbar-menu">
            <li><Link to="/" className={window.location.pathname === '/' ? 'active' : 'not_active'}>Home</Link></li>
               
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
          <Link to="/signup" className="btn btn-secondary btn-lg animate-bounce btn-lg" style={{width:'30vw'}}>
            Sign Up for a Webinar
          </Link>
 
        </div>
       
      </header>

      {/* Media Logos Section - Temporarily Commented Out
      <div>
          <div style={{
            padding: '20px 0',
            marginTop: '5vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5vw'
          }}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/185px-NewYorkTimes.svg.png' alt="New York Times" style={{
              display:'flex',
              height:'3vh'
            }} />
            <img src='https://upload.wikimedia.org/wikipedia/commons/e/ed/U.S._News_%26_World_Report_logo.png' alt="US News" style={{
              display:'flex',
              height:'3vh'
            }} />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Yahoo%21_Finance_logo_2021.png/800px-Yahoo%21_Finance_logo_2021.png' alt="Yahoo Finance" style={{
              display:'flex',
              height:'3vh'
            }} />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/EpochTimes.svg/200px-EpochTimes.svg.png' alt="Epoch Times" style={{
              display:'flex',
              height:'3vh'
            }} />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/512px-Forbes_logo.svg.png' alt="Forbes Logo" style={{
              display:'flex',
              height:'3vh'
            }} />
          </div>
        </div>
      */}
      {/* Case Studies */}
      <section className="case-studies">
        <div className="container">
          <h1 className="section-title" style={{ color: 'black' }}>Success Stories</h1>
          <p className="section-subtitle">Learn how we've helped families cut down on college costs.</p>

          {/* Case Studies Grid */}
          <div className="case-studies-grid">
            {/* Case Study #1 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Johns_Hopkins_University%27s_Academic_Seal.svg/130px-Johns_Hopkins_University%27s_Academic_Seal.svg.png"
                  alt="Johns Hopkins University Logo"
                />
              </div>
              <h3>$270,000 Saved Over 4 Years</h3>
              <p>
                Daniel managed to get 4 years of education for less than the cost of 1 year at Johns Hopkins University.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $85,000<br />
                <strong>Scholarship Package:</strong> $67,000/year<br />
                <strong>Revised Cost of Attendance:</strong> $18,000
              </p>
            </div>

            {/* Case Study #2 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Replace with actual Wesleyan College logo if desired */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Wesleyan_College_seal.png/150px-Wesleyan_College_seal.png"
                  alt="Wesleyan College Logo"
                />
              </div>
              <h3>$95,000 Saved Over 4 Years</h3>
              <p>
                Sheridan reduced her 4-year college cost to nearly the price of 1 year at Wesleyan College.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $35,000<br />
                <strong>Scholarship Package:</strong> $24,000/year<br />
                <strong>Revised Cost of Attendance:</strong> $11,000
              </p>
            </div>

            {/* Case Study #3 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Replace with actual U of Arkansas Pine Bluff logo if desired */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/University_of_Arkansas_at_Pine_Bluff_Legacy_Seal.svg/150px-University_of_Arkansas_at_Pine_Bluff_Legacy_Seal.svg.png"
                  alt="University of Arkansas Pine Bluff Logo"
                />
              </div>
              <h3>$100,000 Saved Over 4 Years</h3>
              <p>
                Christopher managed to attend 4 years of college at no cost at the University of Arkansas at Pine Bluff.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $25,000<br />
                <strong>Scholarship Package:</strong> $25,000/year<br />
                <strong>Revised Cost of Attendance:</strong> $0
              </p>
            </div>

            {/* Case Study #4 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Replace with actual University of Alabama logo if desired */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Alabama_%28logo%29.png/800px-University_of_Alabama_%28logo%29.png"
                  alt="University of Alabama Logo"
                />
              </div>
              <h3>$95,000 Saved Over 4 Years</h3>
              <p>
                Anna secured 4 years of education for less than the cost of 2 years at the University of Alabama.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $40,000<br />
                <strong>Scholarship Package:</strong> $24,000/year<br />
                <strong>Revised Cost of Attendance:</strong> $16,000
              </p>
            </div>

            {/* Case Study #5 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Replace with actual Georgia Tech logo if desired */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/150px-Georgia_Tech_seal.svg.png"
                  alt="Georgia Tech Logo"
                />
              </div>
              <h3>$114,000 Saved Over 4 Years</h3>
              <p>
                Emily attended 4 years of college at Georgia Tech for less than zero cost, plus received a stipend and a new laptop.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $28,000<br />
                <strong>Scholarship Package:</strong> $28,000/year<br />
                <strong>Additional Stipend:</strong> $500/month + $1,700 laptop<br />
                <strong>Revised Cost of Attendance:</strong> -$6,000
              </p>
            </div>

            {/* Case Study #6 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Replace with actual Oglethorpe University logo if desired */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Olgethorpe_University_seal.jpeg/220px-Olgethorpe_University_seal.jpeg"
                  alt="Oglethorpe University Logo"
                />
              </div>
              <h3>$140,000 Saved Over 4 Years</h3>
              <p>
                Cameron managed to get 4 years of education for less than the cost of 2 years at Oglethorpe University.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $55,000<br />
                <strong>Scholarship Package:</strong> $35,000/year<br />
                <strong>Revised Cost of Attendance:</strong> $20,000
              </p>
            </div>

            {/* Case Study #7 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Replace with actual Stetson University logo if desired */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Stetson_Univ_Seal.svg/150px-Stetson_Univ_Seal.svg.png"
                  alt="Stetson University Logo"
                />
              </div>
              <h3>$155,000 Saved Over 4 Years</h3>
              <p>
                Samantha reduced her 4-year college cost to less than the price of 2 years at Stetson University.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $64,000<br />
                <strong>Scholarship Package:</strong> $39,000/year<br />
                <strong>Revised Cost of Attendance:</strong> $25,000
              </p>
            </div>

            {/* Case Study #8 */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Replace with actual USC logo if desired */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_Southern_California_%28USC%29_seal.svg/300px-University_of_Southern_California_%28USC%29_seal.svg.png"
                  alt="USC Logo"
                />
              </div>
              <h3>$260,000 Saved Over 4 Years</h3>
              <p>
                Maria managed to get 4 years of education for less than the cost of 1 year at the University of Southern California.
              </p>
              <p>
                <strong>Initial Cost of Attendance:</strong> $80,000<br />
                <strong>Scholarship & Work Study Package:</strong> $68,000/year<br />
                <strong>Revised Cost of Attendance:</strong> $12,000
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta">
            <Link to="/signup" className="btn btn-primary btn-lg" style={{ width: '30vw' }}>
              Get Your Price Estimate
            </Link>
          </div>
        </div>
      </section>


      {/* About Secti
      on */}
      <section className="about">
        <div className="container">
          <h1 style={{color:'black', marginBottom:'5vh'}}>Worried About College Costs?</h1>
          <p>
            Every student deserves the <b>best</b> education without the burden of overwhelming debt. We help you find the right colleges that not only admit your student but also offer substantial financial aid.
          </p>
          <p>
            Our proven strategies have helped over 30,000 families save an average of <b>$84,000</b> on college education.
          </p>
          <Link to="/signup" className="btn btn-secondary btn-lg" style={{width:'30vw'}}>Learn How We Can Help</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>©2024 Star College Planners, Inc. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-use">Terms of Use</Link>
          </p>
          <p>We are a national service provider based in Dallas.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
