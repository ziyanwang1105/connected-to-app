import { selectCurrentUser } from '../../store/sessionReducer';
import LoggedInSessionLink from './LoggedInSessionLink';
import './NavBar.css';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'

const NavBar = props =>{

    const currentUser = useSelector(selectCurrentUser);
    const sessionLinks = () => {

        if (currentUser) {
          return (
            <>
              <input type="text" class="search-bar" placeholder="Search..." />
              <LoggedInSessionLink currentUser={currentUser} />
            </>
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
