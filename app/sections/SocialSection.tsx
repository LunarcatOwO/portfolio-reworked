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

export default function SocialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div ref={contentRef} className="text-center">
          <p className="text-pink-400 text-sm tracking-[0.3em] uppercase mb-4">Connect</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Social Posts</h2>

          <div className="relative bg-zinc-900/50 border border-zinc-800 p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/5" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 border border-zinc-700 flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-zinc-400 text-lg mb-2">This is where social media posts should be...</p>
              <p className="text-zinc-600 text-sm">But for now, just pretend there&apos;s some sort of content.</p>
            </div>
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-zinc-700" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-zinc-700" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-zinc-700" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-zinc-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
