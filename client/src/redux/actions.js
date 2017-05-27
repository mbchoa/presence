export const NOTIFY_AUTHENTICATION_IN_PROGRESS = 'NOTIFY_AUTHENTICATION_IN_PROGRESS';
export const NOTIFY_AUTHENTICATION_SUCCESS = 'NOTIFY_AUTHENTICATION_SUCCESS';
export const NOTIFY_AUTHENTICATION_FAILED = 'NOTIFY_AUTHENTICATION_FAILED';
export const NOTIFY_SIGN_UP_FAILED = 'NOTIFY_SIGN_UP_FAILED';
export const NOTIFY_SIGN_UP_SUCCESS = 'NOTIFY_SIGN_UP_SUCCESS';
export const SAVE_CURRENT_SESSION_TIME = 'SAVE_CURRENT_SESSION_TIME';
export const SET_MONTH_SESSIONS = 'SET_MONTH_SESSIONS';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

import Sessions from '../api/models/Sessions';

const MIN_SAVE_TIME_DURATION = 60000;

function notifyAuthenticationFailed() {
    return {
        type: NOTIFY_AUTHENTICATION_FAILED,
    };
}

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

export function loginUser({ email, password }) {
    return dispatch => {
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

        return fetch('/api/login', options)
            .then(response => response.json())
            .then(({ error, successMsg, userId }) => {
                if (error) {
                    dispatch(setIsAuthenticated(false));
                    return { error };
                }
                dispatch(setIsAuthenticated(true));
            });
    }
}

export function saveCurrentSessionTime(startTime, endTime) {
    return dispatch => {
        if (endTime - startTime < MIN_SAVE_TIME_DURATION) {
            return;
        }

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

        return fetch('/api/saveSession', options)
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

        return fetch('/api/signup', options)
            .then(response => response.json());
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

        return fetch('/api/checkAuth', options)
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

        fetch('/api/logout', options)
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
        return fetch(`/api/month/${ month }`, options)
            .then(response => response.json())
            .then(({ sessions }) => {
                const session = new Sessions(sessions);

                dispatch(setMonthSessions({
                    maxDuration: session.getMaxDuration(),
                    monthSessions: session.formatSessionTimes(),
                    monthTotalTime: session.calculateTotalTime(),
                }));
            });
    }
}

function setMonthSessions (monthData) {
    return {
        type: SET_MONTH_SESSIONS,
        ...monthData,
    };
}
