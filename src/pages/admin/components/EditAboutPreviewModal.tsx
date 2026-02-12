import { useState } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface EditAboutPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    title: string;
    paragraphs: string[];
    stats: Stat[];
    image: string;
  };
  onSave: (data: {
    title: string;
    paragraphs: string[];
    stats: Stat[];
    image: string;
  }) => void;
}

export default function EditAboutPreviewModal({
  isOpen,
  onClose,
  initialData,
  onSave,
}: EditAboutPreviewModalProps) {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleParagraphChange = (index: number, value: string) => {
    const updatedParagraphs = [...formData.paragraphs];
    updatedParagraphs[index] = value;
    setFormData({ ...formData, paragraphs: updatedParagraphs });
  };

  const handleStatChange = (index: number, field: 'value' | 'label', value: string) => {
    const updatedStats = [...formData.stats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    setFormData({ ...formData, stats: updatedStats });
  };

  const handleAddParagraph = () => {
    setFormData({ ...formData, paragraphs: [...formData.paragraphs, ''] });
  };

  const handleRemoveParagraph = (index: number) => {
    const updatedParagraphs = formData.paragraphs.filter((_, i) => i !== index);
    setFormData({ ...formData, paragraphs: updatedParagraphs });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Edit About Preview</h3>
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
              Section Title *
            </label>
            <textarea
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal resize-none"
              rows={2}
              required
              placeholder="Enter section title"
            />
          </div>

          {/* Paragraphs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-white">
                Content Paragraphs
              </label>
              <button
                type="button"
                onClick={handleAddParagraph}
                className="text-teal hover:text-teal-light text-sm cursor-pointer whitespace-nowrap"
              >
                <i className="ri-add-line mr-1"></i>Add Paragraph
              </button>
            </div>
            <div className="space-y-3">
              {formData.paragraphs.map((paragraph, index) => (
                <div key={index} className="relative">
                  <textarea
                    value={paragraph}
                    onChange={(e) => handleParagraphChange(index, e.target.value)}
                    className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-teal resize-none"
                    rows={3}
                    placeholder={`Paragraph ${index + 1}`}
                  />
                  {formData.paragraphs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveParagraph(index)}
                      className="absolute top-3 right-3 text-red-400 hover:text-red-300 cursor-pointer"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Statistics
            </label>
            <div className="grid grid-cols-3 gap-4">
              {formData.stats.map((stat, index) => (
                <div key={index} className="bg-[#2B2B2B] rounded-lg p-4 space-y-2">
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-teal text-sm"
                    placeholder="Value"
                  />
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-teal text-sm"
                    placeholder="Label"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Portrait Image
            </label>
            <div className="space-y-3">
              <div className="w-full h-64 bg-[#2B2B2B] rounded-lg overflow-hidden">
                <img
                  src={formData.image}
                  alt="About Portrait"
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
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
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
