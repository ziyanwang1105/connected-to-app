import { useState } from 'react';
import './EducationModal.css'
import { useDispatch } from 'react-redux';
import { createEducation, updateEducation } from '../../../store/educationReducer';

const EducationModal = ({eduModalState, setEduModalState, education, userId}) => {
    const dispatch = useDispatch()
    const [schoolName, setSchoolName] = useState(eduModalState === 'Edit' ? education.schoolName : '');
    const [degreeName, setDegreeName] = useState(eduModalState === 'Edit' ? education.degreeName : '');
    const [description, setDescription] = useState(eduModalState === 'Edit' ? education.description : '');
    const [startYear, setStartYear] = useState(eduModalState === 'Edit' ? education.startYear : '');
    const [endYear, setEndYear] = useState(eduModalState === 'Edit' ? education.endYear : '');
    const [errors, setErrors] = useState([]);

    const handleSubmit = e =>{
        e.preventDefault();
        if(eduModalState === 'Edit'){
            dispatch(updateEducation({...education, schoolName, degreeName, description, startYear, endYear}))
                .then(()=> setEduModalState(null))
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        }else{
            dispatch(createEducation({schoolName, degreeName, description, startYear, endYear, userId: userId}))
                .then(()=> setEduModalState(null))
                .catch(async res =>{
                    let data = await res.json();
                    setErrors(data);
                  });
        }
    }
    return (
        <>
            <div className='education-modal-background' onClick={e => setEduModalState(null)}>
                <div className='education-modal-content' onClick={e => e.stopPropagation()}>
                    <h3>{eduModalState === 'Add' ? 'Add Education' : 'Edit Education'}</h3>
                    <form onSubmit={handleSubmit}>
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
                            <input
                                type="textarea"
                                value={description}
                                onChange={e=>setDescription(e.target.value)} />
                        </label>
                        <label >
                            Start Year:
                            <input type="date"
                                value={startYear}
                                onChange={e=>setStartYear(e.target.value)} />
                        </label>
                        <label >
                            End Year:
                            <input type="date"
                                value={endYear}
                                onChange={e=>setEndYear(e.target.value)} />
                        </label>
                        <input type="submit" value={'save'} />
                        {errors.map((err, idx) => (<p key={idx}>{err}</p>))}
                    </form>
                </div>
            </div>
        </>
    );
};

export default EducationModal
