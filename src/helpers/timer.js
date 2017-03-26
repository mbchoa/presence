export function calculateOverflowTime(elapsedMs) {
    return {
        hours: elapsedMs >= 3600000
            ? Math.floor(elapsedMs / 3600000)
            : 0,
        minutes: elapsedMs >= 60000
            ? Math.floor(elapsedMs / 60000) % 60
            : 0,
        seconds: elapsedMs >= 1000 
            ? Math.floor(elapsedMs / 1000) % 60
            : 0,
        ms: Math.floor(elapsedMs % 1000 / 10)
    };
}
