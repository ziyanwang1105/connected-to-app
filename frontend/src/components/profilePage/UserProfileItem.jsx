import { useEffect, useState } from 'react';
import './UserProfileItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, profileSelector } from '../../store/profileReducer';
import UserProfileModal from './UserProfileModal';

const UserProfileItem = ({sub}) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProfile(sub));
    },[sub]);
    const profile = useSelector(profileSelector);
    const [modalState, setModalState] = useState(false)
    return(
        <>
            <div className='user-profile-item'>
                <div className='banner'>banner</div>
                <div className='circleIcon'>Icon</div>
                <button className='edit-profile' onClick={e=>setModalState(!modalState)}>Edit Basic Profile</button>
                <div className='basic-profile'>
                    <p className='realName'>{`${profile.firstName} ${profile.lastName}`}</p>
                    <p className='heading'>{profile.heading}</p>
                    {profile.openToWork && <p className='workStatus'>Open to Work</p>}
                </div>
            </div>
            {modalState && <UserProfileModal modalState={modalState} setModalState={setModalState} profile ={profile}/>}

        </>
    );
};

export default UserProfileItem
