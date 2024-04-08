import { createSelector } from 'reselect';
import { entitiesSelector } from '../utils/entitiesSelector';

//TYPES
export const GETEDUCATIONS = 'education/GET_EDUCATIONS';
export const SHOWEDUCATION = 'education/SHOW_EDUCATION';
export const DESTROYEDUCATION = 'education/DESTROYEDUCATION';
//ACTION CREATORS

export const getEducations = educationData =>({
    type: GETEDUCATIONS,
    educationData
});

export const showEducation = educationInfo => ({
    type: SHOWEDUCATION,
    educationInfo
});

export const destroyEducation = educationId =>({
    type: DESTROYEDUCATION,
    educationId
});

//THUNK ACTION CREATORS
export const fetchEducations = userId => (dispatch, getState) =>(
    fetch(`/api/users/${userId}`)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            const educations = data.educations
            if(educations){
                dispatch(getEducations(educations))
            }
        })
)
//SELECTORS
export const educationsSelector = createSelector([entitiesSelector], entities=> entities.educations)
//REDUCER
const educationReducer = (state={}, action)=>{
    const nextState = {...state};
    switch(action.type){
        case(GETEDUCATIONS):
            return action.educationData;
        case(SHOWEDUCATION):
            nextState[educationInfo.id] = educationInfo;
            return nextState;
        default:
            return state;
    }
}
export default educationReducer;
