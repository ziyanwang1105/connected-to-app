import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";

const entitiesReducer = combineReducers({
    users: userReducer,
    profile: profileReducer
});

export const entitiesSelector = state => state.entities;
export default entitiesReducer
