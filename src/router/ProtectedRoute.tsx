import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function isAdminAuthenticated() {
  const flag = localStorage.getItem('admin_authenticated');
  return flag === 'true';
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
}
