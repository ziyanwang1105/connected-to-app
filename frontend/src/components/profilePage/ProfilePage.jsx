import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/sessionReducer';
import { useEffect } from 'react';
import UserProfileItem from './BasicProfileBox/UserProfileItem';
import UserEducationBox from './EducationBox/UserEducationBox';
import { fetchAllUsers, selectOtherUsers } from '../../store/userReducer';
import SideBarItem from './SideBarItem';


const ProfilePage = props => {
    const { sub } = useParams();
    const currentUser = useSelector(selectCurrentUser);
    const allUsers = useSelector(selectOtherUsers)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!currentUser) {
            navigate(`/`);
        }
    }, [currentUser])
    useEffect(()=>{
        dispatch(fetchAllUsers())
    },[currentUser])
    return (
        <>
            <div className='profile-page'>
                <div className='left-bar'>

                    <UserProfileItem sub = {sub} currentUser={currentUser}/>
                    <UserEducationBox sub = {sub} currentUser = {currentUser} />
                </div>
                <div className='side-bar'>
                    <p>People you may know</p>
                    <ul className='people-may-know-list'>
                        {allUsers.map((user, idx) => (
                        <li key={idx}>
                            <SideBarItem user={user} />
                        </li>
                        ))}
                    </ul>
                </div>

            </div>

        </>
    );
};

export default ProfilePage;
