import { useEffect, useState } from 'react';
import './UserProfileItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, profileSelector } from '../../../store/profileReducer';
import UserProfileModal from './UserProfileModal';

const UserProfileItem = ({sub, currentUser}) =>{
    const dispatch = useDispatch()
    const profile = useSelector(profileSelector);
    useEffect(()=>{
        dispatch(fetchProfile(sub));
    },[sub]);
    const [modalState, setModalState] = useState(null)

    const button = ()=>{
        if(profile.userId === currentUser.id){
            return(
                <button className='edit-profile' onClick={e=>setModalState('Edit')}>Edit Basic Profile</button>
            );
        }else{
            if(currentUser.id !== Number(sub)){
                return( <button className='edit-profile'> Connect+</button>);
            }else{
                return (
                <button className='edit-profile' onClick={e=>setModalState('Create')}>Create Basic Profile</button>
            );
            };
        }
    };

    const basicProfile = ()=>{
        if(Object.keys(profile).length !==0){
            return (
                <div className='basic-profile'>
                    <p className='realName'>{`${profile.firstName} ${profile.lastName}`}</p>
                    <p className='heading'>{profile.heading}</p>
                    {profile.openToWork && <p className='workStatus'>Open to Work</p>}
                </div>
            );
        }else{
            return (
                <p>Need to create a profile</p>
            )
        }
    };

    const initial = Object.keys(profile).length !==0 ? nameInitial(profile.firstName, profile.lastName) : 'icon'

    return(
        <>
            <div className='user-profile-item'>
                <div className='banner'>banner</div>
                <div className='circleIcon'>{initial}</div>
                {button()}
                {basicProfile()}
            </div>
            {modalState && <UserProfileModal modalState={modalState} setModalState={setModalState} profile ={profile} userId = {currentUser.id}/>}

        </>
    );
};

const nameInitial = (firstName, lastName) => {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase()
}

export default UserProfileItem
