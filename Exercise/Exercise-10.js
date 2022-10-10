// using indexOf()
function isSecureUrlV1(url) {
   if (url === '') return '';

   if (url.indexOf('https') >= 0) return true;
   if (url.indexOf('wss') >= 0) return true;

   return false;
}
console.log(isSecureUrlV1('https'));
console.log(isSecureUrlV1('http'));
console.log(isSecureUrlV1('wss'));
console.log(isSecureUrlV1('ws'));

//v2
function isSecureUrlV2(url) {
   if (url === '') return '';

   if (url.startsWith('https')) return true;
   if (url.startsWith('wss')) return true;

   return false;
}

console.log(isSecureUrlV2('https'));
console.log(isSecureUrlV2('http'));
console.log(isSecureUrlV2('wss'));
console.log(isSecureUrlV2('ws'));
