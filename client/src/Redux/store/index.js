/*import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;*/

import {createStore , compose , applyMiddleware } from 'redux'
import rootReducer from '../reducer/index';
import thunkMiddleware from 'redux-thunk'


const composeApp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(rootReducer, composeApp(applyMiddleware(thunkMiddleware)));
export default store; 
