import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import AOS from 'aos';
import { P } from 'node_modules/framer-motion/dist/types.d-Cjd591yU';

const projects = [
  {
    title: "Hekto",
    description: "A modern e-commerce platform with a clean UI and seamless shopping experience.",
        video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SV2kQgK3qAJOdopvl9f6Te0nGXVYKEtFUQPh3",
    link: "https://ecommerce-react-app-ashy.vercel.app/"
  },
  {
    title: "Gig zeal",
    description: "A gig marketplace connecting freelancers and clients for diverse projects.",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SCj5Cn9Ksq1N0OW3AibZc2rRxJeSTf79LjdCF",
    link: "https://gigzeal.com/home-4/"
  },
  {
    title: "KingdomHealth Mobile",
    description: "A healthcare mobile app for booking appointments and managing health records.",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SWcCEAhICn6cBs4NXh10FariduSAPEkb9yMQV",
    link: "https://kingdomhealthmobile.vercel.app/"
  },
  {
    title: "Forex Trading App",
    description: "A real-time forex trading platform with analytics and portfolio management.",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SAMjhc7X16vUTrDPjMZ8wRWodqahlNx2eC9GH",
    link: "https://forex-app-main.vercel.app/"
  },
  {
    title: "FixMaster",
    description: "A service platform for booking home repairs and maintenance professionals.",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SKPGVVtkR9bHnsDy4i2P8gVTU1CuXowfI6BdZ",
    link: "https://fixmaster.com.ng/"
  },
  {
    title: "PsychInsights",
    description: "A mental health app offering resources, assessments, and expert advice.",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SnnYJBdAZAJIdLTfSpM329Gg8DOPbq14FioXz",
    link: "https://psychinsightsapp.com/"
  },
  {
    title: "AI Agent: Phone Agent",
    description: "An AI-powered phone agent for automating customer support and tasks.",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SjRqvwEQKrDuYL1t26f7CjbFIX4qP0MhJHZdS",
    link: "https://creator.voiceflow.com/prototype/6800a873503fdd626caa976c"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <>
      <Navigation />
      <section className="py-10 sm:py-20 px-2 sm:px-6 bg-background min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 flex flex-col items-center gap-2 sm:gap-4">
              <div className="flex flex-row items-center gap-2 mt-2">
                <span className="w-3 h-3 rounded-full bg-lime-500 animate-pulse block"></span>
                <span className="text-sm sm:text-base text-white opacity-80 font-medium">My recent projects</span>
              </div>
              <span className="mt-2">Let's explore!</span>
            </h2>
          </div>
          <div className="flex flex-col gap-y-8 sm:gap-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-transparent"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-light text-foreground mb-4 tracking-tight">
                  {project.title}
                </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">{project.description}</p>
                <div className="w-full flex justify-center">
                      <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-professional mb-3 max-w-5xl w-full">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload noremoteplayback"
                      disablePictureInPicture
                      tabIndex={-1}
                      onContextMenu={e => e.preventDefault()}
                      preload="auto"
                      style={{ display: 'block', width: '100%', borderRadius: '1.25rem', background: '#fff' }}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-sm font-semibold rounded-full border border-gray-700 bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-none mt-4 -ml-1 mr-32"
                    style={{ minWidth: 110 }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsSection />
      <Footer />
    </>
  );
};

export default Projects;
