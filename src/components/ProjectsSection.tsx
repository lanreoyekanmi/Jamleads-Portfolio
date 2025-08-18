import Navigation from '@/components/Navigation';
import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';


const projects = [
  {
    title: "Hekto",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SV2kQgK3qAJOdopvl9f6Te0nGXVYKEtFUQPh3",
    link: "https://ecommerce-react-app-ashy.vercel.app/"
  },
  {
    title: "Gig zeal",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SCj5Cn9Ksq1N0OW3AibZc2rRxJeSTf79LjdCF",
    link: "https://gigzeal.com/home-4/"
  },
  {
    title: "KingdomHealth Mobile",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SWcCEAhICn6cBs4NXh10FariduSAPEkb9yMQV",
    link: "https://kingdomhealthmobile.vercel.app/"
  },
  {
    title: "Forex Trading App",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SAMjhc7X16vUTrDPjMZ8wRWodqahlNx2eC9GH",
    link: "https://forex-app-main.vercel.app/"
  },
  {
    title: "FixMaster",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SKPGVVtkR9bHnsDy4i2P8gVTU1CuXowfI6BdZ",
    link: "https://fixmaster.com.ng/"
  },
  {
    title: "PsychInsights",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SnnYJBdAZAJIdLTfSpM329Gg8DOPbq14FioXz",
    link: "https://psychinsightsapp.com/"
  },
  
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background font-manrope text-[22px]">
      <div className="container mx-auto">
        {/* Render all rows except the last two projects as normal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 relative">
          {projects.slice(0, projects.length - 2).map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-transparent font-manrope text-[22px] relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Vertical divider for md+ screens, only for the left column */}
              {index % 2 === 0 && (
                <div className="hidden md:block absolute top-0 right-[-20px] h-[calc(100%+40px)]" style={{ zIndex: 1 }}>
                  <div className="w-[2px] h-full bg-gray-800" style={{ minHeight: '100%' }} />
                </div>
              )}
          <div className="-mx-6 md:-mx-10 w-screen mt-6">
            <hr className="border-0 h-[3px] bg-gray-800 mb-10 w-full mt-6" />
          </div>
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-6 tracking-tight font-manrope text-[22px]">
                {project.title}
              </h3>
              <div className="text-lg text-gray-500 mb-2 font-normal">Software Development</div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl overflow-hidden bg-card border border-border shadow-professional mb-3 block mt-8"
                tabIndex={-1}
                style={{ borderRadius: '1.25rem', background: '#fff' }}
              >
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  tabIndex={-1}
                  onContextMenu={e => e.preventDefault()}
                  preload="auto"
                  className="w-full aspect-video object-cover"
                  style={{ display: 'block', width: '100%', borderRadius: '1.25rem', background: '#fff' }}
                />
              </a>
            </div>
          ))}
        </div>
        {/* Last row: two projects and the green button, in a 1-column grid on mobile, 3-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mt-10">
          {projects.slice(-2).map((project, index) => (
            <div
              key={project.title}
              className="flex flex-col items-start bg-transparent font-manrope text-[22px] relative"
              data-aos="fade-up"
              data-aos-delay={(projects.length - 2 + index) * 150}
            >
              {/* Vertical divider for md+ screens, only for the left column */}
              {index === 0 && (
                <div className="hidden md:block absolute top-0 right-[-20px] h-[calc(100%+40px)]" style={{ zIndex: 1 }}>
                  <div className="w-[2px] h-full bg-gray-800" style={{ minHeight: '100%' }} />
                </div>
              )}
              <div className="-mx-6 md:-mx-10 w-screen">
                <hr className="border-0 h-[3px] bg-gray-800 mb-10 w-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-6 tracking-tight font-manrope text-[22px]">
                {project.title}
              </h3>
              <div className="text-lg text-gray-500 mb-2 font-normal">Software Development</div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl overflow-hidden bg-card border border-border shadow-professional mb-3 block mt-8"
                tabIndex={-1}
                style={{ borderRadius: '1.25rem', background: '#fff' }}
              >
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  tabIndex={-1}
                  onContextMenu={e => e.preventDefault()}
                  preload="auto"
                  className="w-full aspect-video object-cover"
                  style={{ display: 'block', width: '100%', borderRadius: '1.25rem', background: '#fff' }}
                />
              </a>
            </div>
          ))}
          {/* Big green button as the third column */}
          <div className="flex flex-col justify-center items-center bg-[#7ED321] rounded-2xl min-h-[220px] h-full w-full col-span-1 mt-10" style={{ minHeight: '220px' }}>
            <a
              href="/projects"
              className="flex items-center justify-center gap-3 text-gray-900 text-xl font-semibold font-manrope px-6 py-5 rounded-2xl w-full h-full transition-transform duration-200 ease-in-out hover:scale-95"
              style={{ minHeight: '220px' }}
            >
              View all projects
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
