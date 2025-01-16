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
            <img style={{width:'10vw', height:'20vh', position:'absolute', marginLeft:'-30vw', marginTop:'-1vh'}} src={require('./assets/LogoWithGT.png')} alt="Game Theory College Planners" />
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
          <Link to="/signup" className="btn btn-secondary btn-lg animate-bounce btn-lg" style={{width:'30vw'}}>
            Sign Up for a Webinar
          </Link>
 
        </div>
       
      </header>

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

        {/* Case Studies */}
        <section className="case-studies">
          <div className="container">
            <h1 className="section-title" style={{ color: 'black' }}>Success Stories</h1>
            <p className="section-subtitle">See how we've helped families save on college education.</p>

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
                <h3>$271,748 Saved Over 4 Years</h3>
                <p>
                  Daniel got 4 years of college for less than the price of 1 at Johns Hopkins University.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $86,009<br />
                  <strong>Gift Aid Package:</strong> $67,937/year<br />
                  <strong>New Cost of Attendance:</strong> $18,072
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
                <h3>$96,608 Saved Over 4 Years</h3>
                <p>
                  Sheridan got 4 years of college almost down to the price of 1 at Wesleyan College.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $35,555<br />
                  <strong>Gift Aid Package:</strong> $24,152/year<br />
                  <strong>New Cost of Attendance:</strong> $11,401
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
                <h3>$102,508 Saved Over 4 Years</h3>
                <p>
                  Christopher got 4 years of college down to zero cost at the University of Arkansas at Pine Bluff.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $25,627<br />
                  <strong>Gift Aid Package:</strong> $25,627/year<br />
                  <strong>New Cost of Attendance:</strong> $0
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
                <h3>$96,000 Saved Over 4 Years</h3>
                <p>
                  Anna got 4 years of college for less than the price of 2 years at the University of Alabama.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $40,160<br />
                  <strong>Gift Aid Package:</strong> $24,000/year<br />
                  <strong>New Cost of Attendance:</strong> $16,160
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
                <h3>$115,008 Saved Over 4 Years</h3>
                <p>
                  Emily got 4 years of college for less than zero cost at Georgia Tech, plus a stipend and a new laptop.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $28,772<br />
                  <strong>Gift Aid Package:</strong> $28,772/year<br />
                  <strong>Additional Stipend:</strong> $500/month + $1,700 laptop<br />
                  <strong>New Cost of Attendance:</strong> -$6,000
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
                <h3>$142,336 Saved Over 4 Years</h3>
                <p>
                  Cameron got 4 years of college for less than the price of 2 at Oglethorpe University.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $54,960<br />
                  <strong>Gift Aid Package:</strong> $35,584/year<br />
                  <strong>New Cost of Attendance:</strong> $19,376
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
                <h3>$156,000 Saved Over 4 Years</h3>
                <p>
                  Samantha got 4 years of college for less than the price of 2 at Stetson University.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $64,040<br />
                  <strong>Gift Aid Package:</strong> $39,000/year<br />
                  <strong>New Cost of Attendance:</strong> $25,040
                </p>
              </div>

              {/* Case Study #8 */}
              <div className="case-study-item animate-zoom-in">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {/* Replace with actual USC logo if desired */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/University_of_Southern_California_seal.svg/150px-University_of_Southern_California_seal.svg.png"
                    alt="USC Logo"
                  />
                </div>
                <h3>$262,208 Saved Over 4 Years</h3>
                <p>
                  Maria got 4 years of college for less than the price of 1 year at the University of Southern California.
                </p>
                <p>
                  <strong>Original Cost of Attendance:</strong> $81,052<br />
                  <strong>Gift Aid & Work Study Package:</strong> $68,052/year<br />
                  <strong>New Cost of Attendance:</strong> $13,000
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
