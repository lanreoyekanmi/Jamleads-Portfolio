import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About & Contact', href: '/about' }
  ];

  // Only show nav when not scrolled
  if (isScrolled) return null;

  return (
    <nav className={`w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-2 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-white hover:text-white transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-white transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-white"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Contact Info & Resume */}
          <div className="hidden md:flex items-center space-x-3 md:space-x-6">
            <span className="text-white text-sm">
              Email: ogunyemiadetunji17@gmail.com
            </span>
            <a
              href="/Adetunji Ogunyemi Product Manager Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-professional text-sm py-2 px-4 text-white border-white"
            >
              My Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors self-end"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 left-0 w-full bg-[#111]/95 backdrop-blur-lg border-t border-white z-50 flex flex-col px-6 py-8 space-y-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-2xl text-white hover:text-white transition-colors duration-300 font-semibold border-b-2 border-transparent hover:border-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl text-white hover:text-white transition-colors duration-300 font-semibold border-b-2 border-transparent hover:border-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="pt-6 border-t border-white">
              <p className="text-white text-base mb-4">
                Email: ogunyemiadetunji17@gmail.com
              </p>
              <a
                href="/Adetunji Ogunyemi Product Manager Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-professional text-base py-3 px-6 w-full block text-center text-white border-white"
              >
                My Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;