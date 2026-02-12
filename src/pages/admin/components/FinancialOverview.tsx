import { mockRevenueData } from '../../../mocks/adminData';

export default function FinancialOverview() {
  const totalRevenue = mockRevenueData.reduce((sum, data) => sum + data.revenue, 0);
  const avgMonthly = Math.round(totalRevenue / mockRevenueData.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-gray-100 mb-2">Financial Overview</h1>
          <p className="text-gray-500">Track revenue, expenses, and financial performance</p>
        </div>
        <button className="bg-[#0F0F0F] border border-gray-800 hover:border-teal text-gray-300 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap">
          <i className="ri-download-line"></i>
          Export Report
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-2xl text-teal"></i>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Annual Revenue</p>
          <p className="text-3xl font-semibold text-gray-100">${totalRevenue.toLocaleString()}</p>
          <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
            <i className="ri-arrow-up-line"></i>
            18% vs last year
          </p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <i className="ri-line-chart-line text-2xl text-blue-500"></i>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Avg Monthly</p>
          <p className="text-3xl font-semibold text-gray-100">${avgMonthly.toLocaleString()}</p>
          <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
            <i className="ri-arrow-up-line"></i>
            12% vs last year
          </p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <i className="ri-wallet-3-line text-2xl text-purple-500"></i>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Total Expenses</p>
          <p className="text-3xl font-semibold text-gray-100">$42,300</p>
          <p className="text-xs text-gray-500 mt-2">Equipment, software, etc.</p>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <i className="ri-funds-line text-2xl text-green-500"></i>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Net Profit</p>
          <p className="text-3xl font-semibold text-gray-100">$123,600</p>
          <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
            <i className="ri-arrow-up-line"></i>
            22% margin
          </p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Revenue Trend</h2>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-teal text-white rounded-lg text-sm cursor-pointer whitespace-nowrap">
              12 Months
            </button>
            <button className="px-4 py-2 bg-[#1A1A1A] text-gray-400 rounded-lg text-sm hover:text-gray-200 cursor-pointer whitespace-nowrap">
              6 Months
            </button>
            <button className="px-4 py-2 bg-[#1A1A1A] text-gray-400 rounded-lg text-sm hover:text-gray-200 cursor-pointer whitespace-nowrap">
              3 Months
            </button>
          </div>
        </div>

        <div className="h-80 flex items-end justify-between gap-3">
          {mockRevenueData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-3">
              <div className="w-full bg-teal/20 rounded-t-lg hover:bg-teal/30 transition-colors cursor-pointer relative group">
                <div
                  className="w-full bg-teal rounded-t-lg"
                  style={{ height: `${(data.revenue / 20000) * 300}px` }}
                ></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1A1A1A] px-3 py-2 rounded-lg text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                  <p className="font-semibold">${data.revenue.toLocaleString()}</p>
                  <p className="text-gray-500">{data.month} 2024</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-6">Revenue by Service</h2>
          <div className="space-y-4">
            {[
              { service: 'Portrait Photography', amount: 45200, percentage: 35 },
              { service: 'Event Photography', amount: 38400, percentage: 30 },
              { service: 'Fashion & Editorial', amount: 25600, percentage: 20 },
              { service: 'Corporate Photography', amount: 19200, percentage: 15 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">{item.service}</span>
                  <span className="text-sm font-semibold text-gray-100">${item.amount.toLocaleString()}</span>
                </div>
                <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-6">Expense Breakdown</h2>
          <div className="space-y-4">
            {[
              { category: 'Equipment & Gear', amount: 18500, percentage: 44 },
              { category: 'Software & Tools', amount: 8400, percentage: 20 },
              { category: 'Marketing', amount: 6700, percentage: 16 },
              { category: 'Studio Rent', amount: 5200, percentage: 12 },
              { category: 'Other', amount: 3500, percentage: 8 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">{item.category}</span>
                  <span className="text-sm font-semibold text-gray-100">${item.amount.toLocaleString()}</span>
                </div>
                <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
