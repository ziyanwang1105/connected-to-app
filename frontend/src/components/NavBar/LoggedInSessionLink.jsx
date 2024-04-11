import './LoggedInSessionLink.css'
import {useDispatch} from 'react-redux';
import {useNavigate, NavLink} from 'react-router-dom';
import { logoutUser } from '../../store/sessionReducer';
import { useState } from 'react';
import { nameInitial } from '../../utils/profilePageHelper';
const LoggedInSessionLink = ({currentUser}) =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = e=>{
        dispatch(logoutUser())
        navigate('/');
    };
    const [dropDownState, setDropDownState] = useState(false)
    const handleDropDownClick = e =>{
        setDropDownState(!dropDownState)
    }

    return (
        <div className='session-links'>
            <button className='home' />
            <button className='network' />
            <button className='job' />
            <div className='dropdown'>
                <button className='dropdown-button' onClick={handleDropDownClick}>
                    {'Me'}
                </button>
                {dropDownState && (
                    <div className='dropdown-content'>
                        <NavLink to={`/users/${currentUser.id}`}>Profile</NavLink>
                        <button onClick={handleLogOut}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoggedInSessionLink;
