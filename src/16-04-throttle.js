function log() {
  console.log('tada');
}

function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return;

    isThrottling = true;
    setTimeout(() => {
      callback();

      isThrottling = false;
    }, wait);
  };
}

const throttleledLog = throttle(log, 500);

throttleledLog();
throttleledLog();
throttleledLog();
throttleledLog();

setTimeout(throttleledLog, 600);
setTimeout(throttleledLog, 600);
setTimeout(throttleledLog, 600);
setTimeout(throttleledLog, 600);
setTimeout(throttleledLog, 700);
setTimeout(throttleledLog, 700);
