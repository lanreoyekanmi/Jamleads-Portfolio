import { useEffect, useState } from 'react';
import { Linkedin, X as TwitterX } from 'lucide-react';
import AOS from 'aos';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-start justify-center pt-20 px-2 sm:px-0 relative"
      style={{
        background: 'url(/background.png) center center / cover no-repeat',
        backgroundColor: 'rgba(0,0,0,0.92)'
      }}
      data-aos="fade-in"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-12 items-stretch min-h-[60vh]">
          {/* Profile Section */}
          <div className="flex flex-col items-start justify-center h-full mb-8 lg:mb-0" data-aos="fade-up">
            <div>
              <div className="flex flex-col sm:flex-row items-center mb-6 gap-4 sm:gap-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                  <img
                    src="https://framerusercontent.com/images/95HJRg2FTdKwLXvY3RQ1icJj210.jpg?scale-down-to=512"
                    alt="Adetunji Ogunyemi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:ml-4 flex flex-col justify-center mt-4 sm:mt-0">
                  <h3 className="text-2xl font-semibold text-white leading-tight mb-3">Adetunji Ogunyemi</h3>
                  <p className="text-neutral-300 text-base mb-4">Project Manager CAPM®</p>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.linkedin.com/in/jamleads/" 
                      className="text-neutral-300 hover:text-lime-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={22} />
                    </a>
                    <a 
                      href="https://x.com/adetunjijay" 
                      className="text-neutral-300 hover:text-lime-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterX size={28} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-24"></div>
              <div className="text-lg text-white font-semibold tracking-wide">(2019 – PRESENT)</div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`flex flex-col items-start justify-center transition-all duration-500 mt-8 sm:mt-12 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`} data-aos="fade-up">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 leading-[1.08] tracking-tight text-left">
              Hi! I'm Adetunji
            </h1>
            <div className="flex flex-col gap-2 mb-3 w-full max-w-2xl">
              <div className="inline-block bg-neutral-800/90 rounded-[48px] px-4 sm:px-10 py-2 sm:py-3 text-lg sm:text-2xl font-bold text-white shadow-md w-full sm:w-[600px] h-[56px] sm:h-[70px] flex items-center justify-center">
                IT Project Manager CAPM®
              </div>
              <div className="inline-block border-2 border-white rounded-[48px] px-4 sm:px-10 py-2 sm:py-3 text-lg sm:text-2xl font-bold text-white shadow-md w-full sm:w-[600px] h-[56px] sm:h-[70px] flex items-center justify-center">
                Software Engineer | AI & ML
              </div>
            </div>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-6">
              As a CAPM®-certified Project Manager with a background in software development, 
              I bring clarity and structure to complex projects. Recognised as a top voice in 
              Agile Scrum, I've successfully led product and project teams across North America 
              and Europe, spanning FinTech, EduTech, and AI solutions. I'm also passionate about 
              teaching, having created online courses and built a thriving community of project 
              management learners. Let's connect and bring your ideas to life with expert 
              resource planning and analysis.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-10 py-5 rounded-full text-lg font-medium bg-lime-400 text-black shadow-[0_0_40px_0_rgba(132,204,22,0.4)] hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-lime-300"
              style={{ boxShadow: '0 0 40px 0 #84cc16aa' }}
            >
              See what I can do
              <span className="ml-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
