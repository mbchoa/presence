import { 
    NOTIFY_AUTHENTICATION_FAILED,
    NOTIFY_AUTHENTICATION_IN_PROGRESS,
    NOTIFY_AUTHENTICATION_SUCCESS,
    SAVE_CURRENT_SESSION_TIME
} from './actions';

export default function rootReducer(state = {}, action) {
    switch (action.type) {
        case NOTIFY_AUTHENTICATION_IN_PROGRESS:
            return {
                ...state,
                isAuthenticationInProgress: true,
            };

        case NOTIFY_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                loginSuccessMessage: action.loginSuccessMessage,
                isAuthenticationInProgress: false,
                isAuthenticated: true,
            };

        case NOTIFY_AUTHENTICATION_FAILED:
            return {
                ...state,
                loginErrorMessage: action.loginErrorMessage,
                isAuthenticationInProgress: false,
                isAuthenticated: false,
            };

        case SAVE_CURRENT_SESSION_TIME:
            console.log('save current session time', action.time);
            return {
                ...state,
                currentSessionTime: action.time
            }
        default:
            return state;
    }
}