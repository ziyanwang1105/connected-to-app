import { Outlet } from 'react-router-dom';
import './Layout.css'
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/sessionReducer';
import SessionForm from './SessionForm';
import { fetchAllUsers, selectUsers } from '../store/userReducer';
import { useEffect } from 'react';


const Layout = props => {
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    // useEffect(()=>{
    //   if(currentUser)dispatch(fetchAllUsers())
    // },[currentUser])
    // const allUsers = useSelector(selectUsers)
    const frontPage = () =>{
        return (
          <div className='frontPage'>
            <div className='frontPageLogin'>
                <h2>Welcome to your professional community</h2>

                <SessionForm sessionState={'login'}/>
            </div>
            <img src="/src/assets/front-page-background.jpg" alt="background" />
          </div>
        )
    }
    return (
      <div className='layout'>
        <NavBar />

        {!currentUser && frontPage()}
        <Outlet />
      </div>
    );
  };

  export default Layout;
