
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/public/feature/Navbar';
import Footer from '../../../components/public/feature/Footer';
import BackgroundElements from '../../../components/public/base/BackgroundElements';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredWorks = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=elegant%20african%20woman%20in%20sophisticated%20black%20and%20white%20portrait%20dramatic%20lighting%20artistic%20composition%20professional%20photography%20minimalist%20aesthetic%20timeless%20beauty&width=600&height=700&seq=featured-work-1-new&orientation=portrait',
      title: 'Portrait Series I',
      year: '2024',
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=modern%20architectural%20building%20geometric%20shapes%20clean%20lines%20urban%20photography%20black%20and%20white%20minimalist%20composition%20professional%20architectural%20photography&width=800&height=500&seq=featured-work-2-new&orientation=landscape',
      title: 'Urban Geometries',
      year: '2024',
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=elegant%20bride%20in%20flowing%20white%20wedding%20dress%20by%20window%20natural%20light%20professional%20wedding%20photography%20soft%20romantic%20aesthetic%20artistic%20composition&width=500&height=700&seq=featured-work-3-new&orientation=portrait',
      title: 'Wedding Stories',
      year: '2025',
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=stylish%20african%20woman%20in%20elegant%20black%20blazer%20professional%20fashion%20photography%20studio%20lighting%20confident%20pose%20minimalist%20aesthetic%20contemporary%20style&width=600&height=700&seq=featured-work-4-new&orientation=portrait',
      title: 'Fashion Forward',
      year: '2024',
    },
    {
      id: 5,
      image: 'https://readdy.ai/api/search-image?query=abstract%20architectural%20detail%20black%20and%20white%20geometric%20patterns%20modern%20building%20photography%20artistic%20composition%20minimalist%20aesthetic%20professional%20photography&width=700&height=500&seq=featured-work-5-new&orientation=landscape',
      title: 'Natural Forms',
      year: '2024',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] relative transition-colors duration-300">
      <BackgroundElements />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img
            src="https://readdy.ai/api/search-image?query=stunning%20african%20woman%20in%20elegant%20black%20dress%20professional%20portrait%20photography%20dramatic%20lighting%20artistic%20composition%20dark%20moody%20aesthetic%20sophisticated%20beauty%20timeless%20elegance&width=1920&height=1080&seq=hero-background-main&orientation=landscape"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-16">
          <div className="w-full">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/85 leading-tight mb-4 sm:mb-6">
              Capturing Moments<br />
              Creating Memories
            </h1>
            <p className="text-base sm:text-lg text-white/75 font-light tracking-wide">
              Professional Photography & Creative Collaboration
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
          <div className="w-px h-16 bg-white/50 mb-2"></div>
          <i className="ri-arrow-down-line text-white/50 text-xl"></i>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">Selected Works</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2B2B2B] dark:text-white/90 leading-tight transition-colors duration-300">
            A Collection of Stories<br className="hidden sm:block" />
            Told Through Light
          </h2>
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {featuredWorks.map((work) => (
            <div key={work.id} className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/5]">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-1">{work.title}</h3>
                <p className="text-white/70 text-sm">{work.year}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Portrait Series I - Large Left */}
          <div className="col-span-5 row-span-3 relative group cursor-pointer overflow-hidden rounded-2xl">
            <img
              src={featuredWorks[0].image}
              alt={featuredWorks[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="font-serif text-4xl text-white mb-1">{featuredWorks[0].title}</h3>
              <p className="text-white/70 text-sm">{featuredWorks[0].year}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Urban Geometries - Top Right */}
          <div className="col-span-7 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl">
            <img
              src={featuredWorks[1].image}
              alt={featuredWorks[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="font-serif text-3xl text-white mb-1">{featuredWorks[1].title}</h3>
              <p className="text-white/70 text-sm">{featuredWorks[1].year}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Wedding Stories - Middle Right */}
          <div className="col-span-4 row-span-3 relative group cursor-pointer overflow-hidden rounded-2xl">
            <img
              src={featuredWorks[2].image}
              alt={featuredWorks[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="font-serif text-3xl text-white mb-1">{featuredWorks[2].title}</h3>
              <p className="text-white/70 text-sm">{featuredWorks[2].year}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Fashion Forward - Bottom Left */}
          <div className="col-span-5 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl">
            <img
              src={featuredWorks[3].image}
              alt={featuredWorks[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="font-serif text-3xl text-white mb-1">{featuredWorks[3].title}</h3>
              <p className="text-white/70 text-sm">{featuredWorks[3].year}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Natural Forms - Bottom Right */}
          <div className="col-span-3 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl">
            <img
              src={featuredWorks[4].image}
              alt={featuredWorks[4].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="font-serif text-2xl text-white mb-1">{featuredWorks[4].title}</h3>
              <p className="text-white/70 text-sm">{featuredWorks[4].year}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <Link
            to="/portfolio"
            className="inline-block bg-[#C17A5C] dark:bg-teal text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-[#a86a4f] dark:hover:bg-teal-light transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap text-sm sm:text-base"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-[#E8E3DB] dark:bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="lg:ml-20 order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto lg:max-w-none h-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20african%20photographer%20holding%20camera%20confident%20portrait%20photography%20natural%20lighting%20artistic%20composition%20warm%20tones%20creative%20professional%20behind%20the%20scenes%20authentic%20moment&width=600&height=800&seq=about-portrait-main&orientation=portrait"
                  alt="Ivan The Photographer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">About</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] dark:text-white/90 leading-tight mb-6 sm:mb-10 transition-colors duration-300">
                Behind the Lens:<br />
                Philosophy & Approach
              </h2>
              <div className="space-y-4 sm:space-y-6 text-[#2B2B2B] dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg transition-colors duration-300">
                <p>
                  Photography is more than capturing images—it's about preserving emotions, telling stories, and creating everlasting memories that transcend time.
                </p>
                <p>
                  With years of experience in portraits, events, and lifestyle photography, I work closely with clients and creative collaborators to bring visions to life through authentic, artistic imagery.
                </p>
                <p>
                  Every session is an opportunity to connect, create, and celebrate the beauty in everyday moments and special occasions alike.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">
                <div>
                  <p className="font-serif text-3xl sm:text-4xl lg:text-6xl text-teal mb-1 sm:mb-2">500+</p>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] dark:text-gray-400 transition-colors duration-300">Projects</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl lg:text-6xl text-teal mb-1 sm:mb-2">8</p>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] dark:text-gray-400 transition-colors duration-300">Years Experience</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl lg:text-6xl text-teal mb-1 sm:mb-2">50+</p>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] dark:text-gray-400 transition-colors duration-300">Collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-[#FAFAF8] to-[#E8E3DB] dark:from-[#0A0A0A] dark:to-[#1A1A1A] py-20 sm:py-28 lg:py-40 px-4 sm:px-8 lg:px-16 relative z-10 transition-colors duration-300">
        <div className="text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#2B2B2B] dark:text-white/90 leading-tight mb-6 sm:mb-8 transition-colors duration-300">
            Let's Create<br />
            Something Beautiful
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 sm:mb-14 transition-colors duration-300 px-4">
            Available for commissions, collaborations, and creative projects
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#C17A5C] dark:bg-teal text-white px-10 sm:px-16 py-4 sm:py-5 rounded-full text-base sm:text-lg hover:bg-[#a86a4f] dark:hover:bg-teal-light transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Book a Session
            <i className="ri-arrow-right-line"></i>
          </Link>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mt-10 sm:mt-12">
            <a
              href="mailto:contact@ivanthefotographer.com"
              className="flex items-center gap-2 text-[#2B2B2B] dark:text-gray-300 hover:text-teal transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-mail-line text-xl"></i>
              <span className="text-sm sm:text-base">contact@ivanthefotographer.com</span>
            </a>
            <a
              href="https://instagram.com/ivanthefotographer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#2B2B2B] dark:text-gray-300 hover:text-teal transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-instagram-line text-xl"></i>
              <span className="text-sm sm:text-base">@ivanthefotographer</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
