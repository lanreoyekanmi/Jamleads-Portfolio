import { useEffect } from 'react';
import AOS from 'aos';

const CTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section className="py-24 w-full bg-black">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Featured projects label */}
        <div className="flex items-center mb-6" data-aos="fade-right">
          <span className="w-3 h-3 rounded-full bg-lime-400 mr-3 animate-blink"></span>
          <span className="text-lg font-medium text-neutral-300">Featured projects</span>
        </div>
        {/* Huge heading */}
        <h2
          className="text-5xl md:text-7xl font-bold text-white mb-16 leading-[1.08] tracking-tight text-left"
          data-aos="fade-up"
        >
          100% Guaranteed Quality<br className="hidden md:block" />
          Delivery for Your Money.
        </h2>
        {/* Big glowing button */}
        <div className="mt-10" data-aos="zoom-in">
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-6 rounded-full text-lg font-medium bg-lime-400 text-black shadow-[0_0_40px_0_rgba(132,204,22,0.4)] hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-lime-300"
            style={{ boxShadow: '0 0 40px 0 #84cc16aa' }}
          >
            Become a client
            <span className="ml-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


