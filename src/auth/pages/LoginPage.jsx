import {Typography} from '@mui/material'

export const Login = () => {
  return (
    <>
      <script
        type='module'
        src='https://unpkg.com/@splinetool/viewer@0.9.455/build/spline-viewer.js'
      ></script>
      <spline-viewer
        loading-anim
        url='https://prod.spline.design/5UM82sT9uwIdFtfb/scene.splinecode'
      ></spline-viewer>
      <Typography variant='h1' component={'h1'}>
        Login Page
      </Typography>
    </>
  )
}
