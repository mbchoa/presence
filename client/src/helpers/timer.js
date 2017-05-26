export function calculateOverflowTime(elapsedMs) {
  return {
    hours: Math.floor(elapsedMs / 3600000),
    minutes: Math.floor(elapsedMs / 60000) % 60,
    seconds: Math.floor(elapsedMs / 1000) % 60,
    ms: Math.floor(elapsedMs % 1000 / 10),
  };
}
