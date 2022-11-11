const intervalId = setInterval(() => {
  console.log('Hello world');
}, 2000);

clearInterval(intervalId);

function countdown(seconds) {
  let currentSeconds = seconds;

  const intervalId = setInterval(() => {
    console.log(currentSeconds);
    if (currentSeconds <= 0) {
      clearInterval(intervalId);
    }
    currentSeconds--;
  }, 1000);
}
countdown(10);
