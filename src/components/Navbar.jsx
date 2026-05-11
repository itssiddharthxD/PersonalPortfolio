import React, { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = ({ activePanel, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfaf5]/80 backdrop-blur-sm border-b-2 border-slate-900 py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <div className="p-2 bg-slate-900 text-white rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
            <Palette className="w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-900">GAME<span className="text-orange-600 font-serif italic">Dev</span></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={cn(
                "px-4 py-2 text-sm font-bold transition-all duration-200 rounded-full",
                activePanel === link.id
                  ? "bg-slate-900 text-white rotate-2"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 -rotate-2"
              )}
            >
              {link.name}
            </button>
          ))}

        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#fdfaf5] border-b-2 border-slate-900 p-6 md:hidden shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-left py-3 text-xl font-bold border-b border-slate-100",
                  activePanel === link.id ? "text-orange-600" : "text-slate-800"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
