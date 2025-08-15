
import { Mail, MapPin, Calendar } from 'lucide-react';

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

const ContactSection = () => {
  return (
    <section id="contact" className="w-full max-w-xl bg-[#181818] border border-[#222] rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-semibold mb-6 text-white">Contact</h3>
      <div className="space-y-5 mb-8">
        {contactInfo.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#232323]">
              <item.icon className="w-5 h-5 text-green-400" />
            </span>
            <div>
              <div className="text-base font-medium text-white/90">{item.label}</div>
              {item.href ? (
                <a href={item.href} className="text-green-400 hover:underline text-sm">{item.value}</a>
              ) : (
                <div className="text-white/60 text-sm">{item.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <a
        href="mailto:ogunyemiadetunji17@gmail.com"
        className="w-full mt-2 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold text-base transition-colors text-center block"
      >
        Send Message
      </a>
    </section>
  );
};

export default ContactSection;