import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

// project imports
import AuthFooter from 'components/cards/AuthFooter';
import logo from '../../assets/images/feb.png';
import AuthCard from './AuthCard';

// assets
import AuthBackground from './AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <Box  style={{ backgroundColor: '#0e0e23' }}>
      <AuthBackground />
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        
        
        <Grid size={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 132px)' } }}
          >
            <Grid>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: 3 }} size={12}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
