"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Courses', href: 'courses' },
    { name: 'Colleges', href: 'colleges' },
    { name: 'Services', href: 'services' },
    { name: 'Admission Process', href: 'process' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="flex items-center gap-3">
          <Image
            src="/brand-logo.svg"
            alt="ED LINE Edu Consultancy logo"
            width={42}
            height={42}
            priority
            className="h-10 w-10 rounded-md"
          />
          <div>
            <h1 className="text-xl font-bold leading-tight m-0" style={{ color: '#0A4D8C' }}>ED LINE</h1>
            <p className="text-xs font-medium m-0" style={{ color: '#1F7AE0' }}>Edu Consultancy</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors text-sm lg:text-base cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => { e.preventDefault(); scrollTo('register'); }}
            className="btn-primary cursor-pointer"
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          style={{ color: '#0A4D8C' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-gray-100 animate-fade-in" style={{ zIndex: 60 }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className="text-gray-800 font-medium block py-2 border-b border-gray-50 hover:text-blue-700 cursor-pointer"
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="btn-primary w-full mt-2 text-center cursor-pointer"
            onClick={(e) => { e.preventDefault(); scrollTo('register'); }}
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
