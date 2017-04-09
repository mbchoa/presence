import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import root from './reducers';
import initial from './initialState';

export default function configureStore(initialState) {

    return createStore(
        combineReducers({
            form,
            root,
        }),
        { ...initial, ...initialState },
        applyMiddleware(thunkMiddleware),
    );
}
