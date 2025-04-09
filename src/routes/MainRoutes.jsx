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
// USDT//////
const Addusdt = Loadable(lazy(() => import('../components/USDT/Addusdt')));
const HistoryUsdt = Loadable(lazy(() => import('../components/USDT/HistoryUsdt')));
//Top-up dashboard/////
const Topupaddusdt = Loadable(lazy(() => import('../components/Top-up/Topupaddusdt')));
const Topuphistory = Loadable(lazy(() => import('../components/Top-up/Topuphistory')));
//////user order//////
const Userorder = Loadable(lazy(() => import('../components/Userorder/Userorder')));
// ==============================|| MAIN ROUTING ||============================== //
const Contact = Loadable(lazy(() => import('../components/Contactform/Contact')));
///////////////wallet////////
const Approvedwallet = Loadable(lazy(() => import('../pages/component-overview/userwallet/Approvedwallet')));
const Nonapprovedwallet = Loadable(lazy(() => import('../pages/component-overview/userwallet/Nonapprovedwallet')));
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
      path:'userorder',
      element: <Userorder /> 
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path:"wallet",
      element:  <Wallet/>  
    },
    {
        path:"approvedwallet",
        element: <Approvedwallet/>

    },
    {
      path: 'nonapprovedwallet',
      element: <Nonapprovedwallet/>
    },
    {
      path: 'weeklypayout',
      element: <Weeklypayout />
    },
    {
      path: 'allpackage',
      element: <Allpackage />  // Add package page for user to add their package details
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
    },
    {
      path: 'addusdt',
      element: <Addusdt />
    },
    {
      path: 'historyusdt',
      element: <HistoryUsdt />
    },
    {
      path: 'topupaddusdt',
      element: <Topupaddusdt />
    },
    {
      path: 'topuphistory',
      element: <Topuphistory/>
    }
  ]
};

export default MainRoutes;
