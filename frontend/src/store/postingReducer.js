
//TYPES
export const GETALLPOSTINGS = 'postings/GETALLPOSTINGS'
export const GETPOSTING = 'postings/GETPOSTING'
export const DESTROYPOSTING = 'postings/DESTROYPOSTING'

//ACTION CREATORS
export const getAllPostings = postings => ({
    type: GETALLPOSTINGS,
    postings
})
export const getPosting = posting => ({
    type: GETPOSTING,
    posting
})
export const destroyPosting = postingId =>({
    type: DESTROYPOSTING,
    postingId
});

//THUNK ACTION CREATORS


//SELECTORS


//REDUCER
const postingReducer = (state={}, action)=>{
    const nextState = {...state};
    switch(action.type){
        case(GETALLPOSTINGS):
            return action.postings;
        case(GETPOSTING):
            nextState[action.posting.id]=action.posting;
            return nextState;
        case(DESTROYPOSTING):
            delete nextState[action.postingId];
            return nextState;
        default:
            return state;

    }

}

export default postingReducer;
