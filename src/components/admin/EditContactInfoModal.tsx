import { useState } from 'react';

interface EditContactInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    email: string;
    instagram: string;
    responseTime: string;
  };
  onSave: (data: { email: string; instagram: string; responseTime: string }) => void;
}

export default function EditContactInfoModal({ isOpen, onClose, initialData, onSave }: EditContactInfoModalProps) {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-serif text-white">Edit Contact Information</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl text-gray-400"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="contact@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Instagram Handle *
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">@</span>
              <input
                type="text"
                value={formData.instagram.replace('@', '')}
                onChange={(e) => setFormData({ ...formData, instagram: `@${e.target.value.replace('@', '')}` })}
                required
                className="flex-1 px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
                placeholder="yourusername"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Response Time *
            </label>
            <input
              type="text"
              value={formData.responseTime}
              onChange={(e) => setFormData({ ...formData, responseTime: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="Within 24-48 hours"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-[#2B2B2B] hover:bg-[#333] text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
