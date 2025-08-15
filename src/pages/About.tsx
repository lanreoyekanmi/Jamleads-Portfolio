import { useEffect } from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import AOS from 'aos';
import ContactSection from '@/components/ContactSection';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const highlights = [
    {
      icon: Award,
      title: "CAPM® Certified",
      description: "Certified Associate in Project Management by PMI"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams across North America and Europe"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "100% client retention rate with 25+ successful projects"
    },
    {
      icon: Zap,
      title: "Agile Expert",
      description: "Recognized as a top voice in Agile Scrum methodology"
    }
  ];

  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 px-6 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/background.png" 
            alt="Background Pattern" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div data-aos="fade-right">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-12 bg-gradient-to-r from-primary to-[hsl(88,60%,45%)] bg-clip-text text-transparent tracking-tight">
                About Me
              </h2>
              <div className="space-y-8 text-muted-foreground/90 leading-relaxed text-xl">
                <p className="text-xl md:text-2xl font-light">
                  As a CAPM®-certified Project Manager with a background in software development, 
                  I bring clarity and structure to complex projects. Recognized as a top voice in 
                  Agile Scrum, I've successfully led product and project teams across North America 
                  and Europe.
                </p>
                <p className="text-xl md:text-2xl font-light">
                  My expertise spans FinTech, EduTech, and AI solutions, where I've consistently 
                  delivered projects that exceed expectations. I combine technical knowledge with 
                  strategic thinking to ensure seamless project execution and optimal results.
                </p>
                <p className="text-xl md:text-2xl font-light">
                  I'm also passionate about teaching and community building. Through creating 
                  online courses and fostering a thriving project management community, I help 
                  others grow in their careers while staying at the forefront of industry trends.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="#projects" 
                  className="inline-flex items-center px-8 py-4 rounded-full text-background font-medium transition-all duration-300 bg-gradient-to-r from-primary to-[hsl(88,60%,45%)] hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:scale-105"
                >
                  See what I can do
                  <span className="ml-2 transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-6" data-aos="fade-left">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-base text-muted-foreground/90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>
      <div className="mt-24">
        <ContactSection />
      </div>
    </>
  );
};

export default AboutPage;
