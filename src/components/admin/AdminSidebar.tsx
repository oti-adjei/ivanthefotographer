import { NavLink } from 'react-router-dom';

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const menuItems = [
    { to: '/admin', label: 'Dashboard', icon: 'ri-dashboard-line', end: true },
    { to: '/admin/bookings', label: 'Bookings', icon: 'ri-calendar-check-line' },
    { to: '/admin/clients', label: 'Clients', icon: 'ri-group-line' },
    { to: '/admin/portfolio', label: 'Portfolio', icon: 'ri-image-line' },
    { to: '/admin/invoices', label: 'Invoices', icon: 'ri-file-list-3-line' },
    { to: '/admin/financial', label: 'Financial', icon: 'ri-line-chart-line' },
    { to: '/admin/website', label: 'Website Content', icon: 'ri-pages-line' },
    { to: '/admin/submissions', label: 'Submissions', icon: 'ri-mail-line' },
    { to: '/admin/settings', label: 'Settings', icon: 'ri-settings-3-line' },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 bg-[#0F0F0F] border-r border-gray-800 overflow-y-auto transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <nav className={`p-4 space-y-1 ${collapsed ? 'px-2' : ''}`}>
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                collapsed ? 'px-0 py-3 justify-center' : 'px-4 py-3'
              } ${
                isActive
                  ? 'bg-teal/10 text-teal'
                  : 'text-gray-400 hover:bg-[#1A1A1A] hover:text-gray-200'
              }`
            }
          >
            <i className={`${item.icon} text-lg`}></i>
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Toggle Button */}
      <div className={`absolute bottom-20 left-0 right-0 ${collapsed ? 'px-2' : 'px-4'}`}>
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-[#1A1A1A] hover:text-gray-200 transition-colors cursor-pointer"
        >
          <i className={`ri-arrow-${collapsed ? 'right' : 'left'}-double-line text-lg`}></i>
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>

      {/* Quick Tip - only when expanded */}
      {!collapsed && (
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
      )}
    </aside>
  );
}
