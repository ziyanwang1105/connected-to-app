import { transformDate } from '../../../utils/profilePageHelper';
import './EducationItem.css';


const EducationItem = ({education, setEduModalState, setEducation, currentUser, sub}) =>{

    const handleEditClick = e=>{
        setEduModalState('Edit');
        setEducation(education);
    };

    const editButton = ()=>{
        if(currentUser.id === Number(sub)){
            return (
                <button onClick={handleEditClick}>Edit</button>
            );
        };
    };

    return(
        <>
            <div className='education-content'>
                <p>{education.schoolName}</p>
                <p>{education.degreeName}</p>
                <p>{transformDate(education.startYear)} - {transformDate(education.endYear)}</p>
                <p>{education.description}</p>
            </div>
            {editButton()}

        </>
    );
};



export default EducationItem;
