import { useEffect, useState } from 'react';
import './UserProfileItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, profileSelector } from '../../../store/profileReducer';
import UserProfileModal from './UserProfileModal';
import { nameInitial } from '../../../utils/profilePageHelper';

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
                <button className='edit-button' onClick={e=>setModalState('Edit')} />
            );
        }else{
            if(currentUser.id !== Number(sub)){
                return( <button className='connect-button'> Connect+</button>);
            }else{
                return (
                <button className='add-button' onClick={e=>setModalState('Create')}/>
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


export default UserProfileItem
