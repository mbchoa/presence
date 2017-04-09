export function setSessionId(sessionId) {
    localStorage.sessionId = sessionId;
}

export function getSessionId() {
    return localStorage.sessionId;
}

export function destroySession() {
    delete localStorage.sessionId;
}
