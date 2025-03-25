import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - component overview
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const Addpackage = Loadable(lazy(() => import('pages/component-overview/Addpackage.jsx')));
const Allpackage = Loadable(lazy(() => import('pages/component-overview/Allpackage.jsx')));
const Alluser = Loadable(lazy(() => import('pages/component-overview/Alluser.jsx')));
const Wallet = Loadable(lazy(() => import('pages/component-overview/Wallet.jsx')));
const Weeklypayout = Loadable(lazy(() => import('pages/component-overview/Weeklypayout.jsx')));
// render - extra pages
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/dashboard',
  element: <DashboardLayout />, // Apply Dashboard Layout after login
  children: [
    {
      path: '',
      element: <Navigate to="default" replace /> // Redirect /dashboard to /dashboard/default
    },
    {
      path: 'default',
      element: <DashboardDefault />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'addpackage',
      element: <Addpackage /> // Add package page for user to add their package details
    },
    {
      path:'allpackage',
      element: <Allpackage /> 
    },
    {
      path:"wallet",
      element:  <Wallet/>  
    },
    {
      path: 'weeklypayout',
      element: <Weeklypayout />
    },
    {
      path:'alluser',
      element:  <Alluser/> 
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
