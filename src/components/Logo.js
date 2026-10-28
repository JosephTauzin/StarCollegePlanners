import React from 'react';
import './Logo.css';

// The star-and-wordmark lockup from src/assets/LogoWithGT.png, redrawn so it stays sharp and can sit on dark backgrounds.
export default function Logo({ className = '' }) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <svg className="brand-logo-star" viewBox="-12 -14 124 120" aria-hidden="true" focusable="false">
        <path d="M50 2 61.17 34.63 95.65 35.17 68.07 55.87 78.21 88.83 50 69 21.79 88.83 31.93 55.87 4.35 35.17 38.83 34.63Z" />
      </svg>
      <span className="brand-logo-words">
        <span className="brand-logo-name">College Planners</span>
        <span className="brand-logo-by">by GameTheory</span>
      </span>
    </span>
  );
}
