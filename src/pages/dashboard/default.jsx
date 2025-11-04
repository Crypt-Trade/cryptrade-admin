import React, { useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import UniqueVisitorCard from 'sections/dashboard/default/UniqueVisitorCard';
import SaleReportCard from 'sections/dashboard/default/SaleReportCard';
import OrdersTable from 'sections/dashboard/default/OrdersTable';

// assets
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
   const [data, setData] = useState({
      monthlyBusiness: 0,
      totalUsers: 0,
      available_Balance: 0,
      allBusiness: 0,
      total_Balance: 0,
    });
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
   const token = sessionStorage.getItem("token");
    useEffect(() => {
      const fetchAdminDashboardData = async () => {
        try {
          const response = await axios.get(`${ROOT_URL}/api/admin/dashboard`
         
      ); // Replace with your actual API endpoint
           console.log("Dashboard data:", response.data); // Log the response data
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
        }
      };
  
      fetchAdminDashboardData();
    }, []);
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}  sx={{ 
    background: 'linear-gradient(to right,rgb(220, 231, 240),rgba(97, 174, 179, 0.86))', 
    borderRadius: '15px', 
    p: 2 
  }}>
        <AnalyticEcommerce title="Current business($)" count={data.currentBusiness}  />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }} sx={{background: 'linear-gradient(to right,rgb(225, 222, 216),rgb(238, 138, 138))',  borderRadius: '15px', 
    p: 2 }}>
        <AnalyticEcommerce title="Total users" count={data.totalUsers} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }} sx={{background: 'linear-gradient(to right,rgb(248, 246, 244),rgb(239, 230, 46))', borderRadius: '15px', 
    p: 2 }}>
        <AnalyticEcommerce title="Total business" count={data.totalBusiness} />
      </Grid>
   
      {/* <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }} sx={{background: 'linear-gradient(to right,rgb(245, 240, 232),rgb(160, 158, 216))', borderRadius: '15px', 
    p: 2 }}>
        <AnalyticEcommerce title="Total balance($)" count={data.total_Balance} percentage={27.4} isLoss color="warning" extra="20,395" />
      </Grid> */}
      <Grid sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} size={{ md: 8 }} />
     
      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <UniqueVisitorCard />
      </Grid>
      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack sx={{ gap: 2 }}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>
      {/* row 3 */}
      {/* <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid> */}
      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>
      {/* row 4 */}
      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <SaleReportCard />
      </Grid>
     
    </Grid>
  );
}
