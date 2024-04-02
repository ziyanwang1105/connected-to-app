import { postProfile } from "../utils/profileApiUtils"


//TYPES
export const CREATEPROFILE = 'profile/CREATEPROFILE'

//ACTION CREATORS
export const createProfile = profileInfo => ({
    type: CREATEPROFILE,
    profileInfo
})
//THUNK ACTION CREATORS
export const createProfileT = profileInfo => (dispatch, getState)=> (
    postProfile(profileInfo)
        .then(res =>{
            if(res.ok){
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data =>{
            dispatch()
        })
)

//SELECTORS

//REDUCER
const profileReducer = (state={}, action)=>{
    switch(action.type){

        default:
            return state;
    }
};

export default profileReducer;
