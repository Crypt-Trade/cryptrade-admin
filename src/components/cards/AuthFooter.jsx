// material-ui
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

export default function AuthFooter() {
  return (
    <Container maxWidth="xl">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ gap: 2, justifyContent: { xs: 'center', sm: 'space-between', textAlign: { xs: 'center', sm: 'inherit' } } }}
      >
       
        {/* <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: { xs: 1, sm: 3 }, textAlign: { xs: 'center', sm: 'inherit' } }}>
         
          
        </Stack> */}
      </Stack>
    </Container>
  );
}
