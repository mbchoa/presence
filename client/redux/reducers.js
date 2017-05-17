import { 
    NOTIFY_AUTHENTICATION_FAILED,
    NOTIFY_AUTHENTICATION_IN_PROGRESS,
    NOTIFY_AUTHENTICATION_SUCCESS,
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
                isAuthenticationInProgress: false
            };

        case NOTIFY_AUTHENTICATION_FAILED:
            return {
                ...state,
                isAuthenticationInProgress: false,
            };

        case SAVE_CURRENT_SESSION_TIME:
            return {
                ...state,
                currentSessionTime: action.time
            };
            
        case SET_IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
            
        case SET_MONTH_SESSIONS:
            return {
                ...state,
                maxDuration: action.maxDuration,
                monthSessions: action.monthSessions,
                monthTotalTime: action.monthTotalTime,
            };
            
        default:
            return state;
    }
}