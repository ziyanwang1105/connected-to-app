import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";
import educationReducer from "./educationReducer";
import experienceReducer from "./experienceReducer";
import postingReducer from "./postingReducer";

const entitiesReducer = combineReducers({
    users: userReducer,
    profile: profileReducer,
    educations: educationReducer,
    experiences: experienceReducer,
    postings: postingReducer
});


export default entitiesReducer
