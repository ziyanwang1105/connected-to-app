import { entitiesSelector } from "../utils/entitiesSelector";
import { patchProfile, postProfile } from "../utils/profileApiUtils";
import { createSelector } from 'reselect';

//TYPES

export const SHOWPROFILE = 'profile/SHOWPROFILE';

//ACTION CREATORS

export const showProfile = profileInfo => ({
    type: SHOWPROFILE,
    profileInfo
});
//THUNK ACTION CREATORS
export const createProfilePage = profileInfo => (dispatch, getState)=> (
    postProfile(profileInfo)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            const profile = data.profile
            dispatch(showProfile(profile))
        })
)
export const fetchProfile = userId => (dispatch, getState) => (
    fetch(`/api/users/${userId}`)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data => {
            const profile = data.profile
            if(profile){
                dispatch(showProfile(profile))
            }else{
                dispatch(showProfile({}))
            }
        })
)
export const updateProfilePage = profileData => (dispatch, getState)=>(
    patchProfile(profileData)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            const profile = data.profile
            dispatch(showProfile(profile))
        })
)

//SELECTORS

export const profileSelector = createSelector([entitiesSelector], entities=> entities.profile)

//REDUCER
const profileReducer = (state={}, action)=>{
    const nextState = {...state}
    switch(action.type){
        case (SHOWPROFILE):
            return action.profileInfo;
        default:
            return state;
    }
};

export default profileReducer;
