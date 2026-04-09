import { useState } from 'react';

interface EditCollabHeroModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    title: string;
    subtitle: string;
  };
  onSave: (data: { title: string; subtitle: string }) => void;
}

export default function EditCollabHeroModal({ isOpen, onClose, initialData, onSave }: EditCollabHeroModalProps) {
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
          <h3 className="text-2xl font-serif text-white">Edit Collaborations Hero</h3>
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
              Page Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="Collaborations"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Subtitle *
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="Creating together, growing together"
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
