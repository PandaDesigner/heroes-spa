import * as React from 'react';
import { Container, Box, CssBaseline, Typography } from '@mui/material';
import NavBar from './components/NavBar';



const  App = () => {


  return (
    <React.Fragment>
        <NavBar/>
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
