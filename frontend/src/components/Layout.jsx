import { Outlet, useNavigate } from 'react-router-dom';
import './Layout.css'
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/sessionReducer';
import SessionForm from './SessionForm';
import { useEffect } from 'react';


const Layout = props => {
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    const frontPage = () =>{
        return (
            <div className='frontPage'>
                <h2>Welcome to your professional community</h2>

                <SessionForm sessionState={'login'}/>
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
