import { getSessionId, setSessionId } from '../src/helpers/localStorage';

export const NOTIFY_AUTHENTICATION_IN_PROGRESS = 'NOTIFY_AUTHENTICATION_IN_PROGRESS';
export const NOTIFY_AUTHENTICATION_SUCCESS = 'NOTIFY_AUTHENTICATION_SUCCESS';
export const NOTIFY_AUTHENTICATION_FAILED = 'NOTIFY_AUTHENTICATION_FAILED';
export const SAVE_CURRENT_SESSION_TIME = 'SAVE_CURRENT_SESSION_TIME';

function notifyAuthenticationFailed(loginErrorMessage) {
    return {
        type: NOTIFY_AUTHENTICATION_FAILED,
        loginErrorMessage
    };
}

function notifyAuthenticationInProgress() {
    return {
        type: NOTIFY_AUTHENTICATION_IN_PROGRESS,
    };
}

function notifyAuthenticationSuccess(loginSuccessMessage) {
    return {
        type: NOTIFY_AUTHENTICATION_SUCCESS,
        loginSuccessMessage
    };
}


export function checkUserSession() {
    return dispatch => {
        if (getSessionId()) {
            dispatch(notifyAuthenticationSuccess('Session exists already!'));
        }
    };
}

export function loginUser({ email, password }) {
    return dispatch => {
        console.log('Attemping to login user...');
        dispatch(notifyAuthenticationInProgress());

        const options = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                email,
                password,
            }),
        };

        return fetch('http://localhost:3000/login', options)
            .then(response => response.json())
            .then(({ error, successMsg, userId }) => {
                if (error) {
                    return dispatch(notifyAuthenticationFailed(error));
                }
                setSessionId(userId);
                dispatch(notifyAuthenticationSuccess(successMsg));
            });
    }
}

export function saveCurrentSessionTime(time) {
    return {
        type: SAVE_CURRENT_SESSION_TIME,
        time
    }
}
