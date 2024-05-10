import './App.css'
import Layout from './components/Layout'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import SessionForm from './components/SessionForm'
import ProfilePage from './components/profilePage/ProfilePage'
import FeedPage from './components/Postings/FeedPage'
import PostingShow from './components/Postings/PostingShow'


function App() {

  const router = createBrowserRouter([{
    path: '/', element: <Layout />
  }, {
    path: '/login', element: <SessionForm sessionState={'Login'} />
  }, {
    path: '/signup', element: <SessionForm sessionState={'Signup'} />
  }, {
    path: '/users', element: <Layout />, children: [{
      path: ':sub', element: <ProfilePage />
    }]
  },{
    path: '/feed', element: <Layout />, children:[{
      path: ':userId', element: <FeedPage />
    },{
      path: ':postingId', element: <PostingShow />
    }]
  }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
