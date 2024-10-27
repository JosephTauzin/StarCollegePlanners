// src/SignUp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUp.css'; // For custom styles
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/Logo.png';

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
      title: "A must-attend for professionals.",
      subtitle: "— Casey M.",
    },
    // Add more testimonials as needed
  ];

  // Available slots grouped by date
  const availableSlots = [
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
  ];

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

  return (
    <motion.div
      className="signup-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        {/* Left Side - Testimonials */}
        <div className="left-side">
        <div className='logo-container'>
        
            <img  className= 'logo-image' src={logo} alt="logo" />
            
            <p className='logo-text'>Star College Webinar</p>
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
              <h1>{testimonials[currentTestimonial].title}</h1>
              <p>{testimonials[currentTestimonial].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        
          <div class="social-icons">
                <a href="https://www.facebook.com/GameTheoryPlanning" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook"/>
                </a>
                <a href="https://www.twitter.com/GameTheoryPlan" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X"/>
                </a>
                <a href="https://www.instagram.com/GameTheoryPlanning" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram"/>
                </a>
                <a href="https://www.linkedin.com/company/gametheoryplanning" target="_blank">
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
          
          <form onSubmit={handleSubmit}>
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
            {/* Available Slots as Buttons */}
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
            <motion.button
              type="submit"
              className="btn btn-primary btn-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              disabled={!formData.date}
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
  );
}

export default SignUp;
