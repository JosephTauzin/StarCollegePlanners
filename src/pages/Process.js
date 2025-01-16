// src/Process.js
import React from 'react';
import './css/Process.css';
import { Link } from 'react-router-dom';

function Process() {
  return (
    <div className="process-and-thesis">
          {/* Navbar */}
          <nav className="flat-navbar" style={{ paddingTop:'2vh', backgroundColor:'white'}}>
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
      {/* Header Section */}
      <header className="pt-header">
        <div className="container">
          <h1>Our Process and Thesis</h1>
          

          <p>
            If you would rather watch the video of our process and thesis,{' '}
            <Link to="/video" style={{color:'#0984e3'}}>click here</Link>.
          </p>
          <div className="steps">
            <p>
              <strong>Step 1:</strong> Educate yourself with our content and videos.
            </p>
            <p>
              <strong>Step 2:</strong> Click <Link to="https://gtheory.college/workshopquiz?_gl=1*17m9uzt*_gcl_au*MTM1MDExOTI1NS4xNzI4MTU1Mzgy*_ga*MTMwNjkzMzc1NC4xNzI4MTU1Mzgy*_ga_4FQG4YTZ2H*MTczNDM2NTUwNy4yMy4xLjE3MzQzNjU1NTguOS4wLjA.">"Get a Price"</Link> and take the quiz to see if we are a good fit.
            </p>
          </div>
        </div>
      </header>

      {/* Insights Section */}
      <section className="insights">
        <div className="container">
       

          {/* Insight Items */}
          <div className="insight-item">
           
            <label className="toggle-label">
              <h3 style={{marginBottom:'5vh'}}>Understanding 4-year graduation rates will significantly reduce your college expense.</h3>
            </label>
            <div className="insight-content">
              <p><strong>Old Way:</strong> We evaluate college cost by “cost of going.” We pay zero attention to 4-year graduation rates.</p>
              <p><strong>Old Result:</strong> We end up reducing the value of your student’s college degree by hundreds of thousands of dollars over their lifetime. With delayed graduation, the “cheaper” in-state college ends up being the most expensive college you could possibly buy.</p>
              <p><strong>New Way:</strong> We evaluate colleges by the “cost of graduating.” We adopt a college planning strategy that is 4-year graduation centric; from how we evaluate majors to an analysis of academic fit, retention rate, and, of course, 4-year grad rate.</p>
              <p><strong>New Result:</strong> The national average of a 4-year graduation is 19%*. By employing an on-time graduation strategy, over 90% of our students graduate in 4 years and many get their degree at the lowest possible cost.</p>
              <p><em>Source: Complete College America - Data Dashboard</em></p>
              {/* Additional content can be added here */}
              <Link to="https://gtheory.college/workshopquiz?_gl=1*17m9uzt*_gcl_au*MTM1MDExOTI1NS4xNzI4MTU1Mzgy*_ga*MTMwNjkzMzc1NC4xNzI4MTU1Mzgy*_ga_4FQG4YTZ2H*MTczNDM2NTUwNy4yMy4xLjE3MzQzNjU1NTguOS4wLjA." className="btn btn-primary btn-lg" style={{width:'30vw'}}>Get a Price</Link>
            </div>
          </div>

          {/* Repeat the above block for each insight, changing the id, label, and content accordingly */}

          {/* ... (Insights 2 to 7 would go here) */}

          {/* Conclusion */}
          <div className="conclusion">
            <h2>As you can see, all you need to do is…</h2>
            <ol >
              <li>Understand your 4-year graduation rates.</li>
              <li>Look to the "expensive" colleges.</li>
              <li>Use social media to increase your admissions chances and your merit awards.</li>
              <li>Know your Expected Family Contribution (EFC) before the government or college does.</li>
              <li>Use your head first (with empirical data), then your heart, to make smarter college decisions.</li>
              <li>Create competition between colleges.</li>
              <li>Validate award letters for consistency.</li>
            </ol>
            <p>...and you can get 4 years of college for the price of 2, sometimes less, using modern solutions without the sleepless nights, frustration, and BS.</p>
          </div>

          {/* Options Section */}
          <div className="options">
            <h2>Now there are a few ways to achieve this:</h2>
            <h3>Option 1: The Hard Way</h3>
            <p>You can do it yourself, work with your school counselor, or rely on traditional financial advisors, but these methods can be time-consuming and costly.</p>
            <h3>Option 2: The Easy Way</h3>
            <p>Work with Game Theory College Planners and get 4 years of college for the price of 2, sometimes even less, using advanced academic strategies without the sleepless nights, frustration, and BS.</p>
                     </div>

          {/* Call to Action */}
          <div className="cta">
            <h2 style={{color:'#0984e3'}}>This is for you if...</h2>
            <p>If you are the parents of high school sophomores, juniors, or seniors who want to see their student go into the world and reap all of the rewards of having a degree without the debt.</p>
            <p>If you feel that every student, regardless of circumstance, deserves the best shot possible at the best education they can get, you are definitely at the right place.</p>
            <Link to="/signup" className="btn btn-secondary btn-lg" style={{width:'30vw'}}>Get Started Now</Link>
          </div>

        {/* Case Studies */}
<div className="case-studies">
  <h1>Award Analysis Case Studies</h1>
  {/* Case Study 1 */}
  <div className="case-study">
    <h3 style={{ marginBottom: '5vh' }}>Sheridan Lillie Case Study</h3>
    <p><strong>Retail Cost (Sticker Price):</strong></p>
    <div
      className="bar-graph"
      style={{
        height: '70vh',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '20px',
        marginTop:'-15vh',
        borderRadius: '8px',
        gap: '1vw',
      }}
    >
      {[
        {
          school: 'Wingate University',
          retailCost: 48806,
          wholesaleCost: 17806,
        },
        {
          school: 'University of Mobile',
          retailCost: 33396,
          wholesaleCost: 25936,
        },
        {
          school: 'Wesleyan GA',
          retailCost: 35555,
          wholesaleCost: 11401,
        },
        {
          school: 'Charleston Uni',
          retailCost: 38600,
          wholesaleCost: 19600,
        },
        {
          school: 'FSU',
          retailCost: 50986,
          wholesaleCost: 33486,
        },
        {
          school: 'USC',
          retailCost: 51583,
          wholesaleCost: 26358,
        }
        
      ].map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '15%',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: '0.5vw',
              height: '100%',
              alignItems: 'flex-end',
            }}
          >
            {/* Retail Bar */}
            <div
              style={{
                width: '45%',
                height: `${(item.retailCost / 80000) * 50}vh`,
                backgroundColor: '#e74c3c',
                borderRadius: '8px 8px 0 0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1vw',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '5px',
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.8'
                e.target.style.transform = 'scaleY(1.05)'
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1'
                e.target.style.transform = 'scaleY(1)'
              }}
            >
              ${item.retailCost.toLocaleString()}
            </div>
            {/* Wholesale Bar */}
            <div
              style={{
                width: '45%',
                height: `${(item.wholesaleCost / 80000) * 50}vh`,
                backgroundColor: '#27ae60',
                borderRadius: '8px 8px 0 0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
               
                fontSize: '1vw',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '5px',
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.8'
                e.target.style.transform = 'scaleY(1.05)'
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1'
                e.target.style.transform = 'scaleY(1)'
              }}
            >
              ${item.wholesaleCost.toLocaleString()}
            </div>
          </div>
          <div
            style={{
              marginTop: '1vh',
              fontWeight: 'bold',
              fontSize: '1vw',
              textAlign: 'center',
            }}
          >
            {item.school}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2vw',
        marginTop: '2vh',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5vw' }}>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#e74c3c',
            borderRadius: '4px',
          }}
        ></div>
        <span>Retail Cost</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5vw' }}>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#27ae60',
            borderRadius: '4px',
          }}
        ></div>
        <span>Wholesale Cost</span>
      </div>
    </div>

    <p style={{ marginTop: '10vh' }}>
      <strong>Wholesale Cost (Out the Door Price):</strong>
    </p>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2vh',
        marginTop: '2vh',
        marginBottom: '2vh',
      }}
    >
      {[
        { school: 'Johns Hopkins University', wholesaleCost: 18072 },
        { school: 'University of Miami', wholesaleCost: 22150 },
        { school: 'Boston University', wholesaleCost: 25430 },
        { school: 'Emory University', wholesaleCost: 19845 },
        { school: 'University of Southern California', wholesaleCost: 23750 },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1vw',
          }}
        >
          <div style={{ width: '20%', fontSize: '0.9vw' }}>{item.school}</div>
          <div
            style={{
              width: `${(item.wholesaleCost / 30000) * 60}%`,
              backgroundColor: '#27ae60',
              height: '30px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.9vw',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.8'
              e.target.style.transform = 'scaleX(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1'
              e.target.style.transform = 'scaleX(1)'
            }}
          >
            ${item.wholesaleCost.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
    <p>
      *2021 Award letter data provided by the Lillie Family. Cost includes
      tuition, room and board, books, mandatory fees, and personal expenses.
    </p>
  </div>
  {/* Repeat for additional case studies if needed */}
</div>

        </div>
      </section>
    </div>
  );
}

export default Process;
