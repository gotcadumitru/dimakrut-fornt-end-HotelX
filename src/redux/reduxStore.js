import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import cartReducer from "./cart-reducer";
import userReducer from "./user-reducer";



const rootReducer =  combineReducers({
    user:   userReducer,
    cart:   cartReducer,
    auth:   authReducer,
    app:    appReducer,
})

const middlewares = [logger,thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)))

export default store;