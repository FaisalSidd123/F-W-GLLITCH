import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import './Work.css';


const Work = ({ theme, themeIndex }) => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [fullViewProject, setFullViewProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "QuranVision",
      subtitle: "Islamic Knowledge Platform",
      image: "/Capture1.PNG",
      description: "A comprehensive digital platform bringing Islamic knowledge to users worldwide with modern technology and intuitive design.",
      detailedDescription: [
        "QuranVision is a feature-rich web application providing seamless access to Quranic verses with multiple translations, tafsir (exegesis), and audio recitations. The platform includes an extensive Hadith library with detailed explanations and scholarly commentary.",
        "The application implements role-based authentication with Google Sign-In, allowing users to save their favorite verses and hadiths to personalized collections. Registered users gain access to premium features including an integrated e-commerce system for purchasing Islamic books and subscription plans.",
        "The admin dashboard provides comprehensive analytics on user activity, purchases, and content engagement, enabling administrators to manage content, plans, and user accounts efficiently."
      ],
      features: [
        "Complete Quran with 10+ translations and tafsir sources",
        "Hadith collection from Sahih Bukhari, Muslim and other authentic books",
        "Audio recitations by multiple Qaris with synchronized highlighting",
        "User collections with tagging and categorization",
        "E-commerce system for books and subscription plans",
        "Google authentication with role-based access control",
        "Admin dashboard with user analytics and content management",
        "Responsive design with mobile-first approach"
      ],
      shortFeatures: [
        "Quran and Hadith access with translations, tafsir, and recitations",
        "Personalized collections and role-based Google authentication",
        "E-commerce for books and plans",
        "Admin dashboard with analytics and content management",
        "Fully responsive, mobile-friendly design"
      ],
      tags: ["React", "Next.js", "Firebase", "E-commerce"],
      liveLink: "#",
    },
    {
      id: 2,
      title: "DreamFragrance",
      subtitle: "E-commerce Perfume Store",
      image: "/Capture2.jpg",
      description: "An elegant e-commerce platform for perfumes with smooth animations, modern design, admin portal, and all essential online shopping features.",
      detailedDescription: [
        "DreamFragrance is a visually captivating perfume e-commerce website designed with a focus on luxury aesthetics and a delightful user experience. The homepage features engaging animations, smooth transitions, and an intuitive navigation flow to immerse visitors in the shopping experience.",
        "The platform provides a full-fledged e-commerce system with product listings, detailed product pages, user profiles, shopping cart, and order history. Customers can securely sign up, log in via Firebase authentication, and manage their accounts effortlessly.",
        "An admin portal is integrated for managing products and orders. Admins can oversee available perfumes, track inventory, and process customer orders efficiently, ensuring smooth store operations.",
        "PostgreSQL is used for structured product, order, and user data management, while Firebase ensures seamless and secure authentication. The website is designed with a mobile-first approach so users can shop seamlessly across devices."
      ],
      features: [
        "Visually stunning homepage with exciting animations and smooth transitions",
        "Store component showcasing perfumes with filtering and sorting options",
        "Detailed product pages with descriptions, images, and reviews",
        "Shopping cart, secure checkout, and order management",
        "Firebase authentication with secure sign-in and sign-up",
        "PostgreSQL database for products, users, and orders",
        "Deal page highlighting promotions and exclusive offers",
        "Admin portal for managing products and orders",
        "Fully responsive, optimized for mobile devices",
        "Modern and luxury-themed UI/UX design"
      ],
      shortFeatures: [
        "Luxury perfume store with engaging animations",
        "Full e-commerce features: cart, checkout, order history",
        "Admin portal for managing products and orders",
        "Firebase authentication & PostgreSQL database",
        "Responsive and mobile-friendly design"
      ],
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Firebase", "E-commerce", "Animations", "Admin Portal"],
      liveLink: "#",
    },
    {
      id: 3,
      title: "SoleHub",
      subtitle: "E-commerce Shoes Store",
      image: "/Capture3.jpg",
      description: "A stylish e-commerce platform for shoes with a modern interface, smooth shopping experience, and essential online store features.",
      detailedDescription: [
        "SoleHub is a sleek and modern e-commerce website dedicated to footwear, built with a focus on performance, responsiveness, and an engaging user experience. The homepage highlights trending shoes and collections with visually appealing layouts and smooth transitions.",
        "The platform includes all core e-commerce features: product listings, detailed product pages with images and specifications, a shopping cart, secure checkout, and order tracking. Customers can create accounts, manage their profiles, and access order history easily.",
        "PostgreSQL is used as the database for managing products, user accounts, and orders, ensuring reliability and scalability. React provides a dynamic and responsive user interface, while Node.js and Express.js handle backend operations and API integrations."
      ],
      features: [
        "Modern and responsive homepage highlighting trending shoe collections",
        "Store component showcasing shoes with filtering and sorting options",
        "Detailed product pages with specifications, multiple images, and reviews",
        "Shopping cart, secure checkout, and order tracking",
        "User profile with order history and account details",
        "PostgreSQL database for structured product, user, and order data",
        "Built with React for interactive UI and Node.js/Express.js for backend APIs",
        "Responsive design ensuring smooth experience on mobile and desktop"
      ],
      shortFeatures: [
        "Stylish shoe store with modern UI",
        "Full e-commerce flow: cart, checkout, order tracking",
        "PostgreSQL database for products and orders",
        "Responsive and mobile-friendly design"
      ],
      tags: ["React", "Node.js", "Express", "PostgreSQL", "E-commerce", "Shoes Store"],
      liveLink: "#",
    },
    {
      id: 4,
      title: "Anonymous",
      subtitle: "Anonymous Messaging Platform",
      image: "/Capture4.png",
      description: "A full-stack anonymous messaging platform where users receive messages through a unique shareable link with AI-powered message suggestions.",
      detailedDescription: [
        "AnonMsg is a full-stack anonymous messaging web application built with Next.js and MongoDB, where users can receive anonymous messages through a unique personalized shareable link. The platform focuses on privacy, security, and an engaging user experience.",
        "The authentication system is built using NextAuth.js with JWT-based signup and login, ensuring secure access to user accounts. Zod is used for robust input validation throughout the application, while Resend handles email services for account verification and notifications.",
        "The user dashboard allows users to view all received anonymous messages, toggle whether they want to accept new messages, and easily share their unique message link. AI-powered message suggestions are integrated using NVIDIA NIM (LLaMA 3.1), providing dynamic and diverse question prompts to encourage meaningful interactions on the platform."
      ],
      features: [
        "Unique shareable link for each user to receive anonymous messages",
        "AI-powered message suggestions using NVIDIA NIM (LLaMA 3.1)",
        "JWT-based secure authentication using NextAuth.js",
        "Input validation with Zod for reliable data handling",
        "Email verification and notifications via Resend",
        "User dashboard to manage and view anonymous messages",
        "Toggle to enable or disable incoming message acceptance",
        "Fully responsive design with Tailwind CSS"
      ],
      shortFeatures: [
        "Anonymous messaging via unique shareable user links",
        "AI-powered suggestions using NVIDIA NIM (LLaMA 3.1)",
        "Secure authentication with NextAuth.js and JWT",
        "Dashboard to manage messages and toggle acceptance",
        "Responsive design with Tailwind CSS"
      ],
      tags: ["Next.js", "MongoDB", "NextAuth.js", "Zod", "Resend", "NVIDIA NIM", "Tailwind CSS"],
      liveLink: "#",
    },

    {
      id: 5,
      title: "Opti-Manage",
      subtitle: "Brand Management Platform",
      image: "/Capture.PNG",
      description: "A professional brand website showcasing digital marketing and influencer management services.",
      detailedDescription: [
        "Opti-Manage is a sleek, modern brand website designed to showcase the company's expertise in influencer management, sports marketing, and digital brand strategy. The platform highlights the company's services, values, and success stories through an engaging user interface.",
        "The website features a clean, performance-optimized design with smooth animations and responsive layouts. Key sections include service offerings, client testimonials, case studies, and a contact management system for lead generation.",
        "Built with a focus on conversion optimization, the site employs strategic CTAs and visual storytelling to effectively communicate the brand's value proposition to potential clients."
      ],
      features: [
        "Service showcase with interactive elements",
        "Company values and mission presentation",
        "Responsive design with mobile optimization",
        "Contact form with automated responses",
        "Performance-optimized assets and loading",
        "SEO-optimized content structure",
        "Smooth page transitions and animations"
      ],
      shortFeatures: [
        "Interactive service showcase with smooth transitions.",
        "Company mission and values display.",
        "Responsive, SEO-optimized design.",
        "Contact form with auto-responses.",
        "Fast-loading, performance-optimized pages"
      ],
      tags: ["React", "UI/UX", "Responsive Design"],
      liveLink: "#",
    },


  ];

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const openFullView = (id) => {
    setFullViewProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeFullView = () => {
    setFullViewProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our Recent  <AnimatePresence mode="wait">
              <motion.span
                key={themeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="dynamic-word"
              >
                Projects
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          <p className="section-subtitle">Explore my recent work and digital solutions</p>
        </motion.div>

        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card-container">
              <motion.div
                className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: expandedProject === project.id ? 1 : 1.02 }}
              >
                <div
                  className="project-preview"
                  onClick={() => toggleProject(project.id)}
                >
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay"></div>
                  </div>
                  <button
                    className="expand-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleProject(project.id);
                    }}
                  >
                    {expandedProject === project.id ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      className="project-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                        transition: {
                          opacity: { duration: 0.3 },
                          height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
                        }
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          opacity: { duration: 0.2 },
                          height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
                        }
                      }}
                    >
                      <motion.div
                        className="details-content"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="project-info">
                          <h3 className="project-title">{project.title}</h3>
                          <p className="project-subtitle">{project.subtitle}</p>
                        </div>
                        <div className="description-section">
                          <p>{project.description}</p>
                        </div>
                        <div className="features-section">
                          <h4>Key Features</h4>
                          <ul className="features-list">
                            {project.shortFeatures.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                              >
                                <span className="feature-bullet">•</span> {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <motion.div
                          className="project-actions"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.button
                            className="view-more-btn"
                            onClick={() => openFullView(project.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Full Case Study
                          </motion.button>

                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {fullViewProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-content">
              <motion.button
                className="close-modal"
                onClick={closeFullView}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </motion.button>

              {projects.map((project) => (
                project.id === fullViewProject && (
                  <motion.div
                    key={project.id}
                    className="full-project-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="modal-header">
                      <h2>{project.title}</h2>
                      <p className="modal-subtitle">{project.subtitle}</p>
                    </div>

                    <motion.div
                      className="modal-image-container"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <img src={project.image} alt={project.title} />
                    </motion.div>

                    <div className="modal-sections">
                      <motion.section
                        className="modal-section"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3>Project Overview</h3>
                        {project.detailedDescription.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </motion.section>

                      <motion.section
                        className="modal-section"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3>Features</h3>
                        <ul>
                          {project.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + index * 0.05 }}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.section>
                    </div>

                    <motion.div
                      className="modal-actions"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >

                    </motion.div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;