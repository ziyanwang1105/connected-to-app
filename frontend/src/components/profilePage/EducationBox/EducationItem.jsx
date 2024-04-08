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

const transformDate = (time) =>{
    let timeStamp = new Date(time)
    let month = timeStamp.toLocaleString('default', { month: 'short' })
    let year = timeStamp.getFullYear()
    return `${month} ${year}`
}

export default EducationItem
