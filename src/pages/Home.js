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
      <section className="case-studies" >
        <div className="container">
          <h1 className="section-title" style={{color:'black'}}>Success Stories</h1>
          <p className="section-subtitle">See how we've helped families save on college education.</p>

          {/* Case Studies Grid */}
          <div className="case-studies-grid">
            {/* Case Study Item */}
            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Johns_Hopkins_University%27s_Academic_Seal.svg/130px-Johns_Hopkins_University%27s_Academic_Seal.svg.png" alt="University Logo" />
              </div>
              <h3>$271,748 Saved Over 4 Years</h3>
              <p>
                Daniel secured a 4-year college education for less than the price of one year at Johns Hopkins University.
              </p>
              <p><strong>New Cost of Attendance:</strong> $18,072</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/150px-Harvard_University_coat_of_arms.svg.png" alt="Harvard Logo" />
              </div>
              <h3>$198,000 Saved Over 4 Years</h3>
              <p>
                Sarah received a competitive financial aid package from Harvard, dramatically reducing her total cost of attendance.
              </p>
              <p><strong>New Cost of Attendance:</strong> $22,000</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/150px-Seal_of_Leland_Stanford_Junior_University.svg.png" alt="Stanford Logo" />
              </div>
              <h3>$245,000 Saved Over 4 Years</h3>
              <p>
                Michael leveraged multiple merit scholarships to attend Stanford at a fraction of the sticker price.
              </p>
              <p><strong>New Cost of Attendance:</strong> $23,000</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/300px-MIT_Seal.svg.png" alt="MIT Logo" />
              </div>
              <h3>$258,000 Saved Over 4 Years</h3>
              <p>
                Emma combined need-based aid and merit scholarships to make MIT surprisingly affordable.
              </p>
              <p><strong>New Cost of Attendance:</strong> $19,500</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/300px-Yale_University_Shield_1.svg.png" alt="Yale Logo" />
              </div>
              <h3>$234,000 Saved Over 4 Years</h3>
              <p>
                James utilized Yale's generous financial aid policies to significantly reduce his family's contribution.
              </p>
              <p><strong>New Cost of Attendance:</strong> $21,000</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Duke_University_seal.svg/300px-Duke_University_seal.svg.png" alt="Duke Logo" />
              </div>
              <h3>$267,000 Saved Over 4 Years</h3>
              <p>
                Sophie strategically applied for institutional grants to make Duke University within reach.
              </p>
              <p><strong>New Cost of Attendance:</strong> $17,800</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/280px-Princeton_seal.svg.png" alt="Princeton Logo" />
              </div>
              <h3>$242,000 Saved Over 4 Years</h3>
              <p>
                Alex maximized Princeton's no-loan financial aid policy to minimize out-of-pocket costs.
              </p>
              <p><strong>New Cost of Attendance:</strong> $20,500</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/260px-University_of_Chicago_shield.svg.png" alt="UChicago Logo" />
              </div>
              <h3>$255,000 Saved Over 4 Years</h3>
              <p>
                Rachel's strategic application timing helped secure maximum aid at University of Chicago.
              </p>
              <p><strong>New Cost of Attendance:</strong> $18,500</p>
            </div>

            <div className="case-study-item animate-zoom-in">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Columbia_coat_of_arms_no_crest.svg/360px-Columbia_coat_of_arms_no_crest.svg.png" alt="Columbia Logo" />
              </div>
              <h3>$249,000 Saved Over 4 Years</h3>
              <p>
                Thomas combined multiple scholarship opportunities to make Columbia University affordable.
              </p>
              <p><strong>New Cost of Attendance:</strong> $19,800</p>
            </div>
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
          <h1 style={{color:'black', marginBottom:'5vh'}}>Worried About College Costs?</h1>
          <p>
            Every student deserves the <b>best</b> education without the burden of overwhelming debt. We help you find the right colleges that not only admit your student but also offer substantial financial aid.
          </p>
          <p>
            Our proven strategies have helped over 30,000 families save an average of <b>$84,000</b> on college education.
          </p>
          <Link to="/signup" className="btn btn-secondary" style={{width:'30vw'}}>Learn How We Can Help</Link>
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
