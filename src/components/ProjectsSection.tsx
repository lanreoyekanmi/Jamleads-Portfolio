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
  {
    title: "AI Agent: Phone Agent",
    video: "https://eyby8gm0vc.ufs.sh/f/HgYPi2uNp42SjRqvwEQKrDuYL1t26f7CjbFIX4qP0MhJHZdS",
    link: "https://creator.voiceflow.com/prototype/6800a873503fdd626caa976c"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-transparent"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-2 tracking-tight">
                {project.title}
              </h3>
              <div className="w-full rounded-2xl overflow-hidden bg-card border border-border shadow-professional mb-3">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  tabIndex={-1}
                  onContextMenu={e => e.preventDefault()}
                  preload="auto"
                  style={{ display: 'block', width: '100%', borderRadius: '1.25rem', background: '#fff' }}
                  className="w-full aspect-video object-cover"
                />
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1.5 text-xs font-medium rounded bg-primary text-white hover:bg-primary/80 transition-colors shadow"
                style={{ minWidth: 90 }}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
