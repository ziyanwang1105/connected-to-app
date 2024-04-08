import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";
import educationReducer from "./educationReducer";

const entitiesReducer = combineReducers({
    users: userReducer,
    profile: profileReducer,
    educations: educationReducer
});


export default entitiesReducer
