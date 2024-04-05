

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
        .then(data => dispatch(getUser(user)))
)
//SELECTORS
export const selectUsers = state => Object.values(state.users)
//REDUCER
const userReducer = (state={}, action) => {
    switch(action.type){
        case(GETALLUSERS):
            return action.users;
        case(GETUSER):
            return null;
        default:
            return state;
    }


};

export default userReducer
