
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  const logoSrc = theme === 'dark' 
    ? 'https://static.readdy.ai/image/12afcc28f12d5c500713622508071ed6/b37445dd1bfb1f9e9cb56b16581691a1.jpeg'
    : 'https://static.readdy.ai/image/12afcc28f12d5c500713622508071ed6/484d00ddc9ccbbca96ced271ca884faa.jpeg';

  return (
    <footer className="bg-[#2B2B2B] dark:bg-[#0A0A0A] text-white transition-colors duration-300">
      <div className="w-full px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="Ivan The Photographer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <span className="font-serif text-lg sm:text-xl">Ivan The Photographer</span>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm">Capturing life's authentic moments</p>
        </div>

        {/* Navigation Area */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12 lg:mb-16">
          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 sm:mb-6">Explore</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link to="/portfolio" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/collaborations" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Collaborations
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 sm:mb-6">Connect</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link to="/contact" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://instagram.com/ivanthefotographer" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Instagram
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 sm:mb-6">Legal</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 text-sm hover:text-teal transition-colors duration-300 cursor-pointer">
                  Licensing
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 lg:text-right">
            <p className="font-serif text-base text-gray-400 dark:text-gray-500 mb-2">© 2025 Ivan The Photographer</p>
            <p className="text-xs text-gray-500 dark:text-gray-600 mb-4 sm:mb-6">All Rights Reserved</p>
            <div className="flex items-center lg:justify-end gap-4">
              <a href="https://instagram.com/ivanthefotographer" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-teal transition-colors duration-300 cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-teal transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-line text-xl"></i>
              </a>
              <a href="mailto:contact@ivanthefotographer.com" className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-teal transition-colors duration-300 cursor-pointer">
                <i className="ri-mail-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 dark:border-white/5 pt-8 lg:pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            <div className="hidden lg:block w-60 h-40 rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20photography%20camera%20equipment%20on%20wooden%20desk%20with%20soft%20natural%20lighting%20minimalist%20workspace%20aesthetic%20warm%20tones%20vintage%20camera%20gear%20artistic%20composition&width=240&height=160&seq=footer-workspace-image&orientation=landscape"
                alt="Photography workspace"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center px-4 lg:px-16">
              <p className="font-serif text-lg sm:text-xl lg:text-2xl italic text-white/90 dark:text-white/80 leading-relaxed">
                "Photography is the story I fail to put into words,<br className="hidden sm:block" />
                captured in a single frame of time."
              </p>
            </div>

            <div className="w-full sm:w-80">
              <p className="text-white text-sm mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-teal transition-colors duration-300"
                />
                <button className="bg-teal text-white px-6 py-3 rounded-lg hover:bg-teal-light transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Link */}
        <div className="mt-8 text-center">
          <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 dark:text-gray-600 hover:text-teal transition-colors duration-300 cursor-pointer">
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
