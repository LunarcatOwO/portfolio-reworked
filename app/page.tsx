'use client';

import { useState, useEffect } from 'react';
import { LoadingScreen, Navigation, Footer } from './components';
import { HeroSection, SkillsSection, ProjectsSection, SocialSection } from './sections';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <SocialSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
