import { useState } from 'react';

interface EditAboutMainModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    title: string;
    paragraphs: string[];
  };
  onSave: (data: { title: string; paragraphs: string[] }) => void;
}

export default function EditAboutMainModal({ isOpen, onClose, initialData, onSave }: EditAboutMainModalProps) {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const updateParagraph = (index: number, value: string) => {
    const newParagraphs = [...formData.paragraphs];
    newParagraphs[index] = value;
    setFormData({ ...formData, paragraphs: newParagraphs });
  };

  const addParagraph = () => {
    setFormData({ ...formData, paragraphs: [...formData.paragraphs, ''] });
  };

  const removeParagraph = (index: number) => {
    const newParagraphs = formData.paragraphs.filter((_, i) => i !== index);
    setFormData({ ...formData, paragraphs: newParagraphs });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-serif text-white">Edit About Main Section</h3>
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
              Section Title *
            </label>
            <textarea
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              rows={2}
              className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors resize-none"
              placeholder="Behind the Lens:\nPhilosophy & Approach"
            />
            <p className="text-xs text-gray-500 mt-1">Use \n for line breaks</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm text-gray-300">
                Biography Paragraphs *
              </label>
              <button
                type="button"
                onClick={addParagraph}
                className="text-teal hover:text-teal-light text-sm cursor-pointer flex items-center gap-1"
              >
                <i className="ri-add-line"></i>Add Paragraph
              </button>
            </div>
            <div className="space-y-4">
              {formData.paragraphs.map((paragraph, index) => (
                <div key={index} className="relative">
                  <textarea
                    value={paragraph}
                    onChange={(e) => updateParagraph(index, e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder={`Paragraph ${index + 1}`}
                  />
                  {formData.paragraphs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeParagraph(index)}
                      className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 rounded-full cursor-pointer"
                    >
                      <i className="ri-close-line text-red-400 text-sm"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
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
