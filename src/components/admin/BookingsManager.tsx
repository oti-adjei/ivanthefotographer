import { useState } from 'react';
import { mockBookings } from '../../mocks/adminData';
import NewBookingModal from './NewBookingModal';
import CalendarView from './CalendarView';

export default function BookingsManager() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const filteredBookings = filterStatus === 'all'
    ? mockBookings
    : mockBookings.filter(b => b.status === filterStatus);

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif text-gray-100 mb-2">Bookings</h1>
            <p className="text-gray-500">Manage your photography sessions and client bookings</p>
          </div>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-add-line"></i>
            New Booking
          </button>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {['all', 'inquiry', 'pending', 'confirmed', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-teal text-white'
                    : 'bg-[#0F0F0F] text-gray-400 hover:text-gray-200 border border-gray-800'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-[#0F0F0F] border border-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-sm transition-colors cursor-pointer whitespace-nowrap ${
                viewMode === 'list' ? 'bg-[#1A1A1A] text-gray-100' : 'text-gray-500'
              }`}
            >
              <i className="ri-list-check"></i>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-md text-sm transition-colors cursor-pointer whitespace-nowrap ${
                viewMode === 'calendar' ? 'bg-[#1A1A1A] text-gray-100' : 'text-gray-500'
              }`}
            >
              <i className="ri-calendar-line"></i>
            </button>
          </div>
        </div>

        {/* Content - List or Calendar */}
        {viewMode === 'calendar' ? (
          <CalendarView />
        ) : (
          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#1A1A1A] border-b border-gray-800">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Booking ID
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-sm font-mono text-gray-300">{booking.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-200">{booking.clientName}</p>
                        <p className="text-xs text-gray-500">{booking.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-300">{booking.service}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-300">{booking.date}</p>
                        <p className="text-xs text-gray-500">{booking.time}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-200">${booking.amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          booking.status === 'confirmed'
                            ? 'bg-green-500/10 text-green-500'
                            : booking.status === 'pending'
                            ? 'bg-orange-500/10 text-orange-500'
                            : booking.status === 'inquiry'
                            ? 'bg-blue-500/10 text-blue-500'
                            : 'bg-gray-500/10 text-gray-500'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
                          <i className="ri-eye-line text-gray-400"></i>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
                          <i className="ri-edit-line text-gray-400"></i>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-red-500/10 flex items-center justify-center transition-colors cursor-pointer">
                          <i className="ri-delete-bin-line text-gray-400 hover:text-red-500"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      <NewBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
}
