export const NOTIFY_AUTHENTICATION_IN_PROGRESS = 'NOTIFY_AUTHENTICATION_IN_PROGRESS';
export const NOTIFY_AUTHENTICATION_SUCCESS = 'NOTIFY_AUTHENTICATION_SUCCESS';

function notifyAuthenticationInProgress() {
    return {
        type: NOTIFY_AUTHENTICATION_IN_PROGRESS,
    };
}

function notifyAuthenticationSuccess() {
    return {
        type: NOTIFY_AUTHENTICATION_SUCCESS,
    };
}

export function loginUser(email, password) {
    return dispatch => {
        dispatch(notifyAuthenticationInProgress());

        const options = {
            method: 'post',
            body: JSON.stringify({
                email,
                password,
            }),
        };

        return fetch('/login', options)
            .then(response => response.json())
            .then(json => {
                
                dispatch(notifyAuthenticationSuccess());
            });
    }
}