import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/sessionReducer';
import { useEffect } from 'react';

const ProfilePage = props => {
    const { sub } = useParams();
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!currentUser) {
            navigate(`/`);
        }
    }, [navigate,currentUser])
    return (
        <>
            <h2>Welcome to Profile Page</h2>
        </>
    );
};

export default ProfilePage;
