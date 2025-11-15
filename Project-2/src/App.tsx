import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PortfolioProvider } from './hooks/PortfolioContext';

import Layout from './flowbiteComponents/Layout'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'hakkinda',
        element: <AboutPage />,
      },
      {
        path: 'deneyim',
        element: <ExperiencePage />,
      },
      {
        path: 'projeler',
        element: <ProjectsPage />,
      },
      {
        path: '*', 
        element: <div>404 - Sayfa Bulunamadı</div>,
      },
    ],
  },
]);
function App() {
  return (
    <PortfolioProvider>
      <RouterProvider router={router} />
    </PortfolioProvider>
  );
}

export default App; 