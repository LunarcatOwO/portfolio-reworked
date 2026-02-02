'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        projectRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: projectRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen py-32 px-4 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-pink-400" />
            <p className="text-pink-400 text-sm tracking-[0.3em] uppercase">Portfolio</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Recent Things I&apos;ve Made</h2>
        </div>

        <div ref={projectRef} className="relative">
          {projects.map((project, index) => (
            <div key={project.title} className="group relative bg-zinc-900/30 border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-pink-400/30">
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-zinc-700 font-bold">0{index + 1}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 tracking-wider uppercase">{project.status}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs text-pink-400 border border-pink-400/30 bg-pink-400/5">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="self-start group/btn flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
                    >
                      <span className="text-sm font-medium tracking-wider uppercase">View Project</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-transparent group-hover:border-pink-400 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-pink-400 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <span className="text-zinc-600 text-sm font-mono">1</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-600 text-sm font-mono">1</span>
        </div>
      </div>
    </section>
  );
}
