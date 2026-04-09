import { useState } from 'react';

interface NewBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewBookingModal({ isOpen, onClose }: NewBookingModalProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('New booking created:', formData);
    onClose();
    // Reset form
    setFormData({
      clientName: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      location: '',
      notes: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-serif text-gray-100">New Booking</h2>
            <p className="text-sm text-gray-500 mt-1">Create a new photography session booking</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl text-gray-400"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Client Information */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4">Client Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Client Name *</label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="client@example.com"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4">Booking Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Service Type *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Portrait Session">Portrait Session</option>
                  <option value="Wedding Photography">Wedding Photography</option>
                  <option value="Event Coverage">Event Coverage</option>
                  <option value="Fashion Shoot">Fashion Shoot</option>
                  <option value="Corporate Headshots">Corporate Headshots</option>
                  <option value="Product Photography">Product Photography</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Time *</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors cursor-pointer"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="Studio or custom location"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors resize-none"
                  placeholder="Additional details or special requests..."
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-teal hover:bg-teal/90 text-white text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Create Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
