import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Globe, Eye, Server, RefreshCw } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Personal Statement",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
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
      icon: <Server className="w-5 h-5 text-indigo-600" />,
      content: (
        <p>
          Cookies are little text files that are stored within your browsers cache. First and third-party cookies are used on this site for functionality, statistics, and advertising.
        </p>
      )
    },
    {
      title: "Why do we use cookies?",
      icon: <Eye className="w-5 h-5 text-purple-600" />,
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
      title: "What information do we gather?",
      icon: <FileText className="w-5 h-5 text-sky-600" />,
      content: (
        <p>
          The information we gather is what you supply us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, address, or general contact information. Cookies will also gather session information like the pages viewed, the amount of time spent in the session, transactions, and any other general demographic information (origin, gender, age).
        </p>
      )
    },
    {
      title: "Third-party sharing",
      icon: <Globe className="w-5 h-5 text-teal-600" />,
      content: (
        <p>
          Any information we gather is only shared with our affiliate partners for analytical reasons. We will not share your personal information past our brand and trusted brand partners.
        </p>
      )
    },
    {
      title: "Website Media",
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      content: (
        <p>
          We (tareeztech.com) own all media that is on this website, unless stated otherwise. All photography work is done by Tareez Tech.
        </p>
      )
    },
    {
      title: "Disclosure of Information",
      icon: <Lock className="w-5 h-5 text-rose-600" />,
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
      icon: <RefreshCw className="w-5 h-5 text-orange-600" />,
      content: (
        <p>
          Our privacy policies are subject to change. All updates will appear on this page.
        </p>
      )
    }
  ];

  return (
    <div className="relative pt-32 pb-24 px-4 md:px-8 bg-slate-50 min-h-screen text-slate-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto z-10"
      >
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left border-b border-slate-200 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Lock className="w-4 h-4" />
            <span>Last Updated: May 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light">
            Our Personal Statement, Cookies, and Third-Parties. We believe in complete transparency about how we handle your data.
          </p>
        </div>
        
        {/* Content Section */}
        <div className="space-y-12 md:space-y-0">
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 items-start md:py-12 border-b border-slate-200/60 last:border-0"
            >
              <div className="flex items-center gap-3 md:items-start md:flex-col md:gap-4">
                <div className="p-3 bg-white shadow-sm ring-1 ring-slate-100 rounded-2xl group-hover:shadow-md group-hover:ring-blue-100 transition-all duration-300">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  {section.title}
                </h2>
              </div>
              
              <div className="text-slate-600 text-base md:text-lg leading-relaxed font-light bg-white/50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none ring-1 ring-slate-100 md:ring-0">
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
