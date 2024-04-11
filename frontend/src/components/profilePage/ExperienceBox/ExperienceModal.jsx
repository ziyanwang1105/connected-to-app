import './ExperienceModal.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createExperience, removeExperience, updateExperience } from '../../../store/experienceReducer.js';
import { transformDateModal } from '../../../utils/profilePageHelper.js';

const ExperienceModal = ({expModalState, setExpModalState, experience, setExperience, userId}) =>{
    const dispatch = useDispatch()
    const [companyName, setCompanyName] = useState(expModalState === 'Edit' ? experience.companyName : '');
    const [position, setPosition] = useState(expModalState === 'Edit' ? experience.position : '');
    const [description, setDescription] = useState(expModalState === 'Edit' ? experience.description : '');
    const [startYear, setStartYear] = useState(expModalState === 'Edit' ? experience.startYear : '');
    const [endYear, setEndYear] = useState(expModalState === 'Edit' ? experience.endYear : '');
    const [errors, setErrors] = useState([]);

    const handleCloseModal = e =>{
        setExpModalState(null);
        setExperience({});
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(expModalState === 'Edit'){
            dispatch(updateExperience({...experience, companyName, position, description, startYear, endYear}))
                .then(()=> handleCloseModal())
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        }else{
            dispatch(createExperience({companyName, position, description, startYear, endYear, userId: userId}))
                .then(()=> handleCloseModal())
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        };
    };

    const handleDeleteClick = e =>{
        e.preventDefault();
        dispatch(removeExperience(experience.id))
            .then(()=> handleCloseModal())
    };

    const deleteButton = ()=>{
        if(expModalState === 'Edit'){
            return(
                <button onClick={handleDeleteClick}>Delete</button>
            )
        };
    };

    return (
        <>
            <div className='experience-modal-background' onClick={handleCloseModal}>
                <div className='experience-modal-content' onClick={e => e.stopPropagation()}>
                    <h3>{expModalState === 'Add' ? 'Add Experience' : 'Edit Experience'}</h3>
                    <form className='experience-form' onSubmit={handleSubmit}>
                        <label>Company Name:
                            <input
                                type="text"
                                value={companyName}
                                onChange={e=>setCompanyName(e.target.value)} />
                        </label>
                        <label>Position:
                            <input
                                type="text"
                                value={position}
                                onChange={e=>setPosition(e.target.value)} />
                        </label>
                        <label>Description:
                            <input
                                type="text"
                                value={description}
                                onChange={e=>setDescription(e.target.value)} />
                        </label>
                        <label >
                            Start Year:
                            <input type="date"
                                value={transformDateModal(startYear)}
                                onChange={e=>setStartYear(e.target.value)} />
                        </label>
                        <label >
                            End Year:
                            <input type="date"
                                value={transformDateModal(endYear)}
                                onChange={e=>setEndYear(e.target.value)} />
                        </label>
                        <div className='buttons-bar'>
                            {deleteButton()}
                            <input type="submit" value={'Save'} />
                        </div>
                        {errors.map((err, idx) => (<p key={idx}>{err}</p>))}
                    </form>
                </div>
            </div>

        </>
    );
};

export default ExperienceModal;
