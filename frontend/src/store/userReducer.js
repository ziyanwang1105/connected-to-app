
import { createSelector } from 'reselect';
import { entitiesSelector } from '../utils/entitiesSelector';
import { selectCurrentUser } from './sessionReducer';

//TYPES
export const GETALLUSERS = 'users/GETALLUSERS'
export const GETUSER = 'users/GETUSERS'
//ACTION CREATORS

export const getAllUsers = users => ({
    type: GETALLUSERS,
    users
})
export const getUser = user => ({
    type: GETUSER,
    user
})
//THUNK ACTION CREATORS

export const fetchAllUsers = ()=>(dispatch, getState)=> (
    fetch('/api/users')
        .then(res => res.json())
        .then(data => dispatch(getAllUsers(data)))
)
export const fetchUser = (userId)=> (dispatch, getState) => (
    fetch(`/api/users/${userId}`)
        .then(res=> res.json())
        .then(data => dispatch(getUser(data.user)))
)
//SELECTORS
export const selectUsers = createSelector([entitiesSelector], entities=> entities.users)
export const selectOtherUsers = createSelector([selectUsers, selectCurrentUser],
    (users, currentUser)=>{
        const otherUsers = [];
        for(const key in users){
            if(Number(key) !== currentUser.id && users[key].hasOwnProperty('lastName')){
                otherUsers.push(users[key]);
            };
        };
        return otherUsers
    })
//REDUCER
const userReducer = (state={}, action) => {
    const nextState = {...state}
    switch(action.type){
        case(GETALLUSERS):
            return action.users;
        case(GETUSER):
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return state;
    }


};

export default userReducer
