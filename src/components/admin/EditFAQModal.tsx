import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface EditFAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: FAQ;
  onSave: (data: FAQ) => void;
  isNew?: boolean;
}

export default function EditFAQModal({ isOpen, onClose, initialData, onSave, isNew = false }: EditFAQModalProps) {
  const [formData, setFormData] = useState<FAQ>(
    initialData || {
      question: '',
      answer: '',
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
            {isNew ? 'Add New FAQ' : 'Edit FAQ'}
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
              Question *
            </label>
            <input
              type="text"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors"
              placeholder="How far in advance should I book?"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Answer *
            </label>
            <textarea
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors resize-none"
              placeholder="Provide a detailed answer..."
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
              {isNew ? 'Add FAQ' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
