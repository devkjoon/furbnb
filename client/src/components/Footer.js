import React from 'react';
import './assets/Contact.css';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import twitterLogo from './assets/twitter-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/kirchnerdev22" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub logo"  />
        </a>
        <a href="https://www.linkedin.com/in/trenton-kirchner-91b38b174/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo"  />
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
