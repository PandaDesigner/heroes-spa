import {Route, Routes} from 'react-router-dom'
import {MarvelPages, DcPages} from '../heroes/pages'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/marvel'>
          <MarvelPages />
        </Route>
        <Route path='dc'>
          <DcPages />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter
