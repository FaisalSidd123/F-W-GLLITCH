import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ theme, themeIndex }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Logo */}
        <motion.div
          className="brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            F&W  <AnimatePresence mode="wait">
              <motion.span
                key={themeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="dynamic-word"
              >
                GLLITCH
              </motion.span>
            </AnimatePresence>
          </motion.h3>

        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          className="footer-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ul className="nav-links">
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Home
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Work
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#service"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('service')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Services
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                About
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.nav>

        {/* Social Links
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a href="#" whileHover={{ y: -3 }}>
            <FiGithub />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -3 }}>
            <FiTwitter />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -3 }}>
            <FiLinkedin />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -3 }}>
            <FiMail />
          </motion.a>
        </motion.div> */}

        {/* Copyright */}
        <motion.div
          className="copyright"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} F&W GLLITCH. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;