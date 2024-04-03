import { useEffect } from 'react';
import './UserProfileItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, profileSelector } from '../../store/profileReducer';
import { useParams } from 'react-router-dom';

const UserProfileItem = ({sub}) =>{
    console.log(sub)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('fetchProfile');
        dispatch(fetchProfile(sub));
    },[sub]);
    const profile = useSelector(profileSelector);
    return(
        <>
            <div className='circleIcon'>{`${profile.firstName[0].toUpperCase()}${profile.lastName[0].toUpperCase()}`}</div>
            <p className='realName'>{`${profile.firstName} ${profile.lastName}`}</p>
            <p className='heading'>{profile.heading}</p>
            {profile.openToWork && <p className='workStatus'>Open to Work</p>}
        </>
    );
};

export default UserProfileItem
