import { useState } from 'react';
import './UserProfileModal.css';
import { createProfilePage, updateProfilePage } from '../../../store/profileReducer';
import { useDispatch } from 'react-redux';

const UserProfileModal = ({modalState, setModalState, profile, userId}) => {
    const dispatch = useDispatch()
    const [lastName, setLastName] = useState(modalState === 'Edit' ? profile.lastName : '')
    const [firstName, setFirstName] = useState(modalState === 'Edit' ? profile.firstName : '')
    const [heading, setHeading] = useState(modalState === 'Edit' ? profile.heading : '')
    const [openToWork, setOpenToWork] = useState(modalState === 'Edit' ? profile.openToWork : false)
    const [errors, setErrors] = useState([]);

    const handleSubmit = e =>{
        e.preventDefault();
        if(modalState === 'Edit'){
            dispatch(updateProfilePage({...profile, lastName, firstName, heading, openToWork}))
                .then(()=> setModalState(null))
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        }else{
            dispatch(createProfilePage({lastName, firstName, heading, openToWork, userId: userId}))
                .then(()=> setModalState(null))
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        }
    }
    return (
        <>
            <div className='user-profile-modal-background' onClick={e => setModalState(null)}>
                <div className='user-profile-modal-content' onClick={e => e.stopPropagation()}>
                    <h3>{modalState === 'Edit' ? 'Edit Profile' : 'Create Profile'}</h3>
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
                        {errors.map((err, idx) => (<p key={idx}>{err}</p>))}

                    </form>
                </div>
            </div>
        </>
    );
};

export default UserProfileModal;
