import { createSelector } from 'reselect';
import { entitiesSelector } from '../utils/entitiesSelector';
import { deleteExperience, patchExperience, postExperience } from '../utils/experienceApiUtils';


//TYPES
export const GETEXPERIENCE = 'experience/GET_EXPERIENCE';
export const SHOWEXPERIENCE = 'experience/SHOW_EXPERIENCE';
export const DESTROYEXPERIENCE = 'experience/DESTROY_EXPERIENCE';
//ACTION CREATORS

export const getExperiences = experienceData =>({
    type: GETEXPERIENCE,
    experienceData
});

export const showExperience = experienceInfo => ({
    type: SHOWEXPERIENCE,
    experienceInfo
});

export const destroyExperience = experienceId =>({
    type: DESTROYEXPERIENCE,
    experienceId
});

//THUNK ACTION CREATORS
export const fetchExperiences = userId => (dispatch, getState) =>(
    fetch(`/api/users/${userId}`)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            const experiences = data.experiences;
            if(experiences){
                dispatch(getExperiences(experiences));
            }else{
                dispatch(getExperiences({}))
            }
        })
);

export const createExperience = experienceInfo => (dispatch, getState) => (
    postExperience(experienceInfo)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            dispatch(showExperience(data.experience));
            return data.experience
        })
);

export const updateExperience = experienceInfo => (dispatch, getState) => (
    patchExperience(experienceInfo)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            dispatch(showExperience(data.experience));
            return data.experience
        })
);

export const removeExperience = experienceId => (dispatch, getState) => (
    deleteExperience(experienceId)
        .then(res =>{
            if(res.ok){
                dispatch(destroyExperience(experienceId))
            }else{
                throw res;
            }
        })
);

//SELECTORS
export const experiencesSelector = createSelector([entitiesSelector], entities=> entities.experiences)

//REDUCER
const experienceReducer = (state={}, action)=>{
    const nextState = {...state};
    switch(action.type){
        case(GETEXPERIENCE):
            return action.experienceData;
        case(SHOWEXPERIENCE):
            nextState[action.experienceInfo.id] = action.experienceInfo;
            return nextState;
        case(DESTROYEXPERIENCE):
            delete nextState[action.experienceId];
            return nextState;
        default:
            return state;
    }
}
export default experienceReducer;
