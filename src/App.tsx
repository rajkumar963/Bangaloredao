import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics';
import TechnologyHighlights from './components/TechnologyHighlights';
import GetStarted from './components/ScrollingGallery';
import DevelopersHub from './components/DevelopersHub';


gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    gsap.to('html, body', {
      scrollBehavior: 'smooth',
    });

    // Global scroll animations
    const sections = gsap.utils.toArray('section');
    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0.8 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <KeyMetrics />
      <TechnologyHighlights />
      <GetStarted />
      <DevelopersHub />
     
    </div>
  );
}

export default App;