
import { Linkedin, X } from 'lucide-react';
// If you have a profile image, import it here. Otherwise, use a placeholder.
const profileImg = '/profile.jpg';


const Footer = () => {
  return (
    <footer className="px-0 py-0 bg-[#111112] border-t border-border relative overflow-hidden">
      {/* SVG background grid/curve overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 420 Q360 320 720 420 T1440 420 V0 H0 Z" fill="#18181b" fillOpacity="0.7" />
        <path d="M0 320 Q360 220 720 320 T1440 320" stroke="#232325" strokeWidth="2" fill="none" />
        <path d="M0 220 Q360 120 720 220 T1440 220" stroke="#232325" strokeWidth="2" fill="none" />
      </svg>
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between gap-0 min-h-[420px] relative z-10">
        {/* Left: Big headline */}
        <div className="flex-1 flex flex-col justify-between p-10 md:p-16 border-r border-border/30">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 font-medium text-lg">Available for freelance</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
              {`Let's create\nsomething\nextraordinary\ntogether.`}
            </h2>
          </div>
        </div>
        {/* Right: Profile card */}
        <div className="flex-1 flex flex-col justify-center items-center p-10 md:p-16 bg-black/80">
          <div className="flex flex-col items-center gap-6">
            <img src={profileImg} alt="Adetunji Ogunyemi" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" />
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Adetunji Ogunyemi</h3>
              <p className="text-lg text-white/80 mb-3">Project Manager CAPM®</p>
              <div className="flex items-center justify-center gap-4 mb-3">
                <a href="https://www.linkedin.com/in/jamleads/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/ogunyemiadetunji" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                  <X className="w-6 h-6" />
                </a>
              </div>
              <div className="text-white/90 text-lg font-semibold">ogunyemiadetunji17@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom: Copyright and developer */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t border-border/30 mt-0 relative z-10">
        <div className="text-white/70 text-sm">&copy; {new Date().getFullYear()} All rights reserved</div>
        <div className="text-white/80 text-sm">Developed by <span className="font-semibold"><a href='https://github.com/lanreoyekanmi'>Olanrewaju</a></span></div>
      </div>
      {/* Floating Back to Top */}
      <a href="#top" className="fixed right-8 bottom-8 bg-white text-black rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition z-50" aria-label="Back to top">
        ↑
      </a>
      {/* Floating Become a Client Button */}
      <a
        href="mailto:ogunyemiadetunji17@gmail.com"
        className="fixed left-8 bottom-8 bg-lime-400 text-black rounded-full shadow-lg px-8 py-4 flex items-center justify-center text-lg font-semibold hover:bg-lime-500 transition z-50 border-2 border-black"
        style={{ boxShadow: '0 0 40px 0 #84cc16aa' }}
      >
        Become a Client
      </a>
    </footer>
  );
};

export default Footer;


