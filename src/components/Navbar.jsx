import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLightMode = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
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
