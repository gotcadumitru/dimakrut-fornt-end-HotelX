import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import roomReducer from "./room-reducer";
import userReducer from "./user-reducer";



const rootReducer =  combineReducers({
    auth:   authReducer,
    app:    appReducer,
    roomPage: roomReducer,
    user: userReducer,

})

const middlewares = [logger,thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)))

export default store;