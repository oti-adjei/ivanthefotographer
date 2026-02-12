type AdminTab =
  | 'dashboard'
  | 'bookings'
  | 'clients'
  | 'portfolio'
  | 'invoices'
  | 'financial'
  | 'website'
  | 'settings';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
}

export default function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const menuItems = [
    { id: 'dashboard' as AdminTab, label: 'Dashboard', icon: 'ri-dashboard-line' },
    { id: 'bookings' as AdminTab, label: 'Bookings', icon: 'ri-calendar-line' },
    { id: 'clients' as AdminTab, label: 'Clients', icon: 'ri-user-line' },
    { id: 'portfolio' as AdminTab, label: 'Portfolio & Media', icon: 'ri-image-line' },
    { id: 'invoices' as AdminTab, label: 'Invoices', icon: 'ri-file-list-line' },
    { id: 'financial' as AdminTab, label: 'Financial', icon: 'ri-line-chart-line' },
    { id: 'website' as AdminTab, label: 'Website Content', icon: 'ri-pages-line' },
    { id: 'settings' as AdminTab, label: 'Settings', icon: 'ri-settings-line' },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#0F0F0F] border-r border-gray-800 overflow-y-auto">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === item.id
                ? 'bg-teal/10 text-teal'
                : 'text-gray-400 hover:bg-[#1A1A1A] hover:text-gray-200'
            }`}
          >
            <i className={`${item.icon} text-lg`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-8 border-t border-gray-800">
        <div className="bg-[#1A1A1A] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-lightbulb-line text-teal"></i>
            <span className="text-xs font-medium text-gray-300">Quick Tip</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Use keyboard shortcuts to navigate faster. Press ? to see all shortcuts.
          </p>
        </div>
      </div>
    </aside>
  );
}
