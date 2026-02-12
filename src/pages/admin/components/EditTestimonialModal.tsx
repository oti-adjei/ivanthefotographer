import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface EditTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Testimonial;
  onSave: (data: Testimonial) => void;
  isNew?: boolean;
}

export default function EditTestimonialModal({ isOpen, onClose, initialData, onSave, isNew = false }: EditTestimonialModalProps) {
  const [formData, setFormData] = useState<Testimonial>(
    initialData || {
      name: '',
      role: '',
      quote: '',
    }
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-serif text-white">
            {isNew ? 'Add New Testimonial' : 'Edit Testimonial'}
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
              Client Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="Sarah Johnson"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Role/Title *
            </label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="Creative Director"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Testimonial Quote *
            </label>
            <textarea
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors resize-none"
              placeholder="What did they say about working with you?"
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
              {isNew ? 'Add Testimonial' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
