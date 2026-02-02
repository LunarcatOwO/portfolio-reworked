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
import { skills } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-pink-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-rose-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <p className="text-pink-400 text-sm tracking-[0.3em] uppercase mb-4">Technologies</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Things I Use</h2>
          <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto" />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-8 transition-all duration-500 hover:border-pink-400/50 hover:bg-zinc-900"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute top-4 right-4 text-xs text-zinc-600 font-mono">0{index + 1}</span>
              <div className={`inline-flex items-center justify-center w-12 h-12 ${skill.color} mb-6`}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d={skill.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">{skill.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{skill.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
