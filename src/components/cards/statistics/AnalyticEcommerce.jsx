import PropTypes from 'prop-types';
// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

// assets
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import FallOutlined from '@ant-design/icons/FallOutlined';
import { border } from '@mui/system';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function AnalyticEcommerce({ color , title, count, percentage, isLoss, extra }) {
  return (
    <MainCard contentSX={{ p: 2.25 }} sx={{ bgcolor: 'transparent', boxShadow: 'none', border:"none" }}>
      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h4" >
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>
        
        </Grid>
      </Stack>
      {/* <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="text.secondary">
         
          <Typography variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
          
          </Typography>{' '}
        
        </Typography>
      </Box> */}
    </MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
