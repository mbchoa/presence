import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import root from './reducers';

export default function configureStore(initialState) {
    return createStore(
        combineReducers({
            form,
            root,
        }),
        initialState,
        applyMiddleware(thunkMiddleware),
    );
}
