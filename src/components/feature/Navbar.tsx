
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'ABOUT', path: '/about' },
    { name: 'COLLABORATIONS', path: '/collaborations' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const logoSrc = theme === 'dark' 
    ? 'https://static.readdy.ai/image/12afcc28f12d5c500713622508071ed6/b37445dd1bfb1f9e9cb56b16581691a1.jpeg'
    : 'https://static.readdy.ai/image/12afcc28f12d5c500713622508071ed6/484d00ddc9ccbbca96ced271ca884faa.jpeg';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoSrc}
            alt="Ivan The Photographer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest font-light transition-all duration-300 relative group cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white drop-shadow-lg'
              } ${location.pathname === link.path ? 'font-medium' : ''}`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full bg-teal' : 'w-0 group-hover:w-full group-hover:bg-teal'
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right Side: Theme Toggle & Book Session */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
              isScrolled || isMobileMenuOpen
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <i className="ri-moon-line text-lg"></i>
            ) : (
              <i className="ri-sun-line text-lg"></i>
            )}
          </button>

          {/* Book Session Button - Desktop */}
          <Link
            to="/contact"
            className={`hidden sm:block text-sm tracking-wide font-light transition-all duration-300 relative group cursor-pointer whitespace-nowrap ${
              isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white drop-shadow-lg'
            }`}
          >
            Book Session
            <span className="absolute bottom-0 left-0 w-full h-px bg-teal transition-all duration-300"></span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
              isScrolled || isMobileMenuOpen
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' 
                : 'bg-white/10 text-white'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base tracking-wide py-2 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-teal font-medium'
                    : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 bg-teal text-white text-center py-3 rounded-full text-sm font-medium"
            >
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
