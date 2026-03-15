"use client";
import { useState, useEffect } from 'react';
import { FiX, FiGift } from 'react-icons/fi';
import Link from 'next/link';

const ScholarshipBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 0
  });

  // Simulated countdown
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2 px-4 relative z-50 text-sm overflow-hidden border-b border-blue-700/50">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
      
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10 pr-6 sm:pr-0">
        
        <div className="flex items-center w-full sm:w-auto gap-3 font-medium">
          <span className="bg-accent/20 text-accent p-1.5 rounded-full animate-pulse shrink-0">
            <FiGift className="text-lg" />
          </span>
          <p className="text-left sm:text-left leading-snug flex-1 text-sm sm:text-base">
            <span className="text-accent font-bold">Limited Offer:</span> Early Bird Scholarships
            <br className="sm:hidden" /><span className="hidden sm:inline"> </span>
            available for 2026 Batch Admissions!
          </p>
        </div>
        
        <div className="flex items-center justify-center w-full sm:w-auto gap-4 mt-1 sm:mt-0">
          <div className="hidden lg:flex items-center gap-2 bg-black/20 rounded px-3 py-1 font-mono text-xs">
            <div className="text-center">
              <span className="font-bold text-accent">{String(timeLeft.days).padStart(2, '0')}</span>d
            </div>:
            <div className="text-center">
              <span className="font-bold text-accent">{String(timeLeft.hours).padStart(2, '0')}</span>h
            </div>:
            <div className="text-center">
              <span className="font-bold text-accent">{String(timeLeft.minutes).padStart(2, '0')}</span>m
            </div>:
            <div className="text-center w-6">
              <span className="font-bold text-accent">{String(timeLeft.seconds).padStart(2, '0')}</span>s
            </div>
          </div>
          
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('register');
              if (el) {
                const offset = 100;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="text-xs sm:text-sm font-black uppercase tracking-widest px-6 py-2 rounded-lg shadow-xl shadow-black/20 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            style={{ background: '#FFB400', color: '#ffffff' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1E5ADC'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FFB400'; e.currentTarget.style.color = '#ffffff'; }}
          >
            Claim Now
          </a>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0 text-white/50 hover:text-white p-2 transition-colors sm:ml-2"
            aria-label="Close banner"
          >
            <FiX className="text-xl sm:text-lg" />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ScholarshipBanner;
