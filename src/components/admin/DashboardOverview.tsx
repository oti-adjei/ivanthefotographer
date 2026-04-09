import { useState } from 'react';
import { mockBookings, mockInvoices, mockRevenueData } from '../../mocks/adminData';
import NewBookingModal from './NewBookingModal';
import NewInvoiceModal from './NewInvoiceModal';
import NewClientModal from './NewClientModal';

export default function DashboardOverview() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  const totalRevenue = mockInvoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const pendingPayments = mockInvoices
    .filter(inv => inv.status === 'pending')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const upcomingBookings = mockBookings.filter(
    b => b.status === 'confirmed' && new Date(b.date) > new Date()
  ).length;

  const recentBookings = mockBookings.slice(0, 5);

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-serif text-gray-100 mb-2">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Ivan. Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-2xl text-teal"></i>
              </div>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <i className="ri-arrow-up-line"></i>
                12%
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
            <p className="text-3xl font-semibold text-gray-100">${totalRevenue.toLocaleString()}</p>
          </div>

          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <i className="ri-time-line text-2xl text-orange-500"></i>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-1">Pending Payments</p>
            <p className="text-3xl font-semibold text-gray-100">${pendingPayments.toLocaleString()}</p>
          </div>

          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <i className="ri-calendar-check-line text-2xl text-blue-500"></i>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-1">Upcoming Bookings</p>
            <p className="text-3xl font-semibold text-gray-100">{upcomingBookings}</p>
          </div>

          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <i className="ri-user-3-line text-2xl text-purple-500"></i>
              </div>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <i className="ri-arrow-up-line"></i>
                8%
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-1">Total Clients</p>
            <p className="text-3xl font-semibold text-gray-100">127</p>
          </div>
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="col-span-2 bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-100">Revenue Overview</h2>
              <select className="bg-[#1A1A1A] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 cursor-pointer">
                <option>Last 12 Months</option>
                <option>Last 6 Months</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {mockRevenueData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-teal/20 rounded-t-lg hover:bg-teal/30 transition-colors cursor-pointer relative group">
                    <div
                      className="w-full bg-teal rounded-t-lg"
                      style={{ height: `${(data.revenue / 20000) * 240}px` }}
                    ></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] px-2 py-1 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${data.revenue.toLocaleString()}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-6">Recent Bookings</h2>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                    <i className="ri-calendar-line text-teal"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-200 truncate">{booking.clientName}</p>
                    <p className="text-xs text-gray-500">{booking.service}</p>
                    <p className="text-xs text-gray-600 mt-1">{booking.date}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 hover:border-teal transition-colors cursor-pointer whitespace-nowrap text-left"
          >
            <i className="ri-add-circle-line text-2xl text-teal mb-3"></i>
            <p className="text-sm font-medium text-gray-200">New Booking</p>
            <p className="text-xs text-gray-500 mt-1">Create a new booking</p>
          </button>

          <button 
            onClick={() => setIsInvoiceModalOpen(true)}
            className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 hover:border-teal transition-colors cursor-pointer whitespace-nowrap text-left"
          >
            <i className="ri-file-add-line text-2xl text-teal mb-3"></i>
            <p className="text-sm font-medium text-gray-200">Create Invoice</p>
            <p className="text-xs text-gray-500 mt-1">Generate new invoice</p>
          </button>

          <button className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 hover:border-teal transition-colors cursor-pointer whitespace-nowrap text-left">
            <i className="ri-upload-cloud-line text-2xl text-teal mb-3"></i>
            <p className="text-sm font-medium text-gray-200">Upload Images</p>
            <p className="text-xs text-gray-500 mt-1">Add to portfolio</p>
          </button>

          <button 
            onClick={() => setIsClientModalOpen(true)}
            className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 hover:border-teal transition-colors cursor-pointer whitespace-nowrap text-left"
          >
            <i className="ri-user-add-line text-2xl text-teal mb-3"></i>
            <p className="text-sm font-medium text-gray-200">Add Client</p>
            <p className="text-xs text-gray-500 mt-1">Create client profile</p>
          </button>
        </div>
      </div>

      {/* Modals */}
      <NewBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <NewInvoiceModal isOpen={isInvoiceModalOpen} onClose={() => setIsInvoiceModalOpen(false)} />
      <NewClientModal isOpen={isClientModalOpen} onClose={() => setIsClientModalOpen(false)} />
    </>
  );
}
