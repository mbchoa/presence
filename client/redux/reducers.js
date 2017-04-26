import { 
    NOTIFY_AUTHENTICATION_FAILED,
    NOTIFY_AUTHENTICATION_IN_PROGRESS,
    NOTIFY_AUTHENTICATION_SUCCESS,
    NOTIFY_SIGN_UP_FAILED,
    NOTIFY_SIGN_UP_SUCCESS,
    SAVE_CURRENT_SESSION_TIME,
    SET_MONTH_SESSIONS,
    SET_IS_AUTHENTICATED,
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
            };

        case NOTIFY_SIGN_UP_FAILED:
            return {
                ...state,
                signUpError: action.error
            };

        case NOTIFY_SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpSuccess: action.success
            };
            
        case SET_IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
            
        case SET_MONTH_SESSIONS:
            return {
                ...state,
                monthSessions: action.monthSessions,
                monthTotalTime: action.monthTotalTime,
            };
            
        default:
            return state;
    }
}