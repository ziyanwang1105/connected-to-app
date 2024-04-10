import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";
import educationReducer from "./educationReducer";
import experienceReducer from "./experienceReducer";

const entitiesReducer = combineReducers({
    users: userReducer,
    profile: profileReducer,
    educations: educationReducer,
    experiences: experienceReducer
});


export default entitiesReducer
