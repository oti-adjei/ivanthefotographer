import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const PortfolioPage = lazy(() => import('../pages/portfolio/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const CollaborationsPage = lazy(() => import('../pages/collaborations/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const AdminPage = lazy(() => import('../pages/admin/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/collaborations',
    element: <CollaborationsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
