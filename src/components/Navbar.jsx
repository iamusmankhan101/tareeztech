import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceLinks = [
  { name: 'Digital Marketing Lahore', href: '/services/digital-marketing-lahore' },
  { name: 'SEO Services Lahore', href: '/services/seo-services-lahore' },
  { name: 'Social Media Marketing', href: '/services/social-media-marketing-pakistan' },
  { name: 'Web Development Lahore', href: '/services/web-development-lahore' },
  { name: 'Web Design Pakistan', href: '/services/web-design-pakistan' },
  { name: 'Web App Development', href: '/services/web-app-development' },
  { name: 'WordPress Development', href: '/services/wordpress-development' },
  { name: 'Graphic Design & Video Editing', href: '/services/graphic-design-video-editing' },
  { name: 'Ecommerce & Digital Marketing', href: '/services/ecommerce-digital-marketing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();
  const isLightMode = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease',
        background: isLightMode 
          ? (scrolled ? 'rgba(255, 255, 255, 0.95)' : '#fff')
          : (scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent'),
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled 
          ? (isLightMode ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)')
          : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Logo */}
        <a href="https://tareeztech.com" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Tareez Tech Logo"
            style={{
              height: 75,
              width: 'auto',
              objectFit: 'contain',
              transition: 'opacity 0.2s',
              filter: isLightMode ? 'invert(1)' : 'none',
            }}
          />
        </a>

        {/* Desktop Links */}
        <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <a
            href="/#work"
            style={{ padding: '8px 18px', fontSize: 14, fontWeight: 500, color: isLightMode ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s', borderRadius: 8 }}
            onMouseEnter={e => (e.currentTarget.style.color = isLightMode ? '#000' : '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = isLightMode ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.75)')}
          >Work</a>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="nav-dropdown">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 18px', fontSize: 14, fontWeight: 500, color: isLightMode ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.75)', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 8, fontFamily: 'inherit', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = isLightMode ? '#000' : '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = isLightMode ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.75)')}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className={`nav-dropdown-menu${isLightMode ? ' nav-dropdown-menu--light' : ''}`}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                >
                  {serviceLinks.map((s) => (
                    <Link key={s.href} to={s.href} className="nav-dropdown-link" onClick={() => setServicesOpen(false)}
                      style={{ display: 'block', padding: '10px 16px', fontSize: '0.85rem', fontWeight: 500, color: isLightMode ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.65)', textDecoration: 'none', borderRadius: 10, transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = isLightMode ? '#000' : '#fff'; e.currentTarget.style.background = isLightMode ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = isLightMode ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent'; }}
                    >{s.name}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                padding: '8px 18px',
                fontSize: 14,
                fontWeight: 500,
                color: isLightMode ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                borderRadius: 8,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = isLightMode ? '#000' : '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = isLightMode ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.75)')}
            >
              {link.name}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="/#contact"
            style={{
              marginLeft: 12,
              padding: '10px 24px',
              borderRadius: 999,
              background: isLightMode ? '#000' : '#fff',
              color: isLightMode ? '#fff' : '#000',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = isLightMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = isLightMode ? '#000' : '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: isLightMode ? '#000' : '#fff',
            padding: 8,
            cursor: 'pointer',
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <a href="/#work" onClick={() => setIsOpen(false)} style={{ padding: '14px 16px', fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', borderRadius: 12 }}>Work</a>

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 12, fontFamily: 'inherit', width: '100%', textAlign: 'left' }}
              >
                Services <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden', paddingLeft: 16 }}>
                    {serviceLinks.map((s) => (
                      <Link key={s.href} to={s.href} onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }} style={{ display: 'block', padding: '10px 16px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', borderRadius: 10 }}>{s.name}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '14px 16px',
                    fontSize: 16,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    borderRadius: 12,
                    transition: 'background 0.2s',
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '14px 24px',
                  borderRadius: 999,
                  background: '#fff',
                  color: '#000',
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center',
                  marginTop: 4,
                }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links { display: none !important; }
          .mobile-menu-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
