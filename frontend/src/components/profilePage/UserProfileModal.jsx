import { useState } from 'react';
import './UserProfileModal.css';

const UserProfileModal = ({modalState, SetModalState, profile}) => {

    const [lastName, setLastName] = useState(profile.lastName)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [heading, setHeading] = useState(profile.heading)
    const [openToWork, setOpenToWork] = useState(profile.openToWork)
    const handleSubmit = e =>{
        e.preventDeafult()
        console.log('submit')
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
