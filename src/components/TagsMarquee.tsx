
import { useEffect, useRef } from 'react';
import AOS from 'aos';

const tags = [
  { value: 'Landing page', label: '' },
  { value: 'Artificial Intelligence', label: '' },
  { value: 'Project management', label: '' },
  { value: 'E-commerce', label: '' },
  { value: 'Corporate website', label: '' }
];

const TagsMarquee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  // Duplicate tags for seamless loop
  const marqueeTags = [...tags, ...tags];

  return (
    <section ref={sectionRef} className="py-8 px-2 sm:px-4 bg-card relative overflow-x-hidden">
      <div className="container mx-auto">
        {/* Horizontal Marquee Tags Slider */}
        <div className="relative w-full flex items-center justify-center">
          <div className="tags-marquee whitespace-nowrap flex items-center w-full overflow-x-hidden scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex animate-stats-marquee">
              {marqueeTags.map((tag, idx) => (
                <div key={idx} className="flex items-center justify-center min-w-[200px] px-4 py-2">
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    {tag.value}
                  </span>
                  {tag.label && (
                    <span className="ml-3 text-muted-foreground font-medium tracking-wide text-base md:text-lg">
                      {tag.label}
                    </span>
                  )}
                  {/* 3D asterisk/star */}
                  <span className="mx-6 flex items-center justify-center">
                    <span className="block w-6 h-6 relative">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <g filter="url(#asterisk3d)">
                          <path d="M12 3v18M12 12l7.5-7.5M12 12l7.5 7.5M12 12l-7.5-7.5M12 12l-7.5 7.5" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                        </g>
                        <defs>
                          <filter id="asterisk3d" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#84cc16"/>
                          </filter>
                          <linearGradient id="paint0_linear" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84cc16"/>
                            <stop offset="1" stopColor="#bef264"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default TagsMarquee;
