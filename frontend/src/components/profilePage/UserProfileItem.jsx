import { useEffect, useState } from 'react';
import './UserProfileItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, profileSelector } from '../../store/profileReducer';
import { useParams } from 'react-router-dom';

const UserProfileItem = ({sub}) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('fetchProfile');
        dispatch(fetchProfile(sub));
    },[sub]);
    const profile = useSelector(profileSelector);
    const [modalState, setModalState] = useState(false)
    return(
        <>
            <div className='banner'></div>
            <div className='circleIcon'>Icon</div>
            <div className='basic-profile'>
                <p className='realName'>{`${profile.firstName} ${profile.lastName}`}</p>
                <p className='heading'>{profile.heading}</p>
                {profile.openToWork && <p className='workStatus'>Open to Work</p>}
            </div>
        </>
    );
};

export default UserProfileItem
