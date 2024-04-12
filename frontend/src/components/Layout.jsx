import { Outlet } from 'react-router-dom';
import './Layout.css'
import {  useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/sessionReducer';
import SessionForm from './SessionForm';
import NavBar from './NavBar/NavBar';
import frontPageImage from '../../public/front-page-background.jpg'


const Layout = props => {
    const currentUser = useSelector(selectCurrentUser)


    const frontPage = () =>{
        return (
          <div className='frontPage'>
            <div className='frontPageLogin'>
                <h2>Welcome to your professional community</h2>

                <SessionForm sessionState={'Login'}/>
            </div>
            <img src={frontPageImage} alt="background" />
          </div>
        )
    }
    return (
      <div className='layout'>
        <NavBar />
        <div className='outlet-background'>

          {!currentUser && frontPage()}
          <Outlet />
        </div>
      </div>
    );
  };

  export default Layout;
