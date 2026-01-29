'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2500;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(newProgress));

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: onComplete,
          });
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  // Entrance animations
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
    );
    gsap.fromTo(
      taglineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, delay: 0.4, ease: 'power2.out' }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-transparent to-zinc-900/30" />

      {/* Left edge - LOADING BAR (fills from top down) */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-zinc-800/50">
        <div 
          className="absolute top-0 left-0 w-full bg-pink-400 transition-all duration-100 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Percentage - follows the loading bar */}
      <div
        className="absolute left-4 transition-all duration-100 ease-out"
        style={{ top: `${progress}%`, transform: 'translateY(-50%)' }}
      >
        <span className="text-pink-400 text-2xl md:text-3xl font-light tracking-tight leading-none">
          {progress}%
        </span>
        
        {/* Loading indicator */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-pink-400 animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="w-1 h-1 bg-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
          <span className="text-zinc-500 text-[10px] tracking-wider">Loading...</span>
        </div>
      </div>

      {/* Center-right - Logo */}
      <div
        ref={logoRef}
        className="absolute top-1/3 left-1/2 md:left-[55%] -translate-x-1/2 -translate-y-1/2"
      >
        {/* Small text above logo */}
        <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase mb-2">
          Portfolio
        </p>
        
        {/* Main logo text - styled like ENDFIELD */}
        <div className="flex items-end gap-1">
          <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
            <div>LUNARCAT</div>
            <div className="flex items-end gap-2">
              <span>OwO</span>
              {/* Square accent like Endfield */}
              <div className="w-4 h-4 md:w-5 md:h-5 bg-white mb-1" />
            </div>
          </div>
        </div>
        
        {/* Small decorative text */}
        <p className="text-zinc-600 text-[8px] tracking-[0.2em] mt-1 text-right">
          SPACE
        </p>
      </div>

      {/* Bottom center - Tagline area */}
      <div
        ref={taglineRef}
        className="absolute bottom-1/4 left-1/2 md:left-[55%] -translate-x-1/2"
      >
        {/* Small icon/UI elements */}
        <div className="flex items-center gap-3 mb-3">
          {/* Triangle icon */}
          <div className="text-pink-400">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <polygon points="6,0 12,12 0,12" />
            </svg>
          </div>
          
          {/* Small UI decoration */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 border border-zinc-600" />
              <div className="text-zinc-600 text-[8px] tracking-wider">STUDENT DEVELOPER</div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-zinc-700" />
              ))}
            </div>
          </div>
        </div>

        {/* Main tagline */}
        <p className="text-white text-sm md:text-base tracking-[0.15em] uppercase">
          Code & Create / Build & Deploy
        </p>
      </div>

      {/* Bottom left corner decoration */}
      <div className="absolute bottom-6 left-6 flex items-end gap-2">
        <div className="text-zinc-700 text-[10px] font-mono">+</div>
      </div>
    </div>
  );
}
