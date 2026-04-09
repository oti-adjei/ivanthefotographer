import { useState } from 'react';
import { useWebsiteContent } from '../../hooks/useWebsiteContent';
import EditHeroModal from './EditHeroModal';
import EditSelectedWorksModal from './EditSelectedWorksModal';
import EditAboutPreviewModal from './EditAboutPreviewModal';
import EditCTAModal from './EditCTAModal';
import EditAboutHeroModal from './EditAboutHeroModal';
import EditAboutMainModal from './EditAboutMainModal';
import EditServiceModal from './EditServiceModal';
import EditPhilosophyModal from './EditPhilosophyModal';
import EditContactInfoModal from './EditContactInfoModal';
import EditFAQModal from './EditFAQModal';
import EditCollabHeroModal from './EditCollabHeroModal';
import EditCollabIntroModal from './EditCollabIntroModal';
import EditCollabGroupModal from './EditCollabGroupModal';
import EditTestimonialModal from './EditTestimonialModal';

export default function WebsiteContentManager() {
  const [activeTab, setActiveTab] = useState('home');
  
  // Home page modals
  const [heroModalOpen, setHeroModalOpen] = useState(false);
  const [selectedWorksModalOpen, setSelectedWorksModalOpen] = useState(false);
  const [aboutPreviewModalOpen, setAboutPreviewModalOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);

  // About page modals
  const [aboutHeroModalOpen, setAboutHeroModalOpen] = useState(false);
  const [aboutMainModalOpen, setAboutMainModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [philosophyModalOpen, setPhilosophyModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(null);

  // Contact page modals
  const [contactHeroModalOpen, setContactHeroModalOpen] = useState(false);
  const [contactInfoModalOpen, setContactInfoModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<any>(null);
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);

  // Collaborations page modals
  const [collabHeroModalOpen, setCollabHeroModalOpen] = useState(false);
  const [collabIntroModalOpen, setCollabIntroModalOpen] = useState(false);
  const [collabGroupModalOpen, setCollabGroupModalOpen] = useState(false);
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [editingCollabGroup, setEditingCollabGroup] = useState<any>(null);
  const [editingCollabGroupIndex, setEditingCollabGroupIndex] = useState<number | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [editingTestimonialIndex, setEditingTestimonialIndex] = useState<number | null>(null);

  // Home page data
  const [heroData, setHeroData] = useState({
    title: 'Capturing Life\'s\nAuthentic Moments',
    subtitle: 'Professional photography that tells your unique story',
    backgroundImage: 'https://readdy.ai/api/search-image?query=professional%20photographer%20working%20in%20natural%20light%20studio%20with%20camera%20equipment%20modern%20minimalist%20aesthetic%20soft%20lighting%20creative%20workspace%20photography%20gear%20artistic%20environment&width=1920&height=1080&seq=hero-bg-001&orientation=landscape'
  });

  const [selectedWorksData, setSelectedWorksData] = useState({
    sectionTitle: 'Selected Works',
    works: [
      {
        id: 1,
        title: 'Urban Portraits',
        category: 'Portrait',
        image: 'https://readdy.ai/api/search-image?query=urban%20portrait%20photography%20city%20background%20natural%20light%20professional%20headshot%20modern%20style%20artistic%20composition&width=800&height=1000&seq=work-001&orientation=portrait'
      },
      {
        id: 2,
        title: 'Wedding Day',
        category: 'Wedding',
        image: 'https://readdy.ai/api/search-image?query=wedding%20photography%20ceremony%20candid%20moment%20emotional%20beautiful%20bride%20groom%20celebration%20love%20romantic&width=800&height=1000&seq=work-002&orientation=portrait'
      },
      {
        id: 3,
        title: 'Fashion Editorial',
        category: 'Fashion',
        image: 'https://readdy.ai/api/search-image?query=fashion%20editorial%20photography%20model%20studio%20lighting%20professional%20high%20fashion%20artistic%20creative%20styling&width=800&height=1000&seq=work-003&orientation=portrait'
      },
      {
        id: 4,
        title: 'Lifestyle Session',
        category: 'Lifestyle',
        image: 'https://readdy.ai/api/search-image?query=lifestyle%20photography%20family%20candid%20natural%20light%20outdoor%20authentic%20moments%20everyday%20life%20documentary%20style&width=800&height=1000&seq=work-004&orientation=portrait'
      },
      {
        id: 5,
        title: 'Corporate Event',
        category: 'Event',
        image: 'https://readdy.ai/api/search-image?query=corporate%20event%20photography%20business%20conference%20professional%20networking%20people%20gathering%20modern%20venue&width=800&height=1000&seq=work-005&orientation=portrait'
      },
      {
        id: 6,
        title: 'Creative Collaboration',
        category: 'Editorial',
        image: 'https://readdy.ai/api/search-image?query=creative%20photography%20collaboration%20artistic%20concept%20editorial%20style%20unique%20perspective%20innovative%20composition&width=800&height=1000&seq=work-006&orientation=portrait'
      }
    ]
  });

  const [aboutPreviewData, setAboutPreviewData] = useState({
    title: 'About Me',
    paragraphs: [
      'Photography has been my passion for over a decade. What started as a hobby quickly evolved into a calling—a way to freeze moments in time and tell stories that words alone cannot capture.',
      'My approach is rooted in authenticity. I believe the best photographs happen when people feel comfortable being themselves.'
    ],
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '500+', label: 'Happy Clients' },
      { value: '50k+', label: 'Photos Captured' }
    ],
    image: 'https://readdy.ai/api/search-image?query=professional%20photographer%20portrait%20holding%20camera%20confident%20smile%20creative%20artist%20studio%20natural%20light%20authentic%20personality&width=600&height=800&seq=about-portrait-001&orientation=portrait'
  });

  const [ctaData, setCtaData] = useState({
    title: 'Ready to Capture\nYour Story?',
    subtitle: 'Let\'s create something beautiful together',
    buttonText: 'Get In Touch'
  });

  // About page data
  const [aboutHeroData, setAboutHeroData] = useState({
    title: 'About Me',
    subtitle: 'The story behind the lens'
  });

  const [aboutMainData, setAboutMainData] = useState({
    title: 'Behind the Lens:\nPhilosophy & Approach',
    paragraphs: [
      'Photography has been my passion for over a decade. What started as a hobby quickly evolved into a calling—a way to freeze moments in time and tell stories that words alone cannot capture.',
      'My approach is rooted in authenticity. I believe the best photographs happen when people feel comfortable being themselves. Whether it\'s a wedding, a portrait session, or a corporate event, I strive to create an environment where genuine emotions can shine through.',
      'I\'m inspired by natural light, candid moments, and the unique beauty in everyday life. My style blends documentary storytelling with artistic composition, resulting in images that are both timeless and contemporary.',
      'When I\'m not behind the camera, you\'ll find me exploring new locations, studying the work of master photographers, or spending time with my family. Each experience enriches my perspective and informs my craft.'
    ]
  });

  const [servicesData, setServicesData] = useState([
    {
      icon: 'ri-user-smile-line',
      title: 'Portrait Photography',
      description: 'Capturing your personality and essence in stunning portraits that you\'ll treasure forever.'
    },
    {
      icon: 'ri-calendar-event-line',
      title: 'Event Coverage',
      description: 'Comprehensive documentation of your special events, from intimate gatherings to large celebrations.'
    },
    {
      icon: 'ri-shirt-line',
      title: 'Fashion & Editorial',
      description: 'Creative fashion photography for brands, designers, and editorial publications.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Lifestyle Sessions',
      description: 'Natural, candid photography that captures the authentic moments of your daily life.'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Corporate Photography',
      description: 'Professional headshots and corporate event coverage for businesses and organizations.'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaborative Projects',
      description: 'Working with other creatives and brands to bring unique visual concepts to life.'
    }
  ]);

  const [philosophyData, setPhilosophyData] = useState({
    title: 'Creating Everlasting Memories',
    quote: 'Photography is not just about capturing what you see, but about revealing what you feel. Every click of the shutter is an opportunity to preserve a moment that will never come again—a laugh, a glance, a fleeting expression that tells a deeper story.',
    description: 'This philosophy guides every project I undertake. I approach each session with fresh eyes and an open heart, ready to discover the unique narrative waiting to unfold.'
  });

  // Contact page data
  const [contactHeroData, setContactHeroData] = useState({
    title: 'Get In Touch',
    subtitle: 'Let\'s create something beautiful together',
    backgroundImage: ''
  });

  const [contactInfoData, setContactInfoData] = useState({
    email: 'contact@photographer.com',
    instagram: '@photographer',
    responseTime: 'Within 24-48 hours'
  });

  const [faqsData, setFaqsData] = useState([
    {
      question: 'How far in advance should I book?',
      answer: 'I recommend booking at least 2-3 months in advance, especially for weddings and major events. However, I\'m happy to accommodate last-minute requests when my schedule allows.'
    },
    {
      question: 'What\'s included in a typical session?',
      answer: 'Each session includes pre-shoot consultation, the photography session itself, professional editing, and delivery of high-resolution digital images. Specific deliverables vary by package.'
    },
    {
      question: 'Do you travel for shoots?',
      answer: 'Absolutely! I love traveling for photography projects. Travel fees may apply depending on the location and duration of the shoot.'
    },
    {
      question: 'How long until I receive my photos?',
      answer: 'Turnaround time is typically 2-3 weeks for most sessions. Wedding galleries are delivered within 6-8 weeks. Rush delivery is available for an additional fee.'
    },
    {
      question: 'Can I request specific shots or styles?',
      answer: 'Of course! I encourage clients to share their vision, inspiration images, and must-have shots. We\'ll discuss your preferences during our consultation to ensure we\'re aligned.'
    }
  ]);

  // Collaborations page data
  const [collabHeroData, setCollabHeroData] = useState({
    title: 'Collaborations',
    subtitle: 'Creating together, growing together'
  });

  const [collabIntroData, setCollabIntroData] = useState({
    title: 'Collaborations &\nCommunity Groups',
    subtitle: 'Working together to create meaningful visual stories'
  });

  const [collabGroupsData, setCollabGroupsData] = useState([
    {
      name: 'Creative Collective',
      icon: 'ri-camera-lens-line',
      description: 'A community of photographers, videographers, and visual artists collaborating on innovative projects and sharing knowledge.'
    },
    {
      name: 'Local Artists Network',
      icon: 'ri-palette-line',
      description: 'Partnering with painters, sculptors, and mixed-media artists to create unique cross-disciplinary exhibitions and installations.'
    },
    {
      name: 'Community Outreach',
      icon: 'ri-community-line',
      description: 'Providing photography services and workshops for underserved communities, helping people tell their stories through images.'
    }
  ]);

  const [testimonialsData, setTestimonialsData] = useState([
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      quote: 'Working with this photographer was an absolute dream. The attention to detail and creative vision exceeded all expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'Event Coordinator',
      quote: 'Professional, punctual, and incredibly talented. The photos captured the essence of our event perfectly.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Brand Manager',
      quote: 'The collaborative approach made the entire process smooth and enjoyable. The final images were stunning and perfectly aligned with our brand.'
    }
  ]);

  // Save handlers for About page

  const handleSaveService = (data: any) => {
    if (editingServiceIndex !== null) {
      const newServices = [...servicesData];
      newServices[editingServiceIndex] = data;
      setServicesData(newServices);
    } else {
      setServicesData([...servicesData, data]);
    }
    setServiceModalOpen(false);
    setEditingService(null);
    setEditingServiceIndex(null);
  };

  const handleDeleteService = (index: number) => {
    setServicesData(servicesData.filter((_, i) => i !== index));
  };

  const handleSaveFaq = (data: any) => {
    if (editingFaqIndex !== null) {
      const newFaqs = [...faqsData];
      newFaqs[editingFaqIndex] = data;
      setFaqsData(newFaqs);
    } else {
      setFaqsData([...faqsData, data]);
    }
    setFaqModalOpen(false);
    setEditingFaq(null);
    setEditingFaqIndex(null);
  };

  const handleDeleteFaq = (index: number) => {
    setFaqsData(faqsData.filter((_, i) => i !== index));
  };

  // Save handlers for Collaborations page
  const handleSaveCollabGroup = (data: any) => {
    if (editingCollabGroupIndex !== null) {
      const newGroups = [...collabGroupsData];
      newGroups[editingCollabGroupIndex] = data;
      setCollabGroupsData(newGroups);
    } else {
      setCollabGroupsData([...collabGroupsData, data]);
    }
    setCollabGroupModalOpen(false);
    setEditingCollabGroup(null);
    setEditingCollabGroupIndex(null);
  };

  const handleDeleteCollabGroup = (index: number) => {
    setCollabGroupsData(collabGroupsData.filter((_, i) => i !== index));
  };

  const handleSaveTestimonial = (data: any) => {
    if (editingTestimonialIndex !== null) {
      const newTestimonials = [...testimonialsData];
      newTestimonials[editingTestimonialIndex] = data;
      setTestimonialsData(newTestimonials);
    } else {
      setTestimonialsData([...testimonialsData, data]);
    }
    setTestimonialModalOpen(false);
    setEditingTestimonial(null);
    setEditingTestimonialIndex(null);
  };

  const handleDeleteTestimonial = (index: number) => {
    setTestimonialsData(testimonialsData.filter((_, i) => i !== index));
  };

  const { loading, error, success, saveAllContent, clearMessages } = useWebsiteContent();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<any>({});

  // Track changes
  const trackChange = (page: string, section: string, data: any) => {
    setPendingChanges((prev: any) => ({
      ...prev,
      [page]: {
        ...prev[page],
        [section]: data,
      },
    }));
    setHasUnsavedChanges(true);
  };

  // Save all changes
  const handleSaveAll = async () => {
    if (Object.keys(pendingChanges).length === 0) {
      return;
    }

    const result = await saveAllContent(pendingChanges);
    if (result) {
      setPendingChanges({});
      setHasUnsavedChanges(false);
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-6 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Website Content Manager</h1>
            <p className="text-gray-400 text-sm">Manage all content displayed on your public website</p>
          </div>
          <button
            onClick={handleSaveAll}
            disabled={!hasUnsavedChanges || loading}
            className={`px-6 py-3 rounded-lg transition-all whitespace-nowrap text-sm font-medium flex items-center gap-2 ${
              hasUnsavedChanges && !loading
                ? 'bg-teal hover:bg-teal-light text-white cursor-pointer'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            {loading ? (
              <>
                <i className="ri-loader-4-line animate-spin"></i>
                Saving...
              </>
            ) : (
              <>
                <i className="ri-save-line"></i>
                Save All Changes
                {hasUnsavedChanges && (
                  <span className="bg-teal-light text-white text-xs px-2 py-0.5 rounded-full">
                    {Object.keys(pendingChanges).reduce((acc, page) => acc + Object.keys(pendingChanges[page]).length, 0)}
                  </span>
                )}
              </>
            )}
          </button>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3 flex items-center gap-3">
            <i className="ri-checkbox-circle-line text-green-500 text-xl"></i>
            <span className="text-green-500 text-sm">Changes saved successfully!</span>
            <button onClick={clearMessages} className="ml-auto text-green-500 hover:text-green-400">
              <i className="ri-close-line"></i>
            </button>
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 flex items-center gap-3">
            <i className="ri-error-warning-line text-red-500 text-xl"></i>
            <span className="text-red-500 text-sm">{error}</span>
            <button onClick={clearMessages} className="ml-auto text-red-500 hover:text-red-400">
              <i className="ri-close-line"></i>
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mt-6">
          {['home', 'about', 'portfolio', 'collaborations', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg transition-all whitespace-nowrap text-sm font-medium cursor-pointer ${
                activeTab === tab
                  ? 'bg-teal text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Home Page Content */}
      {activeTab === 'home' && (
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Hero Section</h3>
              <button
                onClick={() => setHeroModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 whitespace-pre-line"><span className="text-gray-500">Title:</span> {heroData.title}</p>
              <p className="text-gray-300"><span className="text-gray-500">Subtitle:</span> {heroData.subtitle}</p>
              <div className="mt-3">
                <p className="text-gray-500 text-sm mb-2">Background Image:</p>
                <img src={heroData.backgroundImage} alt="Hero background" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>
          </div>

          {/* Selected Works Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Selected Works ({selectedWorksData.works.length})</h3>
              <button
                onClick={() => setSelectedWorksModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {selectedWorksData.works.map((work, index) => (
                <div key={index} className="bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden">
                  <img src={work.image} alt={work.title} className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <h4 className="text-white font-medium text-sm">{work.title}</h4>
                    <p className="text-gray-400 text-xs">{work.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Preview Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">About Preview Section</h3>
              <button
                onClick={() => setAboutPreviewModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300"><span className="text-gray-500">Title:</span> {aboutPreviewData.title}</p>
              <div className="flex gap-4">
                {aboutPreviewData.stats.map((stat, index) => (
                  <div key={index} className="bg-[#0A0A0A] border border-white/10 rounded-lg p-3 flex-1">
                    <p className="text-teal text-xl font-bold">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Call-to-Action Section</h3>
              <button
                onClick={() => setCtaModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 whitespace-pre-line"><span className="text-gray-500">Title:</span> {ctaData.title}</p>
              <p className="text-gray-300"><span className="text-gray-500">Subtitle:</span> {ctaData.subtitle}</p>
              <p className="text-gray-300"><span className="text-gray-500">Button Text:</span> {ctaData.buttonText}</p>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Page Content */}
      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Portfolio Management</h3>
                <p className="text-gray-400 text-sm">Manage your portfolio projects and images in the Portfolio Manager section</p>
              </div>
              <button className="px-4 py-2 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm">
                <i className="ri-external-link-line mr-2"></i>Go to Portfolio Manager
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Page Content */}
      {activeTab === 'about' && (
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Hero Section</h3>
              <button
                onClick={() => setAboutHeroModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300"><span className="text-gray-500">Title:</span> {aboutHeroData.title}</p>
              <p className="text-gray-300"><span className="text-gray-500">Subtitle:</span> {aboutHeroData.subtitle}</p>
            </div>
          </div>

          {/* Main Biography Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Main Biography</h3>
              <button
                onClick={() => setAboutMainModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 whitespace-pre-line"><span className="text-gray-500">Title:</span> {aboutMainData.title}</p>
              <div>
                <p className="text-gray-500 mb-2">Paragraphs ({aboutMainData.paragraphs.length}):</p>
                {aboutMainData.paragraphs.map((para, index) => (
                  <p key={index} className="text-gray-400 text-sm mb-2 line-clamp-2">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Services ({servicesData.length})</h3>
              <button
                onClick={() => {
                  setEditingService(null);
                  setEditingServiceIndex(null);
                  setServiceModalOpen(true);
                }}
                className="px-4 py-2 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-add-line mr-2"></i>Add Service
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal/20 rounded-lg">
                      <i className={`${service.icon} text-teal text-xl`}></i>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingService(service);
                          setEditingServiceIndex(index);
                          setServiceModalOpen(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
                      >
                        <i className="ri-edit-line text-gray-400 text-sm"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteService(index)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 rounded-lg cursor-pointer"
                      >
                        <i className="ri-delete-bin-line text-red-400 text-sm"></i>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-white font-medium mb-1">{service.title}</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Philosophy Section</h3>
              <button
                onClick={() => setPhilosophyModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300"><span className="text-gray-500">Title:</span> {philosophyData.title}</p>
              <p className="text-gray-400 text-sm italic line-clamp-3">{philosophyData.quote}</p>
              <p className="text-gray-400 text-sm line-clamp-2">{philosophyData.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Page Content */}
      {activeTab === 'contact' && (
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Hero Section</h3>
              <button
                onClick={() => setContactHeroModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300"><span className="text-gray-500">Title:</span> {contactHeroData.title}</p>
              <p className="text-gray-300"><span className="text-gray-500">Subtitle:</span> {contactHeroData.subtitle}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Contact Information</h3>
              <button
                onClick={() => setContactInfoModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300"><span className="text-gray-500">Email:</span> {contactInfoData.email}</p>
              <p className="text-gray-300"><span className="text-gray-500">Instagram:</span> {contactInfoData.instagram}</p>
              <p className="text-gray-300"><span className="text-gray-500">Response Time:</span> {contactInfoData.responseTime}</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Frequently Asked Questions ({faqsData.length})</h3>
              <button
                onClick={() => {
                  setEditingFaq(null);
                  setEditingFaqIndex(null);
                  setFaqModalOpen(true);
                }}
                className="px-4 py-2 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-add-line mr-2"></i>Add FAQ
              </button>
            </div>
            <div className="space-y-3">
              {faqsData.map((faq, index) => (
                <div key={index} className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-medium flex-1">{faq.question}</h4>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => {
                          setEditingFaq(faq);
                          setEditingFaqIndex(index);
                          setFaqModalOpen(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
                      >
                        <i className="ri-edit-line text-gray-400 text-sm"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(index)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 rounded-lg cursor-pointer"
                      >
                        <i className="ri-delete-bin-line text-red-400 text-sm"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Contact Form Submissions</h3>
                <p className="text-gray-400 text-sm">Submissions view will be added later.</p>
              </div>
              <span className="text-xs text-white/40 uppercase tracking-widest">Coming soon</span>
            </div>
          </div>
          
        </div>
      )}

      {/* Collaborations Page Content */}
      {activeTab === 'collaborations' && (
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Hero Section</h3>
              <button
                onClick={() => setCollabHeroModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300"><span className="text-gray-500">Title:</span> {collabHeroData.title}</p>
              <p className="text-gray-300"><span className="text-gray-500">Subtitle:</span> {collabHeroData.subtitle}</p>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Introduction Section</h3>
              <button
                onClick={() => setCollabIntroModalOpen(true)}
                className="px-4 py-2 bg-teal/20 hover:bg-teal/30 text-teal rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-edit-line mr-2"></i>Edit
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 whitespace-pre-line"><span className="text-gray-500">Title:</span> {collabIntroData.title}</p>
              <p className="text-gray-300"><span className="text-gray-500">Subtitle:</span> {collabIntroData.subtitle}</p>
            </div>
          </div>

          {/* Collaboration Groups */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Collaboration Groups ({collabGroupsData.length})</h3>
              <button
                onClick={() => {
                  setEditingCollabGroup(null);
                  setEditingCollabGroupIndex(null);
                  setCollabGroupModalOpen(true);
                }}
                className="px-4 py-2 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-add-line mr-2"></i>Add Group
              </button>
            </div>
            <div className="space-y-3">
              {collabGroupsData.map((group, index) => (
                <div key={index} className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 flex items-center justify-center bg-teal/20 rounded-lg">
                        <i className={`${group.icon} text-teal text-xl`}></i>
                      </div>
                      <h4 className="text-white font-medium">{group.name}</h4>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingCollabGroup(group);
                          setEditingCollabGroupIndex(index);
                          setCollabGroupModalOpen(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
                      >
                        <i className="ri-edit-line text-gray-400 text-sm"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteCollabGroup(index)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 rounded-lg cursor-pointer"
                      >
                        <i className="ri-delete-bin-line text-red-400 text-sm"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2 ml-13">{group.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Testimonials ({testimonialsData.length})</h3>
              <button
                onClick={() => {
                  setEditingTestimonial(null);
                  setEditingTestimonialIndex(null);
                  setTestimonialModalOpen(true);
                }}
                className="px-4 py-2 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
              >
                <i className="ri-add-line mr-2"></i>Add Testimonial
              </button>
            </div>
            <div className="space-y-3">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingTestimonial(testimonial);
                          setEditingTestimonialIndex(index);
                          setTestimonialModalOpen(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
                      >
                        <i className="ri-edit-line text-gray-400 text-sm"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(index)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 rounded-lg cursor-pointer"
                      >
                        <i className="ri-delete-bin-line text-red-400 text-sm"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm italic line-clamp-2">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Management */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Collaboration Gallery</h3>
                <p className="text-gray-400 text-sm">Manage images shown in the collaborations gallery</p>
              </div>
              <button className="px-4 py-2 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm">
                <i className="ri-image-add-line mr-2"></i>Manage Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* All Modals */}
      {heroModalOpen && (
        <EditHeroModal
          isOpen={heroModalOpen}
          onClose={() => setHeroModalOpen(false)}
          initialData={heroData}
          onSave={async (data) => {
            setHeroData(data);
            trackChange('home', 'hero', data);
            setHeroModalOpen(false);
          }}
        />
      )}

      {selectedWorksModalOpen && (
        <EditSelectedWorksModal
          isOpen={selectedWorksModalOpen}
          onClose={() => setSelectedWorksModalOpen(false)}
          initialData={selectedWorksData}
          onSave={async (data) => {
            setSelectedWorksData(data);
            trackChange('home', 'selected-works', data);
            setSelectedWorksModalOpen(false);
          }}
        />
      )}

      {aboutPreviewModalOpen && (
        <EditAboutPreviewModal
          isOpen={aboutPreviewModalOpen}
          onClose={() => setAboutPreviewModalOpen(false)}
          initialData={aboutPreviewData}
          onSave={async (data) => {
            setAboutPreviewData(data);
            trackChange('home', 'about-preview', data);
            setAboutPreviewModalOpen(false);
          }}
        />
      )}

      {ctaModalOpen && (
        <EditCTAModal
          isOpen={ctaModalOpen}
          onClose={() => setCtaModalOpen(false)}
          initialData={ctaData}
          onSave={async (data) => {
            setCtaData(data);
            trackChange('home', 'cta', data);
            setCtaModalOpen(false);
          }}
        />
      )}

      {aboutHeroModalOpen && (
        <EditAboutHeroModal
          isOpen={aboutHeroModalOpen}
          onClose={() => setAboutHeroModalOpen(false)}
          initialData={aboutHeroData}
          onSave={async (data) => {
            setAboutHeroData(data);
            trackChange('about', 'hero', data);
            setAboutHeroModalOpen(false);
          }}
        />
      )}

      {aboutMainModalOpen && (
        <EditAboutMainModal
          isOpen={aboutMainModalOpen}
          onClose={() => setAboutMainModalOpen(false)}
          initialData={aboutMainData}
          onSave={async (data) => {
            setAboutMainData(data);
            trackChange('about', 'main', data);
            setAboutMainModalOpen(false);
          }}
        />
      )}

      {serviceModalOpen && (
        <EditServiceModal
          isOpen={serviceModalOpen}
          onClose={() => {
            setServiceModalOpen(false);
            setEditingService(null);
            setEditingServiceIndex(null);
          }}
          initialData={editingService}
          onSave={async (data) => {
            handleSaveService(data);
            trackChange('about', 'services', servicesData);
          }}
        />
      )}

      {philosophyModalOpen && (
        <EditPhilosophyModal
          isOpen={philosophyModalOpen}
          onClose={() => setPhilosophyModalOpen(false)}
          initialData={philosophyData}
          onSave={async (data) => {
            setPhilosophyData(data);
            trackChange('about', 'philosophy', data);
            setPhilosophyModalOpen(false);
          }}
        />
      )}

      {contactHeroModalOpen && (
        <EditHeroModal
          isOpen={contactHeroModalOpen}
          onClose={() => setContactHeroModalOpen(false)}
          initialData={contactHeroData}
          onSave={async (data) => {
            setContactHeroData(data);
            trackChange('contact', 'hero', data);
            setContactHeroModalOpen(false);
          }}
        />
      )}

      {contactInfoModalOpen && (
        <EditContactInfoModal
          isOpen={contactInfoModalOpen}
          onClose={() => setContactInfoModalOpen(false)}
          initialData={contactInfoData}
          onSave={async (data) => {
            setContactInfoData(data);
            trackChange('contact', 'info', data);
            setContactInfoModalOpen(false);
          }}
        />
      )}

      {faqModalOpen && (
        <EditFAQModal
          isOpen={faqModalOpen}
          onClose={() => {
            setFaqModalOpen(false);
            setEditingFaq(null);
            setEditingFaqIndex(null);
          }}
          initialData={editingFaq}
          onSave={async (data) => {
            handleSaveFaq(data);
            trackChange('contact', 'faqs', faqsData);
          }}
        />
      )}

      {collabHeroModalOpen && (
        <EditCollabHeroModal
          isOpen={collabHeroModalOpen}
          onClose={() => setCollabHeroModalOpen(false)}
          initialData={collabHeroData}
          onSave={async (data) => {
            setCollabHeroData(data);
            trackChange('collaborations', 'hero', data);
            setCollabHeroModalOpen(false);
          }}
        />
      )}

      {collabIntroModalOpen && (
        <EditCollabIntroModal
          isOpen={collabIntroModalOpen}
          onClose={() => setCollabIntroModalOpen(false)}
          initialData={collabIntroData}
          onSave={async (data) => {
            setCollabIntroData(data);
            trackChange('collaborations', 'intro', data);
            setCollabIntroModalOpen(false);
          }}
        />
      )}

      {collabGroupModalOpen && (
        <EditCollabGroupModal
          isOpen={collabGroupModalOpen}
          onClose={() => {
            setCollabGroupModalOpen(false);
            setEditingCollabGroup(null);
            setEditingCollabGroupIndex(null);
          }}
          initialData={editingCollabGroup}
          onSave={async (data) => {
            handleSaveCollabGroup(data);
            trackChange('collaborations', 'groups', collabGroupsData);
          }}
        />
      )}

      {testimonialModalOpen && (
        <EditTestimonialModal
          isOpen={testimonialModalOpen}
          onClose={() => {
            setTestimonialModalOpen(false);
            setEditingTestimonial(null);
            setEditingTestimonialIndex(null);
          }}
          initialData={editingTestimonial}
          onSave={async (data) => {
            handleSaveTestimonial(data);
            trackChange('collaborations', 'testimonials', testimonialsData);
          }}
        />
      )}
    </div>
  );
}
