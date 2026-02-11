import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { motion } from 'framer-motion';
import GooeyNav from './GooeyNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const gooeyItems = NAV_LINKS.map(link => ({
    label: link.label,
    href: link.href
  }));

  return (
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
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}