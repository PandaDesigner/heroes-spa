import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  styled,
  Stack,
} from '@mui/material'
import {color, motion} from 'framer-motion'
import {Link, NavLink} from 'react-router-dom'

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margint-top: 40px;
`

export const Navbar = () => {
  const containerVariants = {
    initial: {opacity: 0, y: -100},
    animate: {opacity: 0.51, y: 0},
    exit: {opacity: 0.1, y: -30},
  }
  return (
    <motion.Box
      initial={{opacity: 0, y: -30}}
      animate={{opacity: 1, y: -15}}
      exit={{opacity: 0.6, y: -10}}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: 0,
        backgroundColor: 'black',
        width: '100%',
        height: '80px',

        justifyContent: 'around-between',
        alignItems: 'center',
      }}
      variants={containerVariants}
    >
      <AppBar
        sx={{margin: 0, padding: 0, backgroundColor: 'black'}}
        position='static'
      >
        <Toolbar sx={{justifyContent: 'space-between', alignItems: 'center'}}>
          <IconButton
            size='small'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{mr: 0}}
          >
            <Typography
              variant='h6'
              component='p'
              sx={{flexGrow: 1, color: 'purpleLight'}}
            >
              Heroes App
            </Typography>
          </IconButton>

          <StyledContainer>
            <Button href='/marvel' color='inherit'>
              Marvel
            </Button>
            <Button href='/dc' color='inherit'>
              Dc
            </Button>
          </StyledContainer>
          <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
            <Typography
              variant='body1'
              component='p'
              sx={{
                flexGrow: 1,
                cursor: 'pointer',
                color: 'skyblue',
                '&:hover': {color: 'blue'},
              }}
            >
              Pedro Fernandez
            </Typography>
            <Button href='/login' color='inherit'>
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </motion.Box>
  )
}
