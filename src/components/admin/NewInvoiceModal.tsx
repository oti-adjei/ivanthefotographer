import { useState } from 'react';

interface NewInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewInvoiceModal({ isOpen, onClose }: NewInvoiceModalProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    service: '',
    amount: '',
    dueDate: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('New invoice created:', formData);
    onClose();
    // Reset form
    setFormData({
      clientName: '',
      email: '',
      service: '',
      amount: '',
      dueDate: '',
      notes: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-serif text-gray-100">Create Invoice</h2>
            <p className="text-sm text-gray-500 mt-1">Generate a new invoice for your client</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl text-gray-400"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Client Information */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4">Client Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Client Name *</label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="client@example.com"
                />
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4">Invoice Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Service Description *</label>
                <input
                  type="text"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                  placeholder="e.g., Wedding Photography Package"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Amount *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg pl-8 pr-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Due Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Additional Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-teal transition-colors resize-none"
                  placeholder="Payment terms, additional details..."
                />
              </div>
            </div>
          </div>

          {/* Preview Summary */}
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-300 mb-3">Invoice Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal:</span>
                <span className="text-gray-200">${formData.amount || '0.00'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax (0%):</span>
                <span className="text-gray-200">$0.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-800">
                <span className="text-gray-200 font-medium">Total:</span>
                <span className="text-teal font-semibold text-lg">${formData.amount || '0.00'}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-teal hover:bg-teal/90 text-white text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
