import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/sessionReducer';
import { useEffect } from 'react';
import UserProfileItem from './BasicProfileBox/UserProfileItem';
import UserEducationBox from './EducationBox/UserEducationBox';
import { fetchAllUsers, selectOtherUsers } from '../../store/userReducer';
import SideBarItem from './SideBarItem';
import UserExperienceBox from './ExperienceBox/UserExperienceBox';
import linkedInImage from '../../assets/linkedin.svg'
import githubImage from '../../assets/github.svg'

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
                    <UserExperienceBox sub={sub} currentUser={currentUser} />
                </div>
                <div className='side-bar'>
                    <div className='possible-connections'>
                        <p>People you may know</p>
                        <ul className='people-may-know-list'>
                            {allUsers.map((user, idx) => (
                            <li key={idx}>
                                <SideBarItem user={user} />
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className='links'>
                    <a href="https://github.com/ziyanwang1105/full-stack-project-linkedin-clone" class="github" target="_blank">
                        <img src={githubImage} alt="github" class = "click_icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/zwang01/" class="linkedin" target="_blank">
                        <img src={linkedInImage} alt="linkedin" class="click_icon" />
                    </a>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ProfilePage;
