import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-violet-600 px-4 py-2 text-center text-xs sm:text-sm font-medium text-white flex items-center justify-center gap-2 shadow-sm">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-amber-300" /> New
        </span>
        <span>Nova 3.0 is live! Explore intelligent automations and next-gen speed.</span>
        <a href="#showcase" className="underline font-semibold hover:text-indigo-100 hidden sm:inline-flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Nova<span className="text-indigo-400">.</span>
              </span>
              <span className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wider uppercase">Cloud OS</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#pricing"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-900 transition"
              >
                Sign In
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 shadow-lg shadow-indigo-500/25 transition"
              >
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

