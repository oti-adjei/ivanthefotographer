import { useState } from 'react';

interface Work {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface EditSelectedWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    sectionTitle: string;
    works: Work[];
  };
  onSave: (data: { sectionTitle: string; works: Work[] }) => void;
}

export default function EditSelectedWorksModal({
  isOpen,
  onClose,
  initialData,
  onSave,
}: EditSelectedWorksModalProps) {
  const [formData, setFormData] = useState(initialData);
  const [editingWork, setEditingWork] = useState<Work | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleEditWork = (work: Work) => {
    setEditingWork({ ...work });
  };

  const handleSaveWork = () => {
    if (!editingWork) return;
    const updatedWorks = formData.works.map((w) =>
      w.id === editingWork.id ? editingWork : w
    );
    setFormData({ ...formData, works: updatedWorks });
    setEditingWork(null);
  };

  const handleDeleteWork = (id: number) => {
    const updatedWorks = formData.works.filter((w) => w.id !== id);
    setFormData({ ...formData, works: updatedWorks });
  };

  const handleAddWork = () => {
    const newWork: Work = {
      id: Math.max(...formData.works.map((w) => w.id), 0) + 1,
      title: 'New Work',
      category: 'Category',
      image: 'https://readdy.ai/api/search-image?query=placeholder&width=400&height=600&seq=new-work&orientation=portrait',
    };
    setFormData({ ...formData, works: [...formData.works, newWork] });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Edit Selected Works</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Section Title */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Section Title *
            </label>
            <textarea
              value={formData.sectionTitle}
              onChange={(e) => setFormData({ ...formData, sectionTitle: e.target.value })}
              className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal resize-none"
              rows={2}
              required
              placeholder="Enter section title"
            />
          </div>

          {/* Works Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-white">
                Featured Works ({formData.works.length})
              </label>
              <button
                type="button"
                onClick={handleAddWork}
                className="bg-teal hover:bg-teal-light text-white px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-add-line mr-1"></i>
                Add Work
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {formData.works.map((work) => (
                <div
                  key={work.id}
                  className="bg-[#2B2B2B] rounded-lg p-3 hover:bg-[#333] transition-colors"
                >
                  <div className="w-full h-32 bg-[#1A1A1A] rounded-lg mb-3 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white text-sm font-medium mb-1 truncate">{work.title}</p>
                  <p className="text-gray-400 text-xs mb-3 truncate">{work.category}</p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEditWork(work)}
                      className="flex-1 text-teal hover:text-teal-light text-xs cursor-pointer bg-[#1A1A1A] hover:bg-[#252525] py-2 rounded transition-colors whitespace-nowrap"
                    >
                      <i className="ri-edit-line mr-1"></i>Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteWork(work.id)}
                      className="flex-1 text-red-400 hover:text-red-300 text-xs cursor-pointer bg-[#1A1A1A] hover:bg-[#252525] py-2 rounded transition-colors whitespace-nowrap"
                    >
                      <i className="ri-delete-bin-line mr-1"></i>Delete
                    </button>
                  </div>
                </div>
              ))}
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

      {/* Edit Work Modal */}
      {editingWork && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-lg">
            <div className="border-b border-white/10 p-6 flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">Edit Work</h4>
              <button
                onClick={() => setEditingWork(null)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Title *</label>
                <input
                  type="text"
                  value={editingWork.title}
                  onChange={(e) => setEditingWork({ ...editingWork, title: e.target.value })}
                  className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-teal"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Category *</label>
                <input
                  type="text"
                  value={editingWork.category}
                  onChange={(e) => setEditingWork({ ...editingWork, category: e.target.value })}
                  className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-teal"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Image URL</label>
                <input
                  type="text"
                  value={editingWork.image}
                  onChange={(e) => setEditingWork({ ...editingWork, image: e.target.value })}
                  className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-teal text-sm"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setEditingWork(null)}
                  className="flex-1 bg-[#2B2B2B] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveWork}
                  className="flex-1 bg-teal hover:bg-teal-light text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
