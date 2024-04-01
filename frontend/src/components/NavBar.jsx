import { logoutUser, selectCurrentUser } from '../store/sessionReducer';
import './NavBar.css';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom'

const NavBar = props =>{

    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate()

    const sessionLinks = () => {

        const handleLogOut = e=>{
            dispatch(logoutUser())
            navigate('/')
        }
        if (currentUser) {
          return (
            <span className='session-links'>
              <p>Hello {currentUser.email}</p>
              <NavLink to={`/users/${currentUser.id}`}>Profile</NavLink>
              <button onClick={handleLogOut}>
                Logout
              </button>
            </span>
          )
        } else {
          return (
            <span className='session-links'>
              <NavLink to={'/login'}>Log in</NavLink>
              <NavLink to={'/signup'}>Sign up</NavLink>
            </span>
          )
        }
      }

    return (
        <>
            <nav className='nav-bar'>
                <h1>ConnectedTo</h1>
                {sessionLinks()}
            </nav>
        </>
    );
};

export default NavBar
