import { useState } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface EditServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Service;
  onSave: (data: Service) => void;
  isNew?: boolean;
}

export default function EditServiceModal({ isOpen, onClose, initialData, onSave, isNew = false }: EditServiceModalProps) {
  const [formData, setFormData] = useState<Service>(
    initialData || {
      icon: 'ri-user-smile-line',
      title: '',
      description: '',
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const iconOptions = [
    { value: 'ri-user-smile-line', label: 'Portrait' },
    { value: 'ri-calendar-event-line', label: 'Event' },
    { value: 'ri-shirt-line', label: 'Fashion' },
    { value: 'ri-heart-line', label: 'Lifestyle' },
    { value: 'ri-briefcase-line', label: 'Corporate' },
    { value: 'ri-team-line', label: 'Collaboration' },
    { value: 'ri-camera-line', label: 'Camera' },
    { value: 'ri-image-line', label: 'Image' },
    { value: 'ri-palette-line', label: 'Creative' },
    { value: 'ri-star-line', label: 'Star' },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-serif text-white">
            {isNew ? 'Add New Service' : 'Edit Service'}
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
              Service Icon *
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
              Service Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="Portrait Photography"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Service Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors resize-none"
              placeholder="Describe what this service includes..."
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
              {isNew ? 'Add Service' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
