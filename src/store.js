import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

// reducer create
const reducers=combineReducers({

})

// middleware create
const middleware=[thunk]

//  create store
const store=createStore(reducers,applyMiddleware(...middleware))  // spread operater=> obj to arry 

export default store