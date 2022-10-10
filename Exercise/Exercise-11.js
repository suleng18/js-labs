// using split
function extractDomainV1(email) {
   if (email === '') return '';
   const a = email.split('@');
   return a[1];
}
console.log(extractDomainV1('long@gmail.com'));
console.log(extractDomainV1('hai@abc.com'));

// using indexOf() and slice()
function extractDomainV2(email) {
   if (email === '') return '';
   return email.slice(email.indexOf('@') + 1);
}
console.log(extractDomainV2('long@gmail.com'));
console.log(extractDomainV2('hai@abc.com'));
