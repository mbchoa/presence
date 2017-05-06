import { 
    applyMiddleware, 
    combineReducers, 
    compose, 
    createStore 
} from 'redux';
import { reducer as form } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import root from './reducers';
import initial from './initialState';

export default function configureStore(initialState) {
    const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        combineReducers({
            form,
            root,
        }),
        { ...initial, ...initialState },
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );
}
