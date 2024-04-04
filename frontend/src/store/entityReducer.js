import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";

const entitiesReducer = combineReducers({
    users: userReducer,
    profile: profileReducer
});


export default entitiesReducer
