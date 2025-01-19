import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-brand">PixelVault</h2>
        <p className="footer-copyright">© {new Date().getFullYear()} Rajat Choudhary. All rights reserved.</p>
        <div className="footer-social">
          <a
            href="https://github.com/RajatChoudhary1023"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://rajatchoudharyportfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="portfolio"
          >
            <FaLink />
          </a>
          <a
            href="https://www.instagram.com/rajat_choudhary_1023/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rajat-choudhari-820499319/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
