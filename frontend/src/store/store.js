import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import sessionReducer from "./sessionReducer";
import entitiesReducer from "./entityReducer";



const rootReducer = combineReducers({
    sessions: sessionReducer,
    entities: entitiesReducer
})
const temp = [thunk]
if (import.meta.env.MODE === 'development') {
    // Dynamically import the logger middleware only in development mode
    import('redux-logger').then(({ createLogger }) => {
      const logger = createLogger();
      temp.push(logger);
    });
  }
const middleWare = applyMiddleware(...temp)
const configureStore = (initialState = {}) => (
    createStore(rootReducer, initialState, middleWare)
)

export default configureStore
