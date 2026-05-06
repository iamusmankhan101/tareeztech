import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Personal Statement",
      content: (
        <div className="space-y-4">
          <p>
            We are committed to creating a secure and user-friendly experience for every customer. To achieve this, we aim to be as clear as possible about our all our policies, as is evident by our transparent Terms and Conditions.
          </p>
          <p>
            When you visit our site, tareeztech.com, some of your personal information supplied during your order or by means of our cookies policy may be gathered.
          </p>
        </div>
      )
    },
    {
      title: "What are 'cookies'?",
      content: (
        <p>
          Cookies are little text files that are stored within your browsers cache. First and third-party cookies are used on this site for functionality, statistics, and advertising.
        </p>
      )
    },
    {
      title: "Why do we use cookies?",
      content: (
        <div className="space-y-4">
          <p>
            There are specific cookies necessary for a website to function properly. Cookies is what keep track of settings, thus allowing your shopping experience to be tailored to you (remembering your preference or settings).
          </p>
          <p>
            Cookies also gathers data, for example, like the time of a session, viewed pages, or just general demographic information, like age and gender. The information that is gathered can then be used for analytical pursuits, allowing us to generate customized shopping experiences for our users. We do not use cookies that will track or identify you.
          </p>
        </div>
      )
    },
    {
      title: "What information do we gather specifically?",
      content: (
        <p>
          The information we gather is what you supply us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, address, or general contact information. Cookies will also gather session information like the pages viewed, the amount of time spent in the session, transactions, and any other general demographic information (origin, gender, age).
        </p>
      )
    },
    {
      title: "What third-parties do we share your information with?",
      content: (
        <p>
          Any information we gather is only shared with our affiliate partners for analytical reasons. We will not share your personal information past our brand and trusted brand partners.
        </p>
      )
    },
    {
      title: "Website Media",
      content: (
        <p>
          We (tareeztech.com) own all media that is on this website, unless stated otherwise. All photography work is done by Tareez Tech.
        </p>
      )
    },
    {
      title: "Disclosure of Your Information",
      content: (
        <div className="space-y-4">
          <p>
            You have the right to request your data. If something is incorrect, you can have it altered or removed.
          </p>
          <p>
            You can also disable cookies on your device by changing your browser's settings. You have the option to use opt-out programs like, 'NAI's Consumer opt-out' or 'Google Analytics opt-out browser add-on'. These prevent cookies from being used in your browser. Know that if you do this, our site may not function properly.
          </p>
        </div>
      )
    },
    {
      title: "Updates",
      content: (
        <p>
          Our privacy policies are subject to change. All updates will appear on this page.
        </p>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 bg-black min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm tracking-widest text-white/60 uppercase font-medium">
            Our Personal Statement, Cookies, Third-Parties
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 lg:gap-24 items-start">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">
                {section.title}
              </h2>
              <div className="text-white/70 text-[15px] leading-loose">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
