// src/CaseStudies.js
import React from 'react';
import './css/CaseStudies.css'
import { Link } from 'react-router-dom';

function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      name: 'Sheridan Lillie',
      retailCost: '$70,000 per year',
      wholesaleCost: '$20,000 per year',
      savings: '$200,000 over 4 years',
      imageUrl: 'https://via.placeholder.com/600x400?text=Sheridan+Lillie',
      description: 'Sheridan received significant scholarships and grants, reducing her college cost by 70%.',
    },
    {
      id: 2,
      name: 'Anna Holland',
      retailCost: '$65,000 per year',
      wholesaleCost: '$15,000 per year',
      savings: '$200,000 over 4 years',
      imageUrl: 'https://via.placeholder.com/600x400?text=Anna+Holland',
      description: 'Anna secured a full-tuition scholarship, saving her family thousands of dollars.',
    },
    {
      id: 3,
      name: 'Christopher Ivory',
      retailCost: '$60,000 per year',
      wholesaleCost: '$10,000 per year',
      savings: '$200,000 over 4 years',
      imageUrl: 'https://via.placeholder.com/600x400?text=Christopher+Ivory',
      description: 'Christopher leveraged multiple financial aid offers to minimize his college expenses.',
    },
    // Add more case studies as needed
  ];

  return (
    <div className="case-studies-page">
        {/* Navbar */}
        <nav className="flat-navbar" style={{backgroundColor:'white', marginTop:'-7vh', paddingBottom:'2vh' }}>
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
      <div className="container">
        <h1>Our Success Stories</h1>
        <p>
          See how we've helped students and families save thousands of dollars on college education.
        </p>

        <div className="case-studies-grid">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="case-study-card">
              <img src={caseStudy.imageUrl} alt={caseStudy.name} />
              <h2>{caseStudy.name}</h2>
              <p className="description">{caseStudy.description}</p>
              <ul>
                <li>
                  <strong>Retail Cost:</strong> {caseStudy.retailCost}
                </li>
                <li>
                  <strong>Wholesale Cost:</strong> {caseStudy.wholesaleCost}
                </li>
                <li>
                  <strong>Total Savings:</strong> {caseStudy.savings}
                </li>
              </ul>
         
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta">
          <h2>Ready to Save on College?</h2>
          <p>
            Sign up for a webinar to learn how save the most money possible on College!
          </p>
          <Link to="/signup" className="btn btn-secondary btn-lg">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
