import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, User, Ban, RefreshCw, Scale, Lock } from 'lucide-react';
import './PrivacyPolicy.css'; // Reusing the same CSS for consistent legal page layout

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Agreement to Terms",
      icon: <FileText size={24} />,
      content: (
        <p>
          These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Tareez Tech ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
        </p>
      )
    },
    {
      title: "Intellectual Property Rights",
      icon: <Shield size={24} />,
      content: (
        <p>
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
        </p>
      )
    },
    {
      title: "User Representations",
      icon: <User size={24} />,
      content: (
        <p>
          By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose.
        </p>
      )
    },
    {
      title: "Prohibited Activities",
      icon: <Ban size={24} />,
      content: (
        <p>
          You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
      )
    },
    {
      title: "Modifications and Interruptions",
      icon: <RefreshCw size={24} />,
      content: (
        <p>
          We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
        </p>
      )
    },
    {
      title: "Governing Law",
      icon: <Scale size={24} />,
      content: (
        <p>
          These conditions are governed by and interpreted following the laws of Pakistan & the United Kingdom, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.
        </p>
      )
    }
  ];

  return (
    <div className="privacy-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="privacy-container"
      >
        {/* Header Section */}
        <div className="privacy-header">
          <div className="privacy-date">
            <Lock size={16} />
            <span>Last Updated: May 2026</span>
          </div>
          <h1 className="privacy-title">
            Terms & Conditions
          </h1>
          <p className="privacy-subtitle">
            Our rules and guidelines for using the Tareez Tech website and services.
          </p>
        </div>
        
        {/* Content Section */}
        <div className="privacy-sections">
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="privacy-section"
            >
              <div className="privacy-section-title">
                <div className="privacy-icon">
                  {section.icon}
                </div>
                <span>{index + 1}. {section.title}</span>
              </div>
              
              <div className="privacy-content">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
