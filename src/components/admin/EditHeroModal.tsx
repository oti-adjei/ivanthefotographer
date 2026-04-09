import { useState } from 'react';

interface EditHeroModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  onSave: (data: { title: string; subtitle: string; backgroundImage: string }) => void;
}

export default function EditHeroModal({ isOpen, onClose, initialData, onSave }: EditHeroModalProps) {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Edit Hero Section</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Main Title *
            </label>
            <textarea
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal resize-none"
              rows={3}
              required
              placeholder="Enter hero title (use \n for line breaks)"
            />
            <p className="text-xs text-gray-500 mt-1">Use \n for line breaks</p>
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Subtitle *
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal"
              required
              placeholder="Enter subtitle"
            />
          </div>

          {/* Background Image */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Background Image
            </label>
            <div className="space-y-3">
              <div className="w-full h-48 bg-[#2B2B2B] rounded-lg overflow-hidden">
                <img
                  src={formData.backgroundImage}
                  alt="Hero Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 bg-[#2B2B2B] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
                >
                  <i className="ri-upload-line mr-2"></i>
                  Upload New Image
                </button>
                <button
                  type="button"
                  className="flex-1 bg-[#2B2B2B] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
                >
                  <i className="ri-image-line mr-2"></i>
                  Choose from Gallery
                </button>
              </div>
              <input
                type="text"
                value={formData.backgroundImage}
                onChange={(e) => setFormData({ ...formData, backgroundImage: e.target.value })}
                className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-teal text-sm"
                placeholder="Or paste image URL"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#2B2B2B] hover:bg-[#333] text-white px-6 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-teal hover:bg-teal-light text-white px-6 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
