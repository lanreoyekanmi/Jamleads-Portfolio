import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
// import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Certifications from '@/components/Certifications';
import SkillsSection from '@/components/SkillsSection';
import TagsMarquee from '@/components/TagsMarquee';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    // Initialize AOS with proper ES6 import
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      <StatsSection />
      <CTASection />
      <ProjectsSection />
      <SkillsSection />
      <TagsMarquee />
      <FeaturesSection />
      <Certifications />
      <StatsSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
