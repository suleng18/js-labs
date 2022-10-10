const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
   if (seconds < 0 || seconds > 86400) return '';

   let hours = Math.trunc(seconds / SECONDS_PER_HOUR); //1

   const min = seconds % SECONDS_PER_HOUR; //656
   let minutes = Math.trunc(min / SECONDS_PER_MIN); //10

   let sec = min % SECONDS_PER_MIN; //56

   if (hours.toString().length === 1) hours = `0${hours}`;
   if (minutes.toString().length === 1) minutes = `0${minutes}`;
   if (sec.toString().length === 1) sec = `0${sec}`;

   return `${hours}:${minutes}:${sec}`;
}

console.log(formatTime(0));
console.log(formatTime(6));
console.log(formatTime(4256));
