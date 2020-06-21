"user strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector} span[data-value="days"]`),
      hours: document.querySelector(`${selector} span[data-value="hours"]`),
      mins: document.querySelector(`${selector} span[data-value="mins"]`),
      secs: document.querySelector(`${selector} span[data-value="secs"]`),
    };
  }

  startTimer() {
    this.timerValues(0);
    this.timerId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      this.timerValues(deltaTime);
    }, 1000);
  }

  timerValues(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

timer.startTimer();
