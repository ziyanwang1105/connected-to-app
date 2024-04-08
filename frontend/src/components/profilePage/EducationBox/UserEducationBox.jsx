import { useEffect } from 'react';
import { educationsSelector, fetchEducations } from '../../../store/educationReducer';
import './UserEducationBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EducationItem from './EducationItem';

const UserEducationBox = ({sub, currentUser}) => {
    const dispatch = useDispatch()
    const educations = useSelector(educationsSelector)
    useEffect(()=>{
        dispatch(fetchEducations(sub));
    },[sub]);
    return(
        <div className='education-profile'>
            <h3>Education</h3>
            <ul className='education-list'>
                {Object.values(educations).map((education, idx)=> (<li key = {idx}>
                    <EducationItem education = {education} />
                </li>))}

            </ul>
        </div>
    );
};

export default UserEducationBox
