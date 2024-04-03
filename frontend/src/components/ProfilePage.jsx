import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/sessionReducer';
import { useEffect } from 'react';
import { fetchProfile, profileSelector } from '../store/profileReducer';

const ProfilePage = props => {
    const { sub } = useParams();
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!currentUser) {
            navigate(`/`);
        }
    }, [currentUser])
    useEffect(()=>{
        dispatch(fetchProfile(sub))
    },[sub])
    const profile = useSelector(profileSelector)
    return (
        <>
            <h2>Welcome to Profile Page</h2>
        </>
    );
};

export default ProfilePage;
