// using if...else
function formatSecondsV1(seconds) {
   if (seconds < 0 || seconds >= 60) return '--';

   if (seconds < 10) return `0${seconds}`;

   return seconds.toString();
}
console.log(formatSecondsV1(0));
console.log(formatSecondsV1(-1));
console.log(formatSecondsV1(08));
console.log(formatSecondsV1(9));
console.log(formatSecondsV1(20));
console.log(formatSecondsV1(60));

// using slice()
function formatSecondsV2(seconds) {
   if (seconds < 0 || seconds >= 60) return '--';

   return `0${seconds}`.slice(-2);
}
console.log(formatSecondsV2(0));
console.log(formatSecondsV2(-1));
console.log(formatSecondsV2(08));
console.log(formatSecondsV2(9));
console.log(formatSecondsV2(20));
