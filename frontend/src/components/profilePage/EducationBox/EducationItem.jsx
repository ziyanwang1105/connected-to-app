import { transformDate } from '../../../utils/profilePageHelper';
import './EducationItem.css';


const EducationItem = ({education}) =>{

    return(
        <>
            <p>{education.schoolName}</p>
            <p>{education.degreeName}</p>
            <p>{transformDate(education.startYear)} - {transformDate(education.endYear)}</p>
            <p>{education.description}</p>
        </>
    );
};



export default EducationItem
