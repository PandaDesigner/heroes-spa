import * as React from 'react';
import { Container, Box, CssBaseline, Typography } from '@mui/material';




const  App = () => {


  return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth='100%'>
        <Box sx={{}}>
        <Typography variant='h2'>
        Hola Mundo
      </Typography>
          </Box>
      </Container>
    </React.Fragment>
  );
}

export default App
