import { transformDate } from '../../../utils/profilePageHelper';
import './ExperienceItem.css'

const ExperienceItem = ({experience, setExpModalState, setExperience, currentUser, sub}) =>{
    const handleEditClick = e=>{
        setExpModalState('Edit');
        setExperience(experience);
    };

    const editButton = ()=>{
        if(currentUser.id === Number(sub)){
            return (
                <button className='experience-edit-button' onClick={handleEditClick} />
            );
        };
    };

    return(
        <>
            <div className='experience-content'>
                <p className='company-name'>{experience.companyName}</p>
                <p>{experience.position}</p>
                <p>{transformDate(experience.startYear)} - {transformDate(experience.endYear)}</p>
                <p className='experience-description'>{experience.description}</p>
            </div>
            {editButton()}

        </>
    );
};

export default ExperienceItem;
