// import {Typography} from '@mui/material'
import {Container, Typography} from '@mui/material'
import NavBar from '../components/NavBar'

export const MarvelPages = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Typography variant='h1' component={'h1'}>
          Marvel
        </Typography>
      </Container>
    </>
  )
}
