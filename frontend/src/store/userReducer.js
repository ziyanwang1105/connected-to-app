

//TYPES
export const GETALLUSERS = 'users/GETALLUSERS'
//ACTION CREATORS

export const getAllUsers = users => ({
    type: GETALLUSERS,
    users
})
//THUNK ACTION CREATORS

export const fetchAllUsers = ()=>(dispatch, getState)=> (
    fetch('/api/users')
        .then(res => res.json())
        .then(data => dispatch(getAllUsers(data)))
)
//SELECTORS
export const selectUsers = state => Object.values(state.users)
export const selectUser = (userId) => state => {
    const user = state.users[userId];
    return user ? user : null
}
//REDUCER
const userReducer = (state={}, action) => {
    switch(action.type){
        case(GETALLUSERS):
            return action.users;
        default:
            return state;
    }


};

export default userReducer
