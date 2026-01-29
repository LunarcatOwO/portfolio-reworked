'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('nav', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <span className="text-lg font-bold text-pink-400">LUNARCAT</span>
            <span className="text-lg font-bold text-white">OWO</span>
          </a>
          <div className="flex items-center">
            {isScrolled && (
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-pink-400 transition-colors tracking-wider uppercase"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="hidden sm:inline">Back to Top</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
