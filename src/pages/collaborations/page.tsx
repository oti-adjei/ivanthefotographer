
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BackgroundElements from '../../components/base/BackgroundElements';

export default function CollaborationsPage() {
  const collaborations = [
    {
      logo: 'ri-camera-lens-line',
      name: 'Creative Collective',
      description: 'A group of passionate photographers and visual artists working together to push creative boundaries and explore new artistic directions in contemporary photography.',
      projects: 'View Projects',
    },
    {
      logo: 'ri-palette-line',
      name: 'Urban Stories Project',
      description: 'Documenting the vibrant stories of our community through collaborative photography projects that celebrate diversity, culture, and authentic human connections.',
      projects: 'View Projects',
    },
    {
      logo: 'ri-community-line',
      name: 'Community Outreach',
      description: 'Providing photography services and mentorship to aspiring photographers in the community, helping them develop their skills and find their unique artistic voice.',
      projects: 'View Projects',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20african%20woman%20smiling%20confident%20expression%20business%20portrait%20photography%20natural%20lighting%20warm%20tones%20authentic%20moment&width=100&height=100&seq=testimonial-1&orientation=squarish',
      quote: 'Working with Ivan has been an absolute pleasure. His artistic vision and professionalism brought our creative project to life in ways we never imagined.',
    },
    {
      name: 'Michael Chen',
      role: 'Brand Manager',
      image: 'https://readdy.ai/api/search-image?query=professional%20asian%20man%20smiling%20confident%20expression%20business%20portrait%20photography%20natural%20lighting%20warm%20tones%20authentic%20moment&width=100&height=100&seq=testimonial-2&orientation=squarish',
      quote: 'Ivan\'s ability to capture authentic moments and emotions is unmatched. Every photo tells a story and connects with our audience on a deeper level.',
    },
    {
      name: 'Amara Williams',
      role: 'Fashion Designer',
      image: 'https://readdy.ai/api/search-image?query=professional%20african%20woman%20creative%20artist%20smiling%20portrait%20photography%20natural%20lighting%20warm%20tones%20authentic%20moment&width=100&height=100&seq=testimonial-3&orientation=squarish',
      quote: 'The collaboration was seamless and inspiring. Ivan understood our vision perfectly and delivered stunning imagery that elevated our brand aesthetic.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] transition-colors duration-300">
      <BackgroundElements />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=creative%20team%20collaboration%20photography%20behind%20the%20scenes%20professional%20photographers%20working%20together%20artistic%20composition%20warm%20lighting%20community%20spirit&width=1920&height=800&seq=collab-hero&orientation=landscape"
            alt="Collaborations Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white/90 mb-3 sm:mb-4">Collaborations</h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-light">Creating together, growing together</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">Creative Network</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-[#2B2B2B] dark:text-white/90 leading-tight mb-6 sm:mb-8 transition-colors duration-300">
            Collaborations &<br />
            Community Groups
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
            Working together to create meaningful visual stories
          </p>
        </div>
      </section>

      {/* Collaboration Cards */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-white dark:hover:bg-[#252525] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white dark:bg-[#2B2B2B] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <i className={`${collab.logo} text-2xl sm:text-3xl lg:text-4xl text-[#C17A5C] dark:text-teal`}></i>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] dark:text-white/90 text-center mb-3 sm:mb-4 font-bold transition-colors duration-300">
                  {collab.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-6 sm:mb-8 transition-colors duration-300">
                  {collab.description}
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="text-[#C17A5C] dark:text-teal text-sm font-medium hover:underline cursor-pointer"
                  >
                    {collab.projects}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-[#E8E3DB] dark:bg-[#1A1A1A] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">Collaborative Work</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] dark:text-white/90 leading-tight transition-colors duration-300">
              Projects & Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
            {[
              'https://readdy.ai/api/search-image?query=creative%20photography%20collaboration%20team%20working%20together%20artistic%20composition%20professional%20photographers%20community%20project%20warm%20lighting&width=500&height=600&seq=collab-1&orientation=portrait',
              'https://readdy.ai/api/search-image?query=urban%20photography%20project%20street%20scenes%20community%20stories%20artistic%20composition%20documentary%20style%20authentic%20moments&width=500&height=400&seq=collab-2&orientation=landscape',
              'https://readdy.ai/api/search-image?query=fashion%20photography%20collaboration%20creative%20team%20styling%20models%20artistic%20composition%20professional%20lighting%20editorial%20aesthetic&width=500&height=600&seq=collab-3&orientation=portrait',
              'https://readdy.ai/api/search-image?query=community%20outreach%20photography%20workshop%20teaching%20mentoring%20aspiring%20photographers%20artistic%20composition%20warm%20lighting%20educational%20moment&width=500&height=400&seq=collab-4&orientation=landscape',
              'https://readdy.ai/api/search-image?query=creative%20collective%20photography%20exhibition%20gallery%20showcase%20artistic%20composition%20professional%20presentation%20contemporary%20aesthetic&width=500&height=600&seq=collab-5&orientation=portrait',
              'https://readdy.ai/api/search-image?query=collaborative%20portrait%20session%20creative%20team%20working%20with%20model%20artistic%20composition%20professional%20lighting%20authentic%20moment&width=500&height=400&seq=collab-6&orientation=landscape',
            ].map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl aspect-[4/5] sm:aspect-auto"
              >
                <img
                  src={image}
                  alt={`Collaboration ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">What They Say</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-[#2B2B2B] dark:text-white/90 leading-tight transition-colors duration-300">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-serif text-base sm:text-lg text-[#2B2B2B] dark:text-white/90 font-semibold transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-[#FAFAF8] to-[#E8E3DB] dark:from-[#0A0A0A] dark:to-[#1A1A1A] py-20 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 transition-colors duration-300">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-[#2B2B2B] dark:text-white/90 leading-tight mb-6 sm:mb-8 transition-colors duration-300">
            Let's Collaborate
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 sm:mb-14 transition-colors duration-300 px-4">
            Interested in working together? Let's create something amazing
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#C17A5C] dark:bg-teal text-white px-10 sm:px-16 py-4 sm:py-5 rounded-full text-base sm:text-lg hover:bg-[#a86a4f] dark:hover:bg-teal-light transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Get In Touch
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
