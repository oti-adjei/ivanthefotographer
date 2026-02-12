
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BackgroundElements from '../../components/base/BackgroundElements';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] relative transition-colors duration-300">
      <BackgroundElements />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20african%20photographer%20with%20camera%20equipment%20artistic%20composition%20natural%20lighting%20creative%20workspace%20behind%20the%20scenes%20authentic%20moment%20warm%20tones&width=1920&height=800&seq=about-hero&orientation=landscape"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white/90 mb-3 sm:mb-4">About Me</h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-light">The story behind the lens</p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="bg-[#E8E3DB] dark:bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="lg:ml-20 order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto lg:max-w-none h-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20african%20photographer%20portrait%20confident%20expression%20holding%20camera%20natural%20lighting%20artistic%20composition%20warm%20tones%20creative%20professional%20authentic%20moment&width=600&height=800&seq=about-main-portrait&orientation=portrait"
                  alt="Ivan The Photographer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">My Journey</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] dark:text-white/90 leading-tight mb-6 sm:mb-10 transition-colors duration-300">
                Behind the Lens:<br />
                Philosophy & Approach
              </h2>
              <div className="space-y-4 sm:space-y-6 text-[#2B2B2B] dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg transition-colors duration-300">
                <p>
                  Photography is more than capturing images—it's about preserving emotions, telling stories, and creating everlasting memories that transcend time. Every photograph is a moment frozen in time, a story waiting to be told.
                </p>
                <p>
                  With over eight years of experience in portraits, events, and lifestyle photography, I've had the privilege of working with diverse clients and creative collaborators. My approach combines technical expertise with artistic vision to bring your unique story to life through authentic, emotionally-driven imagery.
                </p>
                <p>
                  I believe in the power of collaboration and community. Whether working solo or with creative groups, every session is an opportunity to connect, create, and celebrate the beauty in everyday moments and special occasions alike.
                </p>
                <p>
                  My work is deeply influenced by natural light, genuine emotions, and the unique personality of each subject. I strive to create images that feel timeless, authentic, and deeply personal.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">
                <div>
                  <p className="font-serif text-3xl sm:text-4xl lg:text-6xl text-teal mb-1 sm:mb-2">500+</p>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] dark:text-gray-400 transition-colors duration-300">Projects Completed</p>
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

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">What I Offer</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-[#2B2B2B] dark:text-white/90 leading-tight transition-colors duration-300">
              Photography Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: 'ri-user-smile-line',
                title: 'Portrait Photography',
                description: 'Capturing your unique personality and essence through professional portrait sessions with natural lighting and artistic composition.',
              },
              {
                icon: 'ri-calendar-event-line',
                title: 'Event Photography',
                description: 'Documenting your special moments with a blend of candid and posed shots that tell the complete story of your event.',
              },
              {
                icon: 'ri-shirt-line',
                title: 'Fashion & Editorial',
                description: 'Creating striking fashion imagery and editorial content that showcases style, creativity, and artistic vision.',
              },
              {
                icon: 'ri-heart-line',
                title: 'Lifestyle Sessions',
                description: 'Authentic lifestyle photography that captures real moments, genuine emotions, and the beauty of everyday life.',
              },
              {
                icon: 'ri-briefcase-line',
                title: 'Corporate Photography',
                description: 'Professional corporate headshots and business photography that elevate your brand and professional image.',
              },
              {
                icon: 'ri-team-line',
                title: 'Creative Collaborations',
                description: 'Working with creative groups, brands, and agencies to bring innovative visual concepts to life.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white dark:hover:bg-[#252525] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white dark:bg-[#2B2B2B] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-teal dark:group-hover:bg-teal transition-colors duration-300">
                  <i className={`${service.icon} text-2xl sm:text-3xl lg:text-4xl text-teal group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] dark:text-white/90 text-center mb-3 sm:mb-4 font-semibold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#E8E3DB] dark:bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 relative z-10 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">My Philosophy</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] dark:text-white/90 leading-tight mb-8 sm:mb-12 transition-colors duration-300">
            Creating Everlasting Memories
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B] dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 transition-colors duration-300 px-2">
            "Photography is the story I fail to put into words, captured in a single frame of time. Every click of the shutter is an opportunity to preserve a moment that will never come again—a smile, a glance, a feeling that deserves to be remembered forever."
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 px-2">
            I approach every session with intention, care, and a deep respect for the trust my clients place in me. My goal is not just to take photographs, but to create visual narratives that resonate emotionally and stand the test of time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
