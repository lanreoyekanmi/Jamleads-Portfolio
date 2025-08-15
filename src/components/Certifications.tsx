import { useEffect, useRef } from 'react';
import AOS from 'aos';

const certificates = [
  { src: '/certificate/C2.png', alt: 'Certificate C2' },
  { src: '/certificate/C3.png', alt: 'Certificate C3' },
  { src: '/certificate/C5.png', alt: 'Certificate C5' },
  { src: '/certificate/C6.png', alt: 'Certificate C6' },
  { src: '/certificate/C7.png', alt: 'Certificate C7' },
  { src: '/certificate/C8.png', alt: 'Certificate C8' },
  { src: '/certificate/CAPM.png', alt: 'Certificate CAPM' },
  { src: '/certificate/PMI certificate.png', alt: 'PMI Certificate' },
];


const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  // Duplicate certificates for seamless loop
  const marqueeCertificates = [...certificates, ...certificates];

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 bg-background relative overflow-x-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Certifications</h2>
        <div className="relative w-full flex items-center justify-center">
          <div className="certs-marquee whitespace-nowrap flex items-center w-full overflow-x-hidden scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex animate-stats-marquee">
              {marqueeCertificates.map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center min-w-[420px] px-8">
                  <img
                    src={cert.src}
                    alt=""
                    className="w-full h-72 object-contain rounded-xl bg-white/80 shadow-xl"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
