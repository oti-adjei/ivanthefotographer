import { mockInvoices } from '../../../mocks/adminData';

export default function InvoicesManager() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-gray-100 mb-2">Invoices</h1>
          <p className="text-gray-500">Manage invoices, payments, and receipts</p>
        </div>
        <button className="bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap">
          <i className="ri-file-add-line"></i>
          Create Invoice
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-2">Total Invoiced</p>
          <p className="text-3xl font-semibold text-gray-100">$3,050</p>
          <p className="text-xs text-gray-600 mt-2">4 invoices</p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-2">Paid</p>
          <p className="text-3xl font-semibold text-green-500">$1,850</p>
          <p className="text-xs text-gray-600 mt-2">3 invoices</p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-2">Pending</p>
          <p className="text-3xl font-semibold text-orange-500">$1,200</p>
          <p className="text-xs text-gray-600 mt-2">1 invoice</p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-2">Overdue</p>
          <p className="text-3xl font-semibold text-red-500">$0</p>
          <p className="text-xs text-gray-600 mt-2">0 invoices</p>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1A1A1A] border-b border-gray-800">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Invoice ID
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Client
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Service
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Issue Date
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Due Date
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {mockInvoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-[#1A1A1A] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-sm font-mono text-gray-300">{invoice.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-200">{invoice.clientName}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-300">{invoice.service}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-100">${invoice.amount}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-400">{invoice.issueDate}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-400">{invoice.dueDate}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      invoice.status === 'paid'
                        ? 'bg-green-500/10 text-green-500'
                        : invoice.status === 'pending'
                        ? 'bg-orange-500/10 text-orange-500'
                        : 'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
                      <i className="ri-download-line text-gray-400"></i>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
                      <i className="ri-mail-send-line text-gray-400"></i>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
                      <i className="ri-more-2-fill text-gray-400"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
