
import { useState } from 'react';
import Navbar from '../../../components/public/feature/Navbar';
import Footer from '../../../components/public/feature/Footer';
import BackgroundElements from '../../../components/public/base/BackgroundElements';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Portraits', 'Fashion', 'Events', 'Lifestyle', 'Editorial'];

  const portfolioItems = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=elegant%20african%20woman%20in%20pink%20floral%20dress%20by%20window%20natural%20light%20professional%20portrait%20photography%20soft%20shadows%20warm%20tones%20minimalist%20aesthetic&width=400&height=600&seq=portfolio-1&orientation=portrait',
      title: 'Soft Morning Light',
      category: 'Portraits',
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=confident%20african%20woman%20in%20black%20outfit%20white%20chair%20studio%20fashion%20photography%20clean%20background%20professional%20lighting%20elegant%20pose&width=400&height=500&seq=portfolio-2&orientation=portrait',
      title: 'Studio Elegance',
      category: 'Fashion',
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=beautiful%20african%20woman%20warm%20brown%20tones%20professional%20beauty%20portrait%20photography%20soft%20lighting%20glowing%20skin%20natural%20makeup%20artistic%20close-up&width=400&height=600&seq=portfolio-3&orientation=portrait',
      title: 'Natural Beauty',
      category: 'Portraits',
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=stylish%20african%20woman%20black%20blazer%20professional%20corporate%20portrait%20photography%20dark%20moody%20lighting%20confident%20expression%20business%20aesthetic&width=400&height=550&seq=portfolio-4&orientation=portrait',
      title: 'Corporate Power',
      category: 'Editorial',
    },
    {
      id: 5,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20white%20outfit%20green%20background%20professional%20lifestyle%20photography%20vibrant%20colors%20natural%20pose%20fresh%20aesthetic%20artistic%20composition&width=400&height=600&seq=portfolio-5&orientation=portrait',
      title: 'Fresh Vibes',
      category: 'Lifestyle',
    },
    {
      id: 6,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20elegant%20white%20outfit%20beige%20chair%20professional%20portrait%20photography%20warm%20neutral%20tones%20soft%20lighting%20minimalist%20aesthetic&width=400&height=550&seq=portfolio-6&orientation=portrait',
      title: 'Timeless Grace',
      category: 'Editorial',
    },
    {
      id: 7,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20black%20patterned%20top%20professional%20fashion%20photography%20artistic%20composition%20warm%20lighting%20elegant%20styling%20contemporary%20aesthetic&width=400&height=600&seq=portfolio-7&orientation=portrait',
      title: 'Pattern Play',
      category: 'Fashion',
    },
    {
      id: 8,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20with%20plant%20leaves%20professional%20lifestyle%20photography%20natural%20elements%20artistic%20composition%20soft%20lighting%20organic%20aesthetic&width=400&height=500&seq=portfolio-8&orientation=portrait',
      title: 'Natural Elements',
      category: 'Lifestyle',
    },
    {
      id: 9,
      image: 'https://readdy.ai/api/search-image?query=african%20man%20blue%20stairs%20professional%20portrait%20photography%20vibrant%20colors%20urban%20setting%20confident%20pose%20artistic%20composition&width=400&height=600&seq=portfolio-9&orientation=portrait',
      title: 'Urban Stories',
      category: 'Portraits',
    },
    {
      id: 10,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20black%20and%20white%20portrait%20photography%20dramatic%20lighting%20artistic%20composition%20monochrome%20aesthetic%20professional%20studio&width=400&height=550&seq=portfolio-10&orientation=portrait',
      title: 'Monochrome Mood',
      category: 'Editorial',
    },
    {
      id: 11,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20yellow%20flower%20professional%20beauty%20portrait%20photography%20vibrant%20colors%20natural%20lighting%20joyful%20expression%20artistic%20composition&width=400&height=600&seq=portfolio-11&orientation=portrait',
      title: 'Joyful Moments',
      category: 'Portraits',
    },
    {
      id: 12,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20colorful%20headwrap%20professional%20cultural%20portrait%20photography%20vibrant%20colors%20artistic%20composition%20traditional%20modern%20fusion&width=400&height=550&seq=portfolio-12&orientation=portrait',
      title: 'Cultural Pride',
      category: 'Editorial',
    },
    {
      id: 13,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20yellow%20background%20professional%20fashion%20photography%20bold%20colors%20confident%20pose%20artistic%20composition%20contemporary%20aesthetic&width=400&height=600&seq=portfolio-13&orientation=portrait',
      title: 'Bold & Bright',
      category: 'Fashion',
    },
    {
      id: 14,
      image: 'https://readdy.ai/api/search-image?query=african%20man%20hat%20black%20and%20white%20professional%20portrait%20photography%20artistic%20composition%20dramatic%20lighting%20masculine%20aesthetic&width=400&height=500&seq=portfolio-14&orientation=portrait',
      title: 'Classic Masculine',
      category: 'Portraits',
    },
    {
      id: 15,
      image: 'https://readdy.ai/api/search-image?query=african%20woman%20holding%20camera%20professional%20lifestyle%20photography%20creative%20artist%20behind%20the%20scenes%20natural%20lighting%20authentic%20moment&width=400&height=600&seq=portfolio-15&orientation=portrait',
      title: 'Creative Spirit',
      category: 'Lifestyle',
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] relative transition-colors duration-300">
      <BackgroundElements />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20photography%20portfolio%20showcase%20elegant%20african%20woman%20artistic%20composition%20dramatic%20lighting%20sophisticated%20aesthetic%20minimalist%20background&width=1920&height=800&seq=portfolio-hero&orientation=landscape"
            alt="Portfolio Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white/90 mb-3 sm:mb-4">Portfolio</h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-light">A visual journey through captured moments</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 lg:gap-4 mb-10 sm:mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-teal text-white'
                  : 'bg-transparent border border-[#2B2B2B] dark:border-gray-600 text-[#2B2B2B] dark:text-gray-300 hover:border-teal hover:text-teal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                <div className="w-full h-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-[#2B2B2B]/0 dark:bg-black/0 group-hover:bg-[#2B2B2B]/40 dark:group-hover:bg-black/60 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-white mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-teal-light text-xs sm:text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
