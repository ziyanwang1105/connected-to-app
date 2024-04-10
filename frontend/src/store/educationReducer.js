import { createSelector } from 'reselect';
import { entitiesSelector } from '../utils/entitiesSelector';
import { deleteEducation, patchEducation, postEducation } from '../utils/educationApiUtils';

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
            const educations = data.educations;
            if(educations){
                dispatch(getEducations(educations));
            }else{
                dispatch(getEducations({}))
            }
        })
);

export const createEducation = educationInfo => (dispatch, getState) => (
    postEducation(educationInfo)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            dispatch(showEducation(data.education));
            return data.education
        })
);

export const updateEducation = educationInfo => (dispatch, getState) => (
    patchEducation(educationInfo)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            dispatch(showEducation(data.education));
            return data.education
        })
);

export const removeEducation = educationId => (dispatch, getState) => (
    deleteEducation(educationId)
        .then(res =>{
            if(res.ok){
                dispatch(destroyEducation(educationId))
            }else{
                throw res;
            }
        })
);

//SELECTORS
export const educationsSelector = createSelector([entitiesSelector], entities=> entities.educations)
//REDUCER
const educationReducer = (state={}, action)=>{
    const nextState = {...state};
    switch(action.type){
        case(GETEDUCATIONS):
            return action.educationData;
        case(SHOWEDUCATION):
            nextState[action.educationInfo.id] = action.educationInfo;
            return nextState;
        case(DESTROYEDUCATION):
            delete nextState[action.educationId];
            return nextState;
        default:
            return state;
    }
}
export default educationReducer;
