import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Globe, Eye, Server, RefreshCw } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Personal Statement",
      icon: <Shield size={24} />,
      content: (
        <>
          <p>
            We are committed to creating a secure and user-friendly experience for every customer. To achieve this, we aim to be as clear as possible about our all our policies, as is evident by our transparent Terms and Conditions.
          </p>
          <p>
            When you visit our site, tareeztech.com, some of your personal information supplied during your order or by means of our cookies policy may be gathered.
          </p>
        </>
      )
    },
    {
      title: "What are 'cookies'?",
      icon: <Server size={24} />,
      content: (
        <p>
          Cookies are little text files that are stored within your browsers cache. First and third-party cookies are used on this site for functionality, statistics, and advertising.
        </p>
      )
    },
    {
      title: "Why do we use cookies?",
      icon: <Eye size={24} />,
      content: (
        <>
          <p>
            There are specific cookies necessary for a website to function properly. Cookies is what keep track of settings, thus allowing your shopping experience to be tailored to you (remembering your preference or settings).
          </p>
          <p>
            Cookies also gathers data, for example, like the time of a session, viewed pages, or just general demographic information, like age and gender. The information that is gathered can then be used for analytical pursuits, allowing us to generate customized shopping experiences for our users. We do not use cookies that will track or identify you.
          </p>
        </>
      )
    },
    {
      title: "What information do we gather?",
      icon: <FileText size={24} />,
      content: (
        <p>
          The information we gather is what you supply us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, address, or general contact information. Cookies will also gather session information like the pages viewed, the amount of time spent in the session, transactions, and any other general demographic information (origin, gender, age).
        </p>
      )
    },
    {
      title: "Third-party sharing",
      icon: <Globe size={24} />,
      content: (
        <p>
          Any information we gather is only shared with our affiliate partners for analytical reasons. We will not share your personal information past our brand and trusted brand partners.
        </p>
      )
    },
    {
      title: "Website Media",
      icon: <Shield size={24} />,
      content: (
        <p>
          We (tareeztech.com) own all media that is on this website, unless stated otherwise. All photography work is done by Tareez Tech.
        </p>
      )
    },
    {
      title: "Disclosure of Information",
      icon: <Lock size={24} />,
      content: (
        <>
          <p>
            You have the right to request your data. If something is incorrect, you can have it altered or removed.
          </p>
          <p>
            You can also disable cookies on your device by changing your browser's settings. You have the option to use opt-out programs like, 'NAI's Consumer opt-out' or 'Google Analytics opt-out browser add-on'. These prevent cookies from being used in your browser. Know that if you do this, our site may not function properly.
          </p>
        </>
      )
    },
    {
      title: "Updates",
      icon: <RefreshCw size={24} />,
      content: (
        <p>
          Our privacy policies are subject to change. All updates will appear on this page.
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
            Privacy Policy
          </h1>
          <p className="privacy-subtitle">
            Our Personal Statement, Cookies, and Third-Parties. We believe in complete transparency about how we handle your data.
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
                <span>{section.title}</span>
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

export default PrivacyPolicy;
