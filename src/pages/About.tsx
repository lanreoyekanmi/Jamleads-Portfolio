

import { Linkedin, X } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';
import Navigation from '@/components/Navigation';


const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#111] text-white">
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col gap-12 sm:gap-16 lg:flex-row lg:items-start lg:gap-0 relative">
        {/* Left Side */}
        <div className="flex flex-col items-center sm:items-center lg:items-start w-full lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 lg:sticky lg:top-12 lg:self-start z-20">
          {/* Only sticky on large screens, not on mobile */}
          {/* Available for work */}
          <div className="flex items-center mb-6">
            <span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            <span className="text-lg font-medium">Available for work</span>
          </div>
          {/* About me heading below available for work */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10 leading-tight mt-4">About me</h1>
          {/* Profile, Social, and Not to brag in a row on desktop, stacked on mobile */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start w-full gap-8 mb-4">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#222] mb-4 sm:mb-0 shadow-lg"
              style={{ aspectRatio: '1/1' }}
              draggable="false"
            />
            <div className="flex flex-col items-center sm:items-start gap-2 w-full">
              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <a href="https://www.linkedin.com/in/jamleads" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-6 h-6 text-white/80 hover:text-white" />
                </a>
                <a href="https://x.com/adetunjijay" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <span className="sr-only">X</span>
                  <X className="w-6 h-6 text-white/80 hover:text-white" />
                </a>
              </div>
              {/* Not to brag, but.. */}
              <div className="text-left w-full max-w-xs">
                <h3 className="text-2xl font-semibold mb-2">Not to brag, but..</h3>
                <p className="text-lg font-light leading-snug">
                  I’m dedicated to providing innovative, high-quality solutions that not only meet your goals but exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center items-start w-full mt-24">
          <div className="text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-full sm:max-w-2xl space-y-4 sm:space-y-6">
            <p className="mb-6">
              Hi, I'm Adetunji, an <span className="font-bold">IT PROJECT MANAGER</span> with over 6 years of experience in <span className="font-bold">SOFTWARE DEVELOPMENT</span>. I have a strong blend of technical expertise and I excel in leading initiatives that leverage innovative technology like AI &amp; ML to achieve business objectives and deliver impactful solutions
            </p>
            <p className="mb-6">
              Over the years, I’ve had the opportunity to work with a diverse range of clients, from startups to established brands, helping them bring their visions to life digitally.
            </p>
            <p>
              Let’s create something amazing together!
            </p>
          </div>
          {/* Contact section on the right */}
          <div className="w-full mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
            <ContactSection />
          </div>
        </div>
      </section>
        <StatsSection />
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
