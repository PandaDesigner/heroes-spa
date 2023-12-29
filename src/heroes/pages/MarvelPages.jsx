// import {Typography} from '@mui/material'
import {Container, Typography, styled, Button} from '@mui/material'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margint-top: 40px;
`

const StyledTypography = styled(Typography)`
  font-size: 24px;
  margin-bottom: 16px;
`

const StyledButton = styled(Button)`
  background-color: #007acc;
  color: white;

  &:hover {
    background-color: #005b9f;
  }
`

export const MarvelPages = () => {
  const containerVariants = {
    initial: {opacity: 0, y: -50},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -50},
  }

  return (
    <>
      <Container>
        <StyledContainer
          initial='initial'
          animate='animate'
          exit='exit'
          variants={containerVariants}
          transition={{duration: 0.5}}
          sx={{marginTop: '40px'}}
        >
          <StyledTypography variant='h1'>Mavel Hero</StyledTypography>
          <StyledButton
            LinkComponent={NavLink}
            to='/dc'
            variant='contained'
            color='primary'
          >
            Botón
          </StyledButton>
        </StyledContainer>
      </Container>
    </>
  )
}
