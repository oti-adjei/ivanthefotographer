
import { useState } from 'react';
import Navbar from '../../../components/public/feature/Navbar';
import Footer from '../../../components/public/feature/Footer';
import BackgroundElements from '../../../components/public/base/BackgroundElements';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://statikform.com/api/f/${import.meta.env.VITE_STATIKFORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          replyTo: formData.email,
          _to: import.meta.env.VITE_CONTACT_EMAIL,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0A0A0A] transition-colors duration-300">
      <BackgroundElements />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20photography%20studio%20workspace%20camera%20equipment%20natural%20lighting%20minimalist%20aesthetic%20warm%20tones%20creative%20environment%20artistic%20composition&width=1920&height=800&seq=contact-hero&orientation=landscape"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white/90 mb-3 sm:mb-4">Get In Touch</h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-light">Let's create something beautiful together</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div>
              <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">Contact Information</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] dark:text-white/90 leading-tight mb-8 sm:mb-12 transition-colors duration-300">
                Let's Start a<br />
                Conversation
              </h2>

              <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-16">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C17A5C]/10 dark:bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-lg sm:text-xl text-[#C17A5C] dark:text-teal"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#2B2B2B] dark:text-white/90 mb-1 sm:mb-2 transition-colors duration-300">Email</h3>
                    <a href="mailto:contact@ivanthefotographer.com" className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#C17A5C] dark:hover:text-teal transition-colors duration-300 cursor-pointer break-all">
                      contact@ivanthefotographer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C17A5C]/10 dark:bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-instagram-line text-lg sm:text-xl text-[#C17A5C] dark:text-teal"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#2B2B2B] dark:text-white/90 mb-1 sm:mb-2 transition-colors duration-300">Instagram</h3>
                    <a href="https://instagram.com/ivanthefotographer" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#C17A5C] dark:hover:text-teal transition-colors duration-300 cursor-pointer">
                      @ivanthefotographer
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C17A5C]/10 dark:bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-lg sm:text-xl text-[#C17A5C] dark:text-teal"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#2B2B2B] dark:text-white/90 mb-1 sm:mb-2 transition-colors duration-300">Response Time</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">Within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E8E3DB] dark:bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-colors duration-300">
                <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] dark:text-white/90 mb-3 sm:mb-4 transition-colors duration-300">What to Expect</h3>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#C17A5C] dark:text-teal mt-0.5 sm:mt-1"></i>
                    <span>Personalized consultation to understand your vision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#C17A5C] dark:text-teal mt-0.5 sm:mt-1"></i>
                    <span>Custom photography packages tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#C17A5C] dark:text-teal mt-0.5 sm:mt-1"></i>
                    <span>Professional editing and post-production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-[#C17A5C] dark:text-teal mt-0.5 sm:mt-1"></i>
                    <span>High-resolution digital delivery</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" data-readdy-form>
                <div>
                  <label htmlFor="name" className="block text-sm text-[#2B2B2B] dark:text-gray-300 mb-2 transition-colors duration-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#2B2B2B] dark:text-gray-300 focus:outline-none focus:border-[#C17A5C] dark:focus:border-teal transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#2B2B2B] dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#2B2B2B] dark:text-gray-300 focus:outline-none focus:border-[#C17A5C] dark:focus:border-teal transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-[#2B2B2B] dark:text-gray-300 mb-2 transition-colors duration-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#2B2B2B] dark:text-gray-300 focus:outline-none focus:border-[#C17A5C] dark:focus:border-teal transition-colors duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-[#2B2B2B] dark:text-gray-300 mb-2 transition-colors duration-300">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#2B2B2B] dark:text-gray-300 focus:outline-none focus:border-[#C17A5C] dark:focus:border-teal transition-colors duration-300 cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Event Photography">Event Photography</option>
                    <option value="Fashion & Editorial">Fashion & Editorial</option>
                    <option value="Lifestyle Sessions">Lifestyle Sessions</option>
                    <option value="Corporate Photography">Corporate Photography</option>
                    <option value="Creative Collaboration">Creative Collaboration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm text-[#2B2B2B] dark:text-gray-300 mb-2 transition-colors duration-300">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#2B2B2B] dark:text-gray-300 focus:outline-none focus:border-[#C17A5C] dark:focus:border-teal transition-colors duration-300 cursor-pointer"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#2B2B2B] dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#2B2B2B] dark:text-gray-300 focus:outline-none focus:border-[#C17A5C] dark:focus:border-teal transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">{formData.message.length}/500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C17A5C] dark:bg-teal text-white py-3 sm:py-4 rounded-lg hover:bg-[#a86a4f] dark:hover:bg-teal-light transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg text-sm">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg text-sm">
                    Something went wrong. Please try again or contact me directly via email.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#E8E3DB] dark:bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-teal text-xs uppercase tracking-widest mb-4 sm:mb-6">Common Questions</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] dark:text-white/90 leading-tight transition-colors duration-300">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: 'How far in advance should I book?',
                answer: 'I recommend booking at least 2-4 weeks in advance, especially for events and special occasions. However, I do my best to accommodate last-minute requests when possible.',
              },
              {
                question: 'What is included in a photography session?',
                answer: 'Each session includes a pre-shoot consultation, the photography session itself, professional editing, and high-resolution digital images. Specific deliverables vary by package.',
              },
              {
                question: 'Do you travel for shoots?',
                answer: "Yes! I'm available for local and destination shoots. Travel fees may apply for locations outside my immediate area.",
              },
              {
                question: 'How long does it take to receive the final images?',
                answer: 'Turnaround time is typically 2-3 weeks for most sessions. Rush delivery options are available upon request.',
              },
              {
                question: 'Can I request specific editing styles?',
                answer: 'Absolutely! I work closely with clients to understand their vision and preferences. We will discuss editing styles during our consultation.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm transition-colors duration-300">
                <h3 className="font-serif text-lg sm:text-xl text-[#2B2B2B] dark:text-white/90 mb-2 sm:mb-3 transition-colors duration-300">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
