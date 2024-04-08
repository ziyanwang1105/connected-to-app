import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/sessionReducer';
import { useEffect } from 'react';
import UserProfileItem from './BasicProfileBox/UserProfileItem';
import UserEducationBox from './EducationBox/UserEducationBox';

const ProfilePage = props => {
    const { sub } = useParams();
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!currentUser) {
            navigate(`/`);
        }
    }, [currentUser])

    return (
        <>
            <div className='profile-page'>
                <div className='left-bar'>

                    <UserProfileItem sub = {sub} currentUser={currentUser}/>
                    <UserEducationBox sub = {sub} currentUser = {currentUser} />
                </div>
                <div className='side-bar'>
                    <p>Side bar component</p>
                </div>

            </div>

        </>
    );
};

export default ProfilePage;
