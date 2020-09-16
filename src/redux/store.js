import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ratesReducer from './reducers/ratesReducer';

let reducers = combineReducers({
    quotations: ratesReducer    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;