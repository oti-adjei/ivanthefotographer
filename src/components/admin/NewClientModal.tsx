import { useState } from 'react';

interface NewClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewClientModal({ isOpen, onClose }: NewClientModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    tags: [] as string[],
    notes: ''
  });

  const availableTags = ['VIP', 'Repeat Client', 'Corporate', 'Wedding', 'Fashion', 'Event'];

  if (!isOpen) return null;

  const toggleTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.includes(tag)
        ? formData.tags.filter(t => t !== tag)
        : [...formData.tags, tag]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('New client created:', formData);
    onClose();
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      tags: [],
      notes: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-serif text-gray-100">Add New Client</h2>
            <p className="text-sm text-gray-500 mt-1">Create a new client profile</p>
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
          {/* Basic Information */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Company / Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4">Client Tags</h3>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    formData.tags.includes(tag)
                      ? 'bg-teal text-white'
                      : 'bg-[#1A1A1A] text-gray-400 hover:text-gray-200 border border-gray-800'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4">Notes</h3>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors resize-none"
              placeholder="Add any relevant notes about this client..."
            />
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
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
