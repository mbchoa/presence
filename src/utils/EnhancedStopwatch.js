import BaseStopWatch from 'timer-stopwatch';

export default class EnhancedStopWatch {
    constructor(countDownMs, options) {
        this.isStarted = false;
        this.watch = new BaseStopWatch(countDownMs, options);
    }

    start() {
        this.isStarted = true;
        this.watch.start();
    }

    stop() {
        this.isStarted = false;
        this.watch.stop();
    }

    reset(countDownMs) {
        this.isStarted = false;
        this.watch.reset(countDownMs);
    }

    onTime(cb) {
        return this.watch.onTime(cb);
    }

    onDone(cb) {
        return this.watch.onDone(cb);
    }

    onAlmostDone(cb) {
        return this.watch.onAlmostDone(cb);
    }
}
