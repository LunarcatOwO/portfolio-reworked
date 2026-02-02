// Portfolio Of LunarcatOwO
// Copyright (C) 2026  LunarcatOwO

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(
        taglineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-500/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16">
        {/* Logo - matching loading screen style, left aligned */}
        <div ref={logoRef}>
          {/* Small text above logo */}
          <p className="text-zinc-500 text-xs md:text-sm tracking-[0.4em] uppercase mb-4">
            Portfolio
          </p>
          
          {/* Main logo text - stacked, two-colored like nav */}
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
            <div className="text-pink-400">LUNARCAT</div>
            <div className="flex items-baseline gap-2">
              <span className="text-white">OwO</span>
              <span className="text-zinc-600 text-sm md:text-base font-normal tracking-wider">.space</span>
            </div>
          </div>
        </div>

        {/* Tagline area - matching loading screen style */}
        <div ref={taglineRef} className="mt-16">
          {/* Small UI elements */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-pink-400">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <polygon points="6,0 12,12 0,12" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 border border-zinc-600" />
                <span className="text-zinc-500 text-[10px] tracking-wider">JUST DOING THINGS</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-zinc-700" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-zinc-400 text-sm md:text-base tracking-[0.15em] uppercase">
            Code & Create / Build & Deploy
          </p>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs text-zinc-500 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-pink-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
