import { useEffect } from 'react';
import AOS from 'aos';

const features = [
  {
    value: '100%',
    label: 'customer satisfaction',
    sublabel: 'Percent',
    bg: 'bg-[#84cc16]',
    text: 'text-black',
    svg: (
      <svg className="absolute left-0 bottom-0 w-full h-full" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="160" cy="320" r="160" fill="#A3E635" fillOpacity="0.5" />
        <circle cx="160" cy="320" r="80" fill="#D9F99D" fillOpacity="0.7" />
      </svg>
    )
  },
  {
    value: '6+',
    label: 'of experience',
    sublabel: 'Years',
    bg: 'bg-neutral-900',
    text: 'text-white',
    svg: (
      <svg className="absolute left-0 bottom-0 w-full h-full" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M160 320C248.365 320 320 248.365 320 160C320 71.6352 248.365 0 160 0C71.6352 0 0 71.6352 0 160C0 248.365 71.6352 320 160 320Z" fill="url(#darkGradient)" fillOpacity="0.18" />
        <defs>
          <radialGradient id="darkGradient" cx="0.5" cy="0.5" r="0.7" fx="0.5" fy="0.5">
            <stop stopColor="#fff" stopOpacity="0.1" />
            <stop offset="1" stopColor="#000" stopOpacity="0.3" />
          </radialGradient>
        </defs>
      </svg>
    )
  },
  {
    value: '25+',
    label: 'completed',
    sublabel: 'Projects',
    bg: 'bg-white',
    text: 'text-neutral-900',
    svg: (
      <svg className="absolute left-0 bottom-0 w-full h-full" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.18">
          <path d="M160 60L180 140H260L195 180L215 260L160 210L105 260L125 180L60 140H140L160 60Z" fill="#000" />
        </g>
      </svg>
    )
  }
];

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl flex flex-col items-center justify-center min-w-[380px] max-w-[480px] h-[220px] md:h-[240px] p-8 md:p-10 ${feature.bg} ${feature.text} shadow-2xl overflow-hidden`}
            data-aos="fade-up"
            data-aos-delay={idx * 120}
          >
            {feature.svg}
            <div className="relative z-10 flex flex-col items-start w-full h-full justify-center px-2 md:px-4">
              <div className="text-5xl md:text-6xl font-bold mb-4 leading-none">{feature.value}</div>
              <div className="absolute bottom-6 right-8 flex flex-col items-end">
                <div className="text-base md:text-lg font-semibold opacity-80">{feature.sublabel}</div>
                <div className="text-lg md:text-xl font-medium mt-1 opacity-90 text-right">
                  {feature.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
