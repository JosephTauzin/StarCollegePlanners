// src/SignUp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/SignUp.css'; // For custom styles
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';

function SignUp() {
  // State for the form data
  const [formData, setFormData] = useState({ name: '', email: '', date: null });
  const [status, setStatus] = useState('');


  // Testimonials data
  const testimonials = [
    {
      title: "Game Theory helped our family save $100,000 on college expenses!",
      subtitle: "– Jane D.",
    },
    {
      title: "My daughter received a full scholarship, thanks to their guidance.",
      subtitle: "— Mark P.",
    },
    {
      title: "A must-attend for professionals who need some guideness with reducing college costs.",
      subtitle: "— Casey M.",
    },
    // Add more testimonials as needed
  ];

  // Available slots grouped by date

  const [availableSlots, setAvailableSlots] = useState(
    [
        {
          date: 'November 25, 2023',
          times: ['10:00 AM', '2:00 PM'],
        },
        {
          date: 'December 2, 2023',
          times: ['11:00 AM', '3:00 PM'],
        },
        {
          date: 'December 9, 2023',
          times: ['9:00 AM', '1:00 PM'],
        },
        // Add more slots as needed
      ]
  )
 

  // State to manage the current testimonial index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Effect to loop through testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 10000); // 10000ms = 10 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle slot selection
  const handleSlotSelection = (date, time) => {
    // Create a Date object from the selected date and time
    const selectedDate = new Date(`${date} ${time}`);
    setFormData({ ...formData, date: selectedDate });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      date: formData.date.toISOString(),
    };

    axios
      .post('http://localhost:5000/api/signup', formattedData)
      .then((response) => {
        setStatus('Success! You have signed up for the webinar.');
      })
      .catch((error) => {
        setStatus('Error: Unable to sign up.');
      });
  };

function getEmailFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');
  return email;
}

function getNameFromUrl(){
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  return name;
}

function transformDates(jsonData) {
    const data = jsonData
    const groupedDates = new Map();
  
    data.Dates.forEach(dateTimeStr => {
      // Replace space with 'T' to make it ISO 8601 compliant
      const dateTimeISO = dateTimeStr.replace(' ', 'T');
      const dateObj = new Date(dateTimeISO);
  
      // Extract the date part as a key
      const dateKey = dateObj.toDateString();
  
      // Format the time in 'h:mm A' format
      const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
      const timeStr = dateObj.toLocaleTimeString('en-US', timeOptions);
  
      if (groupedDates.has(dateKey)) {
        groupedDates.get(dateKey).push(timeStr);
      } else {
        groupedDates.set(dateKey, [timeStr]);
      }
    });
  
    const availableSlots = [];
  
    groupedDates.forEach((times, dateKey) => {
      const dateObj = new Date(dateKey);
      const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
      const dateStr = dateObj.toLocaleDateString('en-US', dateOptions);
  
      availableSlots.push({
        date: dateStr,
        times: times
      });
    });
  
    return availableSlots;
  }

useEffect(() => {
    const emailFromUrl = getEmailFromUrl();
    const nameFromUrl = getNameFromUrl()
    if (emailFromUrl) {
      setFormData((prevData) => ({ ...prevData, email: emailFromUrl }));
    }
    if(nameFromUrl){
        setFormData((prevData) => ({ ...prevData, name: nameFromUrl }));
    }
  }, []);

  /*
      
          <nav className="flat-navbar" style={{paddingBottom:'2vh', paddingTop:'2vh', backgroundColor:'white'}}>
          <div className="container-align">
            <div className="navbar-logo">
  
            </div>
            <ul className="navbar-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/process">Process and Thesis</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/online-portal">Online Portal</Link></li>
              <li><Link to="/signup" className="btn btn-primary navbar-btn">Sign Up for a Webinar</Link></li>
            </ul>
          </div>
        </nav>
  */
        const [jsonData, setJsonData] = useState(null);

        useEffect(() => {
          const fetchJsonFromUrl = async () => {
            try {
              const response = await fetch('https://firebasestorage.googleapis.com/v0/b/tutorspace-7a7f1.appspot.com/o/StarCollegePlanners%2FWebinarDates.json?alt=media&token=2a74798b-938d-4d77-92f0-a17db6200be1');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setJsonData(data);
              setAvailableSlots(transformDates(data));
              console.log('availableSlots',availableSlots)
            } catch (error) {
              console.error('Error fetching JSON from URL:', error);
            }
          };
      
          fetchJsonFromUrl();
        }, []);

        console.log('jsonDates', jsonData)
      
 
  return (

    <div>

    <motion.div
      className="signup-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="containerSignUp">
        {/* Left Side - Testimonials */}
        <div className="left-side">
        <div className='logo-container' onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
            <img className='logo-image' src={require('./assets/LogoWithGT.png')} alt="logo" />
        </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="testimonial"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{color:'black'}}>{testimonials[currentTestimonial].title}</h1>
              <p>{testimonials[currentTestimonial].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        
          <div class="social-icons">
                <a href="https://www.facebook.com/gametheorycollege" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook"/>
                </a>
                <a href="https://www.x.com/gtheorycollege" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X"/>
                </a>
                <a href="https://www.instagram.com/gametheorycollege" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram"/>
                </a>
                <a href="https://www.linkedin.com/company/game-theory-college-planners/" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn"/>
                </a>
            </div>
      
        </div>

        {/* Right Side - Sign Up Form */}
        {
            /*
            <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            College Planning Webinar
          </motion.h2>
            */
        }
        <div className="right-side">
          
          <form action="https://usebasin.com/f/a645cfae4253" method="POST">
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            {/*
           
            <motion.div
              className="form-group slots-group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label>Select a Date and Time:</label>
              <div className="slots-container">
                {availableSlots.map((slot) => (
                  <div key={slot.date} className="slot-date-group">
                    <h3>{slot.date}</h3>
                    <div className="slot-times">
                      {slot.times.map((time) => {
                        const isSelected =
                          formData.date &&
                          formData.date.toString() ===
                            new Date(`${slot.date} ${time}`).toString();
                        return (
                          <button
                            key={time}
                            type="button"
                            className={`slot-button ${
                              isSelected ? 'selected' : ''
                            }`}
                            onClick={() => handleSlotSelection(slot.date, time)}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {formData.date && (
                <p className="selected-date">
                  Selected Slot:{' '}
                  {formData.date.toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })}
                </p>
              )}
            </motion.div>
            */}
            <motion.button
              type="submit"
              className="btn btn-primary btn-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              disabled={!formData.date}
              style={{marginTop:'5vh'}}
            >
              Sign Up
            </motion.button>
          </form>
          {status && (
            <motion.p
              className="status-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default SignUp;
