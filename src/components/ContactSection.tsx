import { useEffect } from 'react';
import { Mail, MapPin, Phone, Calendar } from 'lucide-react';
import AOS from 'aos';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ogunyemiadetunji17@gmail.com',
      href: 'mailto:ogunyemiadetunji17@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available for remote work worldwide',
      href: null
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open for new projects',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and discuss how I can help 
            you achieve your project goals with expert planning and execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{item.label}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-medium text-foreground mb-4">Specializations</h4>
              <div className="flex flex-wrap gap-3">
                {['Project Management', 'Agile Scrum', 'Software Development', 'AI & ML', 'Team Leadership', 'Resource Planning'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center md:text-left" data-aos="fade-left">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-professional">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto md:mx-0 mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Start Your Project
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your project requirements and how I can help you achieve your goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <button className="btn-professional w-full">
                  Send Message
                </button>
                <button className="btn-outline-professional w-full">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-border" data-aos="fade-up">
          <p className="text-muted-foreground">
            © 2024 Adetunji Ogunyemi. CAPM® Certified Project Manager.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;