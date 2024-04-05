import { useState } from 'react';
import './UserProfileModal.css';
import { updateProfilePage } from '../../store/profileReducer';
import { useDispatch } from 'react-redux';

const UserProfileModal = ({modalState, setModalState, profile}) => {
    const dispatch = useDispatch()
    const [lastName, setLastName] = useState(profile.lastName)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [heading, setHeading] = useState(profile.heading)
    const [openToWork, setOpenToWork] = useState(profile.openToWork)
    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(updateProfilePage({...profile, lastName, firstName, heading, openToWork})).then(()=> setModalState(!modalState))
    }
    return (
        <>
            <div className='user-profile-modal-background'>
                <div className='user-profile-modal-content'>
                    <h3>Edit Profile</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Last Name:
                            <input
                                type="text"
                                value={lastName}
                                onChange={e=>setLastName(e.target.value)} />
                        </label>
                        <label>First Name:
                            <input
                                type="text"
                                value={firstName}
                                onChange={e=>setFirstName(e.target.value)} />
                        </label>
                        <label>Heading:
                            <input
                                type="textarea"
                                value={heading}
                                onChange={e=>setHeading(e.target.value)} />
                        </label>
                        <label>Open to Work
                            <input
                                type="checkbox"
                                checked={openToWork}
                                onChange={e=>setOpenToWork(!openToWork)}/>
                        </label>
                        <input type="submit" value={'save'} />

                    </form>
                </div>
            </div>
        </>
    );
};

export default UserProfileModal;
