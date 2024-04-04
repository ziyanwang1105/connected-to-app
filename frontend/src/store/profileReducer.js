import { patchProfile, postProfile } from "../utils/profileApiUtils";
import { createSelector } from 'reselect';

//TYPES
export const CREATEPROFILE = 'profile/CREATEPROFILE';
export const SHOWPROFILE = 'profile/SHOWPROFILE';
export const UPDATEPROFILE = 'profile/UPDATEPROFILE';

//ACTION CREATORS
export const createProfile = profileInfo => ({
    type: CREATEPROFILE,
    profileInfo
});
export const showProfile = profileInfo => ({
    type: SHOWPROFILE,
    profileInfo
});
export const updateProfile = profileData => ({
    type: UPDATEPROFILE,
    profileData
})
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
                throw new Error('There is no profile')
            }
        })
)
export const updateProfilePage = profileData => (dispatch, getState)=>{
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
}
//SELECTORS
export const entitiesSelector = state => state.entities;
export const profileSelector = createSelector([entitiesSelector], entities=> entities.profile)
//REDUCER
const profileReducer = (state={}, action)=>{
    const nextState = {...state}
    switch(action.type){
        case( CREATEPROFILE ):
            return action.profileInfo;
        case (SHOWPROFILE):
            return action.profileInfo;
        case (UPDATEPROFILE):
            nextState = action.profileData
            return nextState
        default:
            return state;
    }
};

export default profileReducer;
