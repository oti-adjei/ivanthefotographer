import { mockClients } from '../../mocks/adminData';

export default function ClientsManager() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-gray-100 mb-2">Clients</h1>
          <p className="text-gray-500">Manage your client database and relationships</p>
        </div>
        <button className="bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap">
          <i className="ri-user-add-line"></i>
          Add Client
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input
            type="text"
            placeholder="Search clients by name, email, or phone..."
            className="w-full bg-[#0F0F0F] border border-gray-800 rounded-lg pl-12 pr-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-teal"
          />
        </div>
        <select className="bg-[#0F0F0F] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-300 cursor-pointer">
          <option>All Tags</option>
          <option>VIP</option>
          <option>Repeat Client</option>
          <option>Corporate</option>
          <option>Influencer</option>
        </select>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-3 gap-6">
        {mockClients.map((client) => (
          <div
            key={client.id}
            className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 hover:border-teal transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center">
                <span className="text-xl font-medium text-teal">
                  {client.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors">
                <i className="ri-more-2-fill text-gray-400"></i>
              </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-100 mb-1">{client.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{client.email}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {client.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-teal/10 text-teal text-xs rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Bookings</p>
                <p className="text-lg font-semibold text-gray-100">{client.totalBookings}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Spent</p>
                <p className="text-lg font-semibold text-gray-100">${client.totalSpent}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-2">Last Booking</p>
              <p className="text-sm text-gray-300">{client.lastBooking}</p>
            </div>

            {client.notes && (
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 mb-2">Notes</p>
                <p className="text-sm text-gray-400 line-clamp-2">{client.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
