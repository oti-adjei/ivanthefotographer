import { mockGalleries } from '../../../mocks/adminData';

export default function PortfolioManager() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-gray-100 mb-2">Portfolio & Website Media</h1>
          <p className="text-gray-500">Manage curated images displayed on your public website</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#0F0F0F] border border-gray-800 hover:border-teal text-gray-300 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-upload-cloud-line"></i>
            Upload Web Images
          </button>
          <button className="bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-add-line"></i>
            New Project
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-teal/10 border border-teal/30 rounded-xl p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center flex-shrink-0">
          <i className="ri-information-line text-teal text-lg"></i>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-100 mb-1">Website Portfolio Only</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            This section manages web-optimized images shown on your public website. Your full-resolution files remain safely stored on your external drives. Add reference notes below to track where originals are located.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
              <i className="ri-folder-3-line text-teal"></i>
            </div>
            <span className="text-2xl font-semibold text-gray-100">12</span>
          </div>
          <p className="text-sm text-gray-500">Website Projects</p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <i className="ri-image-2-line text-blue-500"></i>
            </div>
            <span className="text-2xl font-semibold text-gray-100">342</span>
          </div>
          <p className="text-sm text-gray-500">Published Images</p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <i className="ri-star-line text-purple-500"></i>
            </div>
            <span className="text-2xl font-semibold text-gray-100">6</span>
          </div>
          <p className="text-sm text-gray-500">Featured Projects</p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <i className="ri-hard-drive-2-line text-orange-500"></i>
            </div>
            <span className="text-2xl font-semibold text-gray-100">8</span>
          </div>
          <p className="text-sm text-gray-500">Local References</p>
        </div>
      </div>

      {/* Galleries Grid */}
      <div className="grid grid-cols-2 gap-6">
        {mockGalleries.map((gallery) => (
          <div
            key={gallery.id}
            className="bg-[#0F0F0F] border border-gray-800 rounded-xl overflow-hidden hover:border-teal transition-colors cursor-pointer"
          >
            <div className="aspect-video bg-[#1A1A1A] relative">
              <img
                src={`https://readdy.ai/api/search-image?query=professional%20photography%20portfolio%20$%7Bgallery.category.toLowerCase%28%29%7D%20elegant%20composition%20artistic%20lighting&width=800&height=450&seq=gallery-${gallery.id}&orientation=landscape`}
                alt={gallery.title}
                className="w-full h-full object-cover"
              />
              {gallery.featured && (
                <div className="absolute top-4 right-4 bg-teal/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <i className="ri-star-fill"></i>
                  Featured
                </div>
              )}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <i className="ri-global-line"></i>
                Live on Website
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{gallery.title}</h3>
                  <p className="text-sm text-gray-500">{gallery.category}</p>
                </div>
                <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors">
                  <i className="ri-more-2-fill text-gray-400"></i>
                </button>
              </div>

              {/* Local Storage Reference */}
              <div className="bg-[#1A1A1A] rounded-lg p-3 mb-4 border border-gray-800">
                <div className="flex items-start gap-2">
                  <i className="ri-hard-drive-2-line text-gray-500 text-sm mt-0.5"></i>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">Original Files Location</p>
                    <p className="text-sm text-gray-300 truncate">External Drive A / 2024 / {gallery.category}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <i className="ri-image-line"></i>
                  <span>{gallery.imageCount} images</span>
                </div>
                <div className="text-xs text-gray-500">
                  Updated {gallery.updatedAt}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <button className="flex-1 bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 py-2 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-drag-move-line mr-2"></i>
                  Reorder
                </button>
                <button className="flex-1 bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 py-2 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-edit-line mr-2"></i>
                  Edit
                </button>
                <button className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 rounded-lg text-sm transition-colors cursor-pointer flex items-center justify-center">
                  <i className="ri-eye-line"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
