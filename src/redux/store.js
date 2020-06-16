import {createStore, combineReducers, compose, applyMiddleware}from 'redux';
import  thunk from 'redux-thunk';
import Reducer from './ducks'

const rootReducer = combineReducers({
    pokemones : Reducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)))
    return store;
}