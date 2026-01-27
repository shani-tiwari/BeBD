import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import AllProjects from '../pages/AllProjects'
import Connect from '../pages/Connect'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/allprojects' element={<AllProjects/>} />
        <Route path='/connect' element={<Connect/>} />
    </Routes>

  )
}
