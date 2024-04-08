import { useEffect } from 'react';
import { educationsSelector, fetchEducations } from '../../../store/educationReducer';
import './UserEducationBox.css';
import { useDispatch, useSelector } from 'react-redux';

const UserEducationBox = ({sub, currentUser}) => {
    const dispatch = useDispatch()
    const educations = useSelector(educationsSelector)
    useEffect(()=>{
        dispatch(fetchEducations(sub));
    },[sub]);
    return(
        <div className='education-profile'>
            <h3>Education</h3>
        </div>
    );
};

export default UserEducationBox
