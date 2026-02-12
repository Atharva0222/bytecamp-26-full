import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">

        <div className="flex items-center gap-2">

          <span className="text-lg font-bold tracking-wider">Bytecamp '26</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-6">
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
        </div>

        <div className="text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Bytecamp. All rights reserved.</p>
          <p>Made with ❤️ by Technical Team of SIESGST</p>
        </div>
      </div>
    </footer>
  );
}