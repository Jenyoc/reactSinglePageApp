import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from "./reducers/RootReducer";

const middlewares=[thunk];

const configureStore =()=>{
  return createStore(rootReducer, applyMiddleware(...middlewares))
};

const store = configureStore();

export default store;