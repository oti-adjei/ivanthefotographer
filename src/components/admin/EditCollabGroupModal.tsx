import { useState } from 'react';

interface CollabGroup {
  name: string;
  icon: string;
  description: string;
}

interface EditCollabGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: CollabGroup;
  onSave: (data: CollabGroup) => void;
  isNew?: boolean;
}

export default function EditCollabGroupModal({ isOpen, onClose, initialData, onSave, isNew = false }: EditCollabGroupModalProps) {
  const [formData, setFormData] = useState<CollabGroup>(
    initialData || {
      name: '',
      icon: 'ri-camera-lens-line',
      description: '',
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const iconOptions = [
    { value: 'ri-camera-lens-line', label: 'Camera Lens' },
    { value: 'ri-palette-line', label: 'Palette' },
    { value: 'ri-community-line', label: 'Community' },
    { value: 'ri-team-line', label: 'Team' },
    { value: 'ri-lightbulb-line', label: 'Ideas' },
    { value: 'ri-heart-line', label: 'Heart' },
    { value: 'ri-star-line', label: 'Star' },
    { value: 'ri-award-line', label: 'Award' },
    { value: 'ri-group-line', label: 'Group' },
    { value: 'ri-hand-heart-line', label: 'Support' },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-serif text-white">
            {isNew ? 'Add Collaboration Group' : 'Edit Collaboration Group'}
          </h3>
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
              Group Icon *
            </label>
            <div className="grid grid-cols-5 gap-3">
              {iconOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, icon: option.value })}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    formData.icon === option.value
                      ? 'bg-teal/20 border-teal'
                      : 'bg-[#0A0A0A] border-white/10 hover:border-white/20'
                  }`}
                >
                  <i className={`${option.value} text-2xl ${formData.icon === option.value ? 'text-teal' : 'text-gray-400'}`}></i>
                  <p className="text-xs text-gray-400 mt-2">{option.label}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Group Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="Creative Collective"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors resize-none"
              placeholder="Describe what this collaboration group does..."
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
              {isNew ? 'Add Group' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
