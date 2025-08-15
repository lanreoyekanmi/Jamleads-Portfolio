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
      className="min-h-screen flex items-start justify-center pt-20 px-0 relative"
      style={{
        background: 'url(/background.png) center center / cover no-repeat',
        backgroundColor: 'rgba(0,0,0,0.92)'
      }}
      data-aos="fade-in"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-stretch min-h-[60vh]">
          {/* Profile Section */}
          <div className="flex flex-col items-start justify-center h-full" data-aos="fade-up">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                  <img
                    src="https://framerusercontent.com/images/95HJRg2FTdKwLXvY3RQ1icJj210.jpg?scale-down-to=512"
                    alt="Adetunji Ogunyemi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-white leading-tight mb-3">Adetunji Ogunyemi</h3>
                  <p className="text-neutral-300 text-base mb-4">Project Manager CAPM®</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-neutral-300 hover:text-lime-400 transition-colors">
                      <Linkedin size={22} />
                    </a>
                    <a href="https://x.com/adetunjijay" className="text-neutral-300 hover:text-lime-400 transition-colors">
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
          <div className={`flex flex-col items-start justify-center transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`} data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.08] tracking-tight text-left">
              Hi! I'm Adetunji
            </h1>
            <div className="flex flex-col gap-6 mb-10 w-full max-w-2xl">
              <div className="inline-block bg-neutral-800/90 rounded-full px-8 py-4 text-2xl font-semibold text-white shadow-md">
                IT Project Manager CAPM®
              </div>
              <div className="inline-block border-2 border-white rounded-full px-8 py-4 text-2xl font-semibold text-white shadow-md">
                Software Engineer | AI & ML
              </div>
            </div>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10">
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
              className="inline-flex items-center px-10 py-6 rounded-full text-lg font-medium bg-lime-400 text-black shadow-[0_0_40px_0_rgba(132,204,22,0.4)] hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-lime-300"
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