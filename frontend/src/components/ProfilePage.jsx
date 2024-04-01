import { useParams } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = props => {
    const { sub } = useParams();

    return (
        <>
            <h2>Welcome to Profile Page</h2>
        </>
    );
};

export default ProfilePage;
