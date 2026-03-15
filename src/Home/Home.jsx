import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight, FiCode, FiSmartphone, FiLayers, FiGlobe } from 'react-icons/fi';
import { BsRocketTakeoff } from 'react-icons/bs';
import './Home.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);
  const [activeMessage, setActiveMessage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const themes = [
    { primary: '#6e45e2', secondary: '#00d4ff', accent: '#00ff9d', text: 'Redefined' },
    { primary: '#2563eb', secondary: '#8b5cf6', accent: '#10b981', text: 'Reimagined' },
    { primary: '#d946ef', secondary: '#f43f5e', accent: '#f59e0b', text: 'Reengineered' }
  ];

  const messages = [
    { title: "Digital Excellence", text: "Creating boundary-pushing experiences.", icon: <FiLayers /> },
    { title: "Web Architecture", text: "Scalable solutions for modern needs.", icon: <FiCode /> },
    { title: "Mobile Innovation", text: "Apps that engage and captivate.", icon: <FiSmartphone /> },
    { title: "Global Reach", text: "Transforming ideas into digital reality.", icon: <FiGlobe /> }
  ];

  // Auto-rotate themes
  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [themes.length]);

  // Apply theme tokens globally
  useEffect(() => {
    const currentTheme = themes[themeIndex];
    document.documentElement.style.setProperty('--primary', currentTheme.primary);
    document.documentElement.style.setProperty('--secondary', currentTheme.secondary);
    document.documentElement.style.setProperty('--accent', currentTheme.accent);
  }, [themeIndex, themes]);

  // Auto-rotate messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(messageInterval);
  }, [messages.length]);

  // Track mouse for 3D phone effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // max 10deg
      const y = (clientY / window.innerHeight - 0.5) * -20; // inverted
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', damping: 20, stiffness: 100 } 
    }
  };

  return (
    <div id="home" className="home-container" ref={containerRef}>
      {/* Animated Gradient Background */}
      <div className="glacier-bg">
        <div className="glacier-layer glacier-1"></div>
        <div className="glacier-layer glacier-2"></div>
        <div className="glacier-layer glacier-3"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-container">
          <div className="nav-left">
            <span className="nav-brand">F&W GLITTCH</span>
          </div>
          
          <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
            <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('service'); }}>Services</a>
            <a href="#work" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('work'); }}>Work</a>
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
            
            <motion.button 
              className="nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('contact')}
            >
              Contact Us <FiArrowRight />
            </motion.button>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-layout">
          
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={childVariants} className="hero-badge">
              <BsRocketTakeoff /> Future-Ready Agency
            </motion.div>

            <motion.h1 variants={childVariants} className="hero-title">
              <span className="title-line">Digital Innovation</span>
              <span className="title-line">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={themeIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4 }}
                    className="dynamic-word"
                  >
                    {themes[themeIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            
            <motion.p variants={childVariants} className="hero-subtitle">
              We craft boundary pushing, aesthetic, and functional digital experiences that captivate modern audiences and drive real results.
            </motion.p>

            <motion.div variants={childVariants} className="hero-buttons">
              <motion.button
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('work')}
              >
                View Our Work
              </motion.button>
              <motion.button
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('contact')}
              >
                Start a Project
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Mobile Phone Showpiece */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="phone-container"
              animate={{ 
                rotateX: mousePos.y, 
                rotateY: mousePos.x,
                y: [0, -10, 0] // gentle hover
              }}
              transition={{ 
                rotateX: { type: 'spring', damping: 30, stiffness: 100 },
                rotateY: { type: 'spring', damping: 30, stiffness: 100 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
            >
              <div className="phone-case">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  
                  <div className="phone-content">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeMessage}
                        className="phone-icon-wrap"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        {messages[activeMessage].icon}
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeMessage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3>{messages[activeMessage].title}</h3>
                        <p>{messages[activeMessage].text}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                </div>
                <div className="phone-indicator"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Theme Indicator */}
      <motion.div 
        className="theme-indicator"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {themes.map((t, index) => (
          <button
            key={index}
            className={`theme-dot ${index === themeIndex ? 'active' : ''}`}
            style={{ backgroundColor: t.primary, color: t.primary }}
            onClick={() => setThemeIndex(index)}
            aria-label={`Switch to theme ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Page Sections */}
      <About theme={themes} themeIndex={themeIndex} />
      <Services theme={themes} themeIndex={themeIndex} />
      <Work theme={themes} themeIndex={themeIndex} />
      <Contact theme={themes} themeIndex={themeIndex} />
      <Footer theme={themes} themeIndex={themeIndex} />
      
    </div>
  );
};

export default Home;