import './UserExperienceBox.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { experiencesSelector, fetchExperiences } from '../../../store/experienceReducer';
import ExperienceItem from './ExperienceItem';

const UserExperienceBox = ({sub, currentUser}) =>{
    const dispatch = useDispatch()
    const experiences = useSelector(experiencesSelector)
    const [expModalState, setExpModalState] = useState(null)
    const [experience, setExperience] = useState({})
    useEffect(()=>{
        dispatch(fetchExperiences(sub));
    },[sub]);
    const addButton = ()=>{
        if(currentUser.id === Number(sub)){
            return (
                <button className='add-experience-button' onClick={e=> setExpModalState('Add')}>Add Experience</button>
            );
        };
    };
    return(
        <>
            <div className='experience-profile'>
                <div className='experience-bar'>
                    <h3>Experience</h3>
                    {addButton()}
                </div>
                <ul className='experience-list'>
                    {Object.values(experiences).map((exp, idx)=>(<li key={idx}>
                        <ExperienceItem experience ={exp} setExpModalState={setExpModalState} setExperience={setExperience} currentUser={currentUser} sub={sub} />
                    </li>))}
                </ul>
            </div>

        </>
    );
};

export default UserExperienceBox;
