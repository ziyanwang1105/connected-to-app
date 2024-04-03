import { postProfile } from "../utils/profileApiUtils"
import { createSelector } from 'reselect'

//TYPES
export const CREATEPROFILE = 'profile/CREATEPROFILE'
export const SHOWPROFILE = 'profile/SHOWPROFILE'

//ACTION CREATORS
export const createProfile = profileInfo => ({
    type: CREATEPROFILE,
    profileInfo
})
export const showProfile = profileInfo => ({
    type: SHOWPROFILE,
    profileInfo
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

//SELECTORS
export const entitiesSelector = state => state.entities;
export const profileSelector = createSelector([entitiesSelector], entities=> entities.profile)
//REDUCER
const profileReducer = (state={}, action)=>{
    switch(action.type){
        case( CREATEPROFILE ):
            return action.profileInfo;
        case (SHOWPROFILE):
            return action.profileInfo;
        default:
            return state;
    }
};

export default profileReducer;
