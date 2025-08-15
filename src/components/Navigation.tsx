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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Contact Info & Resume */}
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-muted-foreground text-sm">
              Email: ogunyemiadetunji17@gmail.com
            </span>
            <a
              href="https://www.canva.com/design/DAGeNjN5Bvw/X8F8YSqc6Xguynba9rrkZA/edit?utm_content=DAGeNjN5Bvw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-professional text-sm py-2 px-4"
            >
              My Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 left-0 w-full bg-[#111]/95 backdrop-blur-lg border-t border-border z-50 flex flex-col px-6 py-8 space-y-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-2xl text-foreground hover:text-primary transition-colors duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl text-foreground hover:text-primary transition-colors duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground text-base mb-4">
                Email: ogunyemiadetunji17@gmail.com
              </p>
              <a
                href="https://www.canva.com/design/DAGeNjN5Bvw/X8F8YSqc6Xguynba9rrkZA/edit?utm_content=DAGeNjN5Bvw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-professional text-base py-3 px-6 w-full block text-center"
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