// src/Process.js
import React from 'react';
import './css/Process.css';
import { Link } from 'react-router-dom';

function Process() {
  return (
    <div className="process-and-thesis">
          {/* Navbar */}
          <nav className="flat-navbar" style={{marginBottom:'2vh', paddingTop:'2vh'}}>
        <div className="container-align">
          <div className="navbar-logo">
            <img style={{width:'8vw', height:'20vh', position:'absolute', marginLeft:'-30vw', marginTop:'-1vh'}} src={require('./assets/Logo 6.png')} alt="Game Theory College Planners" />
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
          <p>Written and presented by Danny Umali, founder of Game Theory College Planners.</p>
          <p className="scroll-down">Keep scrolling until you get to the end</p>
          <p>
            If you would rather watch the video of our process and thesis,{' '}
            <Link to="/video">click here</Link>.
          </p>
          <div className="steps">
            <p>
              <strong>Step 1:</strong> Educate yourself with our content and videos.
            </p>
            <p>
              <strong>Step 2:</strong> Click <Link to="/get-a-price">"Get a Price"</Link> and take the quiz to see if we are a good fit.
            </p>
          </div>
        </div>
      </header>

      {/* Insights Section */}
      <section className="insights">
        <div className="container">
          <h2>Here are 7 unique and useful insights that will completely change everything…</h2>

          {/* Insight Items */}
          <div className="insight-item">
            <input type="checkbox" id="insight1" className="toggle-input" />
            <label htmlFor="insight1" className="toggle-label">
              <h3>1. Understanding 4-year graduation rates will significantly reduce your college expense.</h3>
            </label>
            <div className="insight-content">
              <p><strong>Old Way:</strong> We evaluate college cost by “cost of going.” We pay zero attention to 4-year graduation rates.</p>
              <p><strong>Old Result:</strong> We end up reducing the value of your student’s college degree by hundreds of thousands of dollars over their lifetime. With delayed graduation, the “cheaper” in-state college ends up being the most expensive college you could possibly buy.</p>
              <p><strong>New Way:</strong> We evaluate colleges by the “cost of graduating.” We adopt a college planning strategy that is 4-year graduation centric; from how we evaluate majors to an analysis of academic fit, retention rate, and, of course, 4-year grad rate.</p>
              <p><strong>New Result:</strong> The national average of a 4-year graduation is 19%*. By employing an on-time graduation strategy, over 90% of our students graduate in 4 years and many get their degree at the lowest possible cost.</p>
              <p><em>Source: Complete College America - Data Dashboard</em></p>
              {/* Additional content can be added here */}
              <Link to="/get-a-price" className="btn btn-primary">Get a Price</Link>
            </div>
          </div>

          {/* Repeat the above block for each insight, changing the id, label, and content accordingly */}

          {/* ... (Insights 2 to 7 would go here) */}

          {/* Conclusion */}
          <div className="conclusion">
            <h2>As you can see, all you need to do is…</h2>
            <ol>
              <li>Understand your 4-year graduation rates.</li>
              <li>Look to the “expensive” colleges.</li>
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
            <Link to="/get-a-price" className="btn btn-secondary">Get a Price</Link>
          </div>

          {/* Call to Action */}
          <div className="cta">
            <h2>This is for you if...</h2>
            <p>If you are the parents of high school sophomores, juniors, or seniors who want to see their student go into the world and reap all of the rewards of having a degree without the debt.</p>
            <p>If you feel that every student, regardless of circumstance, deserves the best shot possible at the best education they can get, you are definitely at the right place.</p>
            <Link to="/get-a-price" className="btn btn-primary btn-lg">Get Started Now</Link>
          </div>

          {/* Case Studies */}
          <div className="case-studies">
            <h2>Award Analysis Case Studies</h2>
            {/* Case Study 1 */}
            <div className="case-study">
              <h3>Sheridan Lillie Case Study</h3>
              <p><strong>Retail Cost (Sticker Price):</strong></p>
              <img src="https://via.placeholder.com/600x400?text=Retail+Cost+Chart" alt="Retail Cost Chart" />
              <p><strong>Wholesale Cost (Out the Door Price):</strong></p>
              <img src="https://via.placeholder.com/600x400?text=Wholesale+Cost+Chart" alt="Wholesale Cost Chart" />
              <p>*2021 Award letter data provided by the Lillie Family. Cost includes tuition, room and board, books, mandatory fees, and personal expenses.</p>
            </div>
            {/* Repeat for additional case studies */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
