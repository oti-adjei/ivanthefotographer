import { mockPackages } from '../../../mocks/adminData';

export default function SettingsManager() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif text-gray-100 mb-2">Settings</h1>
        <p className="text-gray-500">Manage your profile, pricing, and business settings</p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="col-span-2 space-y-6">
          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Business Name</label>
                <input
                  type="text"
                  defaultValue="Ivan The Photographer"
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-teal"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="contact@ivanthefotographer.com"
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-teal"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-teal"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Bio</label>
                <textarea
                  rows={4}
                  defaultValue="Professional photographer specializing in portraits, events, and creative collaborations. Capturing moments that tell your unique story."
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-teal resize-none"
                ></textarea>
              </div>

              <button className="bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                Save Changes
              </button>
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-100">Pricing Packages</h2>
              <button className="bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-add-line mr-2"></i>
                Add Package
              </button>
            </div>

            <div className="space-y-4">
              {mockPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-4 hover:border-teal transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-100 mb-1">{pkg.name}</h3>
                      <p className="text-sm text-gray-400 mb-3">{pkg.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span><i className="ri-time-line mr-1"></i>{pkg.duration}</span>
                        <span><i className="ri-image-line mr-1"></i>{pkg.deliverables}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-semibold text-teal">${pkg.price}</span>
                      <button className="w-8 h-8 rounded-lg bg-[#0F0F0F] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
                        <i className="ri-edit-line text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="space-y-6">
          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">Availability</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Accept New Bookings</span>
                <button className="w-12 h-6 bg-teal rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Auto-Reply Inquiries</span>
                <button className="w-12 h-6 bg-teal rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Email Notifications</span>
                <button className="w-12 h-6 bg-teal rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">Social Links</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                  <i className="ri-instagram-line text-teal"></i>
                </div>
                <input
                  type="text"
                  defaultValue="@ivanthefotographer"
                  className="flex-1 bg-[#1A1A1A] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-teal"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                  <i className="ri-facebook-line text-teal"></i>
                </div>
                <input
                  type="text"
                  placeholder="Facebook URL"
                  className="flex-1 bg-[#1A1A1A] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-teal"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                  <i className="ri-twitter-x-line text-teal"></i>
                </div>
                <input
                  type="text"
                  placeholder="Twitter/X URL"
                  className="flex-1 bg-[#1A1A1A] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-teal"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Danger Zone</h2>
            <button className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-4 py-3 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-logout-box-line mr-2"></i>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
