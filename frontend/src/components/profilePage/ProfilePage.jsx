import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/sessionReducer';
import { useEffect } from 'react';
import { fetchProfile, profileSelector, showProfile } from '../../store/profileReducer';
import UserProfileItem from './UserProfileItem';

const ProfilePage = props => {
    const { sub } = useParams();
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!currentUser) {
            navigate(`/`);
        }
    }, [currentUser])
    useEffect(()=>{
        console.log('fetchProfile');
        dispatch(fetchProfile(sub));
    },[sub]);
    const profile = useSelector(profileSelector);
    return (
        <>
            <h2>Welcome to Profile Page</h2>
            <div className='profile-page'>
                {/* <UserProfileItem sub = {sub}/> */}
                <div className='side-bar'>

                </div>

            </div>

        </>
    );
};

export default ProfilePage;
