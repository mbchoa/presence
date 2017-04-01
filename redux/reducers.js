import { 
    NOTIFY_AUTHENTICATION_IN_PROGRESS,
    NOTIFY_AUTHENTICATION_SUCCESS,
} from './actions';

export default function rootReducer(state, action) {
    switch (action.type) {
        case NOTIFY_AUTHENTICATION_IN_PROGRESS:
            return {
                ...state,
                isAuthenticationInProgress: true,
            };

        case NOTIFY_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isAuthenticationInProgress: false,
            };

        default:
            return state;
    }
}