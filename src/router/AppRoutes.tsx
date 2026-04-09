import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { ProtectedRoute } from './ProtectedRoute';
import NotFound from '../pages/shared/NotFound';
import AdminLayout from '../pages/admin/layout';
import AdminDashboardPage from '../pages/admin/dashboard/page';
import AdminWebsitePage from '../pages/admin/website/page';
import AdminBookingsPage from '../pages/admin/bookings/page';
import AdminClientsPage from '../pages/admin/clients/page';
import AdminPortfolioPage from '../pages/admin/portfolio/page';
import AdminInvoicesPage from '../pages/admin/invoices/page';
import AdminFinancialPage from '../pages/admin/financial/page';
import AdminSubmissionsPage from '../pages/admin/submissions/page';
import AdminSettingsPage from '../pages/admin/settings/page';

export function AppRoutes() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path="website" element={<AdminWebsitePage />} />
        <Route path="bookings" element={<AdminBookingsPage />} />
        <Route path="clients" element={<AdminClientsPage />} />
        <Route path="portfolio" element={<AdminPortfolioPage />} />
        <Route path="invoices" element={<AdminInvoicesPage />} />
        <Route path="financial" element={<AdminFinancialPage />} />
        <Route path="submissions" element={<AdminSubmissionsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
