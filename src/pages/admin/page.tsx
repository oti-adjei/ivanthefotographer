import { useState, useEffect } from 'react';
import AdminSidebar from './components/AdminSidebar';
import DashboardOverview from './components/DashboardOverview';
import BookingsManager from './components/BookingsManager';
import ClientsManager from './components/ClientsManager';
import PortfolioManager from './components/PortfolioManager';
import InvoicesManager from './components/InvoicesManager';
import FinancialOverview from './components/FinancialOverview';
import SettingsManager from './components/SettingsManager';
import WebsiteContentManager from './components/WebsiteContentManager';
import FormSubmissionsManager from './components/FormSubmissionsManager';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Listen for navigation events from child components
  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent;
      setActiveTab(customEvent.detail);
    };

    window.addEventListener('admin-navigate', handleNavigate);
    return () => {
      window.removeEventListener('admin-navigate', handleNavigate);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'bookings':
        return <BookingsManager />;
      case 'clients':
        return <ClientsManager />;
      case 'invoices':
        return <InvoicesManager />;
      case 'portfolio':
        return <PortfolioManager />;
      case 'website':
        return <WebsiteContentManager />;
      case 'submissions':
        return <FormSubmissionsManager />;
      case 'financial':
        return <FinancialOverview />;
      case 'settings':
        return <SettingsManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        {renderContent()}
      </div>
    </div>
  );
}
