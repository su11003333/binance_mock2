import { useEffect, useState } from 'react';

import Community from '../components/Community';
import Ecosystem from '../components/Ecosystem';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';

export function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div
      className='bg-bnb-dark flex min-h-screen flex-col font-sans text-white'
    >
      <Navbar
        scrollPosition={scrollPosition}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className='flex-grow'>
        <Hero />
        <Stats />
        <Features />
        <Ecosystem />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
