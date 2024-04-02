import './App.css'
import Layout from './components/Layout'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import SessionForm from './components/SessionForm'
import ProfilePage from './components/ProfilePage'

function App() {

  const router = createBrowserRouter([{
    path: '/', element: <Layout />
  }, {
    path: '/login', element: <SessionForm sessionState={'login'} />
  }, {
    path: '/signup', element: <SessionForm sessionState={'signup'} />
  }, {
    path: '/users', element: <Layout />, children: [{
      path: ':sub', element: <ProfilePage />
    }]
  }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
