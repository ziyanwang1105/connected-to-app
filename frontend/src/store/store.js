import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import sessionReducer from "./sessionReducer";



const rootReducer = combineReducers({
    sessions: sessionReducer
})
const configureStore = (initialState = {}) => (
    createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
)

export default configureStore
