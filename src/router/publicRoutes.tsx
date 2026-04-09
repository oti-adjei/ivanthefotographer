import HomePage from '../pages/public/home/page';
import PortfolioPage from '../pages/public/portfolio/page';
import AboutPage from '../pages/public/about/page';
import CollaborationsPage from '../pages/public/collaborations/page';
import ContactPage from '../pages/public/contact/page';
import AdminLoginPage from '../pages/admin/login/page';

export const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/portfolio', element: <PortfolioPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/collaborations', element: <CollaborationsPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/admin/login', element: <AdminLoginPage /> },
];
