import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import GooeyNav from './GooeyNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Highlight the nav item matching the current route
  const activeNavIndex = NAV_LINKS.findIndex(link => link.href === location.pathname) ?? 0;
  const defaultIndex = activeNavIndex >= 0 ? activeNavIndex : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const gooeyItems = NAV_LINKS.map(link => ({
    label: link.label,
    href: link.href
  }));

  const handleMobileLinkClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      // If on home page, scroll to section; otherwise navigate home then scroll
      if (location.pathname === '/') {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center relative">

          {/* Centered GooeyNav Links */}
          <div className="hidden md:flex items-center">
            <GooeyNav
              items={gooeyItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={defaultIndex}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Right aligned Button & Mobile Toggle */}
          <div className="absolute right-6 flex items-center gap-4">
            <button className="hidden md:block bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              Register Now
            </button>

            {/* Mobile menu icon */}
            <button
              className="md:hidden text-white p-2 -mr-2 relative z-[60]"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-20 left-4 right-4 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col py-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleMobileLinkClick(link.href)}
                    className={`text-left px-6 py-3.5 text-base font-medium transition-colors ${(link.href === location.pathname || (link.href.startsWith('#') && location.pathname === '/'))
                        ? 'text-white'
                        : 'text-gray-400'
                      } hover:text-white hover:bg-white/5 active:bg-white/10`}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <div className="px-6 pt-4 pb-2 border-t border-white/10 mt-2">
                  <button className="w-full bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}