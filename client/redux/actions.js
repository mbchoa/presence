export const NOTIFY_AUTHENTICATION_IN_PROGRESS = 'NOTIFY_AUTHENTICATION_IN_PROGRESS';
export const NOTIFY_AUTHENTICATION_SUCCESS = 'NOTIFY_AUTHENTICATION_SUCCESS';
export const NOTIFY_AUTHENTICATION_FAILED = 'NOTIFY_AUTHENTICATION_FAILED';
export const NOTIFY_SIGN_UP_FAILED = 'NOTIFY_SIGN_UP_FAILED';
export const NOTIFY_SIGN_UP_SUCCESS = 'NOTIFY_SIGN_UP_SUCCESS';
export const SAVE_CURRENT_SESSION_TIME = 'SAVE_CURRENT_SESSION_TIME';
export const SET_MONTH_SESSIONS = 'SET_MONTH_SESSIONS';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

import Sessions from '../api/models/Sessions';

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
                dispatch(notifyAuthenticationSuccess(successMsg));
            });
    }
}

export function saveCurrentSessionTime(startTime, endTime) {
    return dispatch => {
        dispatch({
            type: SAVE_CURRENT_SESSION_TIME,
            time: endTime - startTime
        });
 
        const options = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'post',
            body: JSON.stringify({
                startTime,
                endTime
            })
        };

        return fetch('http://localhost:3000/saveSession', options)
            .then(response => response.json())
            .then(({ result }) => {
                // TODO: do something with result
            });
    };
}

export function registerUser ({ email, password }) {
    return dispatch => {
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

        return fetch('http://localhost:3000/signup', options)
            .then(response => response.json())
            .then(({ error, successMsg }) => {
                if (error) {
                    return dispatch(notifySignUpFailed(error));
                }
                dispatch(notifySignUpSuccess(successMsg));
            });
    };
}

export function notifySignUpFailed(error) {
    return {
        type: NOTIFY_SIGN_UP_FAILED,
        error
    };
}

export function notifySignUpSuccess(success) {
    return {
        type: NOTIFY_SIGN_UP_SUCCESS,
        success
    };
}

export function checkAuth() {
    return dispatch => {
        const options = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'get'
        }

        return fetch('http://localhost:3000/checkAuth', options)
            .then(response => response.json())
            .then(({ result }) => {
                dispatch(setIsAuthenticated(result.isAuthenticated));
            });
    };
}

function setIsAuthenticated(isAuthenticated) {
    return {
        type: SET_IS_AUTHENTICATED,
        isAuthenticated
    };
}

export function logoutUser () {
    return dispatch => {
        const options = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'post'
        };

        fetch('http://localhost:3000/logout', options)
            .then(() => {
                dispatch(setIsAuthenticated(false));
            });
    };
}

export function getMonthSessions (month) {
    return dispatch => {
        const options = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'get'
        };

        console.log('Retrieving month data for...', month);
        return fetch(`http://localhost:3000/month/${ month }`, options)
            .then(response => response.json())
            .then(({ sessions }) => {
                const session = new Sessions(sessions);

                dispatch(setMonthSessions({
                    monthSessions: session.formatSessionTimes(),
                    monthTotalTime: session.calculateTotalTime(),
                }));
            });
    }
}

function setMonthSessions (monthData) {
    console.log('setMonthSessions', monthData);
    return {
        type: SET_MONTH_SESSIONS,
        ...monthData,
    };
}
