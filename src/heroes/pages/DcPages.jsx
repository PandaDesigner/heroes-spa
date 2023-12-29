import {Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'

export const DcPages = () => {
  return (
    <>
      <Typography variant='h1' component={'h1'}>
        Dc Comic
      </Typography>
      <NavLink
        to='/login'
        style={{
          textDecoration: 'none',
          color: 'inherit',
          margin: '10px',
          fontFamily: 'Roboto',
        }}
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        Logaut
      </NavLink>
    </>
  )
}
