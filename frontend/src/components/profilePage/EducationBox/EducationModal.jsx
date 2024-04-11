import { useState } from 'react';
import './EducationModal.css'
import { useDispatch } from 'react-redux';
import { createEducation, removeEducation, updateEducation } from '../../../store/educationReducer';
import { transformDateModal } from '../../../utils/profilePageHelper';

const EducationModal = ({eduModalState, setEduModalState, education, setEducation, userId}) => {

    const dispatch = useDispatch()
    const [schoolName, setSchoolName] = useState(eduModalState === 'Edit' ? education.schoolName : '');
    const [degreeName, setDegreeName] = useState(eduModalState === 'Edit' ? education.degreeName : '');
    const [description, setDescription] = useState(eduModalState === 'Edit' ? education.description : '');
    const [startYear, setStartYear] = useState(eduModalState === 'Edit' ? education.startYear : '');
    const [endYear, setEndYear] = useState(eduModalState === 'Edit' ? education.endYear : '');
    const [errors, setErrors] = useState([]);

    const handleCloseModal = e =>{
        setEduModalState(null);
        setEducation({});
    };

    const handleSubmit = e =>{
        e.preventDefault();
        if(eduModalState === 'Edit'){
            dispatch(updateEducation({...education, schoolName, degreeName, description, startYear, endYear}))
                .then(()=> handleCloseModal())
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        }else{
            dispatch(createEducation({schoolName, degreeName, description, startYear, endYear, userId: userId}))
                .then(()=> handleCloseModal())
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        };
    };

    const handleDeleteClick = e =>{
        e.preventDefault();
        dispatch(removeEducation(education.id))
            .then(()=> handleCloseModal())
    };

    const deleteButton = ()=>{
        if(eduModalState === 'Edit'){
            return(
                <button onClick={handleDeleteClick}>Delete</button>
            )
        };
    };

    return (
        <>
            <div className='education-modal-background' onClick={handleCloseModal}>
                <div className='education-modal-content' onClick={e => e.stopPropagation()}>
                    <h3>{eduModalState === 'Add' ? 'Add Education' : 'Edit Education'}</h3>
                    <form className='education-form' onSubmit={handleSubmit}>
                        <label>School Name:
                            <input
                                type="text"
                                value={schoolName}
                                onChange={e=>setSchoolName(e.target.value)} />
                        </label>

                        <label>Degree Name:
                            <input
                                type="text"
                                value={degreeName}
                                onChange={e=>setDegreeName(e.target.value)} />
                        </label>

                        <label>Description:
                            <textarea
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

export default EducationModal
